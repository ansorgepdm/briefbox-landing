import type { Metadata } from "next";
import Link from "next/link";
import { LogoText } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Impressum – BriefBox",
  description: "Impressum und rechtliche Angaben der pdm solutions GmbH",
};

export default function Impressum() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC", color: "#0F172A" }}>
      <nav
        className="border-b px-6 py-4"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E2E8F0" }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
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

      <style dangerouslySetInnerHTML={{__html: `
        .impressum-content {
          color: #475569;
        }
        .impressum-content h1 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          letter-spacing: -0.03em;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .impressum-content h2 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .impressum-content p {
          margin-top: 0.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.75;
        }
        .impressum-content a {
          color: #2563EB;
          text-decoration: none;
        }
        .impressum-content a:hover {
          text-decoration: underline;
        }
        .impressum-content strong {
          color: #0F172A;
          font-weight: 600;
        }
        .impressum-content address {
          background-color: #F1F5F9;
          padding: 1.25rem;
          border-radius: 1rem;
          font-style: normal;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}} />
      <main className="impressum-content max-w-4xl mx-auto px-6 py-16">
        <h1>Impressum</h1>
        <p style={{ color: "#94A3B8", marginBottom: "3rem" }}>
          Angaben gemäß §§ 5, 6 DDG
        </p>

        <address>
          <strong>pdm solutions GmbH</strong><br /><br />
          Boxhagener Straße 78<br />
          10245 Berlin<br /><br />
          Handelsregister: HRB 124261 B<br />
          Registergericht: Amtsgericht Charlottenburg
        </address>

        <h2>Vertreten durch</h2>
        <p>Christian Baumert<br />
        Karolin Schultz (Prokura)</p>

        <h2>Kontakt</h2>
        <p>
          Tel.: 030 55491105<br />
          Fax: 030 55491106<br />
          E-Mail: <a href="mailto:info@pdm-solutions.com">info@pdm-solutions.com</a><br />
          Web: <a href="https://pdm-solutions.com">pdm-solutions.com</a>
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
        DE269123691</p>

        <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

        <h2>Bildnachweise</h2>
        <p>Alle Fotos wurden von der pdm solutions GmbH erstellt oder die Rechte liegen zur Verwendung des Bildmaterials bei pdm solutions GmbH vor.</p>
        <p>Die hier durch den Webbetreiber verwendeten Produktbilder werden nur in dem zweckgebundenen Zusammenhang mit der Dienstleistung der Erstellung von Voice- sowie Chatbot-Anwendungen dargestellt (MarkenG §23).</p>
      </main>

      <footer
        className="border-t px-6 py-8 mt-8"
        style={{ borderColor: "#E2E8F0", backgroundColor: "#F8FAFC" }}
      >
        <div
          className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: "#94A3B8" }}
        >
          <LogoText height={14} />
          <div className="flex gap-6">
            <Link href="/" className="hover:text-[#0F172A] transition-colors">
              Startseite
            </Link>
            <Link href="/anb" className="hover:text-[#0F172A] transition-colors">
              ANB
            </Link>
            <Link href="/datenschutz" className="hover:text-[#0F172A] transition-colors">
              Datenschutz
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
