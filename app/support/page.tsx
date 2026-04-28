import type { Metadata } from "next";
import Link from "next/link";
import { LogoText, LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Support – BriefBox",
  description: "Hilfe und Support für die BriefBox App.",
};

const faqs = [
  {
    q: "Wie scanne ich einen Brief?",
    a: "Öffne die App und tippe auf den Scan-Button (Kamera-Icon unten in der Tab-Bar). Halte dein iPhone über den Brief, bis er automatisch erkannt wird. BriefBox analysiert den Text sofort.",
  },
  {
    q: "Werden meine Dokumente sicher gespeichert?",
    a: "Ja. Alle Daten werden verschlüsselt übertragen (TLS/HTTPS) und in einer gesicherten Datenbank gespeichert. Deine Dokumente sind nur für dein Konto zugänglich – niemand sonst kann sie einsehen.",
  },
  {
    q: "Funktioniert BriefBox ohne Internetverbindung?",
    a: "Die KI-Analyse und Synchronisierung benötigen eine Internetverbindung. Bereits analysierte Briefe sind lokal gespeichert und offline einsehbar.",
  },
  {
    q: "Wie lösche ich mein Konto und alle Daten?",
    a: "Gehe in der App zu Einstellungen → Konto → Konto löschen. Alle deine Daten werden innerhalb von 30 Tagen vollständig und unwiderruflich gelöscht.",
  },
  {
    q: "Was passiert wenn ich mein Passwort vergessen habe?",
    a: "Tippe auf der Login-Seite auf Passwort vergessen. Du erh\u00e4ltst eine E-Mail mit einem Link um ein neues Passwort zu setzen.",
  },
  {
    q: "Welche Sprachen werden erkannt?",
    a: "BriefBox erkennt aktuell Deutsch und Englisch. Die KI-Erklärungen und Antwortvorschläge erfolgen auf Deutsch.",
  },
  {
    q: "Kostet BriefBox etwas?",
    a: "BriefBox ist kostenlos. Für erweiterte Funktionen (z.B. unbegrenzte KI-Analysen) wird in Zukunft ein optionales Abo angeboten.",
  },
];

export default function Support() {
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

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#EFF6FF" }}
          >
            <LogoMark size={32} />
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-urbanist)",
              letterSpacing: "-0.03em",
              color: "#0F172A",
            }}
          >
            Support & Hilfe
          </h1>
          <p className="text-lg" style={{ color: "#475569" }}>
            Wir helfen dir gerne. Schau zuerst in die häufigen Fragen – oder schreib uns direkt.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className="rounded-3xl p-8 text-center mb-16"
          style={{ background: "linear-gradient(135deg, #1D4ED8, #2563EB)" }}
        >
          <h2
            className="text-xl font-bold text-white mb-2"
            style={{ fontFamily: "var(--font-urbanist)" }}
          >
            Direkt schreiben
          </h2>
          <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            Wir antworten innerhalb von 1–2 Werktagen auf Deutsch.
          </p>
          <a
            href="mailto:support@briefbox.ai"
            className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-2xl transition-all hover:scale-[1.02] text-sm"
            style={{ backgroundColor: "#FFFFFF", color: "#1D4ED8" }}
          >
            <span>✉️</span>
            support@briefbox.ai
          </a>
        </div>

        {/* FAQ */}
        <div>
          <h2
            className="text-2xl font-bold mb-8"
            style={{
              fontFamily: "var(--font-urbanist)",
              letterSpacing: "-0.02em",
              color: "#0F172A",
            }}
          >
            Häufige Fragen
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl p-6 border"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E2E8F0",
                }}
              >
                <h3
                  className="font-semibold mb-2 text-sm"
                  style={{
                    color: "#0F172A",
                    fontFamily: "var(--font-urbanist)",
                  }}
                >
                  {faq.q}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Still need help */}
        <div
          className="mt-12 text-center rounded-3xl p-8"
          style={{ backgroundColor: "#EFF6FF" }}
        >
          <p className="mb-3 font-medium" style={{ color: "#0F172A" }}>
            Deine Frage ist nicht dabei?
          </p>
          <a
            href="mailto:support@briefbox.ai"
            className="font-semibold transition-colors"
            style={{ color: "#2563EB" }}
          >
            Schreib uns eine E-Mail →
          </a>
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
            <Link href="/datenschutz" className="hover:text-[#0F172A] transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
