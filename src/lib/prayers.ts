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
      { title: 'Znak Krzyża', text: 'W imię Ojca i Syna, i Ducha Świętego. Amen.' },
      { title: 'Modlitwy wstępne', text: 'Ojcze nasz... Zdrowaś Maryjo... Wierzę w Boga...' },
      { title: 'Na dużych paciorkach', text: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.' },
      { title: 'Na małych paciorkach (10 razy)', text: 'Dla Jego bolesnej Męki, miej miłosierdzie dla nas i całego świata.' },
      { title: 'Doksologia', text: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem. (3 razy)' },
      { title: 'Aklamacja', text: 'O Krwi i Wodo, któraś wypłynęła z Najświętszego Serca Jezusowego jako zdrój Miłosierdzia dla nas – ufam Tobie! (3 razy)' },
      { title: 'Zakończenie', text: 'Jezu, ufam Tobie! (3 razy)' }
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
      { title: 'Kyrie elejson', text: 'Kyrie, elejson. Chryste, elejson. Kyrie, elejson. Chryste, usłysz nas. Chryste, wysłuchaj nas.' },
      { title: 'Inwokacje Trynitarne', text: 'Ojcze z nieba, Boże, zmiłuj się nad nami. Synu, Odkupicielu świata, Boże, zmiłuj się nad nami. Duchu Święty, Boże, zmiłuj się nad nami. Święta Trójco, jedyny Boże, zmiłuj się nad nami.' },
      { title: 'Wezwania Maryjne', text: 'Święta Maryjo, módl się za nami. Święta Boża Rodzicielko. Święta Panno nad pannami. Matko Chrystusowa. Matko Kościoła. Matko łaski Bożej. Matko miłosierdzia. Matko nadziei. Matko nieskalana. Matko najczystsza. Matko dziewicza. Matko nienaruszona. Matko najmilsza. Matko przedziwna. Matko dobrej rady. Matko Stworzyciela. Matko Zbawiciela. Panno roztropna. Panno czcigodna. Panno sławna. Panno można. Panno łaskawa. Panno wierna. Zwierciadło sprawiedliwości. Stolico mądrości. Przyczyno naszej radości. Przybytku Duchowy. Przybytku chwalebny. Przybytku sławny pobożności. Różo duchowna. Wieżo Dawidowa. Wieżo z kości słoniowej. Domie złoty. Arko przymierza. Bramo niebieska. Gwiazdo zaranna. Uzdrowienie chorych. Ucieczko grzesznych. Pocieszycielko migrantów. Pocieszycielko strapionych. Wspomożenie wiernych. Królowo Aniołów. Królowo Patriarchów. Królowo Proroków. Królowo Apostołów. Królowo Męczenników. Królowo Wyznawców. Królowo Dziewic. Królowo wszystkich Świętych. Królowo bez zmazy pierworodnej poczęta. Królowo wniebowzięta. Królowo Różańca świętego. Królowo rodzin. Królowo pokoju. Królowo Polski.' },
      { title: 'Baranku Boży', text: 'Baranku Boży, który gładzisz grzechy świata, przepuść nam, Panie. Baranku Boży, który gładzisz grzechy świata, wysłuchaj nas, Panie. Baranku Boży, który gładzisz grzechy świata, zmiłuj się nad nami.' },
      { title: 'Modlitwa końcowa', text: 'Módl się za nami, święta Boża Rodzicielko. Abyśmy się stali godnymi obietnic Chrystusowych. Módlmy się: Panie, nasz Boże, daj nam, sługom swoim, cieszyć się trwałym zdrowiem duszy i ciała, i za wstawiennictwem Najświętszej Maryi, zawsze Dziewicy, uwolnij nas od doczesnych utrapień i obdarz wieczną radością. Przez Chrystusa, Pana naszego. Amen.' }
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
    intro: 'Nowenna Pompejańska to 54-dniowy modlitewny maraton różańcowy. Przez pierwsze 27 dni prosimy Maryję w części błagalnej, a przez kolejne 27 dni dziękujemy za otrzymane łaski.',
    parts: [
      { title: 'Część błagalna (Dni 1-27)', text: 'Pomnij, o miłosierna Panno Różańcowa z Pompei, jako nigdy jeszcze nie słyszano, by ktokolwiek z Twoich czcicieli z Twoim Różańcem, wzywający Twej pomocy, został opuszczony. Ślubuję Ci i przyrzekam, że nie przestanę Cię czcić i Twoją chwałę głosić.' },
      { title: 'Część dziękczynna (Dni 28-54)', text: 'Cóż Ci dać mogę, o Królowo pełna miłości? Całe moje życie poświęcam Tobie. Ile mi sił starczy, będę szerzyć cześć Twoją, o Dziewico Różańca Świętego z Pompei, bo gdy Twojej pomocy wezwałem, nawiedziła mnie łaska Boża.' }
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
      { day: 1, title: 'Dzień 1 - Cała ludzkość', text: 'Dziś sprowadź Mi całą ludzkość, a szczególnie wszystkich grzeszników, i zanurz ich w przepaści miłosierdzia Mojego. Tym samym pocieszysz Mnie w gorzkim smutku, jaki Mi sprawia utrata dusz. Jezu Najmiłosierniejszy, którego właściwością jest nilitować się nad nami i przebaczać nam, nie patrz na grzechy nasze, ale na ufność, jaką mamy w nieskończoną dobroć Twoją.' },
      { day: 2, title: 'Dzień 2 - Dusze kapłańskie', text: 'Dziś sprowadź Mi dusze kapłańskie i dusze zakonne, i zanurz je w niezgłębionym miłosierdziu Moim. One dały Mi moc przetrwania gorzkiej męki, przez nie, jak przez kanały, płynie na ludzkość miłosierdzie Moje. Jezu Najmiłosierniejszy, od którego wszystko, co dobre, pochodzi, pomnóż w nas łaskę, abyśmy godne uczynki miłosierdzia spełniali.' },
      { day: 3, title: 'Dzień 3 - Dusze pobożne', text: 'Dziś sprowadź Mi wszystkie dusze pobożne i wierne, i zanurz je w morzu miłosierdzia Mojego; dusze te pocieszyły Mnie na drodze krzyżowej, były tą kroplą pociechy w morzu goryczy. Jezu Najmiłosierniejszy, który z skarbnicy miłosierdzia Twego wszystkim udzielasz łask Swych bardzo obficie, przyjmij nas do mieszkania najlitościwszego Serca Twego.' },
      { day: 4, title: 'Dzień 4 - Poganie i nieznający Boga', text: 'Dziś sprowadź Mi pogan i tych, którzy Mnie jeszcze nie znają; i o nich myślałem w gorzkiej Swej męce, a przyszła ich gorliwość pocieszyła Serce Moje. Zanurz ich w morzu miłosierdzia Mojego. Jezu Najlitościwszy, który jesteś światłością świata całego, przyjmij do mieszkania najlitościwszego Serca Twego dusze pogan, którzy Cię jeszcze nie znają.' },
      { day: 5, title: 'Dzień 5 - Heretycy i odszczepieńcy', text: 'Dziś sprowadź Mi dusze heretyków i odszczepieńców, i zanurz ich w morzu miłosierdzia Mojego; w gorzkiej męce rozdzierali Mi ciało i Serce, to jest Kościół Mój. Kiedy wracają do jedności z Kościołem, goją się rany Moje i tym sposobem lżą Mękę Moją. Jezu Najmiłosierniejszy, który jesteś dobrocią samą, Ty nie odmawiasz światła proszącym Cię, przyjmij do mieszkania najlitościwszego Serca Twego dusze heretyków i dusze odszczepieńców.' },
      { day: 6, title: 'Dzień 6 - Dusze ciche i pokorne', text: 'Dziś sprowadź Mi dusze ciche i pokorne, i dusze małych dzieci, i zanurz je w miłosierdziu Moim. Dusze te są najwięcej podobne do Serca Mojego, one krzepiły Mnie w gorzkiej konania męce; widziałem je jako ziemskich aniołów, którzy będą czuwać u Moich ołtarzy. Jezu Najmiłosierniejszy, któryś sam powiedział: Uczcie się ode Mnie, żem cichy i pokornego serca – przyjmij do mieszkania najlitościwszego Serca Twego dusze ciche i pokorne.' },
      { day: 7, title: 'Dzień 7 - Czciciele Miłosierdzia', text: 'Dziś sprowadź Mi dusze, które szczególnie czczą i wysławiają miłosierdzie Moje, i zanurz je w miłosierdziu Moim. Dusze te najwięcej współczuły męce Mojej i najgłębiej wniknęły w ducha Mojego. One są żywym odbiciem najlitościwszego Serca Mojego. Jezu Najmiłosierniejszy, którego Serce jest miłością samą, przyjmij do mieszkania najlitościwszego Serca Twego dusze, które szczególnie czczą i wysławiają wielkość miłosierdzia Twego.' },
      { day: 8, title: 'Dzień 8 - Dusze czyśćcowe', text: 'Dziś sprowadź Mi dusze, które są w więzieniu czyśćcowym i zanurz je w przepaści miłosierdzia Mojego, niech strumienie krwi Mojej ochłodzą ich upalenie. Wszystkie te dusze są bardzo przeze Mnie umiłowane, wypłacają się Mojej sprawiedliwości; w Twojej mocy jest przynieść im ulgę. Jezu Najmiłosierniejszy, któryś sam powiedział, że miłosierdzia chcesz, oto sprowadzam do mieszkania najlitościwszego Serca Twego dusze czyśćcowe.' },
      { day: 9, title: 'Dzień 9 - Dusze oziębłe', text: 'Dziś sprowadź Mi dusze oziębłe i zanurz je w przepaści miłosierdzia Mojego. Dusze te najboleśniej ranią Serce Moje. Największego obrzydzenia doznała dusza Moja w Ogrójcu od dusz oziębłych. One były powodem, żem wypowiedział te słowa: Ojcze, oddal ten kielich, jeżeli jest wola Twoja. Jezu Najmiłosierniejszy, który jesteś litością samą, wprowadzam do mieszkania najlitościwszego Serca Twego dusze oziębłe.' },
      { title: 'Koronka', text: 'Na zakończenie każdego dnia odmów Koronkę do Miłosierdzia Bożego jako dopełnienie prośby o miłosierdzie dla świata.' }
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
      { title: 'Stacja I', text: 'Pan Jezus na śmierć skazany. Kłaniamy Ci się, Chryste, i błogosławimy Tobie. Żeś przez krzyż i mękę swoją świat odkupić raczył. Niewinny Baranek staje przed sądem człowieka. Przyjmuje wyrok z pokorą, wiedząc, że to droga do zbawienia świata.' },
      { title: 'Stacja II', text: 'Pan Jezus bierze krzyż na swoje ramiona. Ciężkie drzewo spoczywa na zranionym ciele. Każdy krok to ból, ale i miłość, która pcha do przodu.' },
      { title: 'Stacja III', text: 'Pierwszy upadek pod krzyżem. Bóg pada na ziemię. Zmęczenie i ciężar grzechów przygniatają Go do prochu, byśmy my mogli z niego powstać.' },
      { title: 'Stacja IV', text: 'Pan Jezus spotyka swą Matkę. Spojrzenie pełne bólu i zrozumienia. Maryja towarzyszy Synowi w najtrudniejszej godzinie.' },
      { title: 'Stacja V', text: 'Szymon z Cyreny pomaga nieść krzyż Jezusowi. Przymuszony, a jednak staje się uczestnikiem zbawczego dzieła. Każdy nasz trud może być pomocą Jezusowi.' },
      { title: 'Stacja VI', text: 'Weronika ociera twarz Jezusowi. Odważny gest miłości w tłumie nienawiści. Jezus pozostawia odbicie swego oblicza w sercu pełnym litości.' },
      { title: 'Stacja VII', text: 'Drugi upadek pod krzyżem. Ponowny ból i upokorzenie. Jezus powstaje, by pokazać, że nigdy nie wolno się poddawać w drodze do celu.' },
      { title: 'Stacja VIII', text: 'Pan Jezus pociesza płaczące niewiasty. "Nie płaczcie nade Mną, ale nad sobą i nad dziećmi waszymi". Wezwanie do prawdziwego żalu za grzechy.' },
      { title: 'Stacja IX', text: 'Trzeci upadek pod krzyżem. Ostatkiem sił. Jezus uczy nas wytrwałości do samego końca, nawet gdy siły całkowicie nas opuszczają.' },
      { title: 'Stacja X', text: 'Pan Jezus z szat obnażony. Ogołocenie z godności. Wszystko oddał za nas, nie zachowując nic dla siebie.' },
      { title: 'Stacja XI', text: 'Pan Jezus przybity do krzyża. Gwoździe przeszywają dłonie i stopy. Miłość przytwierdzona do drewna dla naszego odkupienia.' },
      { title: 'Stacja XII', text: 'Pan Jezus umiera na krzyżu. "Wykonało się". Największa ofiara w dziejach świata staje się faktem.' },
      { title: 'Stacja XIII', text: 'Pan Jezus zdjęty z krzyża. Maryja przyjmuje martwe ciało Syna. Pieta – milcząca skarga i niezłomna wiara.' },
      { title: 'Stacja XIV', text: 'Pan Jezus do grobu złożony. Cisza wielkiej soboty. Ziarno wrzucone w ziemię, które wkrótce wyda owoc zmartwychwstania.' }
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
    id: 'litania-serce',
    name: 'Litania do Najświętszego Serca Pana Jezusa',
    category: 'litania',
    emoji: '',
    description: 'Błagalna modlitwa do Bożego Serca.',
    history: 'Zatwierdzona przez Leona XIII.',
    intentions: ['miłość Boża'],
    duration: '12 min',
    days: null,
    intro: 'Serce Jezusa, domie Boży i bramo niebios.',
    parts: [
      { title: 'Błagania', text: 'Kyrie, elejson. Chryste, elejson. Kyrie, elejson. Chryste, usłysz nas. Chryste, wysłuchaj nas.' },
      { title: 'Inwokacje Trynitarne', text: 'Ojcze z nieba, Boże, zmiłuj się nad nami. Synu, Odkupicielu świata, Boże, zmiłuj się nad nami. Duchu Święty, Boże, zmiłuj się nad nami. Święta Trójco, jedyny Boże, zmiłuj się nad nami.' },
      { title: 'Wezwania do Serca Jezusa', text: 'Serce Jezusa, Syna Ojca Przedwiecznego, zmiłuj się nad nami. Serce Jezusa, w łonie Matki Dziewicy przez Ducha Świętego utworzone. Serce Jezusa, ze Słowem Bożym istotowo zjednoczone. Serce Jezusa, nieskończonego majestatu. Serce Jezusa, świątynio Boga święta. Serce Jezusa, przybytku Najwyższego. Serce Jezusa, domie Boży i bramo niebios. Serce Jezusa, gorejące ognisko miłości. Serce Jezusa, sprawiedliwości i miłości skarbnico. Serce Jezusa, dobroci i miłości pełne. Serce Jezusa, cnót wszystkich bezdenna głębino. Serce Jezusa, wszelkiej chwały najgodniejsze. Serce Jezusa, królu i zjednoczenie serc wszystkich. Serce Jezusa, w którym są wszystkie skarby mądrości i umiejętności. Serce Jezusa, w którym mieszka cała pełnia Bóstwa. Serce Jezusa, w którym sobie Ojciec bardzo upodobał. Serce Jezusa, z którego pełni wszyscyśmy otrzymali. Serce Jezusa, odwieczne upragnienie świata. Serce Jezusa, cierpliwe i wielkiego miłosierdzia. Serce Jezusa, hojne dla wszystkich, którzy Cię wzywają. Serce Jezusa, źródło życia i świętości. Serce Jezusa, przebłaganie za grzechy nasze. Serce Jezusa, zelżywością napełnione. Serce Jezusa, dla nieprawości naszych starte. Serce Jezusa, aż do śmierci posłuszne. Serce Jezusa, włócznią przebite. Serce Jezusa, źródło wszelkiej pociechy. Serce Jezusa, życie i zmartwychwstanie nasze. Serce Jezusa, pokoju i pojednanie nasze. Serce Jezusa, krwawa ofiaro grzeszników. Serce Jezusa, zbawienie ufających Tobie. Serce Jezusa, nadziejo w Tobie umierających. Serce Jezusa, rozkoszy wszystkich Świętych.' },
      { title: 'Baranku Boży', text: 'Baranku Boży, który gładzisz grzechy świata, przepuść nam, Panie. Baranku Boży, który gładzisz grzechy świata, wysłuchaj nas, Panie. Baranku Boży, który gładzisz grzechy świata, zmiłuj się nad nami.' },
      { title: 'Modlitwa końcowa', text: 'Jezu cichy i pokornego Serca. Uczyń serca nasze według Serca Twego. Módlmy się: Wszechmogący, wieczny Boże, wejrzyj na Serce najmilszego Syna Swego i na chwałę i zadośćuczynienie, jakie Ci w imieniu grzeszników składa; daj się przebłagać tym, którzy Cię proszą o miłosierdzie, i udziel im przebaczenia w imię tegoż Syna Swego, Jezusa Chrystusa, który z Tobą żyje i króluje na wieki wieków. Amen.' }
    ],
    mysteries: []
  },
  {
    id: 'litania-duch-swiety',
    name: 'Litania do Ducha Świętego',
    category: 'litania',
    emoji: '',
    description: 'Modlitwa o wylanie darów Ducha Świętego.',
    history: 'Tradycyjna modlitwa Kościoła.',
    intentions: ['światło Ducha'],
    duration: '10 min',
    days: null,
    intro: 'Duchu Święty, Boże, zmiłuj się nad nami.',
    parts: [
      { title: 'Błagania', text: 'Kyrie, elejson. Chryste, elejson. Kyrie, elejson. Chryste, usłysz nas. Chryste, wysłuchaj nas.' },
      { title: 'Wezwania', text: 'Duchu Święty, który od Ojca i Syna pochodzisz, zmiłuj się nad nami. Duchu Święty, który wraz z Ojcem i Synem odbierasz uwielbienie i chwałę. Duchu prawdy i miłości. Duchu mądrości i rozumu. Duchu rady i męstwa. Duchu umiejętności i pobożności. Duchu bojaźni Bożej. Duchu świętości i sprawiedliwości. Duchu pocieszycielu. Duchu łaski i miłosierdzia.' },
      { title: 'Prośby', text: 'Bądź nam miłościw, przepuść nam, Duchu Święty. Bądź nam miłościw, wysłuchaj nas, Duchu Święty. Od wszelkiego złego, wybaw nas, Duchu Święty. Od każdego grzechu. Od pokus szatańskich. Od nieczystości duszy i ciała. Od oziębłości i uporu. Od rozpaczy i domniemania o miłosierdziu Bożym.' },
      { title: 'Zakończenie', text: 'Baranku Boży, który gładzisz grzechy świata, ześlij nam Ducha Świętego. Baranku Boży... napełnij nas darami Ducha Świętego. Baranku Boży... rozpal w nas ogień miłości.' }
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
      { title: 'Znak Krzyża', text: 'W imię Ojca i Syna, i Ducha Świętego. Amen.' },
      { title: 'Akt wiary', text: 'Wierzę w Ciebie, Boże żywy, w Trójcy jedyny prawdziwy. Wierzę, coś objawił Boże, Twe słowo mylić nie może.' },
      { title: 'Ofiarowanie dnia', text: 'Boże mój, ofiaruję Ci dzisiaj wszystkie moje modlitwy, prace, radości i cierpienia, w jedności z Ofiarą Jezusa Chrystusa na ołtarzu, dla uwielbienia Twego Imienia i dla zbawienia dusz.' },
      { title: 'Ojcze nasz', text: 'Ojcze nasz, któryś jest w niebie...' },
      { title: 'Zdrowaś Maryjo', text: 'Zdrowaś Maryjo, łaski pełna...' },
      { title: 'Aniele Boży', text: 'Aniele Boży, stróżu mój, Ty zawsze przy mnie stój. Rano, wieczór, we dnie, w nocy, bądź mi zawsze ku pomocy. Strzeż duszy, ciała mego i doprowadź mnie do żywota wiecznego. Amen.' }
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
      { title: 'Znak Krzyża', text: 'W imię Ojca i Syna, i Ducha Świętego. Amen.' },
      { title: 'Dziękczynienie', text: 'Dziękuję Ci, Boże mój, żeś mnie dzisiaj stworzył, zachował i łaską swoją wspierał. Dziękuję Ci za wszystkie dobrodziejstwa dzisiejszego dnia.' },
      { title: 'Rachunek sumienia', text: 'Przypomnij sobie swoje dzisiejsze myśli, słowa, uczynki i zaniedbania. Czy kochałeś Boga nade wszystko? Czy byłeś miłosierny dla bliźnich?' },
      { title: 'Akt żalu', text: 'Ach, żałuję za me złości jedynie dla Twej miłości. Bądź miłościw mnie grzesznemu, do poprawy dążącemu.' },
      { title: 'Pod Twoją obronę', text: 'Pod Twoją obronę uciekamy się, święta Boża Rodzicielko...' },
      { title: 'Modlitwa o spokojny sen', text: 'W ręce Twoje, Panie, polecam ducha mojego. Strzeż nas, Panie, jak źrenicy oka, w cieniu Twych skrzydeł ukryj nas.' }
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
