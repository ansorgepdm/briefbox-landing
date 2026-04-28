import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BriefBox – Dein smarter Briefassistent",
  description:
    "BriefBox scannt deine Briefe, erklärt sie verständlich und hilft dir mit Antworten – direkt auf deinem iPhone. Nie wieder wichtige Post übersehen.",
  keywords: ["Briefe scannen", "Briefassistent", "Dokumente verstehen", "iOS App", "BriefBox"],
  openGraph: {
    title: "BriefBox – Dein smarter Briefassistent",
    description:
      "BriefBox scannt deine Briefe, erklärt sie verständlich und hilft dir mit Antworten – direkt auf deinem iPhone.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
