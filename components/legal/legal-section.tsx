interface LegalSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="space-y-4">
      <h2 className="text-2xl font-semibold mt-8">{title}</h2>
      <div>{children}</div>
    </section>
  );
}
