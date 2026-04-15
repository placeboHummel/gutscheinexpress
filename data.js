// Shared product data and utility functions
const PRODUCTS = [
  {
    id: 1,
    slug: "amazon-20",
    brand: "Amazon",
    brandSlug: "amazon",
    name: "Amazon Gutschein 20\u20ac",
    value: 20,
    price: 18,
    discount: 10,
    color: "from-[#FF9900] to-[#e88b00]",
    textColor: "text-[#FF9900]",
    bgAccent: "bg-[#FF9900]",
    validity: "G\u00fcltig bis 31.12.2028",
    validityYears: "10 Jahre g\u00fcltig",
    description: "Spare 10% auf deinen Amazon Gutschein. Einl\u00f6sbar f\u00fcr Millionen von Produkten auf Amazon.de \u2014 von Elektronik \u00fcber Mode bis hin zu Haushaltswaren.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf amazon.de",
      "10 Jahre G\u00fcltigkeit",
      "F\u00fcr alle Produkte auf Amazon nutzbar",
      "Ideal als Geschenk"
    ],
    howToRedeem: [
      "Gehe auf amazon.de und melde dich an",
      "Klicke auf \u201eKonto & Listen\u201c \u2192 \u201eGutschein einl\u00f6sen\u201c",
      "Gib den erhaltenen Code ein",
      "Das Guthaben wird sofort deinem Konto gutgeschrieben"
    ],
    available: true
  },
  {
    id: 2,
    slug: "amazon-50",
    brand: "Amazon",
    brandSlug: "amazon",
    name: "Amazon Gutschein 50\u20ac",
    value: 50,
    price: 45,
    discount: 10,
    color: "from-[#FF9900] to-[#e88b00]",
    textColor: "text-[#FF9900]",
    bgAccent: "bg-[#FF9900]",
    validity: "10 Jahre g\u00fcltig",
    validityYears: "10 Jahre g\u00fcltig",
    description: "Spare 10% auf deinen Amazon Gutschein. Einl\u00f6sbar f\u00fcr Millionen von Produkten auf Amazon.de \u2014 von Elektronik \u00fcber Mode bis hin zu Haushaltswaren.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf amazon.de",
      "10 Jahre G\u00fcltigkeit",
      "F\u00fcr alle Produkte auf Amazon nutzbar",
      "Ideal als Geschenk"
    ],
    howToRedeem: [
      "Gehe auf amazon.de und melde dich an",
      "Klicke auf \u201eKonto & Listen\u201c \u2192 \u201eGutschein einl\u00f6sen\u201c",
      "Gib den erhaltenen Code ein",
      "Das Guthaben wird sofort deinem Konto gutgeschrieben"
    ],
    available: true
  },
  {
    id: 3,
    slug: "amazon-100",
    brand: "Amazon",
    brandSlug: "amazon",
    name: "Amazon Gutschein 100\u20ac",
    value: 100,
    price: 90,
    discount: 10,
    color: "from-[#FF9900] to-[#e88b00]",
    textColor: "text-[#FF9900]",
    bgAccent: "bg-[#FF9900]",
    validity: "10 Jahre g\u00fcltig",
    validityYears: "10 Jahre g\u00fcltig",
    description: "Spare 10% auf deinen Amazon Gutschein. Einl\u00f6sbar f\u00fcr Millionen von Produkten auf Amazon.de \u2014 von Elektronik \u00fcber Mode bis hin zu Haushaltswaren.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf amazon.de",
      "10 Jahre G\u00fcltigkeit",
      "F\u00fcr alle Produkte auf Amazon nutzbar",
      "Perfekt als Geschenk f\u00fcr jeden Anlass"
    ],
    howToRedeem: [
      "Gehe auf amazon.de und melde dich an",
      "Klicke auf \u201eKonto & Listen\u201c \u2192 \u201eGutschein einl\u00f6sen\u201c",
      "Gib den erhaltenen Code ein",
      "Das Guthaben wird sofort deinem Konto gutgeschrieben"
    ],
    available: true
  },
  {
    id: 4,
    slug: "amazon-500",
    brand: "Amazon",
    brandSlug: "amazon",
    name: "Amazon Gutschein 500\u20ac",
    value: 500,
    price: 450,
    discount: 10,
    color: "from-[#FF9900] to-[#e88b00]",
    textColor: "text-[#FF9900]",
    bgAccent: "bg-[#FF9900]",
    validity: "G\u00fcltig bis 01.02.2029",
    validityYears: "Bis 2029 g\u00fcltig",
    description: "Unser gr\u00f6\u00dfter Amazon Gutschein \u2014 spare satte 50\u20ac. Perfekt f\u00fcr gro\u00dfe Anschaffungen oder als Premium-Geschenk.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf amazon.de",
      "G\u00fcltig bis 2029",
      "50\u20ac sofort gespart",
      "Premium-Geschenk f\u00fcr besondere Anl\u00e4sse"
    ],
    howToRedeem: [
      "Gehe auf amazon.de und melde dich an",
      "Klicke auf \u201eKonto & Listen\u201c \u2192 \u201eGutschein einl\u00f6sen\u201c",
      "Gib den erhaltenen Code ein",
      "Das Guthaben wird sofort deinem Konto gutgeschrieben"
    ],
    available: true
  },
  {
    id: 5,
    slug: "mediamarkt-20",
    brand: "MediaMarkt",
    brandSlug: "mediamarkt",
    name: "MediaMarkt Gutschein 20\u20ac",
    value: 20,
    price: 18,
    discount: 10,
    color: "from-[#df0000] to-[#a00000]",
    textColor: "text-[#df0000]",
    bgAccent: "bg-[#df0000]",
    validity: "Bis zu 3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10% auf Technik bei MediaMarkt. Einl\u00f6sbar f\u00fcr Smartphones, Laptops, TVs, Gaming und alles rund um Elektronik.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Online & im Markt einl\u00f6sbar",
      "Bis zu 3 Jahre g\u00fcltig",
      "F\u00fcr das gesamte MediaMarkt-Sortiment",
      "Perfekt f\u00fcr Technik-Fans"
    ],
    howToRedeem: [
      "Gehe auf mediamarkt.de oder besuche einen Markt",
      "Lege Produkte in den Warenkorb",
      "Gib im Checkout den Gutscheincode ein",
      "Der Betrag wird sofort abgezogen"
    ],
    available: true
  },
  {
    id: 6,
    slug: "mediamarkt-50",
    brand: "MediaMarkt",
    brandSlug: "mediamarkt",
    name: "MediaMarkt Gutschein 50\u20ac",
    value: 50,
    price: 45,
    discount: 10,
    color: "from-[#df0000] to-[#a00000]",
    textColor: "text-[#df0000]",
    bgAccent: "bg-[#df0000]",
    validity: "Bis zu 3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10% auf Technik bei MediaMarkt. Einl\u00f6sbar f\u00fcr Smartphones, Laptops, TVs, Gaming und alles rund um Elektronik.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Online & im Markt einl\u00f6sbar",
      "Bis zu 3 Jahre g\u00fcltig",
      "F\u00fcr das gesamte MediaMarkt-Sortiment",
      "Perfekt f\u00fcr Technik-Fans"
    ],
    howToRedeem: [
      "Gehe auf mediamarkt.de oder besuche einen Markt",
      "Lege Produkte in den Warenkorb",
      "Gib im Checkout den Gutscheincode ein",
      "Der Betrag wird sofort abgezogen"
    ],
    available: true
  },
  {
    id: 7,
    slug: "mediamarkt-100",
    brand: "MediaMarkt",
    brandSlug: "mediamarkt",
    name: "MediaMarkt Gutschein 100\u20ac",
    value: 100,
    price: 85,
    discount: 15,
    color: "from-[#df0000] to-[#a00000]",
    textColor: "text-[#df0000]",
    bgAccent: "bg-[#df0000]",
    validity: "Bis zu 3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Unser bester MediaMarkt-Deal: Spare ganze 15% auf einen 100\u20ac Gutschein. Ideal f\u00fcr gr\u00f6\u00dfere Technik-Anschaffungen.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Online & im Markt einl\u00f6sbar",
      "Bis zu 3 Jahre g\u00fcltig",
      "15\u20ac sofort gespart",
      "Top-Deal f\u00fcr gro\u00dfe Eink\u00e4ufe"
    ],
    howToRedeem: [
      "Gehe auf mediamarkt.de oder besuche einen Markt",
      "Lege Produkte in den Warenkorb",
      "Gib im Checkout den Gutscheincode ein",
      "Der Betrag wird sofort abgezogen"
    ],
    available: true
  },
  {
    id: 8,
    slug: "rossmann-20",
    brand: "Rossmann",
    brandSlug: "rossmann",
    name: "Rossmann Gutschein 20\u20ac",
    value: 20,
    price: 18,
    discount: 10,
    color: "from-[#e4003a] to-[#b8002e]",
    textColor: "text-[#e4003a]",
    bgAccent: "bg-[#e4003a]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10% auf Drogerie-Produkte bei Rossmann. Einl\u00f6sbar in \u00fcber 2.200 Filialen f\u00fcr Pflege, Kosmetik, Baby und Haushalt.",
    features: [
      "Sofort per E-Mail zugestellt",
      "In allen Rossmann-Filialen einl\u00f6sbar",
      "3 Jahre G\u00fcltigkeit",
      "F\u00fcr das gesamte Sortiment nutzbar",
      "Ideal f\u00fcr den t\u00e4glichen Bedarf"
    ],
    howToRedeem: [
      "Drucke den Gutscheincode aus oder zeige ihn auf dem Handy",
      "Besuche eine Rossmann-Filiale",
      "Zeige den Code an der Kasse vor",
      "Der Betrag wird direkt abgezogen"
    ],
    available: true
  },
  {
    id: 9,
    slug: "rossmann-50",
    brand: "Rossmann",
    brandSlug: "rossmann",
    name: "Rossmann Gutschein 50\u20ac",
    value: 50,
    price: 45,
    discount: 10,
    color: "from-[#e4003a] to-[#b8002e]",
    textColor: "text-[#e4003a]",
    bgAccent: "bg-[#e4003a]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10% auf Drogerie-Produkte bei Rossmann. Einl\u00f6sbar in \u00fcber 2.200 Filialen f\u00fcr Pflege, Kosmetik, Baby und Haushalt.",
    features: [
      "Sofort per E-Mail zugestellt",
      "In allen Rossmann-Filialen einl\u00f6sbar",
      "3 Jahre G\u00fcltigkeit",
      "F\u00fcr das gesamte Sortiment nutzbar",
      "Ideal f\u00fcr den t\u00e4glichen Bedarf"
    ],
    howToRedeem: [
      "Drucke den Gutscheincode aus oder zeige ihn auf dem Handy",
      "Besuche eine Rossmann-Filiale",
      "Zeige den Code an der Kasse vor",
      "Der Betrag wird direkt abgezogen"
    ],
    available: true
  },
  {
    id: 10,
    slug: "rossmann-100",
    brand: "Rossmann",
    brandSlug: "rossmann",
    name: "Rossmann Gutschein 100\u20ac",
    value: 100,
    price: 90,
    discount: 10,
    color: "from-[#e4003a] to-[#b8002e]",
    textColor: "text-[#e4003a]",
    bgAccent: "bg-[#e4003a]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Der gro\u00dfe Rossmann Gutschein \u2014 spare 10\u20ac auf Pflege, Kosmetik und mehr. Perfekt zum Vorbereiten oder als Geschenk.",
    features: [
      "Sofort per E-Mail zugestellt",
      "In allen Rossmann-Filialen einl\u00f6sbar",
      "3 Jahre G\u00fcltigkeit",
      "10\u20ac sofort gespart",
      "Perfekt als Geschenk"
    ],
    howToRedeem: [
      "Drucke den Gutscheincode aus oder zeige ihn auf dem Handy",
      "Besuche eine Rossmann-Filiale",
      "Zeige den Code an der Kasse vor",
      "Der Betrag wird direkt abgezogen"
    ],
    available: true
  },
  {
    id: 11,
    slug: "kaufland-50",
    brand: "Kaufland",
    brandSlug: "kaufland",
    name: "Kaufland Gutschein 50\u20ac",
    value: 50,
    price: 45,
    discount: 10,
    color: "from-[#e60a14] to-[#b00810]",
    textColor: "text-[#e60a14]",
    bgAccent: "bg-[#e60a14]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10% auf deinen Wocheneinkauf bei Kaufland. Einl\u00f6sbar f\u00fcr Lebensmittel, Getr\u00e4nke und Haushaltswaren.",
    features: [
      "Sofort per E-Mail zugestellt",
      "In allen Kaufland-Filialen einl\u00f6sbar",
      "3 Jahre G\u00fcltigkeit",
      "F\u00fcr das gesamte Sortiment nutzbar",
      "Spart beim Wocheneinkauf"
    ],
    howToRedeem: [
      "Drucke den Gutscheincode aus oder zeige ihn auf dem Handy",
      "Besuche eine Kaufland-Filiale",
      "Zeige den Code an der Kasse vor",
      "Der Betrag wird direkt abgezogen"
    ],
    available: true
  },
  {
    id: 12,
    slug: "kaufland-100",
    brand: "Kaufland",
    brandSlug: "kaufland",
    name: "Kaufland Gutschein 100\u20ac",
    value: 100,
    price: 90,
    discount: 10,
    color: "from-[#e60a14] to-[#b00810]",
    textColor: "text-[#e60a14]",
    bgAccent: "bg-[#e60a14]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Der gro\u00dfe Kaufland Gutschein f\u00fcr deinen Gro\u00dfeinkauf. Spare 10\u20ac und decke dich mit allem ein, was du brauchst.",
    features: [
      "Sofort per E-Mail zugestellt",
      "In allen Kaufland-Filialen einl\u00f6sbar",
      "3 Jahre G\u00fcltigkeit",
      "10\u20ac sofort gespart",
      "Perfekt f\u00fcr den Gro\u00dfeinkauf"
    ],
    howToRedeem: [
      "Drucke den Gutscheincode aus oder zeige ihn auf dem Handy",
      "Besuche eine Kaufland-Filiale",
      "Zeige den Code an der Kasse vor",
      "Der Betrag wird direkt abgezogen"
    ],
    available: true
  },
  {
    id: 13,
    slug: "otto-20",
    brand: "OTTO",
    brandSlug: "otto",
    name: "OTTO Gutschein 20\u20ac",
    value: 20,
    price: 18,
    discount: 10,
    color: "from-[#d4213d] to-[#a01a30]",
    textColor: "text-[#d4213d]",
    bgAccent: "bg-[#d4213d]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10% auf Mode, M\u00f6bel und Technik bei OTTO. Deutschlands gr\u00f6\u00dfter Online-Shop f\u00fcr Fashion und Living.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf otto.de",
      "3 Jahre G\u00fcltigkeit",
      "Mode, M\u00f6bel, Technik & mehr",
      "Gro\u00dfes Marken-Sortiment"
    ],
    howToRedeem: [
      "Gehe auf otto.de und melde dich an",
      "Lege Produkte in den Warenkorb",
      "Gib im Checkout den Gutscheincode ein",
      "Der Betrag wird sofort abgezogen"
    ],
    available: true
  },
  {
    id: 14,
    slug: "otto-50",
    brand: "OTTO",
    brandSlug: "otto",
    name: "OTTO Gutschein 50\u20ac",
    value: 50,
    price: 45,
    discount: 10,
    color: "from-[#d4213d] to-[#a01a30]",
    textColor: "text-[#d4213d]",
    bgAccent: "bg-[#d4213d]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10% auf Mode, M\u00f6bel und Technik bei OTTO. Perfekt f\u00fcr den n\u00e4chsten Fashion- oder Einrichtungskauf.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf otto.de",
      "3 Jahre G\u00fcltigkeit",
      "Mode, M\u00f6bel, Technik & mehr",
      "5\u20ac sofort gespart"
    ],
    howToRedeem: [
      "Gehe auf otto.de und melde dich an",
      "Lege Produkte in den Warenkorb",
      "Gib im Checkout den Gutscheincode ein",
      "Der Betrag wird sofort abgezogen"
    ],
    available: true
  },
  {
    id: 15,
    slug: "ikea-100",
    brand: "IKEA",
    brandSlug: "ikea",
    name: "IKEA Gutschein 100\u20ac",
    value: 100,
    price: 90,
    discount: 10,
    color: "from-[#0051ba] to-[#003d8f]",
    textColor: "text-[#0051ba]",
    bgAccent: "bg-[#0051ba]",
    validity: "3 Jahre g\u00fcltig",
    validityYears: "3 Jahre g\u00fcltig",
    description: "Spare 10\u20ac auf M\u00f6bel und Einrichtung bei IKEA. Einl\u00f6sbar online und in allen deutschen IKEA-Einrichtungsh\u00e4usern.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Online & in IKEA-H\u00e4usern einl\u00f6sbar",
      "3 Jahre G\u00fcltigkeit",
      "F\u00fcr das gesamte IKEA-Sortiment",
      "Perfekt f\u00fcr Einrichtungsprojekte"
    ],
    howToRedeem: [
      "Gehe auf ikea.com/de oder besuche ein IKEA-Haus",
      "Lege Produkte in den Warenkorb",
      "Gib im Checkout den Gutscheincode ein",
      "Der Betrag wird sofort abgezogen"
    ],
    available: true
  },
  {
    id: 16,
    slug: "airbnb-50",
    brand: "Airbnb",
    brandSlug: "airbnb",
    name: "Airbnb Gutschein 50\u20ac",
    value: 50,
    price: 45,
    discount: 10,
    color: "from-[#FF385C] to-[#d42a4a]",
    textColor: "text-[#FF385C]",
    bgAccent: "bg-[#FF385C]",
    validity: "Kein Ablaufdatum",
    validityYears: "Unbegrenzt g\u00fcltig",
    description: "Spare 10% auf dein n\u00e4chstes Reise-Abenteuer mit Airbnb. Einl\u00f6sbar f\u00fcr Unterk\u00fcnfte und Erlebnisse weltweit.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf airbnb.com",
      "Kein Ablaufdatum",
      "F\u00fcr Unterk\u00fcnfte & Erlebnisse",
      "Weltweit nutzbar"
    ],
    howToRedeem: [
      "Gehe auf airbnb.com und melde dich an",
      "Gehe zu \u201eKonto\u201c \u2192 \u201eGutschein einl\u00f6sen\u201c",
      "Gib den erhaltenen Code ein",
      "Das Guthaben wird bei der n\u00e4chsten Buchung verrechnet"
    ],
    available: true
  },
  {
    id: 17,
    slug: "airbnb-100",
    brand: "Airbnb",
    brandSlug: "airbnb",
    name: "Airbnb Gutschein 100\u20ac",
    value: 100,
    price: 90,
    discount: 10,
    color: "from-[#FF385C] to-[#d42a4a]",
    textColor: "text-[#FF385C]",
    bgAccent: "bg-[#FF385C]",
    validity: "Kein Ablaufdatum",
    validityYears: "Unbegrenzt g\u00fcltig",
    description: "Spare 10\u20ac auf dein n\u00e4chstes Reise-Abenteuer. Perfekt als Geschenk f\u00fcr Reiseliebhaber \u2014 unbegrenzt g\u00fcltig.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar auf airbnb.com",
      "Kein Ablaufdatum",
      "10\u20ac sofort gespart",
      "Das perfekte Reise-Geschenk"
    ],
    howToRedeem: [
      "Gehe auf airbnb.com und melde dich an",
      "Gehe zu \u201eKonto\u201c \u2192 \u201eGutschein einl\u00f6sen\u201c",
      "Gib den erhaltenen Code ein",
      "Das Guthaben wird bei der n\u00e4chsten Buchung verrechnet"
    ],
    available: true
  },
  {
    id: 18,
    slug: "playstation-100",
    brand: "PlayStation",
    brandSlug: "playstation",
    name: "PlayStation Store Gutschein 100\u20ac",
    value: 100,
    price: 90,
    discount: 10,
    color: "from-[#006FCD] to-[#00439C]",
    textColor: "text-[#006FCD]",
    bgAccent: "bg-[#006FCD]",
    validity: "Kein Ablaufdatum",
    validityYears: "Unbegrenzt g\u00fcltig",
    description: "Spare 10\u20ac auf Games, DLCs und PS Plus Abos. Einl\u00f6sbar im PlayStation Store f\u00fcr PS4 und PS5.",
    features: [
      "Sofort per E-Mail zugestellt",
      "Einl\u00f6sbar im PlayStation Store",
      "Kein Ablaufdatum",
      "F\u00fcr Spiele, DLCs & PS Plus",
      "Perfekt f\u00fcr Gamer"
    ],
    howToRedeem: [
      "Gehe zum PlayStation Store auf deiner Konsole oder im Browser",
      "Navigiere zu \u201eGuthabencodes einl\u00f6sen\u201c",
      "Gib den 12-stelligen Code ein",
      "Das Guthaben wird sofort gutgeschrieben"
    ],
    available: true
  },
  {
    id: 19,
    slug: "douglas-coming-soon",
    brand: "DOUGLAS",
    brandSlug: "douglas",
    name: "DOUGLAS Gutschein",
    value: 0,
    price: 0,
    discount: 0,
    color: "from-[#000000] to-[#333333]",
    textColor: "text-[#000000]",
    bgAccent: "bg-[#000000]",
    validity: "Bald verf\u00fcgbar",
    validityYears: "Bald verf\u00fcgbar",
    description: "DOUGLAS Gutscheine sind bald bei uns verf\u00fcgbar. Trage dich in unsere Warteliste ein, um als Erster informiert zu werden.",
    features: [],
    howToRedeem: [],
    available: false
  }
];

