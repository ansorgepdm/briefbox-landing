import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – BriefBox",
  description: "Datenschutzerklärung der BriefBox App gemäß DSGVO.",
};

export default function Datenschutz() {
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

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Stand: April 2026
        </p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:
            </p>
            <address className="not-italic mt-3 bg-gray-50 dark:bg-gray-900 rounded-2xl p-5 text-sm">
              <strong>PDM Solutions</strong>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:support@briefbox.ai"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                support@briefbox.ai
              </a>
            </address>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              2. Welche Daten wir verarbeiten
            </h2>
            <p>
              BriefBox verarbeitet ausschließlich Daten, die du aktiv eingibst oder die zur
              Nutzung der App technisch notwendig sind:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "📧 E-Mail-Adresse und Passwort (für Registrierung & Login)",
                "📄 Bilder und Text gescannter Dokumente (zur KI-Analyse)",
                "💬 Chat-Nachrichten mit dem KI-Assistenten",
                "📅 Deadlines und Aufgaben die du in der App erfasst",
                "⚙️ App-Einstellungen (lokal gespeichert auf deinem Gerät)",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 bg-gray-50 dark:bg-gray-900 rounded-xl px-4 py-3 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              3. Zweck der Datenverarbeitung
            </h2>
            <p>
              Deine Daten werden ausschließlich verwendet um dir die Kernfunktionen von BriefBox
              bereitzustellen:
            </p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>Authentifizierung und sicherer Zugang zu deinem Konto</li>
              <li>Analyse und Erklärung deiner Briefe durch KI</li>
              <li>Synchronisierung deiner Dokumente zwischen Geräten</li>
              <li>Erinnerungen und Push-Benachrichtigungen für Fristen</li>
            </ul>
            <p className="mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie bei
              optionalen Funktionen deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              4. Dienstleister & Drittanbieter
            </h2>
            <div className="space-y-4">
              {[
                {
                  name: "Supabase (supabase.com)",
                  desc: "Authentifizierung und Datenbankspeicherung. Serverstandort: EU. Verarbeitung auf Basis von EU-Standardvertragsklauseln.",
                },
                {
                  name: "OpenAI (openai.com)",
                  desc: "KI-gestützte Analyse deiner Briefe. Dokument-Inhalte werden an OpenAI zur Verarbeitung übertragen. OpenAI speichert keine Daten für Trainingszwecke (API-Nutzung). Serverstandort: USA – Übertragung auf Basis von EU-Standardvertragsklauseln.",
                },
              ].map((s) => (
                <div
                  key={s.name}
                  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-5"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                    {s.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              5. Speicherdauer
            </h2>
            <p>
              Deine Daten werden gespeichert solange dein Konto aktiv ist. Du kannst dein Konto
              und alle zugehörigen Daten jederzeit in den App-Einstellungen löschen. Nach der
              Löschung werden alle Daten innerhalb von 30 Tagen unwiderruflich entfernt.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              6. Deine Rechte
            </h2>
            <p>Du hast jederzeit das Recht auf:</p>
            <ul className="mt-3 space-y-1 list-disc list-inside">
              <li>
                <strong>Auskunft</strong> über deine gespeicherten Daten (Art. 15 DSGVO)
              </li>
              <li>
                <strong>Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
              </li>
              <li>
                <strong>Löschung</strong> deiner Daten (Art. 17 DSGVO)
              </li>
              <li>
                <strong>Einschränkung</strong> der Verarbeitung (Art. 18 DSGVO)
              </li>
              <li>
                <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
              </li>
              <li>
                <strong>Widerruf</strong> deiner Einwilligung (Art. 7 Abs. 3 DSGVO)
              </li>
              <li>
                <strong>Beschwerde</strong> bei einer Aufsichtsbehörde (Art. 77 DSGVO)
              </li>
            </ul>
            <p className="mt-3">
              Für Anfragen wende dich an:{" "}
              <a
                href="mailto:support@briefbox.ai"
                className="text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                support@briefbox.ai
              </a>
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              7. Sicherheit
            </h2>
            <p>
              Alle Daten werden verschlüsselt übertragen (TLS/HTTPS). Passwörter werden
              ausschließlich als gehashte Werte gespeichert (bcrypt). Dokument-Bilder werden
              in gesichertem Cloud-Speicher abgelegt und sind ausschließlich für deinen Account
              zugänglich (Row Level Security).
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              8. Änderungen dieser Erklärung
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die
              aktuelle Version ist stets unter dieser URL abrufbar. Bei wesentlichen Änderungen
              informieren wir dich per E-Mail.
            </p>
          </section>
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
            <Link href="/support" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
