import type { Metadata } from "next";
import Link from "next/link";
import { LogoText } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – BriefBox",
  description: "Datenschutzerklärung der BriefBox App gemäß DSGVO.",
};

export default function Datenschutz() {
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
        .datenschutz-content {
          color: #475569;
        }
        .datenschutz-content h1 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          letter-spacing: -0.03em;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .datenschutz-content h2 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .datenschutz-content h3 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .datenschutz-content h4 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          font-size: 1rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .datenschutz-content p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        .datenschutz-content ul {
          margin-top: 1rem;
          margin-bottom: 1rem;
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .datenschutz-content li {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .datenschutz-content a {
          color: #2563EB;
          text-decoration: none;
        }
        .datenschutz-content a:hover {
          text-decoration: underline;
        }
        .datenschutz-content strong {
          color: #0F172A;
          font-weight: 600;
        }
        .datenschutz-content table {
          width: 100%;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          border-collapse: collapse;
          font-size: 0.875rem;
        }
        .datenschutz-content th {
          background-color: #F1F5F9;
          padding: 0.75rem;
          text-align: left;
          font-weight: 600;
          color: #0F172A;
          border: 1px solid #E2E8F0;
        }
        .datenschutz-content td {
          padding: 0.75rem;
          border: 1px solid #E2E8F0;
        }
        .datenschutz-content address {
          background-color: #F1F5F9;
          padding: 1.25rem;
          border-radius: 1rem;
          font-style: normal;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}} />
      <main className="datenschutz-content max-w-4xl mx-auto px-6 py-16">

        <h1>Datenschutzerklärung BriefBox.ai</h1>
        <p style={{ color: "#94A3B8", marginBottom: "3rem" }}>
          Stand: Mai 2026
        </p>

        <h2>1. Wer ist verantwortlich und wie kann ich den Datenschutzbeauftragten erreichen?</h2>
        <p>Verantwortlich für die Verarbeitung personenbezogener Daten im Zusammenhang mit diesem Service ist:</p>
        <address>
          <strong>pdm solutions GmbH</strong><br />
          Boxhagener Straße 78<br />
          10245 Berlin<br />
          Telefon: 0151 51715288<br />
          E-Mail: <a href="mailto:info@briefbox.ai">info@briefbox.ai</a><br />
          Website: <a href="https://pdm-solutions.com">https://pdm-solutions.com</a><br />
          Geschäftsführung: Christian Baumert<br />
          HRB 124261 B, Amtsgericht Berlin Charlottenburg
        </address>
        <p>
          <strong>Kontakt für Datenschutzanfragen:</strong><br />
          <a href="mailto:info@briefbox.ai">info@briefbox.ai</a>
        </p>
        <p>Ein Datenschutzbeauftragter ist derzeit nicht bestellt, da keine gesetzliche Verpflichtung hierzu besteht. Datenschutzanfragen können an die oben genannte Datenschutzkontaktadresse gerichtet werden.</p>

        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>Wir verarbeiten personenbezogene Daten auf Grundlage der in Art. 6 Abs. 1 DSGVO genannten Rechtsgrundlagen, insbesondere:</p>
        <ul>
          <li>Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)</li>
          <li>Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</li>
          <li>Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</li>
          <li>Art. 9 Abs. 2 lit. a DSGVO (Einwilligung für besondere Kategorien)</li>
        </ul>
        <p>Wir löschen personenbezogene Daten, sobald der Zweck der Speicherung entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>
        <p>Der Service richtet sich ausschließlich an Unternehmer im Sinne des § 14 BGB und geschäftliche Nutzer. Eine Nutzung durch Verbraucher erfolgt nicht.</p>

        <h2>3. Bereitstellung der Website, App und Erstellung von Logfiles</h2>
        
        <h3>3.1 Beschreibung und Umfang der Datenverarbeitung</h3>
        <p>Bei jedem Aufruf unserer Website sowie bei Nutzung der App können automatisiert technische Daten verarbeitet werden.</p>
        <p>Folgende Daten können erhoben werden:</p>
        <ul>
          <li>IP-Adresse des Nutzers</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>aufgerufene Seiten bzw. App-Funktionen</li>
          <li>übertragene Datenmenge</li>
          <li>Meldung über erfolgreichen Abruf</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem bzw. Geräteinformationen</li>
          <li>App-Version</li>
          <li>Referrer URL, soweit vorhanden</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>technische Fehler- und Ereignisprotokolle</li>
        </ul>
        <p>Eine Speicherung dieser Daten zusammen mit anderen personenbezogenen Daten erfolgt nur, soweit dies für Sicherheit, Fehleranalyse oder Missbrauchserkennung erforderlich ist.</p>

        <h3>3.2 Rechtsgrundlage</h3>
        <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt im sicheren, stabilen und funktionsfähigen Betrieb der Website und App.</p>

        <h3>3.3 Zweck der Datenverarbeitung</h3>
        <p>Die Verarbeitung erfolgt zur:</p>
        <ul>
          <li>Auslieferung der Website und App-Funktionen</li>
          <li>Gewährleistung der Sicherheit und Stabilität</li>
          <li>Fehleranalyse</li>
          <li>Missbrauchs- und Angriffserkennung</li>
          <li>Sicherstellung der technischen Funktionsfähigkeit</li>
        </ul>

        <h3>3.4 Speicherdauer</h3>
        <ul>
          <li>IP-Adressen und User-Agents: 7 Tage</li>
          <li>technische Logfiles: spätestens 30 Tage</li>
          <li>sicherheitsrelevante Ereignisprotokolle: bis zu 90 Tage, soweit dies zur Missbrauchs- oder Angriffserkennung erforderlich ist</li>
        </ul>

        <h3>3.5 Widerspruchs- und Beseitigungsmöglichkeit</h3>
        <p>Die Erfassung dieser Daten ist für den Betrieb der Website und App zwingend erforderlich. Es besteht daher keine Widerspruchsmöglichkeit.</p>

        <h2>4. Registrierung, Nutzerkonto und Authentifizierung</h2>
        
        <h3>4.1 Beschreibung und Umfang der Datenverarbeitung</h3>
        <p>Für die Nutzung von BriefBox.ai ist ein Nutzerkonto erforderlich. Die Registrierung kann über E-Mail/Passwort oder über Single-Sign-On-Dienste, insbesondere Apple oder Google, erfolgen.</p>
        <p>Dabei verarbeiten wir insbesondere:</p>
        <ul>
          <li>E-Mail-Adresse</li>
          <li>Passwort-Hash</li>
          <li>Authentifizierungsdaten</li>
          <li>Login-Zeitpunkte</li>
          <li>Account-Status</li>
          <li>Session- und Authentifizierungsdaten</li>
          <li>ggf. vom SSO-Anbieter übermittelte Identifikatoren</li>
          <li>Einstellungen und Berechtigungen</li>
        </ul>

        <h3>4.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>

        <h3>4.3 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Registrierung und Authentifizierung</li>
          <li>Bereitstellung des Nutzerkontos</li>
          <li>Verwaltung des Zugriffs auf Dokumente und Analysen</li>
          <li>Absicherung des Nutzerkontos</li>
          <li>Missbrauchsvermeidung</li>
        </ul>

        <h3>4.4 Speicherdauer</h3>
        <p>Account-Daten werden bis zur Löschung des Nutzerkontos gespeichert. Inaktive Accounts können nach 24 Monaten ohne Nutzung gelöscht werden, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>

        <h2>5. Verarbeitung von Dokumenten und Briefinhalten</h2>
        
        <h3>5.1 Beschreibung und Umfang der Datenverarbeitung</h3>
        <p>Nutzer können Dokumente, insbesondere Behördenpost, Briefe, PDFs, E-Mails oder gescannte Dokumente, in BriefBox.ai hochladen oder über die Smartphone-Kamera scannen.</p>
        <p>Dabei können insbesondere verarbeitet werden:</p>
        <ul>
          <li>Scan-Bilder</li>
          <li>PDFs</li>
          <li>hochgeladene Dokumentdateien</li>
          <li>aus Dokumenten extrahierte Texte</li>
          <li>Dokument-Metadaten</li>
          <li>Aktenzeichen</li>
          <li>Datumsangaben</li>
          <li>Fristen</li>
          <li>Absender und Empfänger</li>
          <li>Betreffzeilen</li>
          <li>Zahlungsinformationen</li>
          <li>Behörden- oder Versicherungsangaben</li>
          <li>sonstige im Dokument enthaltene Informationen</li>
        </ul>

        <h3>5.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>
        <p>Art. 9 Abs. 2 lit. a DSGVO, soweit Dokumente besondere Kategorien personenbezogener Daten enthalten</p>

        <h3>5.3 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Digitalisierung von Dokumenten</li>
          <li>Erkennung und Extraktion relevanter Informationen</li>
          <li>Erstellung verständlicher Zusammenfassungen</li>
          <li>Erstellung konkreter To-Dos</li>
          <li>Fristen- und Aufgabenmanagement</li>
          <li>Archivierung und Organisation der Dokumente</li>
          <li>Zuordnung zusammengehöriger Dokumente, z. B. nach Aktenzeichen oder Vorgängen</li>
        </ul>

        <h3>5.4 Hinweis zu Dokumenten Dritter</h3>
        <p>Der Nutzer ist dafür verantwortlich, nur solche Dokumente hochzuladen, zu deren Verarbeitung er berechtigt ist. Dies gilt insbesondere für Dokumente, die personenbezogene Daten von Mitarbeitern, Kunden, Geschäftspartnern oder sonstigen Dritten enthalten.</p>

        <h2>6. Verarbeitung besonderer Kategorien personenbezogener Daten</h2>
        
        <h3>6.1 Beschreibung</h3>
        <p>Hochgeladene Dokumente können besondere Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO enthalten, insbesondere:</p>
        <ul>
          <li>Gesundheitsdaten</li>
          <li>Daten zu Arbeitsunfällen oder Berufsgenossenschaften</li>
          <li>Sozialversicherungsdaten</li>
          <li>Angaben zu Gewerkschaftszugehörigkeit</li>
          <li>ggf. sonstige besonders schutzwürdige Informationen</li>
        </ul>

        <h3>6.2 Rechtsgrundlage</h3>
        <p>Die Verarbeitung erfolgt nur auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß Art. 9 Abs. 2 lit. a DSGVO.</p>

        <h3>6.3 Erforderlichkeit der Einwilligung</h3>
        <p>Ohne diese Einwilligung ist eine Nutzung der Kernfunktionen von BriefBox.ai nicht möglich, da wir den Inhalt hochgeladener Dokumente technisch nicht zuverlässig vorab ausschließen oder filtern können.</p>

        <h3>6.4 Widerruf</h3>
        <p>Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Der Widerruf kann dazu führen, dass bestimmte Funktionen nicht mehr genutzt werden können oder bereits gespeicherte Dokumente gelöscht werden müssen.</p>

        <h2>7. KI-Verarbeitung durch OpenAI</h2>
        
        <h3>7.1 Beschreibung und Umfang</h3>
        <p>Zur Analyse, Zusammenfassung und Beantwortung von Rückfragen nutzen wir KI-Modelle über die API von OpenAI.</p>
        <p>Dabei können insbesondere an OpenAI übermittelt werden:</p>
        <ul>
          <li>Dokumenttexte</li>
          <li>Bildinhalte</li>
          <li>PDF-Inhalte</li>
          <li>extrahierte Metadaten</li>
          <li>Nutzerfragen im Chat</li>
          <li>bisheriger Dokumentkontext</li>
          <li>relevante Unternehmenskontextdaten, soweit für die Anfrage erforderlich</li>
        </ul>

        <h3>7.2 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Extraktion von Metadaten</li>
          <li>Erstellung von Zusammenfassungen in einfacher Sprache</li>
          <li>Generierung von Handlungsempfehlungen und To-Dos</li>
          <li>Beantwortung dokumentbezogener Rückfragen</li>
          <li>Erstellung von Antwortentwürfen</li>
        </ul>

        <h3>7.3 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>
        <p>Art. 9 Abs. 2 lit. a DSGVO, soweit besondere Kategorien personenbezogener Daten betroffen sind</p>

        <h3>7.4 Kein Training durch OpenAI</h3>
        <p>Nach Angaben von OpenAI werden Daten, die über die OpenAI API übermittelt werden, nicht zum Training oder zur Verbesserung der OpenAI-Modelle verwendet, sofern nicht ausdrücklich eine entsprechende Freigabe erfolgt.</p>

        <h3>7.5 Speicherung bei OpenAI</h3>
        <p>OpenAI bietet für Unternehmenskunden Datenkontrollen und Retention-Optionen an, einschließlich der Möglichkeit zur Zero-Data-Retention für qualifizierte Organisationen. Soweit keine Zero-Data-Retention vereinbart ist, können API-Daten nach den jeweils geltenden OpenAI-Bedingungen kurzfristig gespeichert werden.</p>

        <h3>7.6 Drittlandtransfer</h3>
        <p>OpenAI ist ein Anbieter mit Sitz in den USA. Die Übermittlung personenbezogener Daten in die USA erfolgt auf Grundlage geeigneter Garantien, insbesondere Standardvertragsklauseln (SCC) und eines Transfer Impact Assessments (TIA), soweit erforderlich.</p>
        <p>Trotz dieser Maßnahmen kann nicht vollständig ausgeschlossen werden, dass US-Behörden auf Daten zugreifen.</p>

        <h2>8. Unternehmensprofil und Business-Kontext</h2>
        
        <h3>8.1 Beschreibung und Umfang</h3>
        <p>Nutzer können Unternehmens- und Kontextdaten hinterlegen, damit BriefBox.ai Dokumente besser einordnen und passendere Antwortvorschläge erstellen kann.</p>
        <p>Hierzu können insbesondere gehören:</p>
        <p><strong>Über den Nutzer:</strong></p>
        <ul>
          <li>Anrede</li>
          <li>Vorname</li>
          <li>Nachname</li>
          <li>Rolle</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer</li>
        </ul>
        <p><strong>Unternehmensdaten:</strong></p>
        <ul>
          <li>Firmenname</li>
          <li>Rechtsform</li>
          <li>Branche</li>
          <li>Branchendetail</li>
          <li>Unternehmensgröße</li>
          <li>Gründungsjahr</li>
          <li>Website</li>
          <li>Handelsregisterangaben</li>
        </ul>
        <p><strong>Geschäftsadresse:</strong></p>
        <ul>
          <li>Straße und Hausnummer</li>
          <li>PLZ</li>
          <li>Ort</li>
          <li>Bundesland</li>
        </ul>
        <p><strong>Steuern und Finanzen:</strong></p>
        <ul>
          <li>Steuernummer</li>
          <li>USt-ID</li>
          <li>Finanzamt</li>
          <li>Umsatzsteuerpflicht</li>
          <li>Kleinunternehmerregelung</li>
          <li>Angaben zum Steuerberater</li>
          <li>Angaben zur Buchhaltung</li>
        </ul>
        <p><strong>Bankverbindung:</strong></p>
        <ul>
          <li>Hausbank</li>
          <li>IBAN</li>
          <li>BIC</li>
        </ul>
        <p><strong>Kommunikation:</strong></p>
        <ul>
          <li>bevorzugter Ton</li>
          <li>Briefkopf-Absender</li>
        </ul>

        <h3>8.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>

        <h3>8.3 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Personalisierung von Analysen</li>
          <li>besseren Einordnung von Behördenpost</li>
          <li>Erstellung passender Antwortentwürfe</li>
          <li>Vorbereitung von Briefköpfen und Anschreiben</li>
          <li>Verbesserung der Nutzererfahrung innerhalb des Nutzerkontos</li>
        </ul>

        <h3>8.4 Speicherdauer</h3>
        <p>Business-Kontextdaten werden gespeichert, bis der Nutzer sie löscht oder das Nutzerkonto gelöscht wird.</p>

        <h2>9. Chat- und Interaktionsfunktion</h2>
        
        <h3>9.1 Beschreibung und Umfang</h3>
        <p>Nutzer können dokumentbezogene Rückfragen stellen. Dabei verarbeiten wir insbesondere:</p>
        <ul>
          <li>eingegebene Nutzerfragen</li>
          <li>Dokumentbezug</li>
          <li>Chatverläufe</li>
          <li>generierte Antworten</li>
          <li>Kontextinformationen zum jeweiligen Vorgang</li>
        </ul>

        <h3>9.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>
        <p>Art. 9 Abs. 2 lit. a DSGVO, soweit besondere Kategorien personenbezogener Daten betroffen sind</p>

        <h3>9.3 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Beantwortung von Rückfragen</li>
          <li>kontextbezogenen Unterstützung</li>
          <li>besseren Nachvollziehbarkeit einzelner Vorgänge</li>
          <li>Fortführung von Dokument-Threads</li>
        </ul>

        <h3>9.4 Speicherdauer</h3>
        <p>Chatverläufe werden gespeichert, bis der Nutzer sie löscht oder das zugehörige Dokument bzw. Nutzerkonto gelöscht wird.</p>

        <h2>10. Antwortentwürfe, To-Dos und Fristenmanagement</h2>
        
        <h3>10.1 Beschreibung und Umfang</h3>
        <p>BriefBox.ai kann auf Basis hochgeladener Dokumente Antwortentwürfe, To-Dos und Fristinformationen erzeugen. Außerdem kann ein Export von Fristen, z. B. als Kalenderdatei (.ics), angeboten werden.</p>
        <p>Dabei können verarbeitet werden:</p>
        <ul>
          <li>Dokumentinhalte</li>
          <li>Fristdaten</li>
          <li>Empfänger- und Absenderangaben</li>
          <li>Business-Kontextdaten</li>
          <li>generierte Antworttexte</li>
          <li>Aufgabenstatus</li>
          <li>Exportdaten</li>
        </ul>

        <h3>10.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>
        <p>Art. 9 Abs. 2 lit. a DSGVO, soweit besondere Kategorien personenbezogener Daten betroffen sind</p>

        <h3>10.3 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Erstellung von To-Dos</li>
          <li>Vorbereitung von Antwortschreiben</li>
          <li>Fristenmanagement</li>
          <li>Export von Fristen oder Dokumentinformationen</li>
          <li>Organisation behördlicher Kommunikation</li>
        </ul>

        <h3>10.4 Hinweis</h3>
        <p>Die erzeugten Informationen dienen ausschließlich der Unterstützung. Sie ersetzen keine Rechtsberatung, Steuerberatung oder fachliche Prüfung. Fristen und rechtliche Pflichten müssen vom Nutzer eigenverantwortlich geprüft werden.</p>

        <h2>11. Lokale Verarbeitung auf dem Endgerät</h2>
        
        <h3>11.1 Beschreibung und Umfang</h3>
        <p>Bestimmte Daten können lokal auf dem Endgerät des Nutzers verarbeitet oder gespeichert werden, insbesondere:</p>
        <ul>
          <li>Onboarding-Status</li>
          <li>lokale App-Einstellungen</li>
          <li>temporäre Metadaten</li>
          <li>Zwischenspeicherungen im Rahmen des Scan- oder Upload-Prozesses</li>
        </ul>
        <p>Hierfür kann insbesondere lokaler Gerätespeicher, z. B. AsyncStorage, verwendet werden.</p>

        <h3>11.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>
        <p>§ 25 Abs. 2 Nr. 2 TDDDG, soweit der Zugriff auf Informationen im Endgerät für die Bereitstellung der App technisch erforderlich ist</p>

        <h3>11.3 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Bereitstellung der App-Funktionen</li>
          <li>Durchführung des Onboardings</li>
          <li>Speicherung technischer Einstellungen</li>
          <li>Stabilisierung des Scan- und Upload-Prozesses</li>
        </ul>

        <h3>11.4 Speicherdauer</h3>
        <p>Lokal gespeicherte Daten verbleiben grundsätzlich auf dem Endgerät, bis sie durch die App, durch Logout, durch Löschen der App oder durch die Geräteeinstellungen entfernt werden.</p>

        <h2>12. Kamera, Dateien und iOS-Freigabefunktionen</h2>
        
        <h3>12.1 Kamera und Scan-Funktion</h3>
        <p>Die App kann Zugriff auf die Kamera des Endgeräts benötigen, um Dokumente zu scannen. Der Zugriff erfolgt nur nach Freigabe durch den Nutzer über die Betriebssystemberechtigungen.</p>

        <h3>12.2 Datei-Upload</h3>
        <p>Nutzer können Dokumente über Dateiauswahl oder Upload-Funktionen hochladen. Dabei werden nur die vom Nutzer ausgewählten Dateien verarbeitet.</p>

        <h3>12.3 Teilen und Export</h3>
        <p>Nutzer können Dokumente, Analysen oder Ergebnisse über die native iOS-Sharing-Funktion exportieren oder teilen. Für die weitere Verarbeitung durch vom Nutzer ausgewählte Empfänger oder Apps sind diese Empfänger bzw. Anbieter selbst verantwortlich.</p>

        <h3>12.4 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO</p>

        <h2>13. Nutzungsdaten und Rate-Limits</h2>
        
        <h3>13.1 Beschreibung und Umfang</h3>
        <p>Zur Steuerung der Nutzung und zur Missbrauchserkennung verarbeiten wir Nutzungsdaten, insbesondere:</p>
        <ul>
          <li>API-Calls</li>
          <li>Zeitstempel</li>
          <li>Nutzungsvolumen</li>
          <li>verwendete Funktionen</li>
          <li>Fehlerereignisse</li>
          <li>Rate-Limit-Daten</li>
        </ul>

        <h3>13.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. f DSGVO</p>

        <h3>13.3 Zweck</h3>
        <p>Die Verarbeitung dient der:</p>
        <ul>
          <li>Missbrauchserkennung</li>
          <li>Durchsetzung von Rate-Limits</li>
          <li>Systemsicherheit</li>
          <li>Kostenkontrolle</li>
          <li>Vorbereitung möglicher Freemium- oder Volumenmodelle</li>
        </ul>

        <h3>13.4 Speicherdauer</h3>
        <p>Rate-Limit- und API-Nutzungsdaten werden grundsätzlich 30 bis 90 Tage gespeichert. Aggregierte Nutzungsdaten können länger gespeichert werden, soweit sie keinen Personenbezug mehr aufweisen.</p>

        <h2>14. Löschkonzept und Speicherdauern</h2>
        
        <h3>14.1 Grundsatz</h3>
        <p>BriefBox.ai ist als Dokumentenarchiv für geschäftliche Dokumente konzipiert. Deshalb werden hochgeladene Dokumente und dazugehörige Analysen grundsätzlich so lange gespeichert, bis der Nutzer sie löscht oder das Nutzerkonto gelöscht wird.</p>

        <h3>14.2 Speicherdauern</h3>
        <table>
          <thead>
            <tr>
              <th>Datenkategorie</th>
              <th>Speicherdauer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Account-Daten</td>
              <td>bis zur Löschung des Nutzerkontos</td>
            </tr>
            <tr>
              <td>Inaktive Accounts</td>
              <td>grundsätzlich Löschung nach 24 Monaten ohne Nutzung nach vorheriger Benachrichtigung</td>
            </tr>
            <tr>
              <td>Dokumente / Originaluploads</td>
              <td>bis zur Löschung durch den Nutzer oder Löschung des Accounts</td>
            </tr>
            <tr>
              <td>extrahierte Texte und Metadaten</td>
              <td>bis zur Löschung des jeweiligen Dokuments oder Accounts</td>
            </tr>
            <tr>
              <td>KI-Analysen / Zusammenfassungen / To-Dos</td>
              <td>bis zur Löschung des jeweiligen Dokuments oder Accounts</td>
            </tr>
            <tr>
              <td>Chatverläufe</td>
              <td>bis zur Löschung des jeweiligen Dokuments, Chats oder Accounts</td>
            </tr>
            <tr>
              <td>Antwortentwürfe</td>
              <td>bis zur Löschung durch den Nutzer oder Löschung des Accounts</td>
            </tr>
            <tr>
              <td>Business-Kontextdaten</td>
              <td>bis zur Löschung durch den Nutzer oder Löschung des Accounts</td>
            </tr>
            <tr>
              <td>Login-/Session-Daten</td>
              <td>Dauer der Session bzw. bis Ablauf der Sitzung</td>
            </tr>
            <tr>
              <td>Auth-Logs</td>
              <td>bis zu 90 Tage</td>
            </tr>
            <tr>
              <td>technische Logfiles</td>
              <td>7 bis 30 Tage</td>
            </tr>
            <tr>
              <td>sicherheitsrelevante Logs</td>
              <td>bis zu 90 Tage</td>
            </tr>
            <tr>
              <td>API-Usage / Rate-Limits</td>
              <td>30 bis 90 Tage</td>
            </tr>
            <tr>
              <td>lokale App-Daten</td>
              <td>bis Logout, App-Löschung oder Entfernung durch Betriebssystem/App</td>
            </tr>
            <tr>
              <td>Backups</td>
              <td>Überschreibung spätestens nach 90 Tagen</td>
            </tr>
            <tr>
              <td>E-Mail-Versandprotokolle</td>
              <td>30 Tage</td>
            </tr>
            <tr>
              <td>Nachweise für Einwilligungen</td>
              <td>bis zu 3 Jahre ab Widerruf oder letzter Nutzung</td>
            </tr>
          </tbody>
        </table>

        <h3>14.3 Löschung einzelner Dokumente</h3>
        <p>Löscht der Nutzer ein Dokument, werden auch die damit verbundenen extrahierten Texte, Analysen, To-Dos und dokumentbezogenen Chatverläufe gelöscht oder vom Dokumentbezug getrennt, soweit keine gesetzlichen Pflichten entgegenstehen.</p>

        <h3>14.4 Account-Löschung</h3>
        <p>Bei Löschung des Nutzerkontos werden die zugehörigen Dokumente, Analysen, Business-Kontextdaten und Chatverläufe innerhalb von 30 Tagen gelöscht, soweit keine gesetzlichen Aufbewahrungspflichten oder berechtigten Interessen entgegenstehen.</p>

        <h3>14.5 Backups</h3>
        <p>Backups werden nach den internen Löschzyklen überschrieben. Personenbezogene Daten in Backups werden spätestens nach 90 Tagen gelöscht bzw. überschrieben.</p>

        <h3>14.6 Widerruf der Art.-9-Einwilligung</h3>
        <p>Widerruft der Nutzer seine Einwilligung in die Verarbeitung besonderer Kategorien personenbezogener Daten, können Dokumente und Analysen, die solche Daten enthalten, nicht weiter verarbeitet werden und müssen ggf. gelöscht werden, soweit keine anderweitige Rechtsgrundlage besteht.</p>

        <h2>15. Datenübertragbarkeit und Export</h2>
        
        <h3>15.1 Beschreibung</h3>
        <p>Nutzer können Daten und Dokumente exportieren, insbesondere über:</p>
        <ul>
          <li>native iOS-Sharing-Funktion</li>
          <li>PDF-Export</li>
          <li>Text-Export</li>
          <li>Download oder Teilen einzelner Dokumente oder Analysen, soweit angeboten</li>
        </ul>

        <h3>15.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO und Art. 20 DSGVO</p>

        <h3>15.3 Verantwortlichkeit nach Export</h3>
        <p>Nach Export oder Teilen über externe Apps, Dienste oder Empfänger sind diese für die weitere Verarbeitung eigenverantwortlich.</p>

        <h2>16. Cookies und ähnliche Technologien / App-Speicher</h2>
        
        <h3>16.1 Technisch notwendige Technologien</h3>
        <p>Wir verwenden technisch notwendige Cookies, Tokens oder vergleichbare Speichertechnologien, um den Service bereitzustellen.</p>
        <p>Beispiele:</p>
        <ul>
          <li>Session-Tokens</li>
          <li>Login- und Authentifizierungsdaten</li>
          <li>Sicherheits- und Authentifizierungs-Cookies</li>
          <li>lokal gespeicherte App-Einstellungen</li>
          <li>Onboarding-Status</li>
        </ul>

        <h3>16.2 Rechtsgrundlage</h3>
        <p>Art. 6 Abs. 1 lit. b DSGVO und/oder Art. 6 Abs. 1 lit. f DSGVO</p>
        <p>§ 25 Abs. 2 Nr. 2 TDDDG</p>

        <h3>16.3 Analyse- und Tracking-Technologien</h3>
        <p>Soweit künftig Analyse- oder Tracking-Technologien eingesetzt werden, die nicht technisch erforderlich sind, erfolgt dies nur nach vorheriger Einwilligung.</p>
        <p>Rechtsgrundlage:</p>
        <ul>
          <li>Art. 6 Abs. 1 lit. a DSGVO</li>
          <li>§ 25 Abs. 1 TDDDG</li>
        </ul>

        <h3>16.4 Verwaltung der Einwilligung</h3>
        <p>Einwilligungen können jederzeit über die App-Einstellungen oder ein bereitgestelltes Consent-Tool widerrufen oder angepasst werden.</p>

        <h2>17. Einsatz von Auftragsverarbeitern und Dienstleistern</h2>
        <p>Wir setzen für den Betrieb unseres Services externe Dienstleister ein, die personenbezogene Daten in unserem Auftrag und nach unserer Weisung gemäß Art. 28 DSGVO verarbeiten. Mit Auftragsverarbeitern wurden entsprechende Verträge zur Auftragsverarbeitung geschlossen.</p>
        <p>Soweit Daten in Drittländer übertragen werden, erfolgt dies auf Grundlage geeigneter Garantien, insbesondere Standardvertragsklauseln oder des EU-US Data Privacy Framework, soweit anwendbar.</p>

        <h3>17.1 Kategorien eingesetzter Dienstleister</h3>
        <p>Je nach technischer Ausgestaltung können hierzu insbesondere gehören:</p>
        <ul>
          <li>Hosting- und Infrastruktur-Dienstleister</li>
          <li>E-Mail- und Kommunikationsdienstleister</li>
          <li>Datenbank-, Authentifizierungs- und Storage-Anbieter</li>
          <li>KI-API-Dienstleister</li>
          <li>Workflow- und Prozessautomatisierungsdienste</li>
        </ul>

        <h3>17.2 Konkrete eingesetzte Dienstleister</h3>
        <p>Wir setzen derzeit insbesondere folgende Dienstleister ein:</p>

        <h4>Datenbank, Authentifizierung und Storage</h4>
        <p><strong>Supabase</strong></p>
        <ul>
          <li>Zweck: Datenbank, Authentifizierung, Storage, Edge Functions</li>
          <li>Daten: Account-Daten, Dokumente, Analysen, Business-Kontextdaten, Nutzungsdaten</li>
          <li>Speicherort: EU-Region, insbesondere Frankfurt</li>
          <li>Drittlandzugriff: Support-Zugriff möglich, abgesichert über geeignete Garantien, insbesondere SCC</li>
        </ul>

        <h4>KI-Verarbeitung</h4>
        <p><strong>OpenAI</strong></p>
        <ul>
          <li>Zweck: KI-Analyse, Zusammenfassung, Metadatenextraktion, Chat, Antwortentwürfe</li>
          <li>Daten: Dokumentinhalte, extrahierte Texte, Metadaten, Nutzerfragen, Business-Kontextdaten</li>
          <li>Drittlandtransfer: USA, abgesichert über geeignete Garantien, insbesondere SCC und TIA</li>
          <li>Hinweis: API-Daten werden nicht zum Training verwendet, sofern keine Freigabe erfolgt.</li>
        </ul>

        <h4>Hosting & Infrastruktur</h4>
        <p><strong>Vercel Inc.</strong></p>
        <ul>
          <li>Zweck: Hosting, CDN, Auslieferung, Logging, Fehleranalyse</li>
          <li>Daten: IP-Adresse, technische Zugriffsdaten, Fehlermeldungen</li>
          <li>Drittlandtransfer: USA, abgesichert über DPF und/oder SCC</li>
        </ul>

        <h4>E-Mail-Kommunikation</h4>
        <p><strong>Brevo</strong></p>
        <ul>
          <li>Zweck: Versand von E-Mails, Verifikation, Systemmails, ggf. Produktkommunikation</li>
          <li>Daten: E-Mail-Adresse, Versandstatus, ggf. Name</li>
          <li>Speicherort: EU</li>
        </ul>

        <h2>18. Ihre Rechte als betroffene Person</h2>
        <p>Sie haben folgende Rechte:</p>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
          <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
          <li>Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO)</li>
        </ul>
        
        <p><strong>Zuständige Aufsichtsbehörde:</strong></p>
        <address>
          Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
          Alt-Moabit 59-61<br />
          10555 Berlin<br />
          <a href="https://www.datenschutz-berlin.de/">https://www.datenschutz-berlin.de/</a>
        </address>

        <h2>19. Datensicherheit</h2>
        <p>Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder den Zugriff unberechtigter Personen zu schützen.</p>
        <p>Unsere Maßnahmen umfassen insbesondere:</p>
        <ul>
          <li>SSL/TLS-Verschlüsselung</li>
          <li>Zugriffsbeschränkungen und Berechtigungskonzepte</li>
          <li>regelmäßige Sicherheitsupdates</li>
          <li>Backups</li>
          <li>Protokollierung sicherheitsrelevanter Vorgänge</li>
          <li>Schutzmechanismen gegen Missbrauch und Angriffe</li>
        </ul>
        <p>Backups werden nach den internen Löschzyklen überschrieben. Soweit personenbezogene Daten in Backups enthalten sind, werden diese spätestens im Rahmen der regulären Backup-Zyklen gelöscht.</p>

        <h2>20. Automatisierte Entscheidungsfindung und Profiling</h2>
        <p>Wir setzen keine automatisierte Entscheidungsfindung gemäß Art. 22 DSGVO ein, die für betroffene Personen rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt.</p>
        <p>Soweit automatisierte Analysen, Datenvorschläge, Klassifikationen oder KI-gestützte Prozesse eingesetzt werden, dienen diese lediglich unterstützenden oder informativen Zwecken.</p>

        <h2>21. Minderjährige</h2>
        <p>Unser Service richtet sich an Unternehmen und Geschäftskunden. Wir verarbeiten wissentlich keine Daten von Personen unter 16 Jahren. Sollten wir Kenntnis davon erlangen, dass wir Daten Minderjähriger ohne entsprechende Berechtigung verarbeiten, werden wir diese unverzüglich löschen.</p>

        <h2>22. Änderungen dieser Datenschutzerklärung</h2>
        <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte Rechtslagen, neue Funktionen oder Änderungen unseres Services anzupassen.</p>
        <p>Bei wesentlichen Änderungen werden wir Sie per E-Mail informieren, sofern wir über Ihre E-Mail-Adresse verfügen.</p>
        <p>Die jeweils aktuelle Version finden Sie stets auf dieser Seite.</p>
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
            <Link href="/impressum" className="hover:text-[#0F172A] transition-colors">
              Impressum
            </Link>
            <Link href="/anb" className="hover:text-[#0F172A] transition-colors">
              ANB
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
