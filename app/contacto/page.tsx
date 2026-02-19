import PageHeader from "@/components/PageHeader";
import ContactCard from "@/components/ContactCard";

export const metadata = { title: "Contacto | JM Motors" };

export default function ContactoPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <PageHeader title="Contacto" subtitle="Cotiza o agenda tu hora. Te respondemos rápido." />
      <div className="mt-8">
        <ContactCard />
      </div>
    </div>
  );
}
