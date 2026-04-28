import Link from "next/link";

const features = [
  {
    icon: "📬",
    title: "Briefe scannen",
    description:
      "Einfach die Kamera auf den Brief richten – BriefBox erkennt den Text automatisch, egal ob Handschrift oder Druck.",
  },
  {
    icon: "🧠",
    title: "Sofort verstehen",
    description:
      "KI erklärt dir in klaren Worten was der Brief bedeutet, was wichtig ist und ob Handlungsbedarf besteht.",
  },
  {
    icon: "✍️",
    title: "Antworten leicht gemacht",
    description:
      "BriefBox schlägt dir passende Antworten vor – du bearbeitest sie kurz und bist fertig.",
  },
  {
    icon: "📅",
    title: "Fristen im Blick",
    description:
      "Deadlines werden automatisch erkannt und als Erinnerung gespeichert. Keine Frist mehr verpassen.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* ── Nav ──────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              B
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">BriefBox</span>
          </div>
          <a
            href="https://apps.apple.com"
            className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            App laden →
          </a>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span>✨</span>
            <span>Für iPhone – jetzt kostenlos testen</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-6">
            Briefe verstehen,{" "}
            <span className="text-indigo-600 dark:text-indigo-400">ohne Stress.</span>
          </h1>

          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            BriefBox scannt deine Post, erklärt sie verständlich und hilft dir mit fertigen
            Antworten – direkt auf deinem iPhone. Ämter, Versicherungen, Behörden – kein
            Brief bleibt mehr unbeantwortet.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://apps.apple.com"
              className="inline-flex items-center gap-3 bg-black dark:bg-white text-white dark:text-black font-semibold px-6 py-3.5 rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              {/* Apple Logo SVG */}
              <svg
                className="w-5 h-5"
                viewBox="0 0 814 1000"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 376.7 0 248.1 0 124.8 0 56.5 24.3 20.1 75.4 20.1c34.7 0 66.5 18.5 93.6 18.5 27.1 0 62.2-20.7 100.7-20.7 26 0 111.1 2.6 170.7 79.6l-32.1 23.4zm-173.8-67.7c-4.5 0-9 .6-13.5.6-.6-6.4-.6-13.5-.6-20.7 0-63.5 36.8-131.5 77.5-165.2 43.3-36.2 113.3-64 168.8-64 3.2 0 6.4 0 9.6.6.6 6.4.6 13.5.6 20.1 0 65.3-33.4 130.6-72.4 165.2-38.4 34-103.7 63.4-170 63.4z" />
              </svg>
              Im App Store laden
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-400 dark:text-gray-600">
            Kostenlos • iOS 16+ • Deutsch
          </p>
        </div>
      </section>

      {/* ── Mock Phone ───────────────────────────────────────────── */}
      <section className="py-8 px-6">
        <div className="max-w-sm mx-auto">
          <div className="bg-gradient-to-b from-indigo-600 to-indigo-800 rounded-[2.5rem] p-6 shadow-2xl shadow-indigo-500/30 aspect-[9/19] flex flex-col justify-between">
            {/* Status Bar */}
            <div className="flex justify-between text-white/70 text-xs px-2">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span>●●●</span>
                <span>WiFi</span>
                <span>🔋</span>
              </div>
            </div>

            {/* App Header */}
            <div className="text-center mt-4">
              <p className="text-white/60 text-sm">Guten Morgen 👋</p>
              <h3 className="text-white font-bold text-2xl">Meine Briefe</h3>
            </div>

            {/* Mock Cards */}
            <div className="space-y-3 mt-4 flex-1">
              {[
                { sender: "Finanzamt München", tag: "❗ Frist: 3 Tage", color: "bg-red-500/20 text-red-200" },
                { sender: "Krankenkasse TK", tag: "✅ Erledigt", color: "bg-green-500/20 text-green-200" },
                { sender: "Deutsche Post", tag: "📬 Neu", color: "bg-yellow-500/20 text-yellow-200" },
              ].map((item) => (
                <div
                  key={item.sender}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between"
                >
                  <div>
                    <p className="text-white font-medium text-sm">{item.sender}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${item.color} mt-1 inline-block`}>
                      {item.tag}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-white text-xs">→</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-4 bg-white/10 rounded-2xl p-3 flex justify-around">
              {["📬", "📅", "📁", "⚙️"].map((icon) => (
                <span key={icon} className="text-white/70 text-lg">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Alles was du brauchst
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Von der Kamera bis zur fertigen Antwort – in Minuten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-900/50 flex items-center justify-center text-2xl mb-4">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For Whom ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Für wen ist BriefBox?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {[
              {
                emoji: "👴👵",
                title: "Senioren",
                desc: "Behörden- und Versicherungsbriefe endlich verständlich – ohne fremde Hilfe.",
              },
              {
                emoji: "🌍",
                title: "Menschen mit Migrationshintergrund",
                desc: "Behördendeutsch? BriefBox erklärt es einfach und klar.",
              },
              {
                emoji: "😰",
                title: "Alle, die Post hassen",
                desc: "Wenn sich der Briefstapel stapelt – BriefBox bringt Ordnung rein.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-indigo-50 dark:bg-indigo-950/50 rounded-2xl p-8"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Starte noch heute kostenlos
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Keine Registrierung. Kein Abo. Einfach laden und loslegen.
          </p>
          <a
            href="https://apps.apple.com"
            className="inline-flex items-center gap-3 bg-white text-indigo-700 font-semibold px-6 py-3.5 rounded-2xl hover:bg-indigo-50 transition-colors"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 814 1000"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 376.7 0 248.1 0 124.8 0 56.5 24.3 20.1 75.4 20.1c34.7 0 66.5 18.5 93.6 18.5 27.1 0 62.2-20.7 100.7-20.7 26 0 111.1 2.6 170.7 79.6l-32.1 23.4zm-173.8-67.7c-4.5 0-9 .6-13.5.6-.6-6.4-.6-13.5-.6-20.7 0-63.5 36.8-131.5 77.5-165.2 43.3-36.2 113.3-64 168.8-64 3.2 0 6.4 0 9.6.6.6 6.4.6 13.5.6 20.1 0 65.3-33.4 130.6-72.4 165.2-38.4 34-103.7 63.4-170 63.4z" />
            </svg>
            Im App Store laden
          </a>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              B
            </div>
            <span>© {new Date().getFullYear()} BriefBox</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/datenschutz" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Datenschutz
            </Link>
            <Link href="/support" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Support
            </Link>
            <a
              href="mailto:support@briefbox.ai"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
