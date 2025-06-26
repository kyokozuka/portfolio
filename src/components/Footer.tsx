import Link from "next/link";

interface FooterProps {
  currentLang?: string;
}

export default function Footer({ currentLang = "en" }: FooterProps) {
  const getNavText = (key: string) => {
    if (currentLang === "ja") {
      const jaTexts = {
        home: "ホーム",
        software: "ソフトウェア",
        uiux: "UI/UX",
        contact: "お問い合わせ"
      };
      return jaTexts[key as keyof typeof jaTexts] || key;
    }
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <footer className="bg-gradient-to-t from-gray-100 to-[#FFF7EB] border-t border-gray-200 py-8 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Logo & Copyright */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-lg font-bold tracking-wide text-gray-800 mb-1">Kento Yokozuka</span>
          <span className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {currentLang === "ja" ? "All rights reserved." : "All rights reserved."}
          </span>
        </div>
        {/* Center: Navigation */}
        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">{getNavText('home')}</Link>
          <Link href="/software" className="hover:text-blue-600 transition-colors">{getNavText('software')}</Link>
          <Link href="/uiux" className="hover:text-blue-600 transition-colors">{getNavText('uiux')}</Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">{getNavText('contact')}</Link>
        </nav>
        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="mailto:contact@example.com" aria-label="Email" className="hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16 0V6a2 2 0 00-2-2H6a2 2 0 00-2 2v6" /></svg>
          </a>
          <a href="https://github.com/kentoyokozuka" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.8 24 17.302 24 12c0-6.63-5.37-12-12-12z" /></svg>
          </a>
          <a href="https://linkedin.com/in/kento-yokozuka-26a1731b4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.79-1.75-1.75s.784-1.75 1.75-1.75 1.75.79 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}