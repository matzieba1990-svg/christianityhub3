export const PRAYERS = [
  {
    id: 'rozaniec',
    name: 'Różaniec Święty',
    category: 'rozaniec',
    emoji: '',
    description: 'Najpopularniejsza modlitwa kontemplacyjna chrześcijaństwa, polegająca na rozważaniu kluczowych wydarzeń z życia Jezusa i Maryi. Modlitwa ta jest potężnym narzędziem duchowym, które pomaga wyciszyć serce i odnaleźć pokój w Bożej obecności.',
    history: 'Tradycja przypisuje powstanie różańca św. Dominikowi, któremu miała go objawić Matka Boża w XIII wieku. Przez wieki forma ta ewoluowała, aż do ostatecznego zatwierdzenia przez papieża św. Piusa V w XVI wieku po zwycięstwie pod Lepanto.',
    intentions: ['ogólne', 'pokój', 'rodzina', 'nawrócenie'],
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
        text: 'Ojcze nasz, któryś jest w niebie, święć się imię Twoje, przyjdź królestwo Twoje, bądź wola Twoja jako w niebie, tak i na ziemi. Chleba naszego powszedniego daj nam dzisiaj, i odpuść nam nasze winy, jako i mi odpuszczamy naszym winowajcom. I nie wódź nas na pokuszenie, ale nas zbaw ode złego. Amen.'
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
    description: 'Modlitwa o Boże miłosierdzie dla nas i całego świata. Jest to wołanie o litość i przebaczenie, opierające się na zasługach bolesnej męki Chrystusa.',
    history: 'Została podyktowana przez samego Pana Jezusa św. siostrze Faustynie Kowalskiej w Wilnie, w dniach 13-14 września 1935 roku, jako modlitwa na uśmierzenie gniewu Bożego.',
    intentions: ['miłosierdzie', 'grzesznicy', 'konający', 'trudne sytuacje'],
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
    description: 'Tradycyjna modlitwa upamiętniająca Wcielenie Syna Bożego i zwiastowanie Najświętszej Maryi Pannie. Przypomina o pokorze Maryi i Bożym planie zbawienia.',
    history: 'Początki modlitwy sięgają XI wieku, kiedy zaczęto dzwonić na wieczorną modlitwę ku czci Maryi. Z czasem dodano modlitwę ranną i południową, tworząc obecny cykl trzech modlitw dziennie.',
    intentions: ['wiara', 'pokora', 'codzienność'],
    duration: '3 min',
    days: null,
    intro: 'Anioł Pański odmawiamy trzykrotnie w ciągu dnia: o godz. 6:00, 12:00 i 18:00.',
    parts: [
      {
        title: 'Anioł Pański',
        text: 'Anioł Pański zwiastował Pannie Maryi. I poczęła z Ducha Świętego. Zdrowaś Maryjo... Oto ja służebnica Pańska. Niech mi się stanie według słowa Twego. Zdrowaś Maryjo... A Słowo stało się Ciałem. I zamieszkało między nami. Zdrowaś Maryjo... Módl się za nami, Święta Boża Rodzicielko. Abyśmy się stali godnymi obietnic Chrystusowych. Módlmy się: Łaskę Twoją, prosimy Cię, Panie, racz wlać w serca nasze, abyśmy, którzy za zwiastowaniem anielskim Wcielenie Chrystusa Syna Twego poznali, przez Mękę Jego i Krzyż do chwały Zmartwychwstania byli doprowadzeni. Przez tegoż Chrystusa Pana naszego. Amen.'
      }
    ],
    mysteries: []
  },
  {
    id: 'litania-loretanska',
    name: 'Litania Loretańska',
    category: 'litania',
    emoji: '',
    description: 'Jedna z najpiękniejszych modlitw błagalnych do Najświętszej Maryi Panny, zawierająca liczne tytuły i wezwania sławiące Jej cnoty i rolę w historii zbawienia.',
    history: 'Jej nazwa pochodzi od włoskiego miasta Loreto, gdzie była śpiewana już w XVI wieku. Została oficjalnie zatwierdzona przez papieża Sykstusa V w 1587 roku. Przez wieki dodawano do niej kolejne wezwania, jak np. "Królowo Pokoju" czy "Matko Miłosierdzia".',
    intentions: ['wstawiennictwo Maryi', 'ochrona', 'rodzina', 'pocieszenie'],
    duration: '10 min',
    days: null,
    intro: 'Litania Loretańska to rytmiczne wezwanie do Maryi, naszej Matki i Królowej.',
    parts: [
      {
        title: 'Litania',
        text: 'Kyrie elejson. Chryste elejson. Kyrie elejson. Chrystus usłysz nas. Chryste wysłuchaj nas. Ojcze z nieba, Boże – zmiłuj się nad nami. Synu Odkupicielu świata, Boże – zmiłuj się nad nami. Duchu Święty, Boże – zmiłuj się nad nami. Święta Trójco, jedyny Boże – zmiłuj się nad nami. Święta Maryjo – módl się za nami... (pełny tekst wezwań)'
      }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-pompejanska',
    name: 'Nowenna Pompejańska',
    category: 'nowenna',
    emoji: '',
    description: 'Nazywana "nowenną nie do odparcia". Jest to 54-dniowe nabożeństwo różańcowe, wymagające ogromnej wytrwałości, ale przynoszące niezwykłe owoce duchowe.',
    history: 'Została rozpropagowana przez bł. Bartolo Longo, byłego kapłana szatana, który nawrócił się i poświęcił życie szerzeniu różańca w Pompejach. Maryja obiecała mu, że ktokolwiek odmówi tę nowennę, otrzyma łaski, o które prosi.',
    intentions: ['sprawy beznadziejne', 'nawrócenie', 'uzdrowienie', 'wielkie prośby'],
    duration: '3x Różaniec/dzień',
    days: 54,
    intro: 'Nowenna trwa 54 dni. Przez pierwsze 27 dni odmawiamy część błagalną, a przez kolejne 27 dni część dziękczynną. Każdego dnia odmawiamy 3 części różańca.',
    parts: [
      { title: 'Część błagalna (Dni 1-27)', text: 'Pomnij, o miłosierna Panno Różańcowa z Pompei, jako nigdy jeszcze nie słyszano, by ktokolwiek z Twoich czcicieli z Twoim Różańcem, wzywający Twej pomocy, został opuszczony...' },
      { title: 'Część dziękczynna (Dni 28-54)', text: 'Cóż Ci dać mogę, o Królowo pełna miłości? Całe moje życie poświęcam Tobie. Ile mi sił starczy, będę szerzyć cześć Twoją, o Dziewico Różańca Świętego z Pompei...' }
    ],
    mysteries: []
  },
  {
    id: 'droga-krzyzowa',
    name: 'Droga Krzyżowa',
    category: 'pasja',
    emoji: '',
    description: 'Nabożeństwo pasyjne polegające na rozważaniu męki Jezusa Chrystusa przez 14 stacji. Uczy współcierpienia z Bogiem i pomaga zrozumieć cenę naszego zbawienia.',
    history: 'Tradycja ta wywodzi się z pielgrzymek do Jerozolimy. W średniowieczu, gdy podróż do Ziemi Świętej była trudna, zaczęto budować stacje drogi krzyżowej w Europie, aby wierni mogli duchowo towarzyszyć Jezusowi w Jego ostatniej drodze.',
    intentions: ['pokuta', 'zrozumienie cierpienia', 'nawrócenie', 'wdzięczność'],
    duration: '20-40 min',
    days: null,
    intro: 'Przejdźmy drogą miłości, która nie cofnęła się przed krzyżem.',
    parts: [
      { title: 'Stacja I - Jezus skazany na śmierć', text: 'Kłaniamy Ci się Chryste i błogosławimy Tobie. Żeś przez Krzyż Swój Święty świat odkupił. Wyrok został wydany. Niewinny Baranek przyjmuje śmierć za grzechy świata.' },
      { title: 'Stacje II-XIV', text: 'Rozważaj kolejne upadki, spotkania i śmierć Pana Jezusa na Krzyżu, aż do złożenia w grobie.' }
    ],
    mysteries: []
  },
  {
    id: 'jutrznia',
    name: 'Jutrznia (Laudes)',
    category: 'liturgia-godzin',
    emoji: '',
    description: 'Oficjalna modlitwa poranna Kościoła, uświęcająca początek dnia. Jest to pieśń uwielbienia za dar światła i nowe życie w Chrystusie.',
    history: 'Wywodzi się z najstarszych tradycji chrześcijańskich spotkań o świcie. Stanowi kluczowy element Liturgii Godzin, którą codziennie odmawiają kapłani, zakonnicy i coraz liczniej wierni świeccy.',
    intentions: ['uświęcenie czasu', 'pokój na świecie', 'potrzeby Kościoła'],
    duration: '15 min',
    days: null,
    intro: 'Panie, otwórz wargi moje, a usta moje będą głosić Twoją chwałę.',
    parts: [
      { title: 'Hymn', text: 'O Stwórco światła, Boże nasz, Ty dniem i nocą rządzisz sam. Rozpędzasz mroki grzesznych dusz, by światłość Twoja lśniła w nas.' },
      { title: 'Psalmodia', text: 'Boże, Tyś moim Bogiem, Ciebie szukam od rana. Ciebie pragnie moja dusza...' }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-faustyno',
    name: 'Nowenna do Miłosierdzia Bożego',
    category: 'nowenna',
    emoji: '',
    description: 'Dziewięciodniowe przygotowanie do Święta Miłosierdzia. Każdy dzień to inna grupa dusz, które Jezus pragnie zanurzyć w swoim miłosierdziu.',
    history: 'Podyktowana przez Jezusa św. Faustynie w 1937 roku. Jezus prosił, aby przez te dziewięć dni sprowadzać do Jego serca różne grupy ludzi, szczególnie tych najbardziej potrzebujących przebaczenia.',
    intentions: ['miłosierdzie', 'grzesznicy', 'dusze czyśćcowe', 'kapłani'],
    duration: '10 min/dzień',
    days: 9,
    intro: 'Nowenna zaczyna się zazwyczaj w Wielki Piątek.',
    parts: [
      { title: 'Dzień 1 - Cała ludzkość', text: 'Dziś sprowadź mi całą ludzkość, a szczególnie wszystkich grzeszników i zanurz ich w przepaści miłosierdzia mojego.' },
      { title: 'Dni 2-9', text: 'Kontynuuj modlitwę za kapłanów, dusze pobożne, pogan, heretyków, dzieci, czcicieli miłosierdzia, dusze czyśćcowe i oziębłe.' }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-rozwiazujaca-wezly',
    name: 'Nowenna do MB Rozwiązującej Węzły',
    category: 'nowenna',
    emoji: '',
    description: 'Niezwykle skuteczna modlitwa o pomoc w rozwikłaniu "węzłów" naszego życia – problemów, które wydają się nie do rozwiązania, nałogów, konfliktów rodzinnych czy długów.',
    history: 'Inspiracją był obraz z XVIII wieku przedstawiający Maryję rozwiązującą węzły na białej wstędze. Modlitwa ta stała się szczególnie znana dzięki papieżowi Franciszkowi, który szerzył ten kult w Argentynie, a potem na całym świecie.',
    intentions: ['trudne sprawy', 'konflikty', 'problemy finansowe', 'nałogi'],
    duration: '20 min/dzień',
    days: 9,
    intro: 'Podczas nowenny prosimy Maryję, by swoimi dłońmi rozwiązała węzły, które duszą naszą duszę i niszczą nasze życie.',
    parts: [
      { title: 'Dzień 1 - Prośba o pomoc', text: 'Najświętsza Matko, Ty znasz wszystkie węzły mojego życia. Dzisiaj proszę Cię, abyś wzięła w swoje ręce ten węzeł: (wymień sprawę) i zaczęła go rozwiązywać dla chwały Twojego Syna.' },
      { title: 'Dzień 2 - Matko litościwa', text: 'Maryjo, Matko najukochańsza, pełna łaski, dzisiaj moje serce zwraca się do Ciebie. Uznaję, że jestem grzesznikiem i potrzebuję Twojej pomocy. Składam w Twoje ręce węzeł mojej pychy i egoizmu.' },
      { title: 'Dzień 3-9', text: 'Kontynuuj codzienną modlitwę, rozważając dobroć Maryi i ufając w Jej wstawiennictwo.' }
    ],
    mysteries: []
  },
  {
    id: 'rita-beznadziejne',
    name: 'Modlitwa do św. Rity',
    category: 'inne',
    emoji: '',
    description: 'Błagalna modlitwa do patronki spraw beznadziejnych i najtrudniejszych. Przynosi pociechę tym, którzy czują, że ich sytuacja nie ma już ludzkiego rozwiązania.',
    history: 'Św. Rita z Cascii żyła w XIV wieku. Po tragicznej stracie męża i synów wstąpiła do zakonu, gdzie otrzymała stygmat ciernia na czole. Od wieków czczona jako orędowniczka w sprawach po ludzku niemożliwych.',
    intentions: ['trudne sprawy', 'beznadzieja', 'małżeństwo', 'rodzina'],
    duration: '5 min',
    days: null,
    intro: 'Święta Rita jest patronką spraw beznadziejnych.',
    parts: [
      { title: 'Modlitwa', text: 'O potężna i sławna święta Rito, oto u Twoich stóp nędzna dusza potrzebująca pomocy... weź do serca moją sprawę, wstaw się do Boga, aby uprosić mi łaskę (wymień prośbę). Amen.' }
    ],
    mysteries: []
  },
  {
    id: 'charbel-uzdrowienie',
    name: 'Nowenna do św. Charbela',
    category: 'nowenna',
    emoji: '',
    description: 'Modlitwa o uzdrowienie i pomoc za wstawiennictwem wielkiego pustelnika z Libanu. Znana z licznych cudów medycznych i duchowych na całym świecie.',
    history: 'Św. Charbel Makhlouf był maronickim mnichem żyjącym w Libanie w XIX wieku. Spędził 23 lata w pustelni, żyjąc w ekstremalnej ascezie. Po jego śmierci w 1898 roku, z jego grobu biło niezwykłe światło.',
    intentions: ['zdrowie', 'uzdrowienie', 'spokój duszy', 'wiara'],
    duration: '10 min/dzień',
    days: 9,
    intro: 'Św. Charbel jest potężnym orędownikiem u Boga.',
    parts: [
      { title: 'Dzień 1 - O pokój serca', text: 'Święty Charbelu, Ty z wysokości nieba wstawiasz się za nami. Przychodzę do Ciebie, abyś uprosił mi u Boga łaskę (wymień prośbę).' }
    ],
    mysteries: []
  },
  {
    id: 'koronka-rany-jezusa',
    name: 'Koronka do Ran Pana Jezusa',
    category: 'koronka',
    emoji: '',
    description: 'Modlitwa skupiona na kontemplacji zbawczych ran Chrystusa. Jezus obiecał, że przez te rany udzieli wszystkiego, o co się Go prosi.',
    history: 'Została przekazana przez Pana Jezusa s. Marii Marcie Chambon (1841-1917). Jezus nazywał ją "apostołką swoich ran".',
    intentions: ['odpuszczenie grzechów', 'ratunek świata', 'zdrowie duszy'],
    duration: '15 min',
    days: null,
    intro: 'Modlitwa ta jest potężnym wynagrodzeniem za grzechy.',
    parts: [
      { title: 'Na dużych paciorkach', text: 'Ojcze Przedwieczny, ofiaruję Ci Rany Pana naszego Jezusa Chrystusa, na uleczenie ran dusz naszych.' },
      { title: 'Na małych paciorkach (10x)', text: 'O mój Jezu, przebaczenia i miłosierdzia, przez zasługi Twoich Świętych Ran.' }
    ],
    mysteries: []
  },
  {
    id: 'ekspedyt-pilne',
    name: 'Nowenna do św. Ekspedyta',
    category: 'nowenna',
    emoji: '',
    description: 'Modlitwa do patrona spraw pilnych i niecierpiących zwłoki. Idealna, gdy potrzebujemy natychmiastowej interwencji Bożej.',
    history: 'Św. Ekspedyt był rzymskim centurionem. Kiedy diabeł kazał mu odłożyć nawrócenie na "jutro", święty podeptał kruka i wybrał "dzisiaj".',
    intentions: ['pilne sprawy', 'egzaminy', 'kryzysy'],
    duration: '5 min/dzień',
    days: 9,
    intro: 'Św. Ekspedyt nie lubi zwłoki.',
    parts: [
      { title: 'Modlitwa codzienna', text: 'Święty Ekspedycie, Ty, który jesteś patronem spraw pilnych, przyjdź mi z pomocą. Moja sprawa jest bardzo nagląca: (wymień sprawę).' }
    ],
    mysteries: []
  },
  {
    id: 'peregryn-choroba',
    name: 'Modlitwa do św. Peregryna',
    category: 'inne',
    emoji: '',
    description: 'Specjalna modlitwa dla osób chorych na nowotwory. Św. Peregryn jest uznawany za patrona w najcięższych zmaganiach o zdrowie.',
    history: 'Św. Peregryn Laziosi sam cierpiał na raka nogi. Po żarliwej modlitwie przed krzyżem został całkowicie uzdrowiony.',
    intentions: ['zdrowie', 'choroba nowotworowa', 'operacja'],
    duration: '5 min',
    days: null,
    intro: 'Święty Peregrynie, Ty sam doświadczyłeś cierpienia i cudownego uzdrowienia.',
    parts: [
      { title: 'Modlitwa', text: 'O święty Peregrynie, spójrz na nas i wstaw się u Pana za wszystkimi chorymi, których Ci polecamy.' }
    ],
    mysteries: []
  },
  {
    id: 'michal-ochrona',
    name: 'Modlitwa do św. Michała Archanioła',
    category: 'inne',
    emoji: '',
    description: 'Potężna modlitwa o ochronę przed wpływem zła. Jest to egzorcyzm prywatny, który każdy wierny może odmawiać w chwilach pokusy.',
    history: 'Zatwierdzona przez papieża Leona XIII w 1884 roku jako tarcza dla wiernych przeciwko atakom duchowym.',
    intentions: ['ochrona', 'walka duchowa', 'pokusa', 'lęk'],
    duration: '1 min',
    days: null,
    intro: 'Święty Michał Archanioł to wódz niebieskich zastępów.',
    parts: [
      { title: 'Modlitwa', text: 'Święty Michale Archaniele, wspomagaj nas w walce, a przeciw niegodziwości i zasadzkom złego ducha bądź naszą obroną...' }
    ],
    mysteries: []
  },
  {
    id: 'antoni-zguba',
    name: 'Koronka do św. Antoniego',
    category: 'koronka',
    emoji: '',
    description: 'Modlitwa do patrona rzeczy zagubionych, ale przede wszystkim patrona odnajdywania drogi do Boga.',
    history: 'Św. Antoni z Padwy był wybitnym kaznodzieją XIII wieku. Pomaga odnaleźć nie tylko przedmioty, ale i spokój serca.',
    intentions: ['rzeczy zagubione', 'zagubienie duchowe', 'ubodzy'],
    duration: '10 min',
    days: null,
    intro: 'Święty Antoni, orędowniku nasz.',
    parts: [
      { title: 'Wezwania', text: 'Święty Antoni, któryś dostąpił przywileju odnajdywania rzeczy zgubionych, spraw bym odnalazł to, czego szukam.' }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-jozef-rodzina',
    name: 'Nowenna do św. Józefa',
    category: 'nowenna',
    emoji: '',
    description: 'Dziewięciodniowe nabożeństwo do ziemskiego Opiekuna Jezusa. Wzór ojcostwa, opieki nad rodziną i godnej pracy.',
    history: 'Św. Teresa z Avila uczyniła go swoim głównym orędownikiem, twierdząc, że Józef pomaga we wszystkich potrzebach.',
    intentions: ['rodzina', 'praca', 'dom', 'dobra śmierć'],
    duration: '10 min/dzień',
    days: 9,
    intro: 'Św. Józef to milczący świadek Bożej miłości.',
    parts: [
      { title: 'Dzień 1', text: 'Święty Józefie, mężu sprawiedliwy i pokorny, weź w opiekę moją rodzinę i moją pracę.' }
    ],
    mysteries: []
  },
  {
    id: 'koronka-siedem-bolesci',
    name: 'Koronka do Siedmiu Boleści Maryi',
    category: 'koronka',
    emoji: '',
    description: 'Głęboka modlitwa kontemplacyjna skupiona na współcierpieniu Maryi z Jezusem. Pomaga zrozumieć sens cierpienia.',
    history: 'Propagowana przez zakon Serwitów od XIII wieku. Maryja w objawieniach w Kibeho prosiła o ponowne odkrycie tej modlitwy.',
    intentions: ['nawrócenie', 'cierpienie', 'pokój w sercu'],
    duration: '20 min',
    days: null,
    intro: 'W tej modlitwie rozważamy siedem mieczy boleści Maryi.',
    parts: [
      { title: 'Boleść 1', text: 'Proroctwo Symeona. Maryjo, współczuję Ci w Twoim bólu, gdy usłyszałaś, że Twoją duszę miecz przeniknie.' }
    ],
    mysteries: []
  },
  {
    id: 'nowenna-tereska-roze',
    name: 'Nowenna do św. Teresy (Róż)',
    category: 'nowenna',
    emoji: '',
    description: 'Słynna nowenna o "deszcz róż" – czyli konkretne znaki Bożej łaski. Mała Tereska obiecała czynić dobrze na ziemi.',
    history: 'Św. Teresa od Dzieciątka Jezus obiecała, że po śmierci będzie zsyłać na ziemię deszcz łask miłości.',
    intentions: ['znaki łaski', 'pokora', 'zaufanie'],
    duration: '5 min/dzień',
    days: 9,
    intro: 'Proś o łaskę z dziecięcą ufnością.',
    parts: [
      { title: 'Modlitwa', text: 'Święta Tereso od Dzieciątka Jezus, ześlij na moją duszę deszcz róż Twojej miłości. Amen.' }
    ],
    mysteries: []
  },
  {
    id: 'koronka-duch-swiety',
    name: 'Koronka do Ducha Świętego',
    category: 'koronka',
    emoji: '',
    description: 'Modlitwa o siedem darów Ducha Świętego. Wołanie o ogień miłości, który przemienia serce.',
    history: 'Zatwierdzona przez papieża Leona XIII jako sposób na ożywienie kultu Trzeciej Osoby Boskiej.',
    intentions: ['dary Ducha', 'mądrość', 'ważne wybory'],
    duration: '10 min',
    days: null,
    intro: 'Duchu Święty, natchnij nas.',
    parts: [
      { title: 'Wezwanie 1', text: 'Przyjdź Duchu Mądrości, odciągnij nas od rzeczy ziemskich, a skłoń nas do miłowania rzeczy niebieskich.' }
    ],
    mysteries: []
  },
  {
    id: 'litania-serce',
    name: 'Litania do Serca Pana Jezusa',
    category: 'litania',
    emoji: '',
    description: 'Kontemplacja nieskończonej miłości Boga objawionej w ludzkim Sercu Jezusa. Modlitwa wynagradzająca.',
    history: 'Powstała w XIX wieku na fundamencie objawień św. Małgorzaty Marii Alacoque. Fundament nabożeństw czerwcowych.',
    intentions: ['miłość Boża', 'wynagrodzenie'],
    duration: '12 min',
    days: null,
    intro: 'Serce Jezusa, domie Boży i bramo niebios.',
    parts: [
      { title: 'Litania', text: 'Serce Jezusa, Syna Ojca Przedwiecznego... Serce Jezusa, nieskończonego majestatu... zmiłuj się nad nami.' }
    ],
    mysteries: []
  },
  {
    id: 'litania-duch-swiety',
    name: 'Litania do Ducha Świętego',
    category: 'litania',
    emoji: '',
    description: 'Wzywanie Trzeciej Osoby Boskiej o światło, moc i uświęcenie w codziennym życiu.',
    history: 'Tradycyjna modlitwa Kościoła o wylanie darów Ducha Świętego, szczególnie popularna w okresie przed Zesłaniem Ducha Świętego.',
    intentions: ['światło Ducha', 'uświęcenie', 'rozeznanie drogi'],
    duration: '10 min',
    days: null,
    intro: 'Duchu Święty, Boże, zmiłuj się nad nami.',
    parts: [
      { title: 'Litania', text: 'Duchu Święty, który od Ojca i Syna pochodzisz – zmiłuj się nad nami. Duchu prawdy i miłości... Duchu mądrości i rozumu... wybaw nas.' }
    ],
    mysteries: []
  },
  {
    id: 'modlitwy-poranne-pelne',
    name: 'Modlitwy poranne',
    category: 'inne',
    emoji: '',
    description: 'Kompletny zestaw modlitw na rozpoczęcie dnia. Pozwala uświęcić każdą chwilę nadchodzącego czasu.',
    history: 'Od wieków chrześcijanie zaczynali dzień od ofiarowania swoich trudów Bogu. Esencja polskiej pobożności.',
    intentions: ['uświęcenie dnia', 'bezpieczeństwo', 'rodzina'],
    duration: '7 min',
    days: null,
    intro: 'Boże, dziękuję Ci za noc dzisiejszą.',
    parts: [
      { title: 'Akt ofiarowania', text: 'Boże mój, ofiaruję Ci dzisiaj wszystkie moje modlitwy, prace, radości i cierpienia.' },
      { title: 'Aniele Boży', text: 'Aniele Boży, stróżu mój, Ty zawsze przy mnie stój. Rano, wieczór, we dnie, w nocy, bądź mi zawsze ku pomocy.' }
    ],
    mysteries: []
  },
  {
    id: 'modlitwa-wieczorna',
    name: 'Modlitwy wieczorne',
    category: 'inne',
    emoji: '',
    description: 'Modlitwy na zakończenie dnia, obejmujące dziękczynienie i rachunek sumienia.',
    history: 'Zakorzenione w tradycji klasztornej (Kompleta), służą podsumowaniu dnia i powierzeniu się Bożej opiece.',
    intentions: ['wdzięczność', 'rachunek sumienia', 'spokojny sen'],
    duration: '5 min',
    days: null,
    intro: 'Spokojne zakończenie dnia w obecności Bożej.',
    parts: [
      { title: 'Dziękczynienie', text: 'Dziękuję Ci, Panie, za wszystkie dobrodziejstwa dzisiejszego dnia.' },
      { title: 'Akt żalu', text: 'Ach, żałuję za me złości, jedynie dla Twej miłości.' }
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
