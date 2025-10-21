'use client'

import Link from 'next/link'
import PurposeLogo from '@/components/icons/PurposeLogo'
import CTAButton from '@/components/ui/CTAButton'

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Non-sticky */}
      <div className="flex justify-center px-4 pt-4">
        <div className="relative w-full max-w-[1552px] h-24">
          {/* Logo */}
          <div className="absolute left-4 top-4 sm:left-8 sm:top-8 lg:left-[-80px] lg:top-[20px]">
            <Link href="/">
              <span className="sr-only">Purpose</span>
              <div className="scale-75 sm:scale-90 lg:scale-100 origin-left">
                <PurposeLogo />
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <a
            href="/#individuals"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '187px',
              top: '30px'
            }}
          >
            Individuals
          </a>
          <a
            href="/#companies"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '370.94px',
              top: '30px'
            }}
          >
            Companies
          </a>
          <a
            href="/#about"
            className="hidden lg:block absolute text-xl xl:text-2xl font-bold leading-6 text-[#120C2B] hover:text-[var(--primary-button)] transition-colors cursor-pointer"
            style={{
              left: '559.8px',
              top: '30px'
            }}
          >
            About us
          </a>

          {/* CTA Button */}
          <div
            className="hidden lg:block absolute"
            style={{
              top: '20px',
              right: '-80px'
            }}
          >
            <CTAButton href="/cta">Transform your hiring</CTAButton>
          </div>
        </div>
      </div>

      {/* Terms & Conditions Content Section */}
      <section className="relative w-full flex items-center justify-center px-4 sm:px-8 py-10 bg-white">
        <div className="relative w-full max-w-[1552px] flex justify-center">
          {/* Content Box */}
          <div
            className="flex-shrink-0 flex flex-col items-center px-12"
            style={{
              width: '1760px',
              borderRadius: '50px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, #EEE9FC 0%, #D3E3FF 50%, #DDFCF6 100%)',
              backdropFilter: 'blur(5px)',
              paddingTop: '86px',
              paddingBottom: '80px'
            }}
          >
            {/* Title */}
            <h1
              className="text-center font-bold"
              style={{
                width: '643px',
                height: '77px',
                flexShrink: 0,
                color: '#454545',
                fontFamily: 'Helvetica',
                fontSize: '64px',
                lineHeight: '120%'
              }}
            >
              Terms & Conditions
            </h1>

            {/* Content Box */}
            <div
              style={{
                width: '1520px',
                flexShrink: 0,
                marginTop: '198px',
                paddingLeft: '120px',
                paddingRight: '120px',
                color: '#454545',
                fontFamily: 'Helvetica',
                fontSize: '20px',
                lineHeight: 'normal'
              }}
            >
              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 1 Geltungsbereich</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Diese AGB gelten für die Website purpose.hr sowie alle über diese erbrachten Informations- und Buchungsleistungen (§ 305 BGB). <br />
                Für weitere Services gelten separate Bedingungen. Abweichende Nutzerbedingungen werden nicht anerkannt (§ 305b BGB).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 2 Anbieter</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Purpose UG (haftungsbeschränkt), Seidl-Kreuz-Weg 94, 85737 Ismaning<br />
                Vertreten durch: Lukas Faber<br />
                HRB München 292052, USt-IdNr: DE368116002
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 3 Vertragsschluss</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Die auf der Website dargestellten Inhalte stellen unverbindliche Angebote dar (§ 145 BGB). Demo-Termine sind ebenfalls unverbindlich.<br />
                Ein verbindlicher Vertragsschluss erfolgt erst durch separate Vereinbarung (§ 126 BGB).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 4 Beta-Programm</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Services, die sich in der Beta-Phase befinden, werden unentgeltlich zur Verfügung gestellt (§ 516 BGB).<br />
                Die Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt (§ 521 BGB). Das Beta-Programm kann jederzeit beendet werden (§ 627 BGB).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 5 Nutzung</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Erlaubt sind: Information, Kontaktaufnahme und Terminbuchung.<br />
                Verboten sind: Scraping, Überlastung der Server sowie jegliche Form von Rechtsverletzungen (§ 1004 BGB, § 303a StGB).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 6 Urheberrecht</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Alle auf der Website veröffentlichten Inhalte sind urheberrechtlich geschützt (§§ 2, 15, 31 UrhG).<br />
                Bei Verstößen gegen das Urheberrecht besteht Schadensersatzpflicht (§ 97 UrhG).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 7 Leistungsstörungen</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Für technische Störungen, die nicht zu vertreten sind, besteht keine Haftung (§ 276 BGB).<br />
                Bei unentgeltlichen Leistungen entfällt die Gewährleistung (§ 521 BGB).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 8 Haftung</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Unbeschränkte Haftung besteht bei Personenschäden sowie bei Vorsatz und grober Fahrlässigkeit (§ 276 BGB).<br />
                Bei leichter Fahrlässigkeit haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten) (§ 280 BGB).<br />
                Ausgeschlossen ist die Haftung für mittelbare und unvorhersehbare Schäden (§ 309 Nr. 7 BGB) sowie für externe Links (TMG § 7).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 9 Datenschutz</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Die Datenverarbeitung erfolgt nach den Vorgaben der DSGVO und des BDSG.<br />
                Detaillierte Informationen finden Sie in der separaten Datenschutzerklärung (Art. 13 DSGVO).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 10 Widerrufsrecht</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Nutzer haben ein 14-tägiges Widerrufsrecht ohne Angabe von Gründen (§ 355 BGB).<br />
                Bei unentgeltlichen Leistungen ist das Widerrufsrecht ausgeschlossen (§ 312g BGB) – dies gilt für das Beta-Programm.
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 11 AGB-Änderungen</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Änderungen dieser AGB werden in Textform mitgeteilt. Nutzer haben eine Widerspruchsfrist von 14 Tagen (§ 305 BGB).<br />
                Schweigen gilt als Zustimmung.
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 12 Streitbeilegung</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Eine Teilnahme an Verbraucherschlichtungsverfahren erfolgt nicht (§ 36 VSBG).<br />
                Vor Klageerhebung wird eine Mediation empfohlen (§ 15a EGZPO).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 13 Verjährung</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Die Verjährungsfrist beträgt drei Jahre (§ 195 BGB) und beginnt mit dem Ende des Jahres, in dem der Anspruch entstanden ist (§ 199 Abs. 1 BGB).
              </p>

              <p style={{ fontWeight: 700, marginBottom: '16px' }}>§ 14 Schlussbestimmungen</p>
              <p style={{ fontWeight: 400, marginBottom: '32px' }}>
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist München (§ 17, 38 ZPO), für Verbraucher gilt § 29c ZPO.<br />
                Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt (§ 306 BGB).<br />
                Vertragssprache ist Deutsch.
              </p>

              <p style={{ fontWeight: 400, marginTop: '48px'}}>
                Stand: 20.10.2025 | Version: 1.0
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imprint Section */}
      <section id="imprint" className="relative w-full flex items-center justify-center px-4 sm:px-8 bg-white" style={{ paddingTop: '15px', paddingBottom: '80px' }}>
        <div className="relative w-full max-w-[1552px] flex justify-center">
          {/* Imprint Box */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-12 py-8"
            style={{
              width: '1760px',
              height: '220px',
              borderRadius: '50px',
              border: '1px solid #FFF',
              background: 'linear-gradient(180deg, rgba(221, 252, 246, 0.80) 0%, rgba(153, 153, 153, 0.80) 100%)',
              backdropFilter: 'blur(5px)',
              color: '#454545'
            }}
          >
            {/* Left side - Company information */}
            <div className="flex-shrink-0 flex flex-col gap-4">
              {/* Purpose Logo */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="121.819"
                height="29.583"
                viewBox="0 0 120 30"
                fill="none"
                style={{
                  transform: 'rotate(0deg)',
                  flexShrink: 0
                }}
              >
                <path d="M18.9836 14.2483C17.9368 18.9753 13.8839 22.3219 9.21178 22.3219L9.04768 22.3219L10.3804 16.3099C10.6142 15.2546 9.84086 14.2483 8.79654 14.2483L1.79462 14.2483L2.14521 12.6718L2.23721 12.246L3.4158 6.94358C3.51277 6.4972 3.90066 6.17725 4.34574 6.17725L12.7923 6.17725C16.8776 6.17725 19.8987 10.1199 18.9836 14.2509" fill="#5323E5"/>
                <path d="M18.9836 14.2483C17.9368 18.9753 13.8839 22.3219 9.21178 22.3219L9.04768 22.3219L10.3804 16.3099C10.6142 15.2546 9.84086 14.2483 8.79654 14.2483L1.79462 14.2483L2.14521 12.6718L2.23721 12.246L3.4158 6.94358C3.51277 6.4972 3.90066 6.17725 4.34574 6.17725L12.7923 6.17725C16.8776 6.17725 19.8987 10.1199 18.9836 14.2509" fill="#5323E5"/>
                <path d="M0 22.3206L7.02928 27.9017C7.34257 28.1442 7.79511 27.9739 7.88214 27.5765L9.0483 22.3206L0 22.3206Z" fill="#76F4DC"/>
                <mask id="mask0_2683_296" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="1" y="10" width="14" height="14">
                  <path d="M3.80647 11.105C1.44929 12.2249 1.88442 14.8361 1.88442 17.3518C1.88442 21.0055 3.22961 23.5419 7.40192 23.5419C11.5742 23.5419 14.9583 20.5797 14.9583 16.9261C14.9583 13.2724 11.5742 10.3103 7.40192 10.3103C6.10149 10.3103 4.87566 10.5993 3.80647 11.105Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_2683_296)">
                  <path d="M1.44781 10.3103L1.44781 23.5419L2.96457 23.5419L2.96457 22.2853L9.6159 22.2853L9.6159 22.2285L9.86952 22.2285L9.86952 20.9874L14.9569 20.9874L14.9569 10.3103L1.44781 10.3103Z" fill="url(#paint0_radial_2683_296)"/>
                </g>
                <path d="M1.79524 14.2472L1.44713 15.8237L0.201405 21.4435L0.124324 21.7867L0 22.3182L9.0483 22.3182L10.3811 16.3088C10.6148 15.2535 9.84148 14.2472 8.79716 14.2472L3.35675 14.2472C2.55859 14.2472 1.96681 13.4783 2.14832 12.6707L1.79772 14.2472L1.79524 14.2472Z" fill="url(#paint1_linear_2683_296)"/>
                <path d="M31.738 8.07544C33.4959 8.07544 34.8983 8.57859 35.9401 9.59005C36.982 10.5989 37.5016 11.9768 37.5016 13.7236C37.5016 15.4705 36.977 16.8819 35.9277 17.9165C34.8784 18.9487 33.481 19.4673 31.738 19.4673L28.242 19.4673L28.242 24.8961L24.9325 24.8961L24.9325 8.07802L31.738 8.07802L31.738 8.07544ZM31.5987 16.1955C32.4317 16.1955 33.0658 15.9788 33.4959 15.5479C33.9286 15.1144 34.1449 14.5235 34.1449 13.7701C34.1449 13.0166 33.9286 12.4051 33.4959 11.9794C33.0633 11.5562 32.4317 11.342 31.5987 11.342L28.242 11.342L28.242 16.1955L31.5987 16.1955Z" fill="#120C2B"/>
                <path d="M47.2137 11.6799L50.5257 11.6799L50.5257 24.8934L47.2137 24.8934L47.2137 23.0692C46.2415 24.478 44.9287 25.1824 43.2776 25.1824C41.8728 25.1824 40.7663 24.7128 39.9557 23.7762C39.1451 22.8395 38.7398 21.5701 38.7398 19.9677L38.7398 11.6799L42.0518 11.6799L42.0518 19.2246C42.0518 20.1225 42.2333 20.796 42.5963 21.2424C42.9594 21.6913 43.5561 21.9158 44.3916 21.9158C45.3016 21.9158 46.0003 21.6346 46.4877 21.0747C46.9725 20.5147 47.2162 19.6968 47.2162 18.6234L47.2162 11.6799L47.2137 11.6799Z" fill="#120C2B"/>
                <path d="M59.5238 11.3921C59.7401 11.3921 59.9863 11.4076 60.2648 11.4411L60.2648 14.9735C59.9241 14.9425 59.6556 14.9245 59.4542 14.9245C58.2806 14.9245 57.3357 15.2393 56.6196 15.874C55.901 16.5062 55.5429 17.5512 55.5429 19.009L55.5429 24.8946L52.231 24.8946L52.231 11.6811L55.5429 11.6811L55.5429 13.9878C56.3312 12.2591 57.6565 11.3947 59.5263 11.3947" fill="#120C2B"/>
                <path d="M69.0764 11.3921C70.7274 11.3921 72.1099 12.0372 73.2214 13.3247C74.3328 14.6148 74.8873 16.2688 74.8873 18.2865C74.8873 20.3043 74.3353 21.9583 73.2313 23.2484C72.1273 24.5385 70.7424 25.1836 69.0764 25.1836C67.4105 25.1836 66.0504 24.4946 65.0483 23.1168L65.0483 28.7701L61.7363 30.0009L61.7363 11.6811L65.0483 11.6811L65.0483 13.5311C66.0354 12.1068 67.3782 11.3921 69.0764 11.3921ZM68.3131 21.9144C69.238 21.9144 70.0064 21.579 70.618 20.9055C71.2272 20.2321 71.5331 19.3599 71.5331 18.2865C71.5331 17.2132 71.2322 16.341 70.6305 15.6676C70.0287 14.9941 69.2554 14.6587 68.3156 14.6587C67.3757 14.6587 66.5949 14.9941 65.9783 15.6676C65.3616 16.341 65.0533 17.2132 65.0533 18.2865C65.0533 19.3599 65.3616 20.2321 65.9783 20.9055C66.5949 21.579 67.3757 21.9144 68.3156 21.9144" fill="#120C2B"/>
                <path d="M77.907 13.3632C79.1875 12.0498 80.754 11.3918 82.6064 11.3918C84.4589 11.3918 86.0303 12.0498 87.3183 13.3632C88.6063 14.6765 89.2528 16.3176 89.2528 18.2889C89.2528 20.2602 88.6163 21.9219 87.3432 23.2249C86.0701 24.5305 84.4912 25.1833 82.6089 25.1833C80.7267 25.1833 79.1701 24.5279 77.897 23.212C76.624 21.8987 75.9874 20.2576 75.9874 18.2863C75.9874 16.315 76.6265 14.6739 77.9095 13.3606M84.9586 15.6673C84.3345 14.9939 83.5488 14.6585 82.6089 14.6585C81.669 14.6585 80.8833 14.9939 80.2592 15.6673C79.6326 16.3408 79.3218 17.2129 79.3218 18.2863C79.3218 19.3597 79.6351 20.2318 80.2592 20.9053C80.8833 21.5787 81.6665 21.9141 82.6089 21.9141C83.5513 21.9141 84.3345 21.5787 84.9586 20.9053C85.5828 20.2318 85.896 19.3597 85.896 18.2863C85.896 17.2129 85.5828 16.3408 84.9586 15.6673Z" fill="#120C2B"/>
                <path d="M96.0712 25.1836C94.358 25.1836 92.9308 24.7707 91.7895 23.945C90.6482 23.1194 89.9619 21.9866 89.7282 20.5443L93.085 20.5443C93.3634 21.7286 94.3904 22.3221 96.1657 22.3221C97.6004 22.3221 98.319 21.9608 98.319 21.2409C98.319 21.1455 98.3066 21.0577 98.2842 20.9777C98.2618 20.8978 98.222 20.8255 98.1673 20.761C98.1126 20.6965 98.0554 20.6372 97.9933 20.5804C97.9311 20.5236 97.8416 20.472 97.7272 20.423C97.6104 20.374 97.5084 20.3353 97.4139 20.3043C97.3219 20.2733 97.1852 20.2321 97.0086 20.183C96.8321 20.134 96.6779 20.0953 96.5461 20.0643C96.4144 20.0334 96.2328 19.9921 96.0016 19.9456C95.7704 19.8992 95.569 19.8502 95.3999 19.8012C93.5002 19.3367 92.1774 18.8284 91.429 18.2762C90.6805 17.724 90.3051 16.8958 90.3051 15.7889C90.3051 14.411 90.8098 13.335 91.8218 12.5584C92.8338 11.7817 94.1865 11.3921 95.8847 11.3921C97.583 11.3921 98.9033 11.774 99.8432 12.5326C100.786 13.2937 101.372 14.3233 101.604 15.6211L98.2469 15.6211C97.9684 14.7232 97.1429 14.2742 95.7704 14.2742C94.3978 14.2742 93.6394 14.6432 93.6394 15.3786C93.6394 15.6676 93.7861 15.8766 94.0795 16.003C94.373 16.132 95.0368 16.3152 96.0712 16.5552C97.1056 16.7952 97.9236 17.0171 98.5254 17.2157C99.1271 17.417 99.699 17.675 100.239 17.995C100.778 18.3149 101.164 18.6994 101.397 19.1483C101.628 19.5973 101.745 20.1417 101.745 20.7817C101.745 22.206 101.213 23.2974 100.149 24.0483C99.0848 24.8017 97.7247 25.1784 96.0737 25.1784" fill="#120C2B"/>
                <path d="M109.325 11.3918C111.409 11.3918 113.057 12.1375 114.268 13.6263C115.479 15.1152 116.001 16.9652 115.832 19.1765L106.063 19.1765C106.17 20.2034 106.525 20.9878 107.127 21.5297C107.729 22.0741 108.477 22.3476 109.372 22.3476C110.021 22.3476 110.598 22.2006 111.108 21.9038C111.618 21.6071 111.981 21.2046 112.197 20.6911L115.623 20.6911C115.176 22.1799 114.388 23.3023 113.261 24.0558C112.135 24.8092 110.844 25.1859 109.395 25.1859C107.42 25.1859 105.807 24.5357 104.556 23.2404C103.305 21.9425 102.681 20.3015 102.681 18.3147C102.681 16.3279 103.305 14.6791 104.556 13.3657C105.807 12.0524 107.396 11.397 109.325 11.397M109.303 14.2327C108.517 14.2327 107.858 14.452 107.333 14.8933C106.809 15.3345 106.438 15.9228 106.222 16.6582L112.311 16.6582C112.125 15.9228 111.772 15.3345 111.247 14.8933C110.722 14.452 110.074 14.2327 109.303 14.2327Z" fill="#120C2B"/>
                <defs>
                  <radialGradient id="paint0_radial_2683_296" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.64059 16.9741) scale(7.0532 6.17642)">
                    <stop stopColor="#2806BA"/>
                    <stop offset="1" stopColor="#5323E5"/>
                  </radialGradient>
                  <linearGradient id="paint1_linear_2683_296" x1="1.60378" y1="20.6179" x2="8.89851" y2="15.3247" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#574AFF"/>
                    <stop offset="0.97" stopColor="#508FFF"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Company address text */}
              <div
                className="flex-shrink-0"
                style={{
                  width: '240px',
                  height: '96.975px',
                  color: '#454545',
                  fontFamily: 'Helvetica',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%'
                }}
              >
                Purpose UG (haftungsbeschränkt)<br />
                Seidl-Kreuz-Weg 94<br />
                85737 Ismaning<br />
                Germany
              </div>

              {/* Copyright text */}
              <div
                className="flex-shrink-0"
                style={{
                  width: '82.06px',
                  height: '7.458px',
                  color: '#454545',
                  fontFamily: 'Helvetica',
                  fontSize: '10px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '120%'
                }}
              >
                © Purpose, 2025
              </div>
            </div>

            {/* Middle - Registered Office */}
            <div
              className="flex-shrink-0"
              style={{
                width: '239.644px',
                height: '70.259px',
                color: '#454545',
                textAlign: 'center',
                fontFamily: 'Helvetica',
                fontSize: '16px',
                fontStyle: 'normal',
                lineHeight: '120%'
              }}
            >
              <div style={{ fontWeight: 700 }}>Registered Office</div>
              <div style={{ fontWeight: 400, marginTop: '8px' }}>
                Ismaning - HRB Munich 292052<br />
                Tax number: 143/173/60143<br />
                VAT ID No.: DE368116002
              </div>
            </div>

            {/* Right - Legal */}
            <div className="flex-shrink-0 flex flex-col" style={{ width: '240px' }}>
              <h2
                className="text-center font-bold mb-4"
                style={{
                  width: '89.191px',
                  height: '14.052px',
                  flexShrink: 0,
                  color: '#454545',
                  fontFamily: 'Helvetica',
                  fontSize: '16px',
                  lineHeight: '120%'
                }}
              >
                Legal
              </h2>
              <nav className="flex flex-col gap-2">
                <a
                  href="/terms-and-conditions"
                  className="text-[#454545] hover:text-[#000000] transition-colors"
                  style={{
                    fontFamily: 'Helvetica',
                    fontSize: '14px',
                    lineHeight: '120%'
                  }}
                >
                  Terms & Conditions
                </a>
                <a
                  href="/imprint"
                  className="text-[#454545] hover:text-[#000000] transition-colors"
                  style={{
                    fontFamily: 'Helvetica',
                    fontSize: '14px',
                    lineHeight: '120%'
                  }}
                >
                  Imprint
                </a>
                <a
                  href="/privacy-policy"
                  className="text-[#454545] hover:text-[#000000] transition-colors"
                  style={{
                    fontFamily: 'Helvetica',
                    fontSize: '14px',
                    lineHeight: '120%'
                  }}
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
