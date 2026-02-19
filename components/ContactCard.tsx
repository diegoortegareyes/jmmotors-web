export default function ContactCard() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border border-border bg-surface p-6">
        <h3 className="text-xl font-semibold">Escríbenos</h3>
        <p className="mt-2 text-sm text-muted">
          Para cotizar, envíanos: marca/modelo/año + problema + fotos/video (si tienes).
        </p>

        <div className="mt-6 space-y-3 text-sm">
          <div className="rounded-xl border border-border/70 bg-bg p-4">
            <div className="text-muted text-xs">WhatsApp</div>
            <div className="mt-1 font-semibold">+56 9 XXXX XXXX</div>
          </div>
          <div className="rounded-xl border border-border/70 bg-bg p-4">
            <div className="text-muted text-xs">Dirección</div>
            <div className="mt-1 font-semibold">[Tu dirección / comuna]</div>
          </div>
          <div className="rounded-xl border border-border/70 bg-bg p-4">
            <div className="text-muted text-xs">Horario</div>
            <div className="mt-1 font-semibold">Lun–Sáb</div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <a
            className="inline-flex flex-1 justify-center rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brandHover transition"
            href="https://wa.me/56900000000"
            target="_blank"
          >
            WhatsApp
          </a>
          <a
            className="inline-flex flex-1 justify-center rounded-xl border border-border bg-bg px-5 py-3 text-sm font-semibold hover:border-muted transition"
            href="tel:+56900000000"
          >
            Llamar
          </a>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6">
        <h3 className="text-xl font-semibold">Mapa (placeholder)</h3>
        <p className="mt-2 text-sm text-muted">
          Aquí luego pegamos el iframe de Google Maps (o un link a Maps).
        </p>

        <div className="mt-6 aspect-video rounded-2xl border border-border bg-bg grid place-items-center text-sm text-muted">
          Google Maps embed
        </div>

        <div className="mt-6 rounded-xl border border-border/70 bg-bg p-4 text-xs text-muted">
          Tip: si me dices la comuna exacta y el link, lo dejo listo con iframe.
        </div>
      </div>
    </div>
  );
}
