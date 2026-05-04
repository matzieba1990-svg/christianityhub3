import PageHeader from '@/components/PageHeader'

export default function RodoPage() {
  return (
    <div className="pb-10 bg-bg-primary min-h-dvh">
      <PageHeader title="Polityka Prywatności i RODO" />
      
      <div className="px-4 py-6 max-w-3xl mx-auto space-y-6">
        <div className="card p-6 bg-white space-y-4">
          <h1 className="text-2xl font-mystic font-bold text-gold-dark mb-4">Polityka Prywatności i RODO</h1>
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-main">1. Administrator Danych</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Administratorem Twoich danych osobowych jest ChristianityHub. Zbieramy Twoje dane w celu świadczenia usług w ramach naszej społeczności katolickiej.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-main">2. Jakie dane zbieramy?</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Przetwarzamy następujące dane: imię i nazwisko (lub pseudonim), adres e-mail, zaszyfrowane hasło, informacje o postępach w modlitwach (w tym kalendarz odznaczeń), oraz zamieszczane przez Ciebie prośby o modlitwę.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-main">3. Cel przetwarzania</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Twoje dane są przetwarzane wyłącznie w celu:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Umożliwienia Ci korzystania z platformy (logowanie, śledzenie modlitw).</li>
                <li>Publikowania Twoich próśb o modlitwę dla innych członków społeczności (jeśli wyrazisz na to zgodę).</li>
                <li>Analitycznym, aby poprawiać jakość naszej aplikacji (poprzez ciasteczka).</li>
              </ul>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-main">4. Prawa Użytkownika (RODO)</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Zgodnie z ogólnym rozporządzeniem o ochronie danych (RODO), przysługuje Ci prawo do:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Dostępu do swoich danych oraz otrzymania ich kopii.</li>
                <li>Sprostowania (poprawiania) swoich danych.</li>
                <li>Usunięcia danych ("prawo do bycia zapomnianym").</li>
                <li>Ograniczenia przetwarzania danych.</li>
                <li>Przenoszenia danych.</li>
                <li>Wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).</li>
              </ul>
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-main">5. Pliki Cookies</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              Wykorzystujemy pliki cookies w celu zapewnienia poprawnego działania mechanizmu logowania (NextAuth.js) oraz do celów analitycznych (zapamiętywanie Twoich zgód i ustawień interfejsu). Nie przekazujemy Twoich danych do zewnętrznych systemów reklamowych.
            </p>
          </section>
          
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-text-main">6. Kontakt</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              W sprawach związanych z ochroną danych osobowych prosimy o kontakt pod adresem e-mail przypisanym do administracji platformy ChristianityHub.
            </p>
          </section>

          <div className="pt-6 border-t border-border">
            <p className="text-xs text-text-muted italic text-center">
              Ostatnia aktualizacja: Maj 2026 r.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
