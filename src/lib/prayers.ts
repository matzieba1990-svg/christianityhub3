export const PRAYERS = [
  {
    id: 'rozaniec',
    name: 'Różaniec Święty',
    category: 'rozaniec',
    emoji: '',
    description: 'Najpopularniejsza modlitwa kontemplacyjna chrześcijaństwa, polegająca na rozważaniu kluczowych wydarzeń z życia Jezusa i Maryi.',
    history: 'Tradycja przypisuje powstanie różańca św. Dominikowi w XIII wieku.',
    intentions: ['ogólne', 'pokój', 'rodzina', 'nawrócenie'],
    duration: '20-45 min',
    days: null,
    intro: 'Różaniec to modlitwa kontemplacyjna, podczas której rozważamy tajemnice z życia Jezusa i Maryi.',
    parts: [
      { title: 'Wierzę w Boga', text: 'Wierzę w Boga, Ojca wszechmogącego...' },
      { title: 'Ojcze Nasz', text: 'Ojcze nasz, któryś jest w niebie...' },
      { title: 'Zdrowaś Maryjo', text: 'Zdrowaś Maryjo, łaski pełna...' },
      { title: 'Chwała Ojcu', text: 'Chwała Ojcu i Synowi...' }
    ],
    mysteries: [
      { name: 'Tajemnice Radosne (pon./sob.)', items: ['Zwiastowanie','Nawiedzenie','Narodzenie','Ofiarowanie','Znalezienie'] },
      { name: 'Tajemnice Światła (czw.)', items: ['Chrzest w Jordanie','Wesele w Kanie','Głoszenie Królestwa','Przemienienie','Eucharystia'] },
      { name: 'Tajemnice Bolesne (wt./pt.)', items: ['Modlitwa w Ogrójcu','Biczowanie','Ukoronowanie cierniem','Droga Krzyżowa','Śmierć na Krzyżu'] },
      { name: 'Tajemnice Chwalebne (śr./nd.)', items: ['Zmartwychwstanie','Wniebowstąpienie','Zesłanie Ducha Świętego','Wniebowzięcie','Ukoronowanie Maryi'] },
    ]
  },
  {
    id: 'koronka',
    name: 'Koronka do Miłosierdzia Bożego',
    category: 'koronka',
    emoji: '',
    description: 'Modlitwa o Boże miłosierdzie dla nas i całego świata.',
    history: 'Podyktowana przez Jezusa św. Faustynie w 1935 roku.',
    intentions: ['miłosierdzie', 'grzesznicy', 'konający'],
    duration: '15-20 min',
    days: null,
    intro: 'Odmawiamy ją na zwykłym różańcu.',
    parts: [
      { title: 'Rozpoczęcie', text: 'Ojcze nasz... Zdrowaś Maryjo... Wierzę w Boga...' },
      { title: 'Na dużych paciorkach (5 razy)', text: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew...' },
      { title: 'Na małych paciorkach (10 razy)', text: 'Dla Jego bolesnej Męki miej miłosierdzie dla nas i całego świata.' },
      { title: 'Na zakończenie (3 razy)', text: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem.' }
    ],
    mysteries: []
  },
  {
    id: 'aniol-panski',
    name: 'Anioł Pański',
    category: 'maryjna',
    emoji: '',
    description: 'Tradycyjna modlitwa upamiętniająca Wcielenie Syna Bożego.',
    history: 'Początki sięgają XI wieku.',
    intentions: ['wiara', 'pokora'],
    duration: '3 min',
    days: null,
    intro: 'Anioł Pański zwiastował Pannie Maryi.',
    parts: [
      { title: 'Anioł Pański', text: 'Anioł Pański zwiastował Pannie Maryi. I poczęła z Ducha Świętego. Zdrowaś Maryjo... Oto ja służebnica Pańska. Niech mi się stanie według słowa Twego. Zdrowaś Maryjo... A Słowo stało się Ciałem. I zamieszkało między nami. Zdrowaś Maryjo... Módl się za nami, Święta Boża Rodzicielko. Abyśmy się stali godnymi obietnic Chrystusowych.' }
    ],
    mysteries: []
  },
  {
    id: 'litania-loretanska',
    name: 'Litania Loretańska',
    category: 'litania',
    emoji: '',
    description: 'Modlitwa błagalna do Najświętszej Maryi Panny.',
    history: 'Nazwa pochodzi od Loreto.',
    intentions: ['wstawiennictwo Maryi'],
    duration: '10 min',
    days: null,
    intro: 'Litania Loretańska to rytmiczne wezwanie do Maryi.',
    parts: [
      { title: 'Błagania', text: 'Kyrie elejson. Chryste elejson. Kyrie elejson. Chrystus usłysz nas. Chryste wysłuchaj nas.' },
      { title: 'Do Trójcy Świętej', text: 'Ojcze z nieba, Boże – zmiłuj się nad nami. Synu Odkupicielu świata, Boże – zmiłuj się nad nami. Duchu Święty, Boże – zmiłuj się nad nami. Święta Trójco, jedyny Boże – zmiłuj się nad nami.' },
      { title: 'Wezwania do Maryi', text: 'Święta Maryjo – módl się za nami. Święta Boża Rodzicielko. Święta Panno nad pannami. Matko Chrystusowa. Matko Kościoła.' }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-pompejanska',
    name: 'Nowenna Pompejańska',
    category: 'nowenna',
    emoji: '',
    description: '54-dniowe nabożeństwo różańcowe.',
    history: 'Rozpropagowana przez bł. Bartolo Longo.',
    intentions: ['sprawy beznadziejne'],
    duration: '3x Różaniec/dzień',
    days: 54,
    intro: 'Nowenna trwa 54 dni.',
    parts: [
      { title: 'Część błagalna (Dni 1-27)', text: 'Pomnij, o miłosierna Panno Różańcowa z Pompei...' },
      { title: 'Część dziękczynna (Dni 28-54)', text: 'Cóż Ci dać mogę, o Królowo pełna miłości?' }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-faustyno',
    name: 'Nowenna do Miłosierdzia Bożego',
    category: 'nowenna',
    emoji: '',
    description: 'Dziewięciodniowe przygotowanie do Święta Miłosierdzia.',
    history: 'Podyktowana przez Jezusa św. Faustynie.',
    intentions: ['miłosierdzie', 'grzesznicy'],
    duration: '10 min/dzień',
    days: 9,
    intro: 'Nowenna zaczyna się zazwyczaj w Wielki Piątek.',
    parts: [
      { day: 1, title: 'Dzień 1 - Cała ludzkość', text: 'Dziś sprowadź mi całą ludzkość, a szczególnie wszystkich grzeszników...' },
      { day: 2, title: 'Dzień 2 - Dusze kapłańskie', text: 'Dziś sprowadź mi dusze kapłańskie i dusze zakonne...' },
      { day: 3, title: 'Dzień 3 - Dusze pobożne', text: 'Dziś sprowadź mi wszystkie dusze pobożne i wierne...' },
      { day: 4, title: 'Dzień 4 - Poganie', text: 'Dziś sprowadź mi pogan i tych, którzy mnie jeszcze nie znają.' },
      { day: 5, title: 'Dzień 5 - Heretycy', text: 'Dziś sprowadź mi dusze heretyków i odszczepieńców.' },
      { day: 6, title: 'Dzień 6 - Dusze ciche', text: 'Dziś sprowadź mi dusze ciche i pokorne, i dusze małych dzieci.' },
      { day: 7, title: 'Dzień 7 - Czciciele Miłosierdzia', text: 'Dziś sprowadź mi dusze, które szczególnie czczą miłosierdzie moje.' },
      { day: 8, title: 'Dzień 8 - Dusze czyśćcowe', text: 'Dziś sprowadź mi dusze, które są w więzieniu czyśćcowym.' },
      { day: 9, title: 'Dzień 9 - Dusze oziębłe', text: 'Dziś sprowadź mi dusze oziębłe i zanurz je w przepaści miłosierdzia mojego.' },
      { title: 'Koronka', text: 'Na zakończenie każdego dnia odmów Koronkę do Miłosierdzia Bożego.' }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-rozwiazujaca-wezly',
    name: 'Nowenna do MB Rozwiązującej Węzły',
    category: 'nowenna',
    emoji: '',
    description: 'Modlitwa o pomoc w rozwikłaniu "węzłów" życia.',
    history: 'Inspiracją był obraz z XVIII wieku.',
    intentions: ['trudne sprawy'],
    duration: '20 min/dzień',
    days: 9,
    intro: 'Podczas nowenny prosimy Maryję o rozwiązanie węzłów.',
    parts: [
        { day: 1, title: 'Dzień 1', text: 'Matko Najświętsza, Matko pełna miłości, Tobie powierzam węzeł moich problemów.' },
        { day: 2, title: 'Dzień 2', text: 'Maryjo, Matko najukochańsza, pełna łaski, moje serce zwraca się do Ciebie.' },
        { day: 3, title: 'Dzień 3', text: 'Pani moja, Pośredniczko nasza, Królowo nieba, w Twoich rękach są wszystkie łaski Boże.' },
        { day: 4, title: 'Dzień 4', text: 'Święta Matko, Ty rozwiązujesz wszystkie węzły, które nas krępują.' },
        { day: 5, title: 'Dzień 5', text: 'Matko Miłosierdzia, Ty wiesz, jak bardzo cierpię z powodu tego węzła.' },
        { day: 6, title: 'Dzień 6', text: 'Królowo Pokoju, uproś nam u swojego Syna pokój serca.' },
        { day: 7, title: 'Dzień 7', text: 'Matko najczystsza, weź mnie pod swoją opiekę.' },
        { day: 8, title: 'Dzień 8', text: 'Dziewico pełna dobroci, dziękuję Ci za Twoją cierpliwość.' },
        { day: 9, title: 'Dzień 9', text: 'Matko Najświętsza, nasza Orędowniczko, dziękuję za wszystkie łaski.' }
    ],
    mysteries: []
  },
  {
    id: 'droga-krzyzowa',
    name: 'Droga Krzyżowa',
    category: 'pasja',
    emoji: '',
    description: 'Rozważanie męki Jezusa Chrystusa przez 14 stacji.',
    history: 'Tradycja wywodzi się z pielgrzymek do Jerozolimy.',
    intentions: ['pokuta', 'wdzięczność'],
    duration: '20-40 min',
    days: null,
    intro: 'Przejdźmy drogą miłości.',
    parts: [
      { title: 'Stacja I', text: 'Jezus na śmierć skazany. Kłaniamy Ci się Chryste...' },
      { title: 'Stacja II', text: 'Jezus bierze krzyż na swoje ramiona.' },
      { title: 'Stacja III', text: 'Pierwszy upadek pod krzyżem.' },
      { title: 'Stacja IV', text: 'Jezus spotyka swą Matkę.' },
      { title: 'Stacja V', text: 'Szymon z Cyreny pomaga nieść krzyż.' },
      { title: 'Stacja VI', text: 'Weronika ociera twarz Jezusowi.' },
      { title: 'Stacja VII', text: 'Drugi upadek pod krzyżem.' },
      { title: 'Stacja VIII', text: 'Jezus pociesza płaczące niewiasty.' },
      { title: 'Stacja IX', text: 'Trzeci upadek pod krzyżem.' },
      { title: 'Stacja X', text: 'Jezus z szat obnażony.' },
      { title: 'Stacja XI', text: 'Jezus do krzyża przybity.' },
      { title: 'Stacja XII', text: 'Jezus umiera na krzyżu.' },
      { title: 'Stacja XIII', text: 'Jezus z krzyża zdjęty.' },
      { title: 'Stacja XIV', text: 'Jezus do grobu złożony.' }
    ],
    mysteries: []
  },
  {
    id: 'koronka-duch-swiety',
    name: 'Koronka do Ducha Świętego',
    category: 'koronka',
    emoji: '',
    description: 'Modlitwa o siedem darów Ducha Świętego.',
    history: 'Zatwierdzona przez papieża Leona XIII.',
    intentions: ['dary Ducha', 'mądrość'],
    duration: '10 min',
    days: null,
    intro: 'Duchu Święty, natchnij nas.',
    parts: [
      { title: 'Dar Mądrości', text: 'Przyjdź Duchu Mądrości, odciągnij nas od rzeczy ziemskich...' },
      { title: 'Dar Rozumu', text: 'Przyjdź Duchu Rozumu, oświeć nasze umysły...' },
      { title: 'Dar Rady', text: 'Przyjdź Duchu Rady, uczyń nas uległymi Twoim natchnieniom.' },
      { title: 'Dar Męstwa', text: 'Przyjdź Duchu Męstwa, umocnij nas w przeciwnościach.' },
      { title: 'Dar Umiejętności', text: 'Przyjdź Duchu Umiejętności, pozwól nam poznać Boga.' },
      { title: 'Dar Pobożności', text: 'Przyjdź Duchu Pobożności, uczyń naszą modlitwę miłą Bogu.' },
      { title: 'Dar Bojaźni Bożej', text: 'Przyjdź Duchu Bojaźni Bożej, powstrzymaj nas od wszystkiego złego.' }
    ],
    mysteries: []
  },
  {
    id: 'modlitwy-poranne-pelne',
    name: 'Modlitwy poranne',
    category: 'inne',
    emoji: '',
    description: 'Zestaw modlitw na rozpoczęcie dnia.',
    history: 'Esencja polskiej pobożności.',
    intentions: ['uświęcenie dnia'],
    duration: '7 min',
    days: null,
    intro: 'Boże, dziękuję Ci za noc dzisiejszą.',
    parts: [
      { title: 'Akt ofiarowania', text: 'Boże mój, ofiaruję Ci dzisiaj wszystkie moje modlitwy.' },
      { title: 'Aniele Boży', text: 'Aniele Boży, stróżu mój...' }
    ],
    mysteries: []
  },
  {
    id: 'modlitwa-wieczorna',
    name: 'Modlitwy wieczorne',
    category: 'inne',
    emoji: '',
    description: 'Modlitwy na zakończenie dnia.',
    history: 'Zakorzenione w tradycji klasztornej.',
    intentions: ['wdzięczność'],
    duration: '5 min',
    days: null,
    intro: 'Spokojne zakończenie dnia.',
    parts: [
      { title: 'Dziękczynienie', text: 'Dziękuję Ci, Panie, za dobrodziejstwa dzisiejszego dnia.' },
      { title: 'Akt żalu', text: 'Ach, żałuję za me złości...' }
    ],
    mysteries: []
  }
]

export const CATEGORIES = [
  { id: 'all', label: 'Wszystkie', emoji: '' },
  { id: 'rozaniec', label: 'Różaniec', emoji: '' },
  { id: 'koronka', label: 'Koronka', emoji: '' },
  { id: 'maryjna', label: 'Maryjna', emoji: '' },
  { id: 'litania', label: 'Litania', emoji: '' },
  { id: 'nowenna', label: 'Nowenna', emoji: '' },
  { id: 'pasja', label: 'Pasja', emoji: '' },
  { id: 'liturgia-godzin', label: 'Liturgia Godzin', emoji: '' },
  { id: 'inne', label: 'Inne / Codzienne', emoji: '' },
]
