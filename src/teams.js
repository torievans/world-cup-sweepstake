export const TEAMS = [
  // ── GROUP A ─────────────────────────────────────────────────────────────────
  {
    id: 1, name: "Mexico", flag: "🇲🇽", group: "A",
    starPlayer: "Santiago Giménez",
    fixtures: [
      { opponent: "South Africa", date: "Jun 11" },
      { opponent: "South Korea",  date: "Jun 18" },
      { opponent: "Czechia",      date: "Jun 24" },
    ],
    fact: "Co-hosts Mexico open the entire 2026 World Cup at the legendary Estadio Azteca on June 11 — a remake of the 2010 opener with the exact same two managers.",
  },
  {
    id: 2, name: "South Africa", flag: "🇿🇦", group: "A",
    starPlayer: "Percy Tau",
    fixtures: [
      { opponent: "Mexico",      date: "Jun 11" },
      { opponent: "Czechia",     date: "Jun 18" },
      { opponent: "South Korea", date: "Jun 24" },
    ],
    fact: "Bafana Bafana return to a World Cup for the first time since hosting it in 2010, and their opening fixture is a rematch of that very tournament's opener — against Mexico, with both coaches the same as 16 years ago!",
  },
  {
    id: 3, name: "South Korea", flag: "🇰🇷", group: "A",
    starPlayer: "Son Heung-min",
    fixtures: [
      { opponent: "Czechia",      date: "Jun 11" },
      { opponent: "Mexico",       date: "Jun 18" },
      { opponent: "South Africa", date: "Jun 24" },
    ],
    fact: "Son Heung-min captains South Korea at 33 in what is likely his final World Cup. He is already the country's all-time top scorer and one of the Premier League's greatest ever players.",
  },
  {
    id: 4, name: "Czechia", flag: "🇨🇿", group: "A",
    starPlayer: "Tomáš Souček",
    fixtures: [
      { opponent: "South Korea",  date: "Jun 11" },
      { opponent: "South Africa", date: "Jun 18" },
      { opponent: "Mexico",       date: "Jun 24" },
    ],
    fact: "Czechia booked their ticket to the USA in dramatic fashion, beating Denmark on penalties in the UEFA playoff final on March 31, 2026.",
  },

  // ── GROUP B ─────────────────────────────────────────────────────────────────
  {
    id: 5, name: "Canada", flag: "🇨🇦", group: "B",
    starPlayer: "Alphonso Davies",
    fixtures: [
      { opponent: "Bosnia & Herzegovina", date: "Jun 12" },
      { opponent: "Qatar",                date: "Jun 19" },
      { opponent: "Switzerland",          date: "Jun 24" },
    ],
    fact: "Co-hosts Canada have their best squad ever in 2026, featuring Bayern Munich's Alphonso Davies and prolific striker Jonathan David — their fans in Toronto will be electric.",
  },
  {
    id: 6, name: "Switzerland", flag: "🇨🇭", group: "B",
    starPlayer: "Granit Xhaka",
    fixtures: [
      { opponent: "Qatar",                date: "Jun 12" },
      { opponent: "Bosnia & Herzegovina", date: "Jun 18" },
      { opponent: "Canada",               date: "Jun 24" },
    ],
    fact: "Switzerland are the most consistent team at major tournaments — quietly solid, rarely spectacular, yet they almost always advance. Don't sleep on the Swiss.",
  },
  {
    id: 7, name: "Qatar", flag: "🇶🇦", group: "B",
    starPlayer: "Akram Afif",
    fixtures: [
      { opponent: "Switzerland",          date: "Jun 12" },
      { opponent: "Canada",               date: "Jun 19" },
      { opponent: "Bosnia & Herzegovina", date: "Jun 25" },
    ],
    fact: "Qatar are the 2023 AFC Asian Cup champions and qualified on merit this time — a far cry from 2022 when as hosts they became the first team ever to exit in the group stage of their own tournament.",
  },
  {
    id: 8, name: "Bosnia & Herzegovina", flag: "🇧🇦", group: "B",
    starPlayer: "Haris Tabakovic",
    fixtures: [
      { opponent: "Canada",      date: "Jun 12" },
      { opponent: "Switzerland", date: "Jun 18" },
      { opponent: "Qatar",       date: "Jun 25" },
    ],
    fact: "Bosnia pulled off one of qualifying's biggest shocks, knocking out four-time champions Italy on penalties in the playoff final after Tabakovic's 79th-minute equaliser. Italy miss their third straight World Cup.",
  },

  // ── GROUP C ─────────────────────────────────────────────────────────────────
  {
    id: 9, name: "Brazil", flag: "🇧🇷", group: "C",
    starPlayer: "Vinícius Jr.",
    fixtures: [
      { opponent: "Morocco", date: "Jun 13" },
      { opponent: "Haiti",   date: "Jun 20" },
      { opponent: "Scotland",date: "Jun 24" },
    ],
    fact: "The Seleção have won the World Cup a record five times, but arrive in 2026 with an injury crisis — Estêvão, Rodrygo and others are doubts. Vinícius Jr. must carry the hopes of a nation.",
  },
  {
    id: 10, name: "Morocco", flag: "🇲🇦", group: "C",
    starPlayer: "Achraf Hakimi",
    fixtures: [
      { opponent: "Brazil",  date: "Jun 13" },
      { opponent: "Scotland",date: "Jun 20" },
      { opponent: "Haiti",   date: "Jun 25" },
    ],
    fact: "Morocco made history at Qatar 2022 by becoming the first ever African team to reach a World Cup semi-final. Ranked 8th in the world, they are a genuine contender in 2026.",
  },
  {
    id: 11, name: "Haiti", flag: "🇭🇹", group: "C",
    starPlayer: "Frantzdy Pierrot",
    fixtures: [
      { opponent: "Scotland", date: "Jun 13" },
      { opponent: "Brazil",   date: "Jun 20" },
      { opponent: "Morocco",  date: "Jun 25" },
    ],
    fact: "Haiti make only their second-ever World Cup appearance. Their first was in 1974, when they became the first Caribbean nation to play at a World Cup.",
  },
  {
    id: 12, name: "Scotland", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", group: "C",
    starPlayer: "Andy Robertson",
    fixtures: [
      { opponent: "Haiti",   date: "Jun 13" },
      { opponent: "Morocco", date: "Jun 20" },
      { opponent: "Brazil",  date: "Jun 24" },
    ],
    fact: "Scotland return to the World Cup for the first time since France 1998 — 28 years of hurt is finally over! Andy Robertson, Scott McTominay and Billy Gilmour lead the charge.",
  },

  // ── GROUP D ─────────────────────────────────────────────────────────────────
  {
    id: 13, name: "USA", flag: "🇺🇸", group: "D",
    starPlayer: "Christian Pulisic",
    fixtures: [
      { opponent: "Paraguay",  date: "Jun 12" },
      { opponent: "Australia", date: "Jun 19" },
      { opponent: "Türkiye",   date: "Jun 25" },
    ],
    fact: "Co-hosts USA landed the hardest host group, but SoFi Stadium in Los Angeles will be rocking for their opener. Mauricio Pochettino's team are desperate to deliver on home soil.",
  },
  {
    id: 14, name: "Paraguay", flag: "🇵🇾", group: "D",
    starPlayer: "Miguel Almirón",
    fixtures: [
      { opponent: "USA",       date: "Jun 12" },
      { opponent: "Türkiye",   date: "Jun 20" },
      { opponent: "Australia", date: "Jun 26" },
    ],
    fact: "Paraguay reached the quarter-finals at both the 1954 and 2010 World Cups — they are no pushovers and qualified from South America with genuine momentum.",
  },
  {
    id: 15, name: "Australia", flag: "🇦🇺", group: "D",
    starPlayer: "Mathew Leckie",
    fixtures: [
      { opponent: "Türkiye",  date: "Jun 12" },
      { opponent: "USA",      date: "Jun 19" },
      { opponent: "Paraguay", date: "Jun 26" },
    ],
    fact: "The Socceroos have serious tournament pedigree — they reached the quarter-finals at Qatar 2022, knocking out Argentina's arch-rivals along the way.",
  },
  {
    id: 16, name: "Türkiye", flag: "🇹🇷", group: "D",
    starPlayer: "Arda Güler",
    fixtures: [
      { opponent: "Australia", date: "Jun 12" },
      { opponent: "Paraguay",  date: "Jun 20" },
      { opponent: "USA",       date: "Jun 25" },
    ],
    fact: "Turkey finished third at the 2002 World Cup and return for the first time since. Real Madrid sensation Arda Güler — dubbed 'the Turkish Messi' — makes his World Cup debut.",
  },

  // ── GROUP E ─────────────────────────────────────────────────────────────────
  {
    id: 17, name: "Germany", flag: "🇩🇪", group: "E",
    starPlayer: "Florian Wirtz",
    fixtures: [
      { opponent: "Curaçao",     date: "Jun 14" },
      { opponent: "Ivory Coast", date: "Jun 20" },
      { opponent: "Ecuador",     date: "Jun 25" },
    ],
    fact: "Four-time world champions, Germany drew the softest group of any major team in 2026. Florian Wirtz and Jamal Musiala give them one of the most thrilling midfields in world football.",
  },
  {
    id: 18, name: "Curaçao", flag: "🇨🇼", group: "E",
    starPlayer: "Leandro Bacuna",
    fixtures: [
      { opponent: "Germany",     date: "Jun 14" },
      { opponent: "Ecuador",     date: "Jun 20" },
      { opponent: "Ivory Coast", date: "Jun 25" },
    ],
    fact: "Curaçao are the smallest nation by population ever to qualify for a FIFA World Cup — a tiny Caribbean island of just 150,000 people making history on football's biggest stage. Coached by Dutch legend Dick Advocaat!",
  },
  {
    id: 19, name: "Ivory Coast", flag: "🇨🇮", group: "E",
    starPlayer: "Sébastien Haller",
    fixtures: [
      { opponent: "Ecuador",  date: "Jun 14" },
      { opponent: "Germany",  date: "Jun 20" },
      { opponent: "Curaçao",  date: "Jun 25" },
    ],
    fact: "The Elephants have produced some of Africa's greatest players, from Didier Drogba to Yaya Touré. Their current squad is packed with Premier League talent and they're no easy ride.",
  },
  {
    id: 20, name: "Ecuador", flag: "🇪🇨", group: "E",
    starPlayer: "Moisés Caicedo",
    fixtures: [
      { opponent: "Ivory Coast", date: "Jun 14" },
      { opponent: "Curaçao",     date: "Jun 20" },
      { opponent: "Germany",     date: "Jun 25" },
    ],
    fact: "Ecuador have now qualified for five consecutive World Cups and are the most likely team to spring a surprise against Germany. Chelsea's Moisés Caicedo is one of the best midfielders in world football.",
  },

  // ── GROUP F ─────────────────────────────────────────────────────────────────
  {
    id: 21, name: "Netherlands", flag: "🇳🇱", group: "F",
    starPlayer: "Virgil van Dijk",
    fixtures: [
      { opponent: "Japan",   date: "Jun 14" },
      { opponent: "Sweden",  date: "Jun 20" },
      { opponent: "Tunisia", date: "Jun 25" },
    ],
    fact: "The Dutch have reached three World Cup finals (1974, 1978, 2010) and won none of them. Oranje are always the neutrals' second favourite — will 2026 finally be their year?",
  },
  {
    id: 22, name: "Japan", flag: "🇯🇵", group: "F",
    starPlayer: "Takefusa Kubo",
    fixtures: [
      { opponent: "Netherlands", date: "Jun 14" },
      { opponent: "Tunisia",     date: "Jun 20" },
      { opponent: "Sweden",      date: "Jun 25" },
    ],
    fact: "Japan are serial giant-killers — they beat both Germany and Spain at Qatar 2022, and continued that form by defeating England 1-0 at Wembley in March 2026.",
  },
  {
    id: 23, name: "Sweden", flag: "🇸🇪", group: "F",
    starPlayer: "Viktor Gyökeres",
    fixtures: [
      { opponent: "Tunisia",     date: "Jun 14" },
      { opponent: "Netherlands", date: "Jun 20" },
      { opponent: "Japan",       date: "Jun 25" },
    ],
    fact: "Viktor Gyökeres arrives at the World Cup in the most electric scoring form of any player in Europe, having fired Sweden through the playoffs with goals galore. He's a real Golden Boot contender.",
  },
  {
    id: 24, name: "Tunisia", flag: "🇹🇳", group: "F",
    starPlayer: "Wahbi Khazri",
    fixtures: [
      { opponent: "Sweden",      date: "Jun 14" },
      { opponent: "Japan",       date: "Jun 20" },
      { opponent: "Netherlands", date: "Jun 25" },
    ],
    fact: "Tunisia's clash with Japan on June 20 in Monterrey will be the 1,000th match in FIFA World Cup history — what a milestone occasion to be part of!",
  },

  // ── GROUP G ─────────────────────────────────────────────────────────────────
  {
    id: 25, name: "Belgium", flag: "🇧🇪", group: "G",
    starPlayer: "Kevin De Bruyne",
    fixtures: [
      { opponent: "Egypt",       date: "Jun 15" },
      { opponent: "Iran",        date: "Jun 21" },
      { opponent: "New Zealand", date: "Jun 26" },
    ],
    fact: "This is Belgium's Golden Generation's last real chance — De Bruyne, Lukaku and Doku in one team. ESPN rated their group one of the four easiest in World Cup history. No excuses.",
  },
  {
    id: 26, name: "Egypt", flag: "🇪🇬", group: "G",
    starPlayer: "Mohamed Salah",
    fixtures: [
      { opponent: "Belgium",     date: "Jun 15" },
      { opponent: "New Zealand", date: "Jun 22" },
      { opponent: "Iran",        date: "Jun 26" },
    ],
    fact: "Mohamed Salah is one of the greatest players of his generation and this could be his final World Cup opportunity. Egypt's entire campaign rests on his shoulders — and he's ready.",
  },
  {
    id: 27, name: "Iran", flag: "🇮🇷", group: "G",
    starPlayer: "Mehdi Taremi",
    fixtures: [
      { opponent: "New Zealand", date: "Jun 15" },
      { opponent: "Belgium",     date: "Jun 21" },
      { opponent: "Egypt",       date: "Jun 26" },
    ],
    fact: "Iran are one of Asia's most experienced World Cup nations, qualifying for four consecutive tournaments. They're disciplined, well-organised and dangerous on the counter-attack.",
  },
  {
    id: 28, name: "New Zealand", flag: "🇳🇿", group: "G",
    starPlayer: "Joe Bell",
    fixtures: [
      { opponent: "Iran",    date: "Jun 15" },
      { opponent: "Egypt",   date: "Jun 22" },
      { opponent: "Belgium", date: "Jun 26" },
    ],
    fact: "New Zealand are the lowest-ranked team in the tournament at 85th in the world — but the All Whites have caused upsets before at the World Cup and will play without fear.",
  },

  // ── GROUP H ─────────────────────────────────────────────────────────────────
  {
    id: 29, name: "Spain", flag: "🇪🇸", group: "H",
    starPlayer: "Lamine Yamal",
    fixtures: [
      { opponent: "Cape Verde",   date: "Jun 15" },
      { opponent: "Saudi Arabia", date: "Jun 22" },
      { opponent: "Uruguay",      date: "Jun 26" },
    ],
    fact: "The reigning European champions and world #2, Spain boast one of the most exciting young squads in football history. Teenager Lamine Yamal is the most hyped player heading into the tournament.",
  },
  {
    id: 30, name: "Cape Verde", flag: "🇨🇻", group: "H",
    starPlayer: "Ryan Mendes",
    fixtures: [
      { opponent: "Spain",        date: "Jun 15" },
      { opponent: "Uruguay",      date: "Jun 22" },
      { opponent: "Saudi Arabia", date: "Jun 26" },
    ],
    fact: "Cape Verde make their World Cup debut! The island nation of just 560,000 people is one of four debutants in 2026 — the smallest African nation ever to qualify for a World Cup.",
  },
  {
    id: 31, name: "Saudi Arabia", flag: "🇸🇦", group: "H",
    starPlayer: "Salem Al-Dawsari",
    fixtures: [
      { opponent: "Uruguay",    date: "Jun 15" },
      { opponent: "Spain",      date: "Jun 22" },
      { opponent: "Cape Verde", date: "Jun 26" },
    ],
    fact: "Never write Saudi Arabia off! Salem Al-Dawsari's late winner against Argentina at Qatar 2022 is one of the greatest World Cup upsets in history. They are dangerous.",
  },
  {
    id: 32, name: "Uruguay", flag: "🇺🇾", group: "H",
    starPlayer: "Federico Valverde",
    fixtures: [
      { opponent: "Saudi Arabia", date: "Jun 15" },
      { opponent: "Cape Verde",   date: "Jun 22" },
      { opponent: "Spain",        date: "Jun 26" },
    ],
    fact: "Two-time world champions (1930 & 1950), Uruguay punch massively above their weight for a country of 3.5 million. Real Madrid's Federico Valverde and Darwin Núñez lead a ferocious attack.",
  },

  // ── GROUP I ─────────────────────────────────────────────────────────────────
  {
    id: 33, name: "France", flag: "🇫🇷", group: "I",
    starPlayer: "Kylian Mbappé",
    fixtures: [
      { opponent: "Senegal", date: "Jun 16" },
      { opponent: "Iraq",    date: "Jun 22" },
      { opponent: "Norway",  date: "Jun 26" },
    ],
    fact: "The world #1 ranked team and reigning 2018 champions, France are the tournament favourites. They also face a Group of Death rematch — Senegal knocked them out at the 2002 group stage, and the grudge match is on June 16.",
  },
  {
    id: 34, name: "Senegal", flag: "🇸🇳", group: "I",
    starPlayer: "Ismaila Sarr",
    fixtures: [
      { opponent: "France",  date: "Jun 16" },
      { opponent: "Norway",  date: "Jun 22" },
      { opponent: "Iraq",    date: "Jun 26" },
    ],
    fact: "Senegal famously shocked world champions France in the 2002 group stage in one of the biggest upsets in World Cup history. On June 16, 2026, the rematch takes place — 24 years of score-settling.",
  },
  {
    id: 35, name: "Norway", flag: "🇳🇴", group: "I",
    starPlayer: "Erling Haaland",
    fixtures: [
      { opponent: "Iraq",    date: "Jun 16" },
      { opponent: "Senegal", date: "Jun 22" },
      { opponent: "France",  date: "Jun 26" },
    ],
    fact: "Erling Haaland can win matches on his own, and at this World Cup he gets to prove it on the biggest stage. Alongside Martin Ødegaard in midfield, Norway are more than capable of reaching the knockout rounds.",
  },
  {
    id: 36, name: "Iraq", flag: "🇮🇶", group: "I",
    starPlayer: "Aymen Hussein",
    fixtures: [
      { opponent: "Norway",  date: "Jun 16" },
      { opponent: "France",  date: "Jun 22" },
      { opponent: "Senegal", date: "Jun 26" },
    ],
    fact: "Iraq return to the World Cup after a 40-year absence! Their last appearance was Mexico 1986. They qualified via a remarkable charter-flight journey to Mexico, beating Bolivia 2-1 in the intercontinental playoff.",
  },

  // ── GROUP J ─────────────────────────────────────────────────────────────────
  {
    id: 37, name: "Argentina", flag: "🇦🇷", group: "J",
    starPlayer: "Lionel Messi",
    fixtures: [
      { opponent: "Algeria", date: "Jun 16" },
      { opponent: "Austria", date: "Jun 22" },
      { opponent: "Jordan",  date: "Jun 27" },
    ],
    fact: "Defending world champions Argentina arrive with Lionel Messi at 38 — widely considered the greatest footballer of all time, playing what may be his final World Cup. Possibly the greatest send-off in sporting history.",
  },
  {
    id: 38, name: "Algeria", flag: "🇩🇿", group: "J",
    starPlayer: "Riyad Mahrez",
    fixtures: [
      { opponent: "Argentina", date: "Jun 16" },
      { opponent: "Jordan",    date: "Jun 22" },
      { opponent: "Austria",   date: "Jun 27" },
    ],
    fact: "Algeria are one of Africa's most storied footballing nations, with a passionate fanbase. Riyad Mahrez's brilliant career included Premier League and Champions League glory — he'll want a World Cup run to match.",
  },
  {
    id: 39, name: "Austria", flag: "🇦🇹", group: "J",
    starPlayer: "Marcel Sabitzer",
    fixtures: [
      { opponent: "Jordan",    date: "Jun 16" },
      { opponent: "Argentina", date: "Jun 22" },
      { opponent: "Algeria",   date: "Jun 27" },
    ],
    fact: "Austria under Ralf Rangnick play an intense, high-press style that has taken European football by storm. They're genuinely capable of beating anyone on their day — including the defending champions.",
  },
  {
    id: 40, name: "Jordan", flag: "🇯🇴", group: "J",
    starPlayer: "Musa Al-Taamari",
    fixtures: [
      { opponent: "Austria",   date: "Jun 16" },
      { opponent: "Algeria",   date: "Jun 22" },
      { opponent: "Argentina", date: "Jun 27" },
    ],
    fact: "Jordan make their World Cup debut after reaching the 2024 AFC Asian Cup final. They are one of four first-time World Cup nations in 2026 — a remarkable achievement for the small Middle Eastern kingdom.",
  },

  // ── GROUP K ─────────────────────────────────────────────────────────────────
  {
    id: 41, name: "Portugal", flag: "🇵🇹", group: "K",
    starPlayer: "Bruno Fernandes",
    fixtures: [
      { opponent: "DR Congo",   date: "Jun 17" },
      { opponent: "Uzbekistan", date: "Jun 23" },
      { opponent: "Colombia",   date: "Jun 27" },
    ],
    fact: "Portugal boast a squad of extraordinary depth — Bruno Fernandes, Bernardo Silva, Rafael Leão and Cristiano Ronaldo at 41, possibly playing at his sixth World Cup. They're genuine contenders.",
  },
  {
    id: 42, name: "DR Congo", flag: "🇨🇩", group: "K",
    starPlayer: "Yoane Wissa",
    fixtures: [
      { opponent: "Portugal",   date: "Jun 17" },
      { opponent: "Colombia",   date: "Jun 23" },
      { opponent: "Uzbekistan", date: "Jun 27" },
    ],
    fact: "DR Congo qualified with a dramatic 100th-minute goal against Jamaica in the intercontinental playoff — one of the most last-gasp qualifications in World Cup history. They qualify under their current name for the very first time.",
  },
  {
    id: 43, name: "Uzbekistan", flag: "🇺🇿", group: "K",
    starPlayer: "Eldor Shomurodov",
    fixtures: [
      { opponent: "Colombia", date: "Jun 17" },
      { opponent: "Portugal", date: "Jun 23" },
      { opponent: "DR Congo", date: "Jun 27" },
    ],
    fact: "Uzbekistan make their World Cup debut! One of four first-timers in 2026, the Central Asian nation upset the AFC qualifying order to earn their historic spot on the world stage.",
  },
  {
    id: 44, name: "Colombia", flag: "🇨🇴", group: "K",
    starPlayer: "James Rodríguez",
    fixtures: [
      { opponent: "Uzbekistan", date: "Jun 17" },
      { opponent: "DR Congo",   date: "Jun 23" },
      { opponent: "Portugal",   date: "Jun 27" },
    ],
    fact: "Colombia are ranked 13th in the world and are legitimately capable of winning Group K. James Rodríguez — the Golden Boot winner at Brazil 2014 — makes a return to the big stage alongside Liverpool's Luis Díaz.",
  },

  // ── GROUP L ─────────────────────────────────────────────────────────────────
  {
    id: 45, name: "England", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", group: "L",
    starPlayer: "Harry Kane",
    fixtures: [
      { opponent: "Croatia", date: "Jun 17" },
      { opponent: "Ghana",   date: "Jun 23" },
      { opponent: "Panama",  date: "Jun 27" },
    ],
    fact: "England qualified with a perfect 8-win, 0-goals-conceded record under Thomas Tuchel — but they lost to Japan at Wembley in March 2026. 60 years of hurt and counting... can 2026 finally be their year?",
  },
  {
    id: 46, name: "Croatia", flag: "🇭🇷", group: "L",
    starPlayer: "Luka Modrić",
    fixtures: [
      { opponent: "England", date: "Jun 17" },
      { opponent: "Panama",  date: "Jun 23" },
      { opponent: "Ghana",   date: "Jun 27" },
    ],
    fact: "Luka Modrić, the greatest Croatian player of all time, pulls strings from midfield at 40 years old. He knocked England out of the 2018 semi-final — England fans will not forget.",
  },
  {
    id: 47, name: "Ghana", flag: "🇬🇭", group: "L",
    starPlayer: "Thomas Partey",
    fixtures: [
      { opponent: "Panama",  date: "Jun 17" },
      { opponent: "England", date: "Jun 23" },
      { opponent: "Croatia", date: "Jun 27" },
    ],
    fact: "The Black Stars are one of Africa's most exciting teams, packed with Premier League players. Ghana's style — fast, physical, skilful — makes them one of the most entertaining teams to watch.",
  },
  {
    id: 48, name: "Panama", flag: "🇵🇦", group: "L",
    starPlayer: "Adalberto Carrasquilla",
    fixtures: [
      { opponent: "Ghana",   date: "Jun 17" },
      { opponent: "Croatia", date: "Jun 23" },
      { opponent: "England", date: "Jun 27" },
    ],
    fact: "Panama are tactically disciplined and hard to beat — they have conceded the fewest goals of any CONCACAF qualifier. And they have the honour of playing England in their final group game.",
  },
];
