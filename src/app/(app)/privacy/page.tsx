'use client'
import PageHeader from '@/components/PageHeader'

export default function PrivacyPage() {
  return (
    <div className="pb-10 min-h-dvh">
      <PageHeader title="Polityka Prywatności i RODO" back />

      <div className="px-4 mt-4 space-y-6">
        <div className="card bg-white p-6 leading-relaxed">
          <h2 className="text-lg font-mystic font-bold text-gold-dark mb-4">1. Informacje ogólne</h2>
          <p className="text-sm text-text-main mb-4">
            Administratorem Twoich danych osobowych jest ChristianityHub (dalej: "Platforma"). 
            Dbamy o Twoją prywatność i bezpieczeństwo danych zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO).
          </p>

          <h2 className="text-lg font-mystic font-bold text-gold-dark mb-4">2. Jakie dane zbieramy?</h2>
          <ul className="text-sm text-text-main list-disc pl-5 space-y-2 mb-4">
            <li><strong>Dane konta:</strong> Adres e-mail, nazwa użytkownika, hasło (zaszyfrowane).</li>
            <li><strong>Dane profilowe:</strong> Zdjęcie profilowe (opcjonalnie).</li>
            <li><strong>Dane aktywności:</strong> Historia modlitw, postępy w nowennach, przynależność do wspólnot.</li>
            <li><strong>Dane techniczne:</strong> Adres IP, rodzaj urządzenia, ciasteczka (cookies).</li>
          </ul>

          <h2 className="text-lg font-mystic font-bold text-gold-dark mb-4">3. Cel przetwarzania danych</h2>
          <p className="text-sm text-text-main mb-4">
            Twoje dane są przetwarzane wyłącznie w celu świadczenia usług przez Platformę, takich jak:
          </p>
          <ul className="text-sm text-text-main list-disc pl-5 space-y-2 mb-4">
            <li>Umożliwienie logowania i personalizacji konta.</li>
            <li>Zapewnienie interaktywnych funkcji modlitewnych (statystyki, przypomnienia).</li>
            <li>Umożliwienie interakcji w ramach wspólnot modlitewnych.</li>
            <li>Obsługa dobrowolnych darowizn za pośrednictwem serwisu Stripe.</li>
          </ul>

          <h2 className="text-lg font-mystic font-bold text-gold-dark mb-4">4. Bezpieczeństwo i Stripe</h2>
          <p className="text-sm text-text-main mb-4">
            Płatności (darowizny) obsługiwane są przez zewnętrzny system <strong>Stripe</strong>. 
            ChristianityHub nie przechowuje danych Twoich kart płatniczych ani szczegółowych danych bankowych. 
            Stripe przetwarza dane zgodnie z własną polityką prywatności i najwyższymi standardami bezpieczeństwa PCI-DSS.
          </p>

          <h2 className="text-lg font-mystic font-bold text-gold-dark mb-4">5. Twoje prawa</h2>
          <p className="text-sm text-text-main mb-4">
            Zgodnie z RODO przysługuje Ci prawo do:
          </p>
          <ul className="text-sm text-text-main list-disc pl-5 space-y-2 mb-4">
            <li>Dostępu do swoich danych i otrzymania ich kopii.</li>
            <li>Sprostowania (poprawiania) swoich danych.</li>
            <li>Usunięcia danych ("prawo do bycia zapomnianym").</li>
            <li>Ograniczenia przetwarzania danych.</li>
            <li>Przenoszenia danych.</li>
          </ul>
          <p className="text-sm text-text-main italic mt-4">
            W celu realizacji swoich praw lub w razie pytań, prosimy o kontakt poprzez ustawienia profilu lub formularz kontaktowy.
          </p>
        </div>

        <div className="card bg-gold/5 p-4 border-dashed border-gold/30 text-center">
            <p className="text-[10px] text-text-muted">
                Ostatnia aktualizacja: 5 maja 2026 r.
            </p>
        </div>
      </div>
    </div>
  )
}
