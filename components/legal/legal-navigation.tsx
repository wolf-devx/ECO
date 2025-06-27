interface NavigationItem {
  id: string;
  title: string;
  subsections?: NavigationItem[];
}

export function LegalNavigation({ items }: { items: NavigationItem[] }) {
  return (
    <nav className="mb-8">
      <h3 className="text-lg font-medium mb-2">Índice</h3>
      <ul className="space-y-2 list-disc list-inside">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-blue-600 hover:underline">
              {item.title}
            </a>
            {item.subsections && (
              <ul className="ml-4 list-disc">
                {item.subsections.map((sub) => (
                  <li key={sub.id}>
                    <a href={`#${sub.id}`} className="text-blue-600 hover:underline">
                      {sub.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
