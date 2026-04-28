import type { Metadata } from "next";
import Link from "next/link";
import { LogoText } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – BriefBox",
  description: "Datenschutzerklärung der BriefBox App gemäß DSGVO.",
};

const sections = [
  {
    title: "1. Verantwortlicher",
    content: null,
    isAddress: true,
  },
  {
    title: "2. Welche Daten wir verarbeiten",
    items: [
      "📧 E-Mail-Adresse und Passwort (für Registrierung & Login)",
      "📄 Bilder und Text gescannter Dokumente (zur KI-Analyse)",
      "💬 Chat-Nachrichten mit dem KI-Assistenten",
      "📅 Deadlines und Aufgaben die du in der App erfasst",
      "⚙️ App-Einstellungen (lokal gespeichert auf deinem Gerät)",
    ],
    content: "BriefBox verarbeitet ausschließlich Daten, die du aktiv eingibst oder die zur Nutzung der App technisch notwendig sind:",
  },
  {
    title: "3. Zweck der Datenverarbeitung",
    content: "Deine Daten werden ausschließlich verwendet um dir die Kernfunktionen von BriefBox bereitzustellen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie bei optionalen Funktionen deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).",
    bullets: [
      "Authentifizierung und sicherer Zugang zu deinem Konto",
      "Analyse und Erklärung deiner Briefe durch KI",
      "Synchronisierung deiner Dokumente zwischen Geräten",
      "Erinnerungen und Push-Benachrichtigungen für Fristen",
    ],
  },
  {
    title: "4. Dienstleister & Drittanbieter",
    content: null,
    providers: [
      {
        name: "Supabase (supabase.com)",
        desc: "Authentifizierung und Datenbankspeicherung. Serverstandort: EU. Verarbeitung auf Basis von EU-Standardvertragsklauseln.",
      },
      {
        name: "OpenAI (openai.com)",
        desc: "KI-gestützte Analyse deiner Briefe. Dokument-Inhalte werden an OpenAI zur Verarbeitung übertragen. OpenAI speichert keine Daten für Trainingszwecke (API-Nutzung). Serverstandort: USA – Übertragung auf Basis von EU-Standardvertragsklauseln.",
      },
    ],
  },
  {
    title: "5. Speicherdauer",
    content: "Deine Daten werden gespeichert solange dein Konto aktiv ist. Du kannst dein Konto und alle zugehörigen Daten jederzeit in den App-Einstellungen löschen. Nach der Löschung werden alle Daten innerhalb von 30 Tagen unwiderruflich entfernt.",
  },
  {
    title: "6. Deine Rechte",
    content: "Du hast jederzeit folgende Rechte gemäß DSGVO:",
    rights: [
      ["Auskunft", "über deine gespeicherten Daten (Art. 15 DSGVO)"],
      ["Berichtigung", "unrichtiger Daten (Art. 16 DSGVO)"],
      ["Löschung", "deiner Daten (Art. 17 DSGVO)"],
      ["Einschränkung", "der Verarbeitung (Art. 18 DSGVO)"],
      ["Datenübertragbarkeit", "(Art. 20 DSGVO)"],
      ["Widerruf", "deiner Einwilligung (Art. 7 Abs. 3 DSGVO)"],
      ["Beschwerde", "bei einer Aufsichtsbehörde (Art. 77 DSGVO)"],
    ],
  },
  {
    title: "7. Sicherheit",
    content: "Alle Daten werden verschlüsselt übertragen (TLS/HTTPS). Passwörter werden ausschließlich als gehashte Werte gespeichert. Dokument-Bilder werden in gesichertem Cloud-Speicher abgelegt und sind ausschließlich für deinen Account zugänglich (Row Level Security).",
  },
  {
    title: "8. Änderungen dieser Erklärung",
    content: "Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version ist stets unter dieser URL abrufbar. Bei wesentlichen Änderungen informieren wir dich per E-Mail.",
  },
];

export default function Datenschutz() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC", color: "#0F172A" }}>
      {/* Nav */}
      <nav
        className="border-b px-6 py-4"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/">
            <LogoText height={18} />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium transition-colors"
            style={{ color: "#475569" }}
          >
            ← Zurück
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-2"
          style={{
            fontFamily: "var(--font-urbanist)",
            letterSpacing: "-0.03em",
            color: "#0F172A",
          }}
        >
          Datenschutzerklärung
        </h1>
        <p className="mb-12" style={{ color: "#94A3B8" }}>
          Stand: April 2026
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2
                className="text-xl font-semibold mb-3"
                style={{
                  fontFamily: "var(--font-urbanist)",
                  color: "#0F172A",
                }}
              >
                {section.title}
              </h2>

              {/* Address block */}
              {section.isAddress && (
                <>
                  <p className="mb-3 text-sm leading-relaxed" style={{ color: "#475569" }}>
                    Verantwortlich für die Datenverarbeitung im Sinne der DSGVO ist:
                  </p>
                  <address
                    className="not-italic rounded-2xl p-5 text-sm"
                    style={{ backgroundColor: "#F1F5F9", color: "#0F172A" }}
                  >
                    <strong>PDM Solutions</strong>
                    <br />
                    E-Mail:{" "}
                    <a
                      href="mailto:support@briefbox.ai"
                      style={{ color: "#2563EB" }}
                    >
                      support@briefbox.ai
                    </a>
                  </address>
                </>
              )}

              {/* Regular content */}
              {section.content && (
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#475569" }}>
                  {section.content}
                </p>
              )}

              {/* Item list (emoji) */}
              {"items" in section && section.items && (
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl px-4 py-3 text-sm"
                      style={{ backgroundColor: "#F1F5F9", color: "#0F172A" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Bullet list */}
              {"bullets" in section && section.bullets && (
                <ul className="space-y-1 list-disc list-inside">
                  {section.bullets.map((b) => (
                    <li key={b} className="text-sm" style={{ color: "#475569" }}>
                      {b}
                    </li>
                  ))}
                </ul>
              )}

              {/* Providers */}
              {"providers" in section && section.providers && (
                <div className="space-y-4">
                  {section.providers.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-2xl p-5"
                      style={{ backgroundColor: "#F1F5F9" }}
                    >
                      <h3
                        className="font-semibold text-sm mb-1"
                        style={{ color: "#0F172A", fontFamily: "var(--font-urbanist)" }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                        {p.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Rights list */}
              {"rights" in section && section.rights && (
                <>
                  <ul className="space-y-1 mt-2">
                    {section.rights.map(([bold, rest]) => (
                      <li key={bold} className="text-sm" style={{ color: "#475569" }}>
                        <strong style={{ color: "#0F172A" }}>{bold}</strong> {rest}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm" style={{ color: "#475569" }}>
                    Für Anfragen wende dich an:{" "}
                    <a href="mailto:support@briefbox.ai" style={{ color: "#2563EB" }}>
                      support@briefbox.ai
                    </a>
                  </p>
                </>
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t px-6 py-8 mt-8"
        style={{ borderColor: "#E2E8F0", backgroundColor: "#F8FAFC" }}
      >
        <div
          className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "#94A3B8" }}
        >
          <LogoText height={14} />
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#0F172A] transition-colors">
              Startseite
            </Link>
            <Link href="/support" className="hover:text-[#0F172A] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
