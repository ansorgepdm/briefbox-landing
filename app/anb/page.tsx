import type { Metadata } from "next";
import Link from "next/link";
import { LogoText } from "@/components/Logo";

export const metadata: Metadata = {
  title: "ANB – BriefBox",
  description: "Allgemeine Nutzungsbedingungen des Services BriefBox.ai",
};

export default function ANB() {
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
        .anb-content {
          color: #475569;
        }
        .anb-content h1 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          letter-spacing: -0.03em;
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .anb-content h2 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .anb-content h3 {
          color: #0F172A;
          font-family: var(--font-urbanist);
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .anb-content p {
          margin-top: 1rem;
          margin-bottom: 1rem;
          line-height: 1.75;
        }
        .anb-content ul {
          margin-top: 1rem;
          margin-bottom: 1rem;
          list-style-type: disc;
          padding-left: 1.5rem;
        }
        .anb-content li {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .anb-content a {
          color: #2563EB;
          text-decoration: none;
        }
        .anb-content a:hover {
          text-decoration: underline;
        }
        .anb-content strong {
          color: #0F172A;
          font-weight: 600;
        }
        .anb-content address {
          background-color: #F1F5F9;
          padding: 1.25rem;
          border-radius: 1rem;
          font-style: normal;
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}} />
      <main className="anb-content max-w-4xl mx-auto px-6 py-16">
        <h1>Allgemeine Nutzungsbedingungen des Services BriefBox.ai</h1>
        <p style={{ color: "#94A3B8", marginBottom: "3rem" }}>
          Stand: 04.05.2026
        </p>

        <h2>§ 1 Geltungsbereich und Vertragsgegenstand</h2>
        
        <h3>1.1 Anbieter</h3>
        <p>Diese Allgemeinen Nutzungsbedingungen („AGB") regeln die Nutzung des Services BriefBox.ai („Service"), betrieben von:</p>
        <address>
          <strong>pdm solutions GmbH</strong><br />
          Boxhagener Straße 78<br />
          10245 Berlin<br />
          Deutschland<br />
          E-Mail: <a href="mailto:info@briefbox.ai">info@briefbox.ai</a><br />
          Website: <a href="https://pdm-solutions.com">https://pdm-solutions.com</a>
        </address>

        <h3>1.2 Geltungsbereich</h3>
        <p>Der Service und diese AGB richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB, d. h. natürliche oder juristische Personen oder rechtsfähige Personengesellschaften, die bei Abschluss des Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbstständigen beruflichen Tätigkeit handeln.</p>
        <p>Mit der Registrierung bestätigt der Nutzer, den Service ausschließlich für gewerbliche oder berufliche Zwecke zu nutzen. Eine Nutzung durch Verbraucher ist nicht vorgesehen.</p>

        <h3>1.3 Vertragsgegenstand</h3>
        <p>BriefBox.ai ist eine Softwarelösung zur Digitalisierung, Analyse, Strukturierung und Verwaltung geschäftlicher Post und Dokumente.</p>
        <p>Der Service ermöglicht es Nutzern insbesondere,</p>
        <ul>
          <li>physische Briefe per Smartphone-Kamera zu scannen,</li>
          <li>Dokumente, PDFs oder E-Mails hochzuladen,</li>
          <li>Dokumentinhalte KI-gestützt analysieren zu lassen,</li>
          <li>Zusammenfassungen in einfacher Sprache zu erhalten,</li>
          <li>To-Dos und Handlungshinweise zu generieren,</li>
          <li>dokumentbezogene Rückfragen über eine Chat-Funktion zu stellen,</li>
          <li>Antwortentwürfe erstellen zu lassen,</li>
          <li>Dokumente dauerhaft zu archivieren und zu organisieren,</li>
          <li>Dokumente und Ergebnisse über die native iOS-Sharing-Funktion zu exportieren.</li>
        </ul>
        <p>Der Service stellt kein revisionssicheres Archiv im Sinne der GoBD (Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff) dar. Der Nutzer ist verpflichtet, die Originalbelege gemäß den gesetzlichen Aufbewahrungsfristen physisch oder in einem zertifizierten Drittsystem vorzuhalten.</p>

        <h3>1.4 Kostenloser Service</h3>
        <p>Der Service wird derzeit unentgeltlich bereitgestellt. Es entstehen dem Nutzer insoweit keine Kosten.</p>
        <p>Der Anbieter behält sich vor, künftig kostenpflichtige Funktionen, Abonnements, Volumenpakete, Credits oder sonstige entgeltliche Nutzungsmöglichkeiten einzuführen. Hierüber werden Nutzer rechtzeitig informiert.</p>

        <h3>1.5 Vertragsschluss</h3>
        <p>Der Vertrag kommt zustande durch:</p>
        <ul>
          <li>Registrierung über E-Mail/Passwort oder Single-Sign-On,</li>
          <li>Akzeptanz dieser AGB,</li>
          <li>Kenntnisnahme der Datenschutzerklärung,</li>
          <li>soweit erforderlich: ausdrückliche Einwilligung in die Verarbeitung besonderer Kategorien personenbezogener Daten.</li>
        </ul>
        <p>Mit Abschluss der Registrierung wird der Vertrag wirksam.</p>

        <h2>§ 2 Leistungsbeschreibung</h2>
        
        <h3>2.1 Leistungsumfang</h3>
        <p>Der Anbieter stellt insbesondere folgende Funktionen bereit:</p>
        <ul>
          <li>Nutzerkonto mit Login-Bereich,</li>
          <li>Scan- und Upload-Funktion für Dokumente,</li>
          <li>Speicherung und Organisation von Dokumenten,</li>
          <li>KI-gestützte Dokumentanalyse,</li>
          <li>Extraktion von Metadaten, Fristen, Aktenzeichen und relevanten Informationen,</li>
          <li>Zusammenfassungen in einfacher Sprache,</li>
          <li>Generierung von To-Dos und Handlungshinweisen,</li>
          <li>dokumentbezogene Chat-Funktion,</li>
          <li>Erstellung von Antwortentwürfen,</li>
          <li>Export- und Teilen-Funktionen über iOS,</li>
          <li>Nutzungs- und Rate-Limit-Verwaltung.</li>
        </ul>

        <h3>2.2 Dokumentenverarbeitung</h3>
        <p>Der Nutzer kann Dokumente, insbesondere Behördenpost, Steuerunterlagen, Berufsgenossenschaftsschreiben, Versicherungs- oder Geschäftskorrespondenz, hochladen oder scannen.</p>
        <p>Diese Dokumente können gespeichert, analysiert, strukturiert, extrahiert und archiviert werden.</p>

        <h3>2.3 KI-basierte Analyse</h3>
        <p>Der Service nutzt KI-Technologien, insbesondere API-Dienste von OpenAI, um Dokumente zu analysieren und Ergebnisse bereitzustellen.</p>
        <p>Die Analyse kann insbesondere umfassen:</p>
        <ul>
          <li>Texterkennung,</li>
          <li>Metadaten-Extraktion,</li>
          <li>Zusammenfassung,</li>
          <li>Einordnung des Inhalts,</li>
          <li>To-Do-Generierung,</li>
          <li>Fristenhinweise,</li>
          <li>Chat-Antworten,</li>
          <li>Antwortentwürfe.</li>
        </ul>

        <h3>2.4 Unternehmenskontext</h3>
        <p>Der Nutzer kann Unternehmens- und Profildaten hinterlegen, um Analysen und Antwortentwürfe zu verbessern.</p>
        <p>Hierzu können insbesondere Angaben zum Unternehmen, zur Rolle des Nutzers, zur Adresse, zu steuerlichen Informationen, zur Bankverbindung und zur bevorzugten Kommunikation gehören.</p>
        <p>Der Nutzer ist dafür verantwortlich, dass diese Angaben richtig, aktuell und zur Verarbeitung berechtigt sind.</p>

        <h3>2.5 Archivfunktion</h3>
        <p>BriefBox.ai ermöglicht eine dauerhafte Speicherung der vom Nutzer hochgeladenen Dokumente und der zugehörigen Analysen.</p>
        <p>Die Speicherung erfolgt grundsätzlich bis zur Löschung durch den Nutzer oder bis zur Löschung des Nutzerkontos.</p>

        <h3>2.6 Export und Teilen</h3>
        <p>Der Nutzer kann Dokumente, Analysen oder Ergebnisse über die native iOS-Sharing-Funktion exportieren oder an Dritte weitergeben.</p>
        <p>Für die weitere Verarbeitung durch vom Nutzer ausgewählte Empfänger, Apps oder Dienste ist der Anbieter nicht verantwortlich.</p>

        <h3>2.7 Verfügbarkeit</h3>
        <p>Der Anbieter bemüht sich um eine hohe Verfügbarkeit des Services, garantiert jedoch keine ununterbrochene Nutzung.</p>
        <p>Unterbrechungen können insbesondere auftreten durch:</p>
        <ul>
          <li>Wartungs- und Pflegearbeiten,</li>
          <li>technische Störungen,</li>
          <li>Sicherheitsupdates,</li>
          <li>Kapazitätsengpässe,</li>
          <li>Ausfälle von Drittanbietern oder Infrastrukturdiensten,</li>
          <li>Störungen von KI-API-Diensten,</li>
          <li>App-Store-, Betriebssystem- oder Geräteabhängigkeiten.</li>
        </ul>
        <p>Ein Anspruch auf jederzeitige Verfügbarkeit besteht nicht.</p>

        <h2>§ 3 Keine Rechtsberatung, Steuerberatung oder Fristenüberwachung</h2>
        
        <h3>3.1 Kein Beratungsdienst</h3>
        <p>BriefBox.ai stellt keine Rechtsberatung, Steuerberatung, Finanzberatung oder sonstige professionelle Beratung dar.</p>
        <p>Der Service ersetzt keine Prüfung durch Rechtsanwälte, Steuerberater, Wirtschaftsprüfer, Behörden, Versicherungen oder sonstige Fachleute.</p>

        <h3>3.2 Informationscharakter</h3>
        <p>Alle vom Service bereitgestellten Inhalte, Zusammenfassungen, To-Dos, Fristenhinweise, Antwortentwürfe und Chat-Antworten dienen ausschließlich der Information und Unterstützung.</p>
        <p>Sie sind nicht als verbindliche Handlungsempfehlung oder rechtliche Bewertung zu verstehen.</p>

        <h3>3.3 Eigenverantwortung des Nutzers</h3>
        <p>Der Nutzer bleibt allein verantwortlich für:</p>
        <ul>
          <li>die Prüfung hochgeladener Dokumente,</li>
          <li>die Bewertung rechtlicher oder steuerlicher Pflichten,</li>
          <li>die Einhaltung von Fristen,</li>
          <li>Zahlungen,</li>
          <li>Antworten an Behörden oder Dritte,</li>
          <li>die Vollständigkeit und Richtigkeit seiner Angaben,</li>
          <li>geschäftliche Entscheidungen.</li>
        </ul>

        <h3>3.4 Keine Fristenkontrolle</h3>
        <p>BriefBox.ai kann Hinweise auf mögliche Fristen oder Termine geben. Der Anbieter übernimmt jedoch keine Garantie dafür, dass alle Fristen erkannt, richtig berechnet oder vollständig angezeigt werden.</p>
        <p>Der Nutzer ist verpflichtet, sämtliche Fristen eigenständig zu prüfen und zu überwachen.</p>

        <h2>§ 4 KI-Risiken und Einschränkungen</h2>
        
        <h3>4.1 Fehleranfälligkeit von KI-Systemen</h3>
        <p>Der Nutzer erkennt an, dass KI-Systeme fehleranfällig sind und Ergebnisse erzeugen können, die:</p>
        <ul>
          <li>falsch,</li>
          <li>unvollständig,</li>
          <li>missverständlich,</li>
          <li>veraltet,</li>
          <li>rechtlich oder steuerlich unzutreffend,</li>
          <li>oder für den konkreten Fall ungeeignet sind.</li>
        </ul>

        <h3>4.2 Halluzinationen</h3>
        <p>KI-Systeme können Inhalte erzeugen, die tatsächlich nicht existieren oder nicht aus dem Dokument hervorgehen („Halluzinationen").</p>
        <p>Dies kann insbesondere betreffen:</p>
        <ul>
          <li>Fristen,</li>
          <li>Beträge,</li>
          <li>Behördenanforderungen,</li>
          <li>Aktenzeichen,</li>
          <li>rechtliche Einordnungen,</li>
          <li>Handlungsempfehlungen,</li>
          <li>Antwortentwürfe.</li>
        </ul>

        <h3>4.3 Pflicht zur Prüfung</h3>
        <p>Der Nutzer ist verpflichtet, alle vom Service erzeugten Ergebnisse eigenständig zu prüfen, insbesondere:</p>
        <ul>
          <li>Zusammenfassungen,</li>
          <li>extrahierte Daten,</li>
          <li>Fristen,</li>
          <li>Zahlungshinweise,</li>
          <li>To-Dos,</li>
          <li>Antwortentwürfe,</li>
          <li>Chat-Antworten,</li>
          <li>exportierte Inhalte.</li>
        </ul>
        <p>Der Nutzer darf sich nicht ungeprüft auf KI-generierte Ergebnisse verlassen.</p>

        <h3>4.4 Keine Erfolgsgarantie</h3>
        <p>Der Anbieter schuldet die Bereitstellung des Services, nicht jedoch einen bestimmten rechtlichen, steuerlichen, wirtschaftlichen oder behördlichen Erfolg.</p>
        <p>Insbesondere besteht keine Garantie dafür, dass:</p>
        <ul>
          <li>ein Dokument vollständig richtig verstanden wird,</li>
          <li>eine Antwort rechtlich oder steuerlich richtig ist,</li>
          <li>eine Behörde eine vorgeschlagene Antwort akzeptiert,</li>
          <li>Fristen vollständig erkannt werden,</li>
          <li>Zahlungen richtig berechnet werden,</li>
          <li>Nachteile für den Nutzer verhindert werden.</li>
        </ul>

        <h2>§ 5 Nutzerkonto, Login und Zugang</h2>
        
        <h3>5.1 Registrierung und Nutzerkonto</h3>
        <p>Für die Nutzung des Services ist ein Nutzerkonto erforderlich.</p>
        <p>Der Nutzer ist verpflichtet, bei Registrierung und Nutzung vollständige und wahrheitsgemäße Angaben zu machen.</p>

        <h3>5.2 Zugangsdaten</h3>
        <p>Der Nutzer ist verpflichtet, seine Zugangsdaten geheim zu halten und vor dem Zugriff unbefugter Dritter zu schützen.</p>
        <p>Bei Verdacht auf Missbrauch hat der Nutzer den Anbieter unverzüglich zu informieren.</p>

        <h3>5.3 Single-Sign-On</h3>
        <p>Der Login kann über Drittanbieter wie Apple oder Google erfolgen, soweit diese Funktion angeboten wird.</p>
        <p>Für die Nutzung der jeweiligen Drittanbieter-Dienste gelten zusätzlich deren Bedingungen und Datenschutzhinweise.</p>

        <h3>5.4 Zugriff durch Dritte im Unternehmen</h3>
        <p>Soweit mehrere Personen innerhalb eines Unternehmens Zugang zum Nutzerkonto oder zu Dokumenten erhalten, ist der Nutzer dafür verantwortlich, dass diese Personen zur Nutzung berechtigt sind und diese AGB einhalten.</p>

        <h2>§ 6 Nutzungsbeschränkungen und Pflichten des Nutzers</h2>
        
        <h3>6.1 Zulässige Nutzung</h3>
        <p>Der Nutzer darf den Service ausschließlich für eigene geschäftliche Zwecke oder für ein Unternehmen nutzen, für das er zur Verarbeitung der jeweiligen Dokumente und Daten berechtigt ist.</p>
        <p>Eine Nutzung für unberechtigte Dritte ist unzulässig.</p>

        <h3>6.2 Berechtigung zur Dokumentenverarbeitung</h3>
        <p>Der Nutzer sichert zu, dass er berechtigt ist, die hochgeladenen Dokumente und darin enthaltenen Informationen zu verarbeiten und durch den Service analysieren zu lassen.</p>
        <p>Dies gilt insbesondere für Dokumente, die Daten enthalten von:</p>
        <ul>
          <li>Mitarbeitern,</li>
          <li>Kunden,</li>
          <li>Geschäftspartnern,</li>
          <li>Behörden,</li>
          <li>Versicherungen,</li>
          <li>Steuerberatern,</li>
          <li>sonstigen Dritten.</li>
        </ul>

        <h3>6.3 Besondere Kategorien personenbezogener Daten</h3>
        <p>Der Nutzer nimmt zur Kenntnis, dass Dokumente besondere Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO enthalten können.</p>
        <p>Die Nutzung der Kernfunktionen setzt voraus, dass der Nutzer in die Verarbeitung solcher Daten ausdrücklich einwilligt.</p>
        <p>Der Nutzer ist dafür verantwortlich, dass er im Verhältnis zu betroffenen Dritten über eine ausreichende Rechtsgrundlage für die Verarbeitung verfügt.</p>

        <h3>6.4 Verantwortung für Inhalte</h3>
        <p>Der Nutzer ist allein verantwortlich für sämtliche Inhalte und Daten, die er hochlädt, scannt, eingibt, speichert, exportiert oder weitergibt.</p>
        <p>Dies gilt insbesondere für:</p>
        <ul>
          <li>Dokumente,</li>
          <li>Bilder,</li>
          <li>PDFs,</li>
          <li>E-Mails,</li>
          <li>Unternehmensdaten,</li>
          <li>steuerliche Angaben,</li>
          <li>Bankdaten,</li>
          <li>Chat-Eingaben,</li>
          <li>Antwortentwürfe,</li>
          <li>exportierte Inhalte.</li>
        </ul>

        <h3>6.5 Wahrheitsgemäße Angaben</h3>
        <p>Der Nutzer verpflichtet sich, nur richtige, vollständige und aktuelle Angaben zu machen und seine Daten bei Änderungen unverzüglich zu aktualisieren.</p>

        <h3>6.6 Verbotene Handlungen</h3>
        <p>Untersagt sind insbesondere:</p>
        <ul>
          <li>rechtswidrige Nutzung des Services,</li>
          <li>Upload von Dokumenten, zu deren Verarbeitung der Nutzer nicht berechtigt ist,</li>
          <li>Verarbeitung fremder vertraulicher Daten ohne Berechtigung,</li>
          <li>Umgehung technischer Schutzmaßnahmen,</li>
          <li>Reverse Engineering, Dekompilierung oder Manipulation des Services,</li>
          <li>Einschleusung von Schadsoftware,</li>
          <li>exzessive oder systemüberlastende Nutzung,</li>
          <li>Umgehung von Rate-Limits oder Nutzungslimits,</li>
          <li>Nutzung zur Erstellung konkurrierender Angebote unter missbräuchlicher Ausnutzung des Services,</li>
          <li>automatisierte Zugriffe ohne Zustimmung des Anbieters,</li>
          <li>sonstige missbräuchliche Nutzung.</li>
        </ul>

        <h3>6.7 Nutzungslimits</h3>
        <p>Der Anbieter ist berechtigt, Nutzungslimits vorzusehen, insbesondere für:</p>
        <ul>
          <li>Uploads,</li>
          <li>Dokumentanalysen,</li>
          <li>KI-Anfragen,</li>
          <li>Chat-Nachrichten,</li>
          <li>Antwortentwürfe,</li>
          <li>Exporte,</li>
          <li>Speicherplatz.</li>
        </ul>
        <p>Eine Umgehung technischer oder organisatorischer Beschränkungen ist unzulässig.</p>

        <h2>§ 7 Speicherung, Archivierung und Datenverfügbarkeit</h2>
        
        <h3>7.1 Dauerhafte Speicherung</h3>
        <p>Dokumente, Analysen, Chatverläufe und Antwortentwürfe werden grundsätzlich dauerhaft gespeichert, bis sie vom Nutzer gelöscht werden oder das Nutzerkonto gelöscht wird.</p>

        <h3>7.2 Löschung durch den Nutzer</h3>
        <p>Der Nutzer kann einzelne Dokumente oder sein Nutzerkonto löschen, soweit entsprechende Funktionen bereitgestellt werden.</p>
        <p>Die Löschung erfolgt nach Maßgabe der Datenschutzerklärung und technischer Löschzyklen.</p>

        <h3>7.3 Kein Backup- oder Archivierungsersatz</h3>
        <p>Der Service dient der Organisation und Unterstützung, ersetzt jedoch kein eigenes revisionssicheres Archiv im Sinne der GoBD (Grundsätze zur ordnungsmäßigen Führung und Aufbewahrung von Büchern, Aufzeichnungen und Unterlagen in elektronischer Form sowie zum Datenzugriff), keine gesetzliche Aufbewahrungspflicht und keine professionelle Dokumentenverwaltung.</p>
        <p>Der Nutzer ist verpflichtet, die Originalbelege gemäß den gesetzlichen Aufbewahrungsfristen physisch oder in einem zertifizierten Drittsystem vorzuhalten.</p>
        <p>Der Nutzer ist selbst dafür verantwortlich, gesetzlich oder geschäftlich erforderliche Originale, Kopien und Nachweise ordnungsgemäß aufzubewahren.</p>

        <h3>7.4 Datenverlust</h3>
        <p>Ein Datenverlust kann trotz angemessener technischer und organisatorischer Maßnahmen nicht vollständig ausgeschlossen werden.</p>
        <p>Der Nutzer ist verpflichtet, eigene Sicherungskopien wichtiger Dokumente und Ergebnisse vorzuhalten.</p>

        <h3>7.5 Export</h3>
        <p>Der Anbieter kann Exportfunktionen bereitstellen. Ein Anspruch auf ein bestimmtes Exportformat oder eine jederzeitige Exportverfügbarkeit besteht nicht, soweit gesetzlich nichts anderes vorgeschrieben ist.</p>

        <h2>§ 8 Rechte am Service, an Dokumenten und KI-generierten Inhalten</h2>
        
        <h3>8.1 Rechte am Service</h3>
        <p>Sämtliche Rechte am Service, insbesondere an Software, Algorithmen, Datenbankstrukturen, Benutzeroberflächen, Designs, Marken, Logos und Dokumentationsinhalten verbleiben beim Anbieter oder den jeweiligen Rechteinhabern.</p>
        <p>Eine Vervielfältigung, Dekompilierung, Bearbeitung oder sonstige Nutzung außerhalb des bestimmungsgemäßen Gebrauchs ist untersagt, sofern sie nicht gesetzlich zwingend erlaubt ist.</p>

        <h3>8.2 Rechte des Nutzers an eigenen Dokumenten</h3>
        <p>Der Nutzer behält alle Rechte an den von ihm hochgeladenen Dokumenten und eingegebenen Inhalten.</p>
        <p>Der Nutzer räumt dem Anbieter jedoch ein einfaches, räumlich und zeitlich auf die Vertragsdauer beschränktes Nutzungsrecht ein, soweit dies zur Erbringung des Services erforderlich ist.</p>
        <p>Dies umfasst insbesondere:</p>
        <ul>
          <li>Speicherung,</li>
          <li>technische Verarbeitung,</li>
          <li>Textextraktion,</li>
          <li>KI-Analyse,</li>
          <li>Anzeige im Nutzerkonto,</li>
          <li>Erstellung von Zusammenfassungen,</li>
          <li>Erstellung von Antwortentwürfen,</li>
          <li>Export- und Teilen-Funktionen,</li>
          <li>Sicherungskopien im Rahmen technischer Backups.</li>
        </ul>

        <h3>8.3 Rechte an KI-generierten Inhalten</h3>
        <p>Soweit der Service KI-generierte Inhalte bereitstellt, etwa Zusammenfassungen, To-Dos, Chat-Antworten oder Antwortentwürfe, räumt der Anbieter dem Nutzer ein einfaches, zeitlich und räumlich unbeschränktes Recht ein, diese Inhalte für eigene geschäftliche Zwecke zu verwenden, zu bearbeiten und zu exportieren.</p>
        <p>Ein Anspruch auf Exklusivität besteht nicht. Der Nutzer erkennt an, dass ähnliche oder identische KI-generierte Inhalte auch für andere Nutzer entstehen können.</p>

        <h3>8.4 Prüfpflicht</h3>
        <p>Der Nutzer ist verpflichtet, KI-generierte Inhalte vor Verwendung, Versand, Zahlung, Einreichung oder Weitergabe eigenständig zu prüfen.</p>
        <p>Dies gilt insbesondere für Antwortschreiben an Behörden, Versicherungen, Steuerberater, Geschäftspartner oder sonstige Dritte.</p>

        <h3>8.5 Nutzung anonymisierter Daten</h3>
        <p>Der Anbieter ist berechtigt, anonymisierte und aggregierte Nutzungsdaten, technische Metriken und Qualitätsinformationen zur Verbesserung des Services zu verwenden.</p>
        <p>Personenbezogene Daten und Dokumentinhalte werden hierfür nicht verwendet, sofern keine gesetzliche Grundlage oder Einwilligung besteht.</p>

        <h2>§ 9 Datenschutz</h2>
        
        <h3>9.1 Datenverarbeitung</h3>
        <p>Die Verarbeitung personenbezogener Daten erfolgt gemäß der DSGVO und der Datenschutzerklärung.</p>
        <p>Die Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten im Zusammenhang mit dem Service.</p>
        <p>Sie ist jederzeit unter folgendem Link abrufbar:</p>
        <p><a href="https://www.briefbox.ai/datenschutz">https://www.briefbox.ai/datenschutz</a></p>

        <h3>9.2 Auftragsverarbeitung</h3>
        <p>Sofern der Nutzer personenbezogene Daten Dritter (z. B. Daten seiner Kunden oder Mitarbeiter) im Service verarbeitet, ist der Abschluss eines Auftragsverarbeitungsvertrages (AVV) gemäß Art. 28 DSGVO erforderlich. Die rechtmäßige Nutzung des Services für Drittdaten liegt in der alleinigen Verantwortung des Nutzers.</p>

        <h3>9.3 Besondere Datenkategorien</h3>
        <p>Der Nutzer nimmt zur Kenntnis, dass hochgeladene Dokumente besondere Kategorien personenbezogener Daten im Sinne von Art. 9 DSGVO enthalten können.</p>
        <p>Die Nutzung der Kernfunktionen setzt eine ausdrückliche Einwilligung in die Verarbeitung solcher Daten voraus.</p>

        <h3>9.4 Drittanbieter und KI-Verarbeitung</h3>
        <p>Der Nutzer nimmt zur Kenntnis, dass zur Erbringung des Services Drittanbieter eingesetzt werden können, insbesondere für Authentifizierung, Hosting, Speicherung, E-Mail-Kommunikation und KI-Verarbeitung.</p>
        <p>Einzelheiten ergeben sich aus der Datenschutzerklärung.</p>

        <h2>§ 10 Kommunikation</h2>
        
        <h3>10.1 Servicebezogene Kommunikation</h3>
        <p>Der Anbieter ist berechtigt, dem Nutzer servicebezogene Mitteilungen zuzusenden, soweit diese für Nutzung, Sicherheit, Verifikation, Konto, Dokumentverarbeitung, Fristenhinweise, technische Änderungen, Sperrungen oder den Betrieb des Services erforderlich sind.</p>

        <h3>10.2 Produktkommunikation</h3>
        <p>Produktinformationen, Newsletter oder Marketingkommunikation erfolgen nur, soweit hierfür eine gesetzliche Grundlage besteht oder der Nutzer gesondert eingewilligt hat.</p>

        <h2>§ 11 Haftung und Haftungsbeschränkung</h2>
        
        <h3>11.1 Haftung des Anbieters</h3>
        <p>Der Anbieter haftet:</p>
        <ul>
          <li>für Vorsatz und grobe Fahrlässigkeit,</li>
          <li>für Schäden aus Verletzung von Leben, Körper oder Gesundheit,</li>
          <li>für Verletzungen wesentlicher Vertragspflichten (Kardinalpflichten), in diesem Fall jedoch begrenzt auf den vertragstypischen, vorhersehbaren Schaden.</li>
        </ul>

        <h3>11.2 Spezifischer Ausschluss für KI-Ergebnisse</h3>
        <p>Der Anbieter haftet – soweit gesetzlich zulässig – nicht für:</p>
        <ul>
          <li>falsche Analysen,</li>
          <li>fehlerhafte Zusammenfassungen,</li>
          <li>unrichtige To-Dos,</li>
          <li>falsch erkannte Fristen,</li>
          <li>unvollständige Dokumentauswertungen,</li>
          <li>fehlerhafte Chat-Antworten,</li>
          <li>unzutreffende Antwortentwürfe,</li>
          <li>Halluzinationen der KI,</li>
          <li>fehlerhafte Extraktion von Aktenzeichen, Beträgen, Terminen oder Ansprechpartnern.</li>
        </ul>

        <h3>11.3 Keine Haftung für Rechts-, Steuer- oder Behördenfolgen</h3>
        <p>Der Anbieter haftet – soweit gesetzlich zulässig – nicht für Folgen, die daraus entstehen, dass der Nutzer Ergebnisse des Services ungeprüft verwendet.</p>
        <p>Dies umfasst insbesondere:</p>
        <ul>
          <li>versäumte Fristen,</li>
          <li>unterlassene oder verspätete Antworten,</li>
          <li>falsche Angaben gegenüber Behörden,</li>
          <li>falsche oder verspätete Zahlungen,</li>
          <li>Säumniszuschläge,</li>
          <li>Bußgelder,</li>
          <li>Zinsen,</li>
          <li>steuerliche Nachteile,</li>
          <li>sozialversicherungsrechtliche Nachteile,</li>
          <li>sonstige behördliche oder wirtschaftliche Nachteile.</li>
        </ul>

        <h3>11.4 Keine Haftung für professionelle Beratung</h3>
        <p>Der Anbieter haftet nicht dafür, dass der Nutzer keine anwaltliche, steuerliche, buchhalterische oder sonstige fachkundige Beratung einholt.</p>
        <p>Der Nutzer ist verpflichtet, bei Zweifeln fachkundigen Rat einzuholen.</p>

        <h3>11.5 Haftung für Drittanbieter und KI-Dienste</h3>
        <p>Der Anbieter nutzt Drittanbieter und KI-Dienste zur Erbringung des Services. Für deren Leistungen haftet der Anbieter nur im Rahmen der gesetzlichen Vorschriften und seiner Auswahl- und Überwachungspflichten.</p>
        <p>Der Anbieter haftet nicht für Änderungen, Ausfälle, Modelländerungen, Verfügbarkeitsprobleme oder Ausgabequalität externer KI-Dienste, soweit dies nicht vom Anbieter zu vertreten ist.</p>

        <h3>11.6 Haftung bei kostenlosen Diensten</h3>
        <p>Da der Service unentgeltlich bereitgestellt wird, finden die gesetzlichen Regelungen über die Schenkung (§§ 521 ff. BGB) Anwendung. Die Haftung des Anbieters ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Die Gewährleistung für Sach- und Rechtsmängel ist auf das arglistige Verschweigen von Mängeln beschränkt.</p>

        <h3>11.7 Haftungsausschluss im Übrigen</h3>
        <p>Im Übrigen ist die Haftung des Anbieters – soweit gesetzlich zulässig – ausgeschlossen.</p>
        <p>Dies umfasst insbesondere:</p>
        <ul>
          <li>technische Störungen oder Ausfälle, die nicht vom Anbieter zu vertreten sind,</li>
          <li>Datenverluste, sofern der Anbieter angemessene technische Maßnahmen getroffen hat,</li>
          <li>wirtschaftliche Entscheidungen des Nutzers auf Basis der bereitgestellten Informationen,</li>
          <li>Folgeschäden,</li>
          <li>indirekte Schäden,</li>
          <li>entgangenen Gewinn,</li>
          <li>Schäden durch unberechtigten Zugriff Dritter, sofern der Anbieter angemessene Sicherheitsmaßnahmen getroffen hat.</li>
        </ul>

        <h3>11.8 Eigenverantwortung des Nutzers</h3>
        <p>Der Service stellt lediglich ein unterstützendes Informationstool dar.</p>
        <p>Der Nutzer ist im B2B-Verkehr verpflichtet, alle vom Service generierten Inhalte vor Verwendung auf Plausibilität, Vollständigkeit, fachliche Richtigkeit und Rechtskonformität zu prüfen.</p>

        <h3>11.9 Freistellung</h3>
        <p>Der Nutzer stellt den Anbieter von sämtlichen Ansprüchen Dritter frei, die auf einer rechtswidrigen, vertragswidrigen oder unberechtigten Nutzung des Services durch den Nutzer beruhen.</p>
        <p>Dies umfasst insbesondere Ansprüche wegen:</p>
        <ul>
          <li>unberechtigter Verarbeitung personenbezogener Daten Dritter,</li>
          <li>Upload vertraulicher Dokumente ohne Berechtigung,</li>
          <li>Rechtsverletzungen durch vom Nutzer weiterverwendete Inhalte,</li>
          <li>unzulässiger Weitergabe von Dokumenten oder Ergebnissen,</li>
          <li>sonstiger Verstöße gegen diese AGB.</li>
        </ul>
        <p>Die Freistellung umfasst auch angemessene Kosten der Rechtsverteidigung.</p>

        <h2>§ 12 Sperrung, Einschränkung und Kündigung</h2>
        
        <h3>12.1 Sperrung durch den Anbieter</h3>
        <p>Der Anbieter darf den Zugang sperren oder einzelne Funktionen einschränken, wenn der Nutzer:</p>
        <ul>
          <li>gegen diese AGB verstößt,</li>
          <li>falsche Angaben macht,</li>
          <li>den Service missbräuchlich oder rechtswidrig nutzt,</li>
          <li>Rechte Dritter verletzt,</li>
          <li>unberechtigt Dokumente oder Daten Dritter verarbeitet,</li>
          <li>Nutzungslimits umgeht,</li>
          <li>Sicherheits- oder Missbrauchsrisiken verursacht,</li>
          <li>erforderliche Einwilligungen widerruft, ohne dass eine weitere Nutzung rechtlich möglich ist.</li>
        </ul>

        <h3>12.2 Löschung oder Einschränkung einzelner Inhalte</h3>
        <p>Der Anbieter ist berechtigt, einzelne Inhalte, Dokumente oder Funktionen zu sperren oder zu entfernen, wenn hierfür ein sachlicher Grund besteht, insbesondere bei Rechtsverstößen, Missbrauch, Sicherheitsrisiken oder Gefahr im Verzug.</p>

        <h3>12.3 Kündigung durch den Nutzer</h3>
        <p>Der Nutzer kann die Nutzung jederzeit beenden und sein Nutzerkonto löschen oder löschen lassen.</p>

        <h3>12.4 Kündigung durch den Anbieter</h3>
        <p>Der Anbieter ist berechtigt, das Vertragsverhältnis jederzeit mit angemessener Frist ordentlich zu kündigen.</p>
        <p>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</p>

        <h3>12.5 Folgen der Beendigung</h3>
        <p>Nach Beendigung:</p>
        <ul>
          <li>erlischt der Zugang zum Nutzerkonto,</li>
          <li>können Dokumente, Analysen, Chatverläufe und sonstige Inhalte gelöscht werden,</li>
          <li>erfolgt die Löschung personenbezogener Daten gemäß Datenschutzerklärung und gesetzlichen Vorgaben,</li>
          <li>bleibt der Nutzer für zuvor exportierte oder weitergegebene Inhalte selbst verantwortlich.</li>
        </ul>

        <h2>§ 13 Änderungen der AGB</h2>
        
        <h3>13.1 Änderungsrecht</h3>
        <p>Der Anbieter behält sich vor, diese AGB zu ändern, soweit hierfür ein sachlicher Grund besteht, insbesondere bei:</p>
        <ul>
          <li>Änderungen der Rechtslage,</li>
          <li>Weiterentwicklung des Services,</li>
          <li>neuen Funktionen oder Features,</li>
          <li>Einführung entgeltlicher Funktionen,</li>
          <li>Sicherheitsanforderungen,</li>
          <li>Änderungen technischer oder organisatorischer Rahmenbedingungen,</li>
          <li>Änderungen eingesetzter Drittanbieter oder KI-Dienste.</li>
        </ul>
        <p>Änderungen dürfen den Nutzer nicht unangemessen benachteiligen.</p>

        <h3>13.2 Benachrichtigung und Zustimmung</h3>
        <p>Wesentliche Änderungen werden dem Nutzer mindestens 4 Wochen vor Inkrafttreten per E-Mail oder innerhalb der App mitgeteilt, sofern der Anbieter über entsprechende Kontaktmöglichkeiten verfügt.</p>
        <p>Die Änderungen gelten als genehmigt, wenn der Nutzer nicht innerhalb von 4 Wochen nach Zugang der Änderungsmitteilung widerspricht.</p>
        <p>Der Anbieter wird den Nutzer in der Änderungsmitteilung ausdrücklich hinweisen auf:</p>
        <ul>
          <li>die Widerspruchsmöglichkeit,</li>
          <li>die Widerspruchsfrist,</li>
          <li>die Folgen des Schweigens.</li>
        </ul>

        <h3>13.3 Widerspruchsrecht und Folgen</h3>
        <p>Widerspricht der Nutzer den Änderungen fristgerecht, gilt der Vertrag zu den bisherigen Bedingungen fort.</p>
        <p>Der Anbieter ist in diesem Fall berechtigt, das Vertragsverhältnis mit einer Frist von 4 Wochen zu beenden.</p>

        <h2>§ 14 Schlussbestimmungen</h2>
        
        <h3>14.1 Anwendbares Recht</h3>
        <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>

        <h3>14.2 Gerichtsstand</h3>
        <p>Sofern der Nutzer Kaufmann im Sinne des Handelsgesetzbuchs, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertragsverhältnis Berlin.</p>

        <h3>14.3 Salvatorische Klausel</h3>
        <p>Sollten einzelne Bestimmungen dieses Vertrags ganz oder teilweise unwirksam oder undurchführbar sein oder werden, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</p>
        <p>Anstelle der unwirksamen oder undurchführbaren Bestimmung gilt die gesetzliche Regelung (§ 306 BGB).</p>
        <p>Soweit eine solche gesetzliche Regelung im Einzelfall nicht vorhanden ist, verpflichten sich die Parteien, eine wirksame Regelung zu vereinbaren, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.</p>

        <h2>§ 15 Kontakt</h2>
        <address>
          <strong>pdm solutions GmbH</strong><br />
          Boxhagener Straße 78<br />
          10245 Berlin<br />
          E-Mail: <a href="mailto:info@briefbox.ai">info@briefbox.ai</a><br />
          Website: <a href="https://pdm-solutions.com">https://pdm-solutions.com</a><br />
          Datenschutzkontakt: <a href="mailto:info@briefbox.ai">info@briefbox.ai</a>
        </address>
        <p style={{ marginTop: "2rem", fontStyle: "italic" }}>Stand dieser Nutzungsbedingungen: 04.05.2026</p>
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