// Brand logos — high-quality URLs
const BRAND_LOGOS = {
  amazon: "logos/amazon-all-white.svg",
  mediamarkt: "logos/mediamarkt-white.svg",
  rossmann: "logos/rossmann-white.svg",
  kaufland: "logos/kaufland-white-custom.svg",
  otto: "logos/otto-white-custom.svg",
  ikea: "logos/ikea-white-official.svg",
  airbnb: "logos/airbnb-white.svg",
  playstation: "logos/playstation-white-custom.svg",
  douglas: "logos/douglas-white.svg"
};

const PRODUCT_PAGE = "produkt.html";

const BRAND_LOGO_TEXT_CLASSES = {
  card: "text-white text-lg sm:text-xl font-bold tracking-tight",
  detail: "text-white text-2xl sm:text-3xl font-bold tracking-tight",
  inline: "text-gray-900 text-sm font-semibold tracking-tight"
};

const BRAND_LOGO_STYLES = {
  card: {
    default: {
      wrapper: "h-9 sm:h-10 max-w-[calc(100%-4rem)] min-w-0 flex-shrink",
      image: "max-h-full w-auto max-w-full object-contain object-left"
    },
    amazon: {
      wrapper: "h-9 sm:h-10 w-[130px] sm:w-[146px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    mediamarkt: {
      wrapper: "h-9 sm:h-10 w-[142px] sm:w-[163px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    rossmann: {
      wrapper: "h-9 sm:h-10 w-[166px] sm:w-[187px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    kaufland: {
      wrapper: "h-9 sm:h-10 w-[156px] sm:w-[178px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    otto: {
      wrapper: "h-9 sm:h-10 w-[132px] sm:w-[152px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    ikea: {
      wrapper: "h-9 sm:h-10 w-[134px] sm:w-[154px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    airbnb: {
      wrapper: "h-9 sm:h-10 w-[120px] sm:w-[139px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    playstation: {
      wrapper: "h-9 sm:h-10 w-[163px] sm:w-[187px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    douglas: {
      wrapper: "h-9 sm:h-10 w-[142px] sm:w-[161px] max-w-[calc(100%-4rem)] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    }
  },
  detail: {
    default: {
      wrapper: "h-12 sm:h-14 max-w-[260px] min-w-0 flex-shrink",
      image: "max-h-full w-auto max-w-full object-contain object-left"
    },
    amazon: {
      wrapper: "w-[158px] sm:w-[180px] max-w-[60%] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    mediamarkt: {
      wrapper: "w-[187px] sm:w-[221px] max-w-[70%] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    rossmann: {
      wrapper: "w-[204px] sm:w-[247px] max-w-[70%] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    kaufland: {
      wrapper: "w-[211px] sm:w-[254px] max-w-[70%] flex-shrink-0 -translate-y-2",
      image: "w-full h-auto object-contain object-left"
    },
    otto: {
      wrapper: "w-[182px] sm:w-[222px] max-w-[70%] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    ikea: {
      wrapper: "w-[163px] sm:w-[197px] max-w-[60%] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    airbnb: {
      wrapper: "w-[149px] sm:w-[178px] max-w-[60%] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    },
    playstation: {
      wrapper: "w-[226px] sm:w-[274px] max-w-[70%] flex-shrink-0 -translate-y-1.5",
      image: "w-full h-auto object-contain object-left"
    },
    douglas: {
      wrapper: "w-[185px] sm:w-[221px] max-w-[65%] flex-shrink-0",
      image: "w-full h-auto object-contain object-left"
    }
  }
};

const BRANDS = [
  { slug: "amazon", name: "Amazon", color: "from-[#FF9900] to-[#e88b00]", textColor: "text-[#FF9900]" },
  { slug: "mediamarkt", name: "MediaMarkt", color: "from-[#df0000] to-[#a00000]", textColor: "text-[#df0000]" },
  { slug: "rossmann", name: "Rossmann", color: "from-[#e4003a] to-[#b8002e]", textColor: "text-[#e4003a]" },
  { slug: "kaufland", name: "Kaufland", color: "from-[#e60a14] to-[#b00810]", textColor: "text-[#e60a14]" },
  { slug: "otto", name: "OTTO", color: "from-[#d4213d] to-[#a01a30]", textColor: "text-[#d4213d]" },
  { slug: "ikea", name: "IKEA", color: "from-[#0051ba] to-[#003d8f]", textColor: "text-[#0051ba]" },
  { slug: "airbnb", name: "Airbnb", color: "from-[#FF385C] to-[#d42a4a]", textColor: "text-[#FF385C]" },
  { slug: "playstation", name: "PlayStation", color: "from-[#006FCD] to-[#00439C]", textColor: "text-[#006FCD]" },
  { slug: "douglas", name: "DOUGLAS", color: "from-[#000000] to-[#333333]", textColor: "text-[#000000]" }
];

function getProduct(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

function getProductsByBrand(brandSlug) {
  return PRODUCTS.filter(p => p.brandSlug === brandSlug && p.available);
}

function getAvailableProducts() {
  return PRODUCTS.filter(p => p.available);
}

function formatPrice(price) {
  return price.toFixed(0) + "\u20ac";
}

function getSavings(product) {
  return product.value - product.price;
}

function getProductUrl(slug) {
  return `${PRODUCT_PAGE}?id=${slug}`;
}

function renderBrandLogo(product, variant = 'card') {
  const logo = BRAND_LOGOS[product.brandSlug] || '';
  const textClasses = BRAND_LOGO_TEXT_CLASSES[variant] || BRAND_LOGO_TEXT_CLASSES.card;
  if (!logo) {
    return `<span class="${textClasses}">${product.brand}</span>`;
  }

  const variantStyles = BRAND_LOGO_STYLES[variant] || BRAND_LOGO_STYLES.card;
  const logoStyles = variantStyles[product.brandSlug] || variantStyles.default;
  return `<div class="flex items-center ${logoStyles.wrapper}">
      <img src="${logo}" alt="${product.brand}" class="${logoStyles.image}" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">
      <span class="${textClasses}" style="display:none">${product.brand}</span>
    </div>`;
}

function renderProductCard(product) {
  const logo = BRAND_LOGOS[product.brandSlug] || '';
  const logoImg = renderBrandLogo(product);

  if (!product.available) {
    return `
      <a href="${getProductUrl(product.slug)}" class="product-card block relative rounded-[1.5rem] overflow-hidden opacity-50 cursor-not-allowed" style="aspect-ratio:3/4;">
        <div class="absolute inset-0 bg-gradient-to-br ${product.color}"></div>
        <!-- Watermark logo -->
        ${logo ? `<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] opacity-[0.08] pointer-events-none"><img src="${logo}" alt="" class="w-full"></div>` : ''}
        <div class="absolute inset-0 flex flex-col justify-between p-6 z-10">
          <div class="flex justify-between items-center">
            <div class="flex items-center">${logoImg}</div>
            <span class="bg-white/15 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Coming Soon</span>
          </div>
          <div class="bg-black/20 backdrop-blur-md rounded-2xl p-4 text-center">
            <p class="text-white/70 text-sm font-medium">Bald verf\u00fcgbar</p>
          </div>
        </div>
      </a>`;
  }

  const savings = getSavings(product);
  return `
    <a href="${getProductUrl(product.slug)}" class="product-card group block relative rounded-[1.5rem] overflow-hidden cursor-pointer" style="aspect-ratio:3/4;">
      <!-- Gradient background -->
      <div class="absolute inset-0 bg-gradient-to-br ${product.color} transition-transform duration-700 group-hover:scale-110"></div>
      <!-- Watermark logo -->
      ${logo ? `<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] opacity-[0.08] group-hover:opacity-[0.12] transition-opacity duration-700 pointer-events-none"><img src="${logo}" alt="" class="w-full"></div>` : ''}
      <!-- Decorative circles -->
      <div class="absolute -top-12 -right-12 w-40 h-40 bg-white/5 rounded-full"></div>
      <div class="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
      <!-- Shimmer on hover -->
      <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>

      <div class="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 z-10">
        <!-- Top: Logo + discount badge -->
        <div class="flex justify-between items-center">
          <div class="flex items-center">${logoImg}</div>
          <span class="bg-white text-gray-900 text-xs font-black px-3 py-1.5 rounded-full shadow-lg shadow-black/10 group-hover:scale-110 transition-transform">-${product.discount}%</span>
        </div>

        <!-- Bottom: Price + meta -->
        <div>
          <!-- Glass panel -->
          <div class="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 group-hover:bg-black/30 transition-colors">
            <div class="flex items-end justify-between mb-2">
              <div>
                <div class="text-white/50 text-xs font-medium mb-1">Dein Preis</div>
                <div class="text-white text-3xl sm:text-4xl font-black leading-none">${formatPrice(product.price)}</div>
              </div>
              <div class="text-right">
                <div class="text-white/40 text-sm line-through">${formatPrice(product.value)}</div>
                <div class="text-green-300 text-sm font-bold">${savings}\u20ac gespart</div>
              </div>
            </div>
            <div class="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
              <div class="flex items-center gap-1.5 text-white/50 text-xs">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                Sofort per E-Mail
              </div>
              <div class="flex items-center gap-1.5 text-white/50 text-xs">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                ${product.validityYears}
              </div>
            </div>
          </div>
          <!-- CTA hint on hover -->
          <div class="mt-3 overflow-hidden h-0 group-hover:h-10 transition-all duration-300">
            <div class="bg-white text-gray-900 text-sm font-bold py-2.5 rounded-xl text-center shadow-lg">
              Jetzt kaufen &rarr;
            </div>
          </div>
        </div>
      </div>
    </a>`;
}
