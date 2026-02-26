// app/api/contacto/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs"; // importante para Vercel/Node

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    // 1) Parse body
    const body = await request.json();
    const { nombre, telefono, email, servicio, mensaje } = body || {};

    // 2) Validación mínima
    if (!nombre || !telefono || !email) {
      return NextResponse.json(
        { error: "Nombre, teléfono y email son obligatorios" },
        { status: 400 }
      );
    }

    // 3) Normalizaciones
    const fecha = new Date().toLocaleString("es-CL", {
      timeZone: "America/Santiago",
      dateStyle: "full",
      timeStyle: "short",
    });

    const telefonoLimpio = String(telefono).replace(/\D/g, "");

    // 4) Correos destino / origen
    //    - FROM debe ser del dominio verificado en Resend (en tu caso send.jmmotors.cl)
    const FROM = "JM Motors <web@jmmotors.cl>";
    const TO = ["contacto@jmmotors.cl"]; // <-- aquí llega el formulario (ojo: sin "r")

    // 5) Envío
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: String(email), // así respondes directo al cliente
      subject: `📩 ${String(nombre)} - ${servicio ? String(servicio) : "Consulta"}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

            body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background: white;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #0B0B0D 0%, #1a1a1f 100%);
              padding: 30px;
              text-align: center;
            }
            .logo {
              width: 180px;
              height: auto;
              margin-bottom: 15px;
            }
            .header h1 {
              margin: 0;
              font-size: 22px;
              color: white;
              font-weight: 700;
              letter-spacing: 1px;
            }
            .header p {
              margin: 8px 0 0 0;
              font-size: 13px;
              color: #ED0724;
              text-transform: uppercase;
              letter-spacing: 2px;
            }
            .content {
              padding: 35px;
            }
            .badge {
              display: inline-block;
              background: #ED0724;
              color: white;
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 25px;
            }
            .field {
              margin-bottom: 22px;
              padding-bottom: 15px;
              border-bottom: 1px solid #f0f0f0;
            }
            .field:last-of-type { border-bottom: none; }
            .field-label {
              font-size: 11px;
              color: #888;
              text-transform: uppercase;
              letter-spacing: 1.5px;
              font-weight: 600;
              margin-bottom: 6px;
            }
            .field-value {
              font-size: 16px;
              color: #222;
              font-weight: 500;
            }
            .field-value a {
              color: #ED0724;
              text-decoration: none;
            }
            .servicio-destacado {
              background: #ED0724;
              color: white;
              display: inline-block;
              padding: 10px 20px;
              border-radius: 8px;
              font-size: 18px;
              font-weight: 700;
              margin-top: 5px;
            }
            .mensaje-box {
              background: #f9f9f9;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #ED0724;
              margin-top: 10px;
              font-size: 15px;
              line-height: 1.7;
              color: #444;
            }
            .mensaje-vacio {
              color: #999;
              font-style: italic;
            }
            .cta-section {
              background: #f5f5f5;
              padding: 25px 35px;
              text-align: center;
            }
            .cta-button {
              display: inline-block;
              background: #25D366;
              color: white;
              padding: 14px 28px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
              font-size: 14px;
              margin: 5px;
              transition: transform 0.2s;
            }
            .cta-button:hover { transform: translateY(-2px); }
            .cta-button.llamar { background: #0B0B0D; }
            .footer {
              text-align: center;
              padding: 25px;
              background: #0B0B0D;
              color: #888;
              font-size: 12px;
            }
            .footer strong { color: white; }
            .footer p { margin: 5px 0; }
            @media (max-width: 600px) {
              .content { padding: 25px; }
              .header { padding: 20px; }
              .logo { width: 140px; }
            }
          </style>
        </head>
        <body>
          <div class="container">

            <div class="header">
              <img src="https://jmmotors.cl/logo-jmmotors.png" alt="JM Motors" class="logo" onerror="this.style.display='none'">
              <h1>NUEVO MENSAJE</h1>
              <p>Formulario Web</p>
            </div>

            <div class="content">
              <span class="badge">📅 ${escapeHtml(fecha)}</span>

              <div class="field">
                <div class="field-label">Cliente</div>
                <div class="field-value" style="font-size: 20px; font-weight: 700;">
                  ${escapeHtml(nombre)}
                </div>
              </div>

              <div class="field">
                <div class="field-label">Teléfono</div>
                <div class="field-value">
                  <a href="tel:+56${escapeHtml(telefonoLimpio)}">+56 ${escapeHtml(telefonoLimpio)}</a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                </div>
              </div>

              <div class="field">
                <div class="field-label">Servicio solicitado</div>
                <div class="servicio-destacado">${escapeHtml(servicio || "Consulta general")}</div>
              </div>

              <div class="field" style="border-bottom: none;">
                <div class="field-label">Detalles del mensaje</div>
                <div class="mensaje-box">
                  ${
                    mensaje
                      ? escapeHtml(String(mensaje)).replace(/\n/g, "<br>")
                      : '<span class="mensaje-vacio">El cliente no dejó mensaje adicional</span>'
                  }
                </div>
              </div>
            </div>

            <div class="cta-section">
              <a href="https://wa.me/56${escapeHtml(telefonoLimpio)}" class="cta-button">
                💬 Responder por WhatsApp
              </a>
              <a href="tel:+56${escapeHtml(telefonoLimpio)}" class="cta-button llamar">
                📞 Llamar ahora
              </a>
            </div>

            <div class="footer">
              <p><strong>JM MOTORS</strong> - Taller Especializado</p>
              <p>660 Sgto. Aldea, Santiago | +56 9 2887 0254</p>
              <p style="margin-top: 10px; color: #555;">Este mensaje fue generado automáticamente desde jmmotors.cl</p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Error Resend:", error);
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}