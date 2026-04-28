import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

// Urbanist Bold für Headings (entspricht Urbanist_700Bold in der App)
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BriefBox – Dein smarter Briefassistent",
  description:
    "BriefBox scannt deine Briefe, erklärt sie verständlich und hilft dir mit Antworten – direkt auf deinem iPhone. Nie wieder wichtige Post übersehen.",
  keywords: ["Briefe scannen", "Briefassistent", "Dokumente verstehen", "iOS App", "BriefBox"],
  icons: {
    icon: "/app-icon.png",
    apple: "/app-icon.png",
  },
  openGraph: {
    title: "BriefBox – Dein smarter Briefassistent",
    description:
      "BriefBox scannt deine Briefe, erklärt sie verständlich und hilft dir mit Antworten – direkt auf deinem iPhone.",
    type: "website",
    locale: "de_DE",
    images: [{ url: "/app-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${urbanist.variable} ${GeistSans.variable}`}>
      <body
        style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
