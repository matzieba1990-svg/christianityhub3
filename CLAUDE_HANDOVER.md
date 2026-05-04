# CHRISTIANITYHUB - INSTRUKCJA KONTYNUACJI DLA CLAUDE

## 1. STATUS PROJEKTU (Stan na 4 maja 2026)
Projekt to nowoczesna platforma modlitewna **ChristianityHub**, zbudowana w estetyce "Premium Mystic".
- **Główny cel sesji**: Wdrożenie trackerów modlitwy, synchronizacja kalendarza 2026 i uporządkowanie UI.
- **Vercel Project**: https://vercel.com/matzieba1990-1596s-projects/christianity-hub-p815
- **Repozytorium GitHub**: https://github.com/matzieba1990-svg/christianityhub3.git (Ważne: To jest jedyne aktualne repozytorium).

## 2. DANE TECHNICZNE (Kluczowe dla bazy i logiki)
- **Baza danych (Neon PostgreSQL)**:
  `DATABASE_URL="postgresql://neondb_owner:npg_sA8HK7VuOieS@ep-round-tooth-apqvkntc.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require"`
- **Model Postępu**: `PrayerProgress` w `prisma/schema.prisma` przechowuje odznaczone dni modlitw (`userId`, `prayerId`, `dayNumber`).
- **Autoryzacja**: NextAuth (Auth.js v5) - logowanie e-mailem i hasłem (bez weryfikacji mailowej - wyłączona na prośbę użytkownika).

## 3. DESIGN SYSTEM (Zasady wizualne)
- **Paleta kolorów**:
  - Tło: `--bg-primary` (#FAF6F0 - beż)
  - Akcenty: `--gold` (#c9a227)
  - Tekst: `--text-main` (#1a1a1a)
- **Stylystyka**: Minimalizm, brak emoji (używamy ikon Lucide), czcionka "Mystic/Serif" dla nagłówków.
- **Scrollbar**: Zwiększony rozmiar (8px), złoty kolor, wysoki kontrast.

## 4. KLUCZOWE KOMPONENTY I LOGIKA
- **Kalendarz (`src/app/(app)/calendar/page.tsx`)**:
  - Wylicza przyszłe dni modlitw na podstawie ostatniego wpisu w `PrayerProgress`.
  - Wyświetla święta ruchome na 2026 rok (Wielkanoc 5 kwietnia itp.).
  - Zawiera bezpośrednie linki do tekstów modlitw.
- **Profil (`src/app/(app)/profile/page.tsx`)**:
  - Sekcja "Moja droga modlitwy" jest rozwijanym menu (dropdown).
  - Wyświetla aktywne modlitwy z systemem złotych kropek postępu.
  - Dane pobierane są przez API `/api/user/stats` oraz `/api/user/active-prayers`.
- **Modlitwy (`src/lib/prayers.ts`)**:
  - Biblioteka wszystkich tekstów. Jeśli dodajesz modlitwę wielodniową, upewnij się, że ma pole `days: number`.

## 5. WYTYCZNE DO DALSZEGO PROGRAMOWANIA
1. **Unikaj regresji**: Nie przywracaj emoji ani starych kolorów (niebieski/fioletowy).
2. **Budowanie (Build)**: Vercel czasami zacina się na Turbopacku. W razie problemów sprawdź importy Reactowe (np. `useMemo`, `useEffect`) – zdarzały się ich braki.
3. **Nawigacja**: Zawsze używaj `Link` z `PageHeader` zamiast `router.back()`, aby uniknąć problemów z historią przeglądarki.
4. **Zapis danych**: Każdy odznaczony dzień modlitwy MUSI trafiać do tabeli `PrayerProgress` przez POST `/api/prayers/progress`.

---
*Instrukcja wygenerowana przez Antigravity AI dla USERA matzieba1990.*
