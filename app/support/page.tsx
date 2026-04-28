import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support – BriefBox",
  description: "Hilfe und Support für die BriefBox App.",
};

const faqs = [
  {
    q: "Wie scanne ich einen Brief?",
    a: "Öffne die App und tippe auf den Scan-Button (Kamera-Icon). Halte dein iPhone über den Brief, bis er automatisch erkannt wird. BriefBox analysiert den Text sofort.",
  },
  {
    q: "Werden meine Dokumente sicher gespeichert?",
    a: "Ja. Alle Daten werden verschlüsselt übertragen und gespeichert. Deine Dokumente sind nur für dein Konto zugänglich – niemand sonst kann sie einsehen.",
  },
  {
    q: "Funktioniert BriefBox ohne Internetverbindung?",
    a: "Die KI-Analyse und Synchronisierung benötigen eine Internetverbindung. Bereits analysierte Briefe kannst du offline einsehen.",
  },
  {
    q: "Wie lösche ich mein Konto und alle Daten?",
    a: "Gehe in der App zu Einstellungen → Konto → Konto löschen. Alle deine Daten werden innerhalb von 30 Tagen vollständig gelöscht.",
  },
  {
    q: "Was passiert wenn ich mein Passwort vergessen habe?",
    a: "Tippe auf der Login-Seite auf \u201ePasswort vergessen\u201c. Du erh\u00e4ltst eine E-Mail mit einem Link um ein neues Passwort zu setzen.",
  },
  {
    q: "Welche Sprachen werden erkannt?",
    a: "BriefBox erkennt aktuell Deutsch und Englisch. Die KI-Erklärungen erfolgen auf Deutsch.",
  },
];

export default function Support() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Nav */}
      <nav className="border-b border-gray-100 dark:border-gray-800 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
              B
            </div>
            <span className="font-semibold text-gray-900 dark:text-white">BriefBox</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← Zurück
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 rounded-3xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-3xl mx-auto mb-6">
            🛟
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Support & Hilfe
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Wir helfen dir gerne. Schau zuerst in die häufigen Fragen – oder schreib uns direkt.
          </p>
        </div>

        {/* Contact Card */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-8 text-center mb-16">
          <h2 className="text-xl font-bold text-white mb-2">Direkt schreiben</h2>
          <p className="text-indigo-200 mb-6 text-sm">
            Wir antworten innerhalb von 1–2 Werktagen auf Deutsch.
          </p>
          <a
            href="mailto:support@briefbox.ai"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-2xl hover:bg-indigo-50 transition-colors text-sm"
          >
            <span>✉️</span>
            support@briefbox.ai
          </a>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Häufige Fragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {faq.q}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Still need help */}
        <div className="mt-16 text-center bg-gray-50 dark:bg-gray-900 rounded-3xl p-8">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Deine Frage ist nicht dabei?
          </p>
          <a
            href="mailto:support@briefbox.ai"
            className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
          >
            Schreib uns eine E-Mail →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 px-6 py-8 mt-8">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} BriefBox</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Startseite
            </Link>
            <Link
              href="/datenschutz"
              className="hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
