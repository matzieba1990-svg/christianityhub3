export const PRAYERS = [
  {
    id: 'rozaniec',
    name: 'Różaniec Święty',
    category: 'rozaniec',
    emoji: '',
    description: 'Pełne rozważanie 20 tajemnic różańcowych',
    duration: '20-45 min',
    days: null,
    intro: 'Różaniec to modlitwa kontemplacyjna, podczas której rozważamy tajemnice z życia Jezusa i Maryi.',
    parts: [
      {
        title: 'Wierzę w Boga',
        text: 'Wierzę w Boga, Ojca wszechmogącego, Stworzyciela nieba i ziemi. I w Jezusa Chrystusa, Syna Jego jedynego, Pana naszego, który się począł z Ducha Świętego, narodził się z Maryi Panny, umęczon pod Ponckim Piłatem, ukrzyżowan, umarł i pogrzebion. Zstąpił do piekieł, trzeciego dnia zmartwychwstał. Wstąpił na niebiosa, siedzi po prawicy Boga Ojca wszechmogącego. Stamtąd przyjdzie sądzić żywych i umarłych. Wierzę w Ducha Świętego, święty Kościół powszechny, świętych obcowanie, grzechów odpuszczenie, ciała zmartwychwstanie, żywot wieczny. Amen.'
      },
      {
        title: 'Ojcze Nasz',
        text: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj, i odpuść nam nasze winy, jako i my odpuszczamy naszym winowajcom. I nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.'
      },
      {
        title: 'Zdrowaś Maryjo',
        text: 'Zdrowaś Maryjo, łaski pełna, Pan z Tobą, błogosławionaś Ty między niewiastami i błogosławiony owoc żywota Twojego, Jezus. Święta Maryjo, Matko Boża, módl się za nami grzesznymi teraz i w godzinę śmierci naszej. Amen.'
      },
      {
        title: 'Chwała Ojcu',
        text: 'Chwała Ojcu i Synowi, i Duchowi Świętemu. Jak była na początku, teraz i zawsze, i na wieki wieków. Amen.'
      }
    ],
    mysteries: [
      { name: 'Tajemnice Radosne (pon./sob.)', items: ['Zwiastowanie Najświętszej Maryi Pannie','Nawiedzenie Świętej Elżbiety','Narodzenie Pana Jezusa','Ofiarowanie Pana Jezusa w Świątyni','Znalezienie Pana Jezusa w Świątyni'] },
      { name: 'Tajemnice Światła (czw.)', items: ['Chrzest Pana Jezusa w Jordanie','Objawienie się Jezusa na Weselu w Kanie','Głoszenie Królestwa Bożego','Przemienienie Pańskie','Ustanowienie Eucharystii'] },
      { name: 'Tajemnice Bolesne (wt./pt.)', items: ['Modlitwa Pana Jezusa w Ogrójcu','Biczowanie Pana Jezusa','Ukoronowanie Pana Jezusa cierniem','Droga Krzyżowa Pana Jezusa','Śmierć Pana Jezusa na Krzyżu'] },
      { name: 'Tajemnice Chwalebne (śr./nd.)', items: ['Zmartwychwstanie Pana Jezusa','Wniebowstąpienie Pana Jezusa','Zesłanie Ducha Świętego','Wniebowzięcie Najświętszej Maryi Panny','Ukoronowanie Najświętszej Maryi Panny'] },
    ]
  },
  {
    id: 'koronka',
    name: 'Koronka do Miłosierdzia Bożego',
    category: 'koronka',
    emoji: '',
    description: 'Modlitwa objawiona św. Faustynie Kowalskiej',
    duration: '15-20 min',
    days: null,
    intro: 'Koronka do Bożego Miłosierdzia to modlitwa objawiona przez Jezusa Chrystusa św. Faustynie Kowalskiej. Odmawiamy ją na zwykłym różańcu.',
    parts: [
      {
        title: 'Rozpoczęcie',
        text: 'Ojcze nasz... Zdrowaś Maryjo... Wierzę w Boga...'
      },
      {
        title: 'Na dużych paciorkach (5 razy)',
        text: 'Ojcze Przedwieczny, ofiaruję Ci Ciało i Krew, Duszę i Bóstwo najmilszego Syna Twojego, a Pana naszego Jezusa Chrystusa, na przebłaganie za grzechy nasze i całego świata.'
      },
      {
        title: 'Na małych paciorkach (10 razy)',
        text: 'Dla Jego bolesnej Męki miej miłosierdzie dla nas i całego świata.'
      },
      {
        title: 'Na zakończenie (3 razy)',
        text: 'Święty Boże, Święty Mocny, Święty Nieśmiertelny, zmiłuj się nad nami i nad całym światem.'
      }
    ],
    mysteries: []
  },
  {
    id: 'aniol-panski',
    name: 'Anioł Pański',
    category: 'maryjna',
    emoji: '',
    description: 'Modlitwa na Anioł Pański – odmawiana 3 razy dziennie',
    duration: '3 min',
    days: null,
    intro: 'Anioł Pański odmawiamy trzykrotnie w ciągu dnia: o godz. 6:00, 12:00 i 18:00 (lub 21:00).',
    parts: [
      {
        title: 'Anioł Pański',
        text: 'Anioł Pański zwiastował Pannie Maryi.\nI poczęła z Ducha Świętego.\nZdrowaś Maryjo...\n\nOto ja służebnica Pańska.\nNiech mi się stanie według słowa Twego.\nZdrowaś Maryjo...\n\nA Słowo stało się Ciałem.\nI zamieszkało między nami.\nZdrowaś Maryjo...\n\nMódl się za nami, Święta Boża Rodzicielko.\nAbyśmy się stali godnymi obietnic Chrystusowych.\n\nMódlmy się: Łaskę Twoją, prosimy Cię, Panie, racz wlać w serca nasze, abyśmy, którzy za zwiastowaniem anielskim Wcielenie Chrystusa Syna Twego poznali, przez Mękę Jego i Krzyż do chwały Zmartwychwstania byli doprowadzeni. Przez tegoż Chrystusa Pana naszego. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'litania-loretanska',
    name: 'Litania Loretańska',
    category: 'litania',
    emoji: '',
    description: 'Litania do Najświętszej Maryi Panny',
    duration: '10 min',
    days: null,
    intro: 'Litania Loretańska to jedna z najpopularniejszych litanii maryjnych.',
    parts: [
      {
        title: 'Litania Loretańska',
        text: 'Kyrie elejson. Chryste elejson. Kyrie elejson.\nChrystus usłysz nas. Chryste wysłuchaj nas.\nOjcze z nieba, Boże – zmiłuj się nad nami.\nSynu Odkupicielu świata, Boże – zmiłuj się nad nami.\nDuchu Święty, Boże – zmiłuj się nad nami.\nŚwięta Trójco, jedyny Boże – zmiłuj się nad nami.\n\nŚwięta Maryjo – módl się za nami.\nŚwięta Boża Rodzicielko – módl się za nami.\nŚwięta Panno nad pannami – módl się za nami.\nMatko Chrystusowa – módl się za nami.\nMatko łaski Bożej – módl się za nami.\nMatko miłosierdzia – módl się za nami.\nMatko nieskalana – módl się za nami.\nMatko nienaruszona – módl się za nami.\nMatko niepokalana – módl się za nami.\nMatko przeczysła – módl się za nami.\nMatko godna miłości – módl się za nami.\nMatko przedziwna – módl się za nami.\nMatko dobrej rady – módl się za nami.\nMatko Stworzyciela – módl się za nami.\nMatko Zbawiciela – módl się za nami.\nDziewico roztropna – módl się za nami.\nDziewico czcigodna – módl się za nami.\nDziewico wsławiona – módl się za nami.\nDziewico można – módl się za nami.\nDziewico łaskawa – módl się za nami.\nDziewico wierna – módl się za nami.\n\nZwierciadło sprawiedliwości – módl się za nami.\nTron mądrości – módl się za nami.\nPrzyczyno naszej radości – módl się za nami.\nNaczynie duchowne – módl się za nami.\nNaczynie poważania godne – módl się za nami.\nNaczynie osobliwej pobożności – módl się za nami.\nRóżo duchowna – módl się za nami.\nWieżo Dawidowa – módl się za nami.\nWieżo z kości słoniowej – módl się za nami.\nDomie złoty – módl się za nami.\nArko przymierza – módl się za nami.\nBramo niebieska – módl się za nami.\nGwiazdo zaranna – módl się za nami.\nZdrowia chorych – módl się za nami.\nUcieczko grzesznych – módl się za nami.\nPocieszycielo strapionych – módl się za nami.\nWspomożenie wiernych – módl się za nami.\nKrólowo Aniołów – módl się za nami.\nKrólowo Patriarchów – módl się za nami.\nKrólowo Proroków – módl się za nami.\nKrólowo Apostołów – módl się za nami.\nKrólowo Męczenników – módl się za nami.\nKrólowo Wyznawców – módl się za nami.\nKrólowo Dziewic – módl się za nami.\nKrólowo wszystkich Świętych – módl się za nami.\nKrólowo bez zmazy pierworodnej poczęta – módl się za nami.\nKrólowo Wniebowzięta – módl się za nami.\nKrólowo Różańca Świętego – módl się za nami.\nKrólowo Rodzin – módl się za nami.\nKrólowo Pokoju – módl się za nami.\nKrólowo Polski – módl się za nami.\n\nBaranku Boży, który gładzisz grzechy świata – przepuść nam, Panie.\nBaranku Boży, który gładzisz grzechy świata – wysłuchaj nas, Panie.\nBaranku Boży, który gładzisz grzechy świata – zmiłuj się nad nami.\n\nKyrie elejson. Chryste elejson. Kyrie elejson.\nOjcze nasz... Zdrowaś Maryjo...\n\nPod Twoją obronę uciekamy się, Święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszycielko nasza. Z Synem swoim nas pojednaj, Synowi swojemu nas polecaj, Synowi swojemu nas oddawaj.\n\nAmen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-faustyno',
    name: 'Nowenna do Miłosierdzia Bożego',
    category: 'nowenna',
    emoji: '',
    description: 'Nowenna przed Świętem Miłosierdzia Bożego (9 dni)',
    duration: '10 min/dzień',
    days: 9,
    intro: 'Nowenna do Bożego Miłosierdzia objawiona przez Jezusa św. Faustynie. Każdy dzień poświęcony innej grupie dusz.',
    parts: [
      { title: 'Dzień 1 – Grzesznicy', text: 'Jezu, miłości mojej, dzisiaj sprowadź do mnie całą ludzkość, a szczególnie wszystkich grzeszników i zanurz ich w morzu miłosierdzia Twego...' },
      { title: 'Dzień 2 – Kapłani i zakonnicy', text: 'Dzisiaj sprowadź mi dusze kapłańskie i zakonne i zanurz je w niezgłębionym miłosierdziu moim...' },
      { title: 'Dzień 3 – Pobożne dusze', text: 'Dzisiaj sprowadź mi wszystkie dusze pobożne i wierne i zanurz je w morzu miłosierdzia Mojego...' },
      { title: 'Dzień 4 – Poganie i nieuznający Boga', text: 'Dzisiaj sprowadź mi pogan i tych, którzy mnie jeszcze nie znają...' },
      { title: 'Dzień 5 – Heretycy i odszczepieńcy', text: 'Dzisiaj sprowadź mi dusze heretyków i odszczepieńców i zanurz ich w morzu miłosierdzia Mojego...' },
      { title: 'Dzień 6 – Pokorne i ciche dusze', text: 'Dzisiaj sprowadź mi dusze ciche i pokorne i dusze dzieci małych i zanurz je w miłosierdziu Moim...' },
      { title: 'Dzień 7 – Czciciele Miłosierdzia', text: 'Dzisiaj sprowadź mi dusze, które szczególnie czczą i wysławiają Miłosierdzie Moje i zanurz je w miłosierdziu Moim...' },
      { title: 'Dzień 8 – W czyśćcu cierpiące dusze', text: 'Dzisiaj sprowadź mi dusze, które są w więzieniu czyśćcowym i zanurz je w przepaści miłosierdzia Mojego...' },
      { title: 'Dzień 9 – Dusze oziębłe', text: 'Dzisiaj sprowadź mi dusze oziębłe i zanurz je w przepaści miłosierdzia Mojego...' },
    ],
    mysteries: []
  },
  {
    id: 'droga-krzyzowa',
    name: 'Droga Krzyżowa',
    category: 'pasja',
    emoji: '',
    description: '14 stacji Drogi Krzyżowej',
    duration: '20-30 min',
    days: null,
    intro: 'Droga Krzyżowa to nabożeństwo, w czasie którego rozważamy Mękę Pańską przez 14 stacji.',
    parts: [
      { title: 'Stacja I – Jezus skazany na śmierć', text: 'Kłaniamy Ci się Chryste i błogosławimy Tobie.\nŻeś przez Krzyż Swój Święty świat odkupił.\n\nPilat, chcąc zadowolić tłum, uwolnił im Barabasza, a Jezusa po ubiczowaniu wydał na ukrzyżowanie (Mk 15,15).' },
      { title: 'Stacja II – Jezus bierze krzyż na ramiona', text: 'Zabrali więc Jezusa. A On sam dźwigając krzyż, szedł na miejsce zwane Miejscem Czaszki, które po hebrajsku nazywa się Golgota (J 19,16-17).' },
      { title: 'Stacja III – Jezus upada po raz pierwszy', text: 'Upokorzony, lecz nie skarżył się. Jak baranek prowadzony na rzeź, i jak owca niema wobec strzygących ją (Iz 53,7).' },
      { title: 'Stacja IV – Jezus spotyka swoją Matkę', text: 'A Twoją duszę miecz przeniknie (Łk 2,35).' },
      { title: 'Stacja V – Szymon z Cyreny pomaga Jezusowi', text: 'Przymusili przechodnia, niejakiego Szymona z Cyreny, ojca Aleksandra i Rufusa, żeby niósł krzyż Jego (Mk 15,21).' },
      { title: 'Stacja VI – Weronika ociera twarz Jezusa', text: 'Nie ma w Nim wyglądu ani piękna, a gdy Go widzimy, nie ma nic, co by nam się podobało (Iz 53,2).' },
      { title: 'Stacja VII – Jezus upada po raz drugi', text: 'On był przebity za nasze grzechy, zdruzgotany za nasze winy (Iz 53,5).' },
      { title: 'Stacja VIII – Jezus pociesza płaczące niewiasty', text: 'Córki jerozolimskie, nie płaczcie nade Mną; płaczcie raczej nad sobą i nad waszymi dziećmi (Łk 23,28).' },
      { title: 'Stacja IX – Jezus upada po raz trzeci', text: 'Spodobało się Panu zmiażdżyć Go cierpieniem (Iz 53,10).' },
      { title: 'Stacja X – Jezus odarty z szat', text: 'Podzielili między siebie szaty Jego, rzucając losy (J 19,24).' },
      { title: 'Stacja XI – Jezus przybity do Krzyża', text: 'Gdy Go ukrzyżowali, rozdzielili między siebie Jego szaty, rzucając losy (Mk 15,24).' },
      { title: 'Stacja XII – Jezus umiera na Krzyżu', text: 'Jezus zawołał donośnym głosem: Ojcze, w Twoje ręce powierzam ducha mojego. Po tych słowach wyzionął ducha (Łk 23,46).' },
      { title: 'Stacja XIII – Jezus zdjęty z Krzyża', text: 'Józef z Arymatei, który był uczniem Jezusa... poprosił Piłata, aby mógł zabrać ciało Jezusa (J 19,38).' },
      { title: 'Stacja XIV – Jezus złożony do Grobu', text: 'Złożyli Go tam. A kobiety, które razem z Nim przybyły z Galilei, obejrzały grób i w jaki sposób zostało złożone Jego ciało (Łk 23,55).' },
    ],
    mysteries: []
  },
  {
    id: 'jutrznia',
    name: 'Jutrznia (Laudes)',
    category: 'liturgia-godzin',
    emoji: '',
    description: 'Modlitwa poranna – Liturgia Godzin',
    duration: '10 min',
    days: null,
    intro: 'Jutrznia (Laudes) to rano odprawiana część Liturgii Godzin – oficjalnej modlitwy Kościoła. Uświęca początek dnia.',
    parts: [
      {
        title: 'Hymn poranny',
        text: 'Boże, Ty zbawiasz, Panie,\nOjcze Stwórco wszechrzeczy,\nDaj nam na dniu wstaniu\nDziękczynienie serca.\n\nZbudź nas ku Twej chwale,\nByśmy z Tobą żyli,\nZa Twe miłosierdzie\nDzięki Ci składali. Amen.'
      },
      {
        title: 'Psalm 63 – Tęsknota za Bogiem',
        text: 'Boże, Ty jesteś moim Bogiem,\nszukam Ciebie od samego rana,\nma Cię pragnie dusza moja,\nczcze Cię pragnie me ciało,\njak ziemia zeschła, spragniona, bez wody...'
      },
      {
        title: 'Pieśń Zachariasza – Benedictus',
        text: 'Błogosławiony Pan, Bóg Izraela,\nże nawiedził lud swój i wyzwolił go,\ni wzbudził nam moc zbawczą\nw domu sługi swego, Dawida...'
      }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-pompejanska',
    name: 'Nowenna Pompejańska',
    category: 'nowenna',
    emoji: '',
    description: 'Modlitwa różańcowa zwana "nowenną nie do odparcia" (54 dni)',
    duration: '3x Różaniec/dzień',
    days: 54,
    intro: 'Nowenna Pompejańska to potężna modlitwa różańcowa trwająca 54 dni. Podzielona jest na dwie części: błagalną (27 dni) i dziękczynną (27 dni). Codziennie odmawia się 3 lub 4 części Różańca.',
    parts: [
      {
        title: 'Część błagalna (Dni 1-27)',
        text: 'Codziennie odmawiasz minimum 3 części Różańca (Radosną, Bolesną i Chwalebną). Na koniec różańca odmawiasz krótką modlitwę błagalną:\n\n"Pomnij, o miłosierna Panno Różańcowa z Pompejów, jako nigdy jeszcze nie słyszano, aby ktokolwiek z Twoich czcicieli, z Różańcem Twoim pomocy Twojej wzywający, miał być przez Ciebie opuszczony. Ach, nie gardź prośbą moją, o Matko Słowa Przedwiecznego, ale przez święty Twój Różaniec i przez upodobanie, jakie okazujesz dla Twojej świątyni w Pompejach, wysłuchaj mnie dobrotliwie. Amen."'
      },
      {
        title: 'Część dziękczynna (Dni 28-54)',
        text: 'Codziennie odmawiasz minimum 3 części Różańca. Na koniec różańca odmawiasz krótką modlitwę dziękczynną:\n\n"Cóż Ci dać mogę, o Królowo pełna miłości? Życie moje poświęcam Tobie. Ile mi sił starczy, będę rozszerzać cześć Twoją, o Dziewico Różańca Świętego z Pompejów, bo gdy Twojej pomocy wezwałem, nawiedziła mnie łaska Boża. Wszędzie będę opowiadać o miłosierdziu, które mi wyświadczyłaś. O ile zdołam, będę rozszerzać nabożeństwo do Różańca Świętego. Wszystkim głosić będę, jak dobrotliwie obeszłaś się ze mną, aby i niegodni, tak jak i ja, grzesznicy, z zaufaniem do Ciebie się udawali. O, gdyby cały świat wiedział, jak jesteś dobra, jak litościwa dla cierpiących, wszystkie stworzenia uciekałyby się do Ciebie. Amen."'
      },
      {
        title: 'Modlitwa na zakończenie każdego dnia (Pod Twoją Obronę)',
        text: 'Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszycielko nasza. Z Synem swoim nas pojednaj, Synowi swojemu nas polecaj, Synowi swojemu nas oddawaj. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'rita-beznadziejne',
    name: 'Modlitwa do św. Rity',
    category: 'inne',
    emoji: '',
    description: 'W sprawach trudnych i beznadziejnych',
    duration: '5 min',
    days: null,
    intro: 'Święta Rita jest patronką spraw beznadziejnych. Modlitwa ta jest pełna ufności w jej przemożne wstawiennictwo.',
    parts: [
      {
        title: 'Modlitwa',
        text: 'O potężna i sławna święta Rito, oto u Twoich stóp nędzna dusza potrzebująca pomocy, zwraca się do Ciebie z nadzieją, że zostanie wysłuchana. Ponieważ jestem niegodny z tytułu niewierności mojej, nie śmiem spodziewać się, że moje prośby będą zdolne ubłagać Boga. Dlatego wyczuwam potrzebę, aby mieć za sobą potężną orędowniczkę, więc Ciebie wybieram sobie, święta Rito, ponieważ Ty właśnie jesteś niezrównaną świętą od spraw trudnych i beznadziejnych.\n\nO droga święta, weź do serca moją sprawę, wstaw się do Boga, aby uprosić mi łaskę, której tak bardzo potrzebuję i o którą tak gorąco proszę: (wymień prośbę). Nie pozwól mi odejść od Ciebie, nie będąc wysłuchanym.\n\nJeżeli jest we mnie coś, co byłoby przeszkodą w otrzymaniu łaski, o którą proszę, pomóż mi usunąć tę przeszkodę: poprzyj moją prośbę swymi cennymi zasługami i przedstaw ją swemu niebieskiemu Oblubieńcowi, łącząc ją z Twoją prośbą. Ty odczuwałaś boleść Jego męki, jak mógłby On odrzucić Twoją prośbę i nie wysłuchać jej? Cała moja nadzieja jest więc w Tobie i za Twoim pośrednictwem czekam ze spokojnym sercem na spełnienie moich życzeń.\n\nO droga święta Rito, spraw, aby moja ufność i moja nadzieja nie zostały zawiedzione, aby moja prośba nie była odrzucona. Uproś mi u Boga to, o co proszę, a postaram się, aby wszyscy poznali dobroć Twego serca i wielką potęgę Twego wstawiennictwa. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'juda-tadeusz',
    name: 'Modlitwa do św. Judy Tadeusza',
    category: 'inne',
    emoji: '',
    description: 'Patron spraw beznadziejnych i opuszczonych',
    duration: '5 min',
    days: null,
    intro: 'Święty Juda Tadeusz, jeden z dwunastu Apostołów, jest wzywany w sytuacjach, gdy wszelka inna nadzieja wydaje się zawodzić.',
    parts: [
      {
        title: 'Modlitwa',
        text: 'Święty Judo Tadeuszu, potężny mój Opiekunie, w Twoje ręce oddaję moją sprawę beznadziejną. Proszę Cię, wstaw się za mną u Pana naszego Jezusa Chrystusa, aby raczył mi udzielić łaski, o którą tak gorąco proszę. Ty, któryś przez swoją wierność i oddanie zyskał miano Patrona spraw najtrudniejszych, nie opuszczaj mnie w tej ciężkiej chwili.\n\nBłagam Cię, przyjdź mi z pomocą w moim utrapieniu i spraw, bym otrzymał pociechę i wsparcie z Nieba we wszystkich moich potrzebach, cierpieniach i troskach, a szczególnie w tej sprawie: (wymień prośbę). Obiecuję Ci, o święty Judo, zawsze pamiętać o tej wielkiej łasce i czcić Cię jako mojego szczególnego patrona. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'koronka-lzy-maryi',
    name: 'Koronka do Krwawych Łez',
    category: 'koronka',
    emoji: '',
    description: 'Koronka do Krwawych Łez Matki Bożej',
    duration: '15 min',
    days: null,
    intro: 'Ta modlitwa kruszy moc szatana i wyprasza wielkie łaski przez współcierpienie Maryi z Jezusem.',
    parts: [
      {
        title: 'Modlitwa na rozpoczęcie',
        text: 'O Jezu, przybity do krzyża! Padamy do Twoich stóp i składamy Ci w ofierze Krwawe Łzy Tej, która z największą miłością współbolała z Tobą, towarzysząc Ci na Twej bolesnej drodze krzyżowej. Spraw, o Dobry Mistrzu, abyśmy z miłością pojęli wymowę Krwawych Łez Twojej Najświętszej Matki, a pełniąc Twą Świętą Wolę tu na ziemi, stali się godnymi wielbić Cię i czcić przez całą wieczność w Niebie. Amen.'
      },
      {
        title: 'Na dużych paciorkach',
        text: 'O Jezu, spójrz na Krwawe Łzy Tej, która umiłowała Cię najmocniej tu na ziemi i nadal najgoręcej miłuje Cię w Niebie.'
      },
      {
        title: 'Na małych paciorkach (7 razy)',
        text: 'O Jezu, wysłuchaj prośby nasze – przez Krwawe Łzy Twojej Najświętszej Matki.'
      },
      {
        title: 'Modlitwa końcowa',
        text: 'O Maryjo, Matko Boleści, Matko Litości, Matko Miłosierdzia! Zjednocz nasze prośby ze swoimi prośbami, aby Twój Boski Syn Jezus, którego wzywamy, wysłuchał nasze wołanie, a przez przyczynę Twoich Matczynych Krwawych Łez, udzielił nam łask, o które Go błagamy i doprowadził nas do szczęścia wiecznego. Amen.'
      },
      {
        title: 'Akt końcowy',
        text: 'Twoje Krwawe Łzy, o Matko Bolesna, kruszą moc szatana! O Jezu, zakuty w kajdany, przez Twoją Boską łagodność uchroń świat przed zagładą! Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'michal-archaniol',
    name: 'Modlitwa do św. Michała Archanioła',
    category: 'inne',
    emoji: '',
    description: 'Potężna modlitwa o ochronę przed złem (Papieża Leona XIII)',
    duration: '1 min',
    days: null,
    intro: 'Modlitwa ta jest wzywaniem potężnego wodza zastępów anielskich do walki z nieprzyjacielem duszy.',
    parts: [
      {
        title: 'Modlitwa',
        text: 'Święty Michale Archaniele, wspomagaj nas w walce, a przeciw niegodziwości i zasadzkom złego ducha bądź naszą obroną. Oby go Bóg pogromić raczył, pokornie o to prosimy, a Ty, Wodzu niebieskich zastępów, szatana i inne duchy złe, które na zgubę dusz ludzkich po tym świecie krążą, mocą Bożą strąć do piekła. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'litania-serce-jezusa',
    name: 'Litania do Serca Pana Jezusa',
    category: 'litania',
    emoji: '',
    description: 'Litania do Najświętszego Serca Pana Jezusa',
    duration: '12 min',
    days: null,
    intro: 'Litania ta jest centralną modlitwą kultu Najświętszego Serca, odmawianą szczególnie w czerwcu.',
    parts: [
      {
        title: 'Litania',
        text: 'Kyrie elejson. Chryste elejson. Kyrie elejson.\nChryste usłysz nas. Chryste wysłuchaj nas.\nOjcze z nieba Boże – zmiłuj się nad nami.\nSynu Odkupicielu świata Boże – zmiłuj się nad nami.\nDuchu Święty Boże – zmiłuj się nad nami.\nŚwięta Trójco Jedyny Boże – zmiłuj się nad nami.\n\nSerce Jezusa, Syna Ojca Przedwiecznego – zmiłuj się nad nami.\nSerce Jezusa, w łonie Matki Dziewicy przez Ducha Świętego utworzone – zmiłuj się nad nami.\nSerce Jezusa, ze Słowem Bożym istotowo zjednoczone – zmiłuj się nad nami.\nSerce Jezusa, nieskończonego majestatu – zmiłuj się nad nami.\nSerce Jezusa, przybytku Boga najwyższego – zmiłuj się nad nami.\nSerce Jezusa, domie Boży i bramo niebios – zmiłuj się nad nami.\nSerce Jezusa, ognisko miłości gorejące – zmiłuj się nad nami.\nSerce Jezusa, sprawiedliwości i miłości skarbnico – zmiłuj się nad nami.\nSerce Jezusa, dobroci i miłości pełne – zmiłuj się nad nami.\nSerce Jezusa, cnót wszystkich bezdenna głębino – zmiłuj się nad nami.\nSerce Jezusa, wszelkiej chwały najgodniejsze – zmiłuj się nad nami.\nSerce Jezusa, królu i zjednoczenie serc wszystkich – zmiłuj się nad nami.\nSerce Jezusa, w którym są wszystkie skarby mądrości i umiejętności – zmiłuj się nad nami.\nSerce Jezusa, w którym mieszka cała pełnia Bóstwa – zmiłuj się nad nami.\nSerce Jezusa, w którym Sobie Ojciec bardzo upodobał – zmiłuj się nad nami.\nSerce Jezusa, z którego pełni wszyscyśmy otrzymali – zmiłuj się nad nami.\nSerce Jezusa, odwieczne upragnienie świata – zmiłuj się nad nami.\nSerce Jezusa, cierpliwe i wielkiego miłosierdzia – zmiłuj się nad nami.\nSerce Jezusa, hojne dla wszystkich, którzy Cię wzywają – zmiłuj się nad nami.\nSerce Jezusa, źródło życia i świętości – zmiłuj się nad nami.\nSerce Jezusa, przebłaganie za grzechy nasze – zmiłuj się nad nami.\nSerce Jezusa, zelżywością napełnione – zmiłuj się nad nami.\nSerce Jezusa, dla nieprawości naszych starte – zmiłuj się nad nami.\nSerce Jezusa, aż do śmierci posłuszne – zmiłuj się nad nami.\nSerce Jezusa, włócznią przebite – zmiłuj się nad nami.\nSerce Jezusa, źródło wszelkiej pociechy – zmiłuj się nad nami.\nSerce Jezusa, życie i zmartwychwstanie nasze – zmiłuj się nad nami.\nSerce Jezusa, pokoju i pojednanie nasze – zmiłuj się nad nami.\nSerce Jezusa, krwawa ofiaro grzeszników – zmiłuj się nad nami.\nSerce Jezusa, zbawienie ufających Tobie – zmiłuj się nad nami.\nSerce Jezusa, nadziejo w Tobie umierających – zmiłuj się nad nami.\nSerce Jezusa, rozkoszy wszystkich Świętych – zmiłuj się nad nami.\n\nBaranku Boży, który gładzisz grzechy świata – przepuść nam Panie.\nBaranku Boży, który gładzisz grzechy świata – wysłuchaj nas Panie.\nBaranku Boży, który gładzisz grzechy świata – zmiłuj się nad nami.\n\nV. Jezu cichy i pokornego Serca.\nR. Uczyń serca nasze według Serca Twego.\n\nMódlmy się: Wszechmogący, wieczny Boże, wejrzyj na Serce najmilszego Syna swego i na chwałę i zadośćuczynienie, jakie w imieniu grzeszników Ci składa; daj się przebłagać tym, którzy żebrzą Twego miłosierdzia i racz udzielić przebaczenia w imię tegoż Syna swego, Jezusa Chrystusa, który z Tobą żyje i króluje na wieki wieków. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'litania-jozef',
    name: 'Litania do św. Józefa',
    category: 'litania',
    emoji: '',
    description: 'Modlitwa do Opiekuna Zbawiciela i Patrona Kościoła',
    duration: '8 min',
    days: null,
    intro: 'Święty Józef jest potężnym orędownikiem w sprawach rodzinnych, pracy i w godzinie śmierci.',
    parts: [
      {
        title: 'Litania',
        text: 'Kyrie elejson. Chryste elejson. Kyrie elejson.\nChryste usłysz nas. Chryste wysłuchaj nas.\nOjcze z nieba Boże – zmiłuj się nad nami.\nSynu Odkupicielu świata Boże – zmiłuj się nad nami.\nDuchu Święty Boże – zmiłuj się nad nami.\nŚwięta Trójco Jedyny Boże – zmiłuj się nad nami.\n\nŚwięta Maryjo – módl się za nami.\nŚwięty Józefie – módl się za nami.\nPrzesławny potomku Dawida – módl się za nami.\nŚwiatło Patriarchów – módl się za nami.\nOblubieńcze Bogarodzicy – módl się za nami.\nPrzeczysty Stróżu Dziewicy – módl się za nami.\nŻywicielu Syna Bożego – módl się za nami.\nTroskliwy Obrońco Chrystusa – módl się za nami.\nGłowo Najświętszej Rodziny – módl się za nami.\nJózefie najsprawiedliwszy – módl się za nami.\nJózefie najczystszy – módl się za nami.\nJózefie najroztropniejszy – módl się za nami.\nJózefie najmężniejszy – módl się za nami.\nJózefie najposłuszniejszy – módl się za nami.\nJózefie najwierniejszy – módl się za nami.\nZwierciadło cierpliwości – módl się za nami.\nMiłośniku ubóstwa – módl się za nami.\nWzorze pracujących – módl się za nami.\nOzdobo życia rodzinnego – módl się za nami.\nOpiekunie dziewic – módl się za nami.\nPodporo rodzin – módl się za nami.\nPociecho nieszczęśliwych – módl się za nami.\nNadziejo chorych – módl się za nami.\nPatronie umierających – módl się za nami.\nPostrachu duchów piekielnych – módl się za nami.\nOpiekunie Kościoła świętego – módl się za nami.\n\nBaranku Boży, który gładzisz grzechy świata – przepuść nam Panie.\nBaranku Boży, który gładzisz grzechy świata – wysłuchaj nas Panie.\nBaranku Boży, który gładzisz grzechy świata – zmiłuj się nad nami.\n\nV. Ustanowił go panem domu swego.\nR. I rządcą wszystkich posiadłości swoich.\n\nMódlmy się: Boże, Ty w niewysłowionej Opatrzności wybrałeś świętego Józefa na Oblubieńca Najświętszej Rodzicielki Twojego Syna, spraw, prosimy, abyśmy zasłużyli na jego orędownictwo w niebie, gdy jako opiekuna czcimy go na ziemi. Który żyjesz i królujesz na wieki wieków. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'litania-duch-swiety',
    name: 'Litania do Ducha Świętego',
    category: 'litania',
    emoji: '',
    description: 'Modlitwa o dary i owoce Ducha Świętego',
    duration: '10 min',
    days: null,
    intro: 'Wzywanie Trzeciej Osoby Boskiej o światło, moc i uświęcenie.',
    parts: [
      {
        title: 'Litania',
        text: 'Kyrie elejson. Chryste elejson. Kyrie elejson.\nChryste usłysz nas. Chryste wysłuchaj nas.\nOjcze z nieba Boże – zmiłuj się nad nami.\nSynu Odkupicielu świata Boże – zmiłuj się nad nami.\nDuchu Święty Boże – zmiłuj się nad nami.\nŚwięta Trójco Jedyny Boże – zmiłuj się nad nami.\n\nDuchu Święty, który od Ojca i Syna pochodzisz – zmiłuj się nad nami.\nDuchu Święty, który z Ojcem i Synem wspólnie jesteś uwielbiany i chwalony – zmiłuj się nad nami.\nObietnico Boga Ojca – zmiłuj się nad nami.\nŹródło światłości niebieskiej – zmiłuj się nad nami.\nDawco wszelkich łask – zmiłuj się nad nami.\nSkarbnico darów wiecznych – zmiłuj się nad nami.\nOgniu miłości – zmiłuj się nad nami.\nSłodyczy duchowa – zmiłuj się nad nami.\nDuchu prawdy i miłości – zmiłuj się nad nami.\nDuchu mądrości i rozumu – zmiłuj się nad nami.\nDuchu rady i męstwa – zmiłuj się nad nami.\nDuchu umiejętności i pobożności – zmiłuj się nad nami.\nDuchu bojaźni Pańskiej – zmiłuj się nad nami.\nDuchu pokoju i łagodności – zmiłuj się nad nami.\nDuchu czystości i niewinności – zmiłuj się nad nami.\nDuchu Pocieszycielu – zmiłuj się nad nami.\nDuchu uświęcicielu – zmiłuj się nad nami.\nDuchu prowadzący Kościół – zmiłuj się nad nami.\nDuchu napełniający wszechświat – zmiłuj się nad nami.\nDuchu adoptujący nas za synów Bożych – zmiłuj się nad nami.\n\nBądź nam miłościw – przepuść nam Duchu Święty.\nBądź nam miłościw – wysłuchaj nas Duchu Święty.\n\nOd wszelkiego złego – wybaw nas Duchu Święty.\nOd każdego grzechu – wybaw nas Duchu Święty.\nOd pokus szatańskich – wybaw nas Duchu Święty.\nOd wszelkiej nieufności – wybaw nas Duchu Święty.\nOd oporu wobec prawdy objawionej – wybaw nas Duchu Święty.\nOd nieczystości duszy i ciała – wybaw nas Duchu Święty.\nOd zaniedbania natchnień Twoich – wybaw nas Duchu Święty.\nW godzinę śmierci – wybaw nas Duchu Święty.\n\nMy grzeszni, Ciebie prosimy – wysłuchaj nas Duchu Święty.\nAbyś rządził i uświęcał Kościół Twój święty – wysłuchaj nas Duchu Święty.\nAbyś nas w wierze utwierdzał – wysłuchaj nas Duchu Święty.\nAbyś nam daru modlitwy udzielał – wysłuchaj nas Duchu Święty.\nAbyś nam miłości Bożej użyczał – wysłuchaj nas Duchu Święty.\nAbyś nas do nieba doprowadził – wysłuchaj nas Duchu Święty.\n\nBaranku Boży... (3 razy)\n\nMódlmy się: Boże, któryś serca wiernych światłem Ducha Świętego oświecił, daj nam w tymże Duchu poznać co jest prawe i Jego pociechą zawsze się weselić. Przez Chrystusa Pana naszego. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'modlitwa-poranna',
    name: 'Modlitwy poranne',
    category: 'inne',
    emoji: '',
    description: 'Zbiór podstawowych modlitw na początek dnia',
    duration: '5 min',
    days: null,
    intro: 'Ofiarowanie dnia Panu Bogu zaraz po przebudzeniu.',
    parts: [
      {
        title: 'Kiedy rano wstaję',
        text: 'Kiedy rano wstaję, Tobie Boże serce moje oddaję. Tobie Boże duszę moją, pod opiekę oddaję Twoją.\n\nBoże mój, dziękuję Ci za noc dzisiejszą, za sen spokojny i proszę Cię: błogosław mi w tym dniu, aby każda moja myśl, słowo i uczynek były na Twoją chwałę. Amen.'
      },
      {
        title: 'Akt wiary, nadziei i miłości',
        text: 'Wierzę w Ciebie, Boże żywy, w Trójcy jedyny, prawdziwy. Wierzę, coś objawił Boże, Twe słowo mylić nie może.\n\nUfam Tobie, boś Ty wierny, wszechmogący i miłosierny. Dasz mi grzechów odpuszczenie, łaskę i wieczne zbawienie.\n\nBoże, choć Cię nie pojmuję, nad wszystko Cię miłuję. Nad wszystko, co jest stworzone, boś Ty dobro nieskończone. A jako siebie samego, czczę bliźniego dla Boga mego.'
      }
    ],
    mysteries: []
  },
  {
    id: 'modlitwa-wieczorna',
    name: 'Modlitwy wieczorne',
    category: 'inne',
    emoji: '',
    description: 'Rachunek sumienia i podziękowanie za przeżyty dzień',
    duration: '5 min',
    days: null,
    intro: 'Spokojne zakończenie dnia w obecności Bożej.',
    parts: [
      {
        title: 'Wszystkie nasze dzienne sprawy',
        text: 'Wszystkie nasze dzienne sprawy przyjm łaskawie, Boże prawy. A gdy będziem zasypiali, niech Cię nasze serca chwalą.\n\nDziękuję Ci, Panie, za wszystkie dobrodziejstwa dzisiejszego dnia. Przepraszam Cię za wszystkie moje grzechy i zaniedbania (chwila na rachunek sumienia). Przebacz mi je dla miłosierdzia Twego.'
      },
      {
        title: 'Akt żalu',
        text: 'Ach, żałuję za me złości, jedynie dla Twej miłości. Bądź miłościw mnie grzesznemu, dla Ciebie Stworzycielowi memu.'
      },
      {
        title: 'Pod Twoją Obronę',
        text: 'Pod Twoją obronę uciekamy się, Święta Boża Rodzicielko, naszymi prośbami racz nie gardzić w potrzebach naszych, ale od wszelakich złych przygód racz nas zawsze wybawiać, Panno chwalebna i błogosławiona. O Pani nasza, Orędowniczko nasza, Pośredniczko nasza, Pocieszycielko nasza. Z Synem swoim nas pojednaj, Synowi swojemu nas polecaj, Synowi swojemu nas oddawaj. Amen.'
      }
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
