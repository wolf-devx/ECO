interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-gray-500 text-sm">Última atualização: {lastUpdated}</p>
      </header>
      <main className="space-y-12">
        {children}
      </main>
    </div>
  );
}