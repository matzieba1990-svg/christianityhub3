export interface LiturgyData {
  date: string;
  season: string;
  color: string;
  saint: string;
  gospel: {
    source: string;
    text: string;
  };
}

// Sample data for May 2026 (assuming Easter was early April)
// In a real app, this would be a full 365-day map or an API call.
export const LITURGY_CALENDAR: Record<string, LiturgyData> = {
  '2026-05-05': {
    date: '2026-05-05',
    season: 'Okres Wielkanocny',
    color: 'white',
    saint: 'Św. Stanisława, biskupa i męczennika',
    gospel: {
      source: 'J 14, 27-31a',
      text: 'Jezus powiedział do swoich uczniów: „Pokój zostawiam wam, pokój mój daję wam. Nie tak jak daje świat, Ja wam daję. Niech się nie trwoży serce wasze ani się nie lęka”.'
    }
  },
  '2026-05-06': {
    date: '2026-05-06',
    season: 'Okres Wielkanocny',
    color: 'white',
    saint: 'Św. Apostołów Filipa i Jakuba',
    gospel: {
      source: 'J 14, 6-14',
      text: 'Jezus powiedział do Tomasza: „Ja jestem drogą i prawdą, i życiem. Nikt nie przychodzi do Ojca inaczej jak tylko przeze Mnie”.'
    }
  }
};

export function getLiturgyForDate(dateStr: string): LiturgyData | null {
  return LITURGY_CALENDAR[dateStr] || null;
}
