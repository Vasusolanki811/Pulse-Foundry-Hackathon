export interface MenuItem {
  id: string;
  name: string;
  greekName?: string;
  category: 'mezze' | 'entrees' | 'plant-based' | 'gluten-free' | 'dessert-wine';
  price: number;
  description: string;
  ingredients: string[];
  dietary?: {
    vegan?: boolean;
    vegetarian?: boolean;
    glutenFree?: boolean;
  };
  isSignature?: boolean;
  isPopular?: boolean;
  isUnder20?: boolean;
  happyHourSpecial?: boolean;
  winePairing?: string;
  allergens?: string;
  image?: string;
}

export const RESTAURANT_INFO = {
  name: "Café Athena",
  tagline: "Authentic Greek & Mediterranean Cuisine",
  subheadline: "Family-crafted on Garnet Avenue in Pacific Beach since 1990",
  estYear: 1990,
  yearsInBusiness: 36,
  address: {
    street: "1846 Garnet Avenue",
    neighborhood: "Pacific Beach",
    city: "San Diego",
    state: "CA",
    zip: "92109",
    landmark: "Between Kendall & Lamont St, 4 minutes east of PB Boardwalk"
  },
  phone: "(858) 274-1140",
  email: "hello@cafeathenasd.com",
  hours: [
    { days: "Monday", time: "4:00 PM – 9:00 PM", note: "Dinner only" },
    { days: "Tuesday – Thursday", time: "11:30 AM – 9:30 PM", note: "Lunch & Dinner" },
    { days: "Friday – Saturday", time: "11:30 AM – 10:00 PM", note: "Lunch & Late Patio" },
    { days: "Sunday", time: "11:30 AM – 9:00 PM", note: "Lunch & Family Dinner" }
  ],
  happyHour: {
    days: "Tuesday – Sunday",
    time: "4:00 PM – 6:00 PM",
    seating: "Garden Patio & Wine Bar",
    highlights: ["Small mezze plates under $12", "$7 Greek boutique wines", "$6 Mythos lager", "$9 Aegean spritzes"]
  },
  parking: "Dedicated free guest parking lot in plaza front and rear, plus abundant metered and free street parking along Garnet Avenue."
};

export const MENU_ITEMS: MenuItem[] = [
  // MEZZE
  {
    id: "mezze-sampler",
    name: "Athena Royal Mezze Sampler for Two",
    greekName: "Ποικιλία Ορεκτικών",
    category: "mezze",
    price: 22.50,
    description: "The quintessential Greek social experience. House tzatziki, roasted red pepper htipiti, garlic hummus, hand-rolled dolmades, imported Kalamata olives, sheep's milk feta, and warm char-grilled pita triangles.",
    ingredients: ["Greek yogurt", "Cucumber", "Garlic", "Chickpeas", "Roasted peppers", "Feta", "Grape leaves", "Kalamata olives", "Pita"],
    dietary: { vegetarian: true },
    isSignature: true,
    isPopular: true,
    winePairing: "Assyrtiko, Domaine Sigalas (Santorini)",
    allergens: "Contains Dairy, Gluten (Gluten-free cucumber slices or GF pita available on request)",
    image: "/src/assets/images/greek_mezze_spread_1792860092068.jpg"
  },
  {
    id: "crispy-falafel",
    name: "Crispy Herb Falafel & House Tahini",
    greekName: "Φαλάφελ με Ταχίνι",
    category: "mezze",
    price: 14.50,
    description: "Made fresh to order with soaked garbanzo beans, flat-leaf parsley, fresh cilantro, cumin, coriander, and scallions. Served with our whipped lemon-garlic sesame tahini and house pickled Persian cucumbers.",
    ingredients: ["Garbanzo beans", "Cilantro", "Parsley", "Tahini", "Garlic", "Lemon", "Pickled cucumbers"],
    dietary: { vegan: true, vegetarian: true, glutenFree: true },
    isSignature: true,
    isPopular: true,
    isUnder20: true,
    happyHourSpecial: true,
    winePairing: "Moschofilero Boutari (Peloponnese)",
    allergens: "Contains Sesame"
  },
  {
    id: "spanakopita-traditional",
    name: "Traditional Golden Spanakopita",
    greekName: "Σπανακόπιτα",
    category: "mezze",
    price: 13.75,
    description: "Our grandmother's 35-year recipe. Ultra-crispy layers of paper-thin phyllo pastry stuffed with fresh baby spinach, leeks, wild mountain herbs, and imported Greek barrel-aged feta cheese.",
    ingredients: ["Spinach", "Barrel-aged feta", "Leeks", "Dill", "Phyllo dough", "Greek olive oil"],
    dietary: { vegetarian: true },
    isSignature: true,
    isPopular: true,
    isUnder20: true,
    happyHourSpecial: true,
    winePairing: "Retsina Malamatina or crisp Pinot Grigio",
    allergens: "Contains Gluten, Dairy"
  },
  {
    id: "flamed-saganaki",
    name: "Flamed Kefalograviera Saganaki",
    greekName: "Σαγανάκι",
    category: "mezze",
    price: 15.00,
    description: "Aged sharp sheep's milk Kefalograviera cheese seared golden in an iron skillet, flamed table-side with Greek Metaxa brandy and finished with fresh squeezed lemon juice and warm oregano pita.",
    ingredients: ["Kefalograviera cheese", "Metaxa brandy", "Lemon", "Pita", "Oregano"],
    dietary: { vegetarian: true },
    isUnder20: true,
    allergens: "Contains Dairy, Gluten"
  },
  {
    id: "gigantes-plaki",
    name: "Gigantes Plaki (Braised Giant Beans)",
    greekName: "Γίγαντες Πλακί",
    category: "mezze",
    price: 12.50,
    description: "Tender Greek giant elephant white beans slow-braised in a rich reduction of crushed San Marzano tomatoes, sweet leeks, garlic, Greek oregano, and cold-pressed extra virgin olive oil.",
    ingredients: ["Giant white beans", "San Marzano tomatoes", "Sweet leeks", "Garlic", "Greek olive oil", "Oregano"],
    dietary: { vegan: true, vegetarian: true, glutenFree: true },
    isUnder20: true,
    happyHourSpecial: true,
    winePairing: "Agiorgitiko Nemea Red"
  },
  {
    id: "tzatziki-dip-pita",
    name: "Signature Garlic Tzatziki & Charred Pita",
    greekName: "Τζατζίκι",
    category: "mezze",
    price: 10.50,
    description: "Authentic strained thick Greek yogurt folded with grated Persian cucumber, roasted garlic cloves, fresh garden dill, red wine vinegar, and Kalamata extra virgin olive oil. Served with grilled warm pita.",
    ingredients: ["Greek strained yogurt", "Persian cucumber", "Garlic", "Fresh dill", "Olive oil", "Charred pita"],
    dietary: { vegetarian: true },
    isUnder20: true,
    happyHourSpecial: true,
    allergens: "Contains Dairy, Gluten (GF pita available)"
  },

  // ENTREES & SOUVLAKI
  {
    id: "lamb-souvlaki",
    name: "Charcoal-Grilled Lamb Souvlaki Platter",
    greekName: "Σουβλάκι Αρνί",
    category: "entrees",
    price: 26.50,
    description: "Tender cubes of California leg of lamb marinated 24 hours in lemon juice, garlic, rosemary, and Greek oregano. Skewered and flame-kissed over charcoal. Served over herbed Mediterranean rice pilaf, blistered vine tomatoes, tzatziki, and warm pita.",
    ingredients: ["California lamb", "Rosemary", "Garlic", "Lemon", "Rice pilaf", "Vine tomatoes", "Tzatziki", "Pita"],
    dietary: { glutenFree: true },
    isSignature: true,
    isPopular: true,
    winePairing: "Xinomavro, Kir-Yianni Naoussa",
    allergens: "Contains Dairy (tzatziki), Gluten (pita served on side, easily omitted for GF)",
    image: "/src/assets/images/charcoal_souvlaki_plate_1792860093701.jpg"
  },
  {
    id: "chicken-souvlaki",
    name: "Lemon-Herb Chicken Souvlaki Platter",
    greekName: "Σουβλάκι Κοτόπουλο",
    category: "entrees",
    price: 22.50,
    description: "Juicy organic chicken breast skewers marinated in Greek yogurt, Dijon, garlic, wild thyme, and lemon zest. Char-grilled to perfection and served with Athenian lemon potatoes, crisp cucumber salad, and tzatziki.",
    ingredients: ["Organic chicken breast", "Greek yogurt marinade", "Lemon potatoes", "Cucumber salad", "Tzatziki", "Pita"],
    dietary: { glutenFree: true },
    isPopular: true,
    winePairing: "Assyrtiko or Sonoma Chardonnay",
    allergens: "Contains Dairy"
  },
  {
    id: "traditional-gyro-plate",
    name: "Authentic Athenian Gyro Dinner Plate",
    greekName: "Γύρος Πιάτο",
    category: "entrees",
    price: 22.00,
    description: "Thinly shaved slow-roasted blend of seasoned beef and leg of lamb with Mediterranean spices. Accompanied by traditional village salad, hand-cut lemon-oregano potatoes, garlic tzatziki, and warm flatbread.",
    ingredients: ["Spiced beef & lamb", "Tomato", "Red onion", "Lemon potatoes", "Tzatziki", "Pita"],
    isSignature: true,
    isPopular: true,
    winePairing: "Nemea Reserve Agiorgitiko",
    allergens: "Contains Gluten, Dairy"
  },
  {
    id: "mediterranean-branzino",
    name: "Pan-Seared Mediterranean Sea Bass (Branzino)",
    greekName: "Λαβράκι Ψητό",
    category: "entrees",
    price: 29.00,
    description: "Wild Mediterranean sea bass filet pan-seared with crispy skin, finished in a bright emulsion of caper berries, lemon, white wine, and Kalamata extra virgin olive oil. Served with steamed horta greens and roasted fingerlings.",
    ingredients: ["Wild Branzino", "Capers", "Lemon", "Kalamata olive oil", "Wild greens", "Fingerling potatoes"],
    dietary: { glutenFree: true },
    isSignature: true,
    winePairing: "Thalassitis Assyrtiko (Santorini)",
    allergens: "Contains Fish"
  },
  {
    id: "athena-pastitsio",
    name: "Athena Baked Pastitsio (Greek Lasagna)",
    greekName: "Παστίτσιο",
    category: "entrees",
    price: 21.50,
    description: "Comfort food at its finest. Tubular pasta layered with slow-simmered cinnamon-spiced lean beef ragù, blanketed with a velvety nutmeg-infused béchamel cream and baked until bubbly and bronzed.",
    ingredients: ["Tubular pasta", "Braised beef", "Cinnamon", "Nutmeg", "Béchamel", "Kefalotyri cheese"],
    winePairing: "Greek Red Blend or Cabernet Sauvignon",
    allergens: "Contains Gluten, Dairy, Eggs"
  },

  // PLANT-BASED & VEGAN
  {
    id: "vegan-mezze-feast",
    name: "Pacific Beach Vegan Mezze Feast",
    greekName: "Χορτοφαγική Πανδαισία",
    category: "plant-based",
    price: 23.50,
    description: "An abundant entirely plant-based feast: crispy falafel croquettes, warm Gigantes Plaki braised white beans, herb-stuffed dolmades, fire-roasted eggplant melitzanosalata, garlic tahini, olives, and char-grilled pita.",
    ingredients: ["Falafel", "Giant beans", "Dolmades", "Eggplant dip", "Tahini", "Kalamata olives", "Pita"],
    dietary: { vegan: true, vegetarian: true },
    isSignature: true,
    isPopular: true,
    winePairing: "Santorini White or Organic Lemonade",
    allergens: "Contains Sesame, Gluten (GF pita available)"
  },
  {
    id: "imam-baildi",
    name: "Stuffed Roasted Eggplant (Imam Baildi)",
    greekName: "Ιμάμ Μπαϊλντί",
    category: "plant-based",
    price: 19.50,
    description: "Tender Japanese whole eggplant split and stuffed with caramelized sweet Vidalia onions, garlic confit, vine-ripened tomatoes, pine nuts, and Italian parsley. Slow roasted until meltingly tender.",
    ingredients: ["Whole eggplant", "Sweet onions", "Garlic confit", "San Marzano tomatoes", "Toasted pine nuts", "Parsley"],
    dietary: { vegan: true, vegetarian: true, glutenFree: true },
    isUnder20: true,
    winePairing: "Agiorgitiko Rosé",
    allergens: "Contains Tree Nuts (Pine nuts)"
  },
  {
    id: "greek-horiatiki-salad",
    name: "Classic Village Horiatiki Salad",
    greekName: "Χωριάτικη Σαλάτα",
    category: "plant-based",
    price: 15.50,
    description: "The genuine Greek tavern salad made with zero lettuce filler. Vine-ripened beefsteak tomatoes, crisp Persian cucumbers, red onion rings, green bell pepper, Kalamata olives, and a thick slab of barrel-aged Greek feta dressed in red wine vinegar and cold-pressed olive oil.",
    ingredients: ["Vine tomatoes", "Persian cucumber", "Red onion", "Bell pepper", "Kalamata olives", "Greek feta", "Oregano"],
    dietary: { vegetarian: true, glutenFree: true },
    isUnder20: true,
    winePairing: "Santorini Assyrtiko",
    allergens: "Contains Dairy (Vegan feta substitution available upon request)"
  },
  {
    id: "lentil-spinach-stew",
    name: "Athenian Lentil & Wild Greens Soup",
    greekName: "Φακές Σούπα",
    category: "plant-based",
    price: 9.50,
    description: "Traditional brown lentils simmered with bay leaves, garlic, sweet carrots, baby spinach, and aged red wine vinegar. Served with warm rustic olive bread.",
    ingredients: ["Brown lentils", "Baby spinach", "Carrots", "Bay leaves", "Red wine vinegar", "Olive oil"],
    dietary: { vegan: true, vegetarian: true },
    isUnder20: true,
    allergens: "Contains Gluten (in bread)"
  },

  // GLUTEN-FREE
  {
    id: "gf-lemon-herb-chicken",
    name: "Athenian Lemon-Herb Roasted Half Chicken",
    greekName: "Κοτόπουλο Λεμονάτο",
    category: "gluten-free",
    price: 23.00,
    description: "Slow-roasted bone-in half chicken with garlic, Greek mountain oregano, and Meyer lemon glaze. Served with naturally gluten-free oregano-roasted fingerling potatoes and steamed seasonal vegetables.",
    ingredients: ["Organic chicken", "Meyer lemon", "Greek oregano", "Garlic", "Fingerling potatoes", "Olive oil"],
    dietary: { glutenFree: true },
    winePairing: "Greek Malagousia White",
    allergens: "None"
  },
  {
    id: "gf-charred-salmon",
    name: "Charred Mediterranean Salmon Fillet",
    greekName: "Σολομός Σχάρας",
    category: "gluten-free",
    price: 27.50,
    description: "Wild-caught Pacific salmon grilled over open flames, drizzled with lemon-dill Ladolemono emulsion. Accompanied by herbed Mediterranean basmati rice and roasted Mediterranean vegetables.",
    ingredients: ["Wild salmon", "Lemon", "Dill", "Extra virgin olive oil", "Basmati rice", "Zucchini", "Bell pepper"],
    dietary: { glutenFree: true },
    winePairing: "Crisp Greek Rosé",
    allergens: "Contains Fish"
  },

  // DESSERT & DRINKS
  {
    id: "baklava-traditional",
    name: "Handcrafted Honey & Walnut Baklava",
    greekName: "Μπακλαβάς",
    category: "dessert-wine",
    price: 9.50,
    description: "Forty delicate layers of hand-stretched phyllo pastry stuffed with crushed spiced California walnuts and cinnamon, drenched in warm wild thyme honey syrup from Crete. Finished with crushed pistachios.",
    ingredients: ["Phyllo dough", "Walnuts", "Pistachios", "Crete thyme honey", "Cinnamon", "Clarified butter"],
    dietary: { vegetarian: true },
    isSignature: true,
    isPopular: true,
    isUnder20: true,
    allergens: "Contains Tree Nuts, Gluten, Dairy",
    image: "/src/assets/images/baklava_honey_dessert_1792860094421.jpg"
  },
  {
    id: "galaktoboureko",
    name: "Warm Semolina Custard Galaktoboureko",
    greekName: "Γαλακτομπούρεκο",
    category: "dessert-wine",
    price: 10.50,
    description: "Velvety citrus-scented warm semolina custard wrapped in crisp buttered phyllo and bathed in a light orange-blossom honey syrup. Served warm from the oven.",
    ingredients: ["Semolina", "Milk", "Phyllo", "Orange blossom syrup", "Butter", "Eggs"],
    dietary: { vegetarian: true },
    isUnder20: true,
    allergens: "Contains Gluten, Dairy, Eggs"
  },
  {
    id: "athena-fig-spritz",
    name: "Athena Fig & Rosemary Spritz (Craft Cocktail)",
    category: "dessert-wine",
    price: 13.00,
    description: "Greek Metaxa brandy infused with dried figs, fresh rosemary sprig, sparkling Prosecco, dash of bitters, and club soda over hand-carved ice.",
    ingredients: ["Metaxa brandy", "Fig liqueur", "Rosemary", "Prosecco", "Citrus bitters"],
    isPopular: true,
    isUnder20: true,
    happyHourSpecial: true
  },
  {
    id: "greek-boutique-wines",
    name: "Santorini Assyrtiko by the Glass",
    category: "dessert-wine",
    price: 12.00,
    description: "Crisp, mineral-driven dry white wine produced from ancient volcanic vines on the island of Santorini. Vibrant citrus, sea salt minerality, and refreshing acidity.",
    ingredients: ["100% Assyrtiko grape, Santorini PDO"],
    dietary: { vegan: true, glutenFree: true },
    isUnder20: true,
    happyHourSpecial: true
  }
];

export const HAPPY_HOUR_ITEMS = [
  { name: "Whipped Garlic Tzatziki & Warm Pita", originalPrice: 10.50, specialPrice: 7.00, tag: "Mezze Bite" },
  { name: "Crispy Herb Falafel Croquettes (4 pcs)", originalPrice: 14.50, specialPrice: 8.50, tag: "Vegan Favorite" },
  { name: "Golden Spanakopita Triangles (2 pcs)", originalPrice: 13.75, specialPrice: 8.00, tag: "Signature" },
  { name: "Gigantes Plaki Giant Braised Beans", originalPrice: 12.50, specialPrice: 7.50, tag: "Gluten-Free" },
  { name: "Athena House Red or White Greek Wine", originalPrice: 12.00, specialPrice: 7.00, tag: "By The Glass" },
  { name: "Imported Greek Mythos Lager (Bottle)", originalPrice: 8.00, specialPrice: 5.50, tag: "Cold Beer" },
  { name: "Mediterranean Rosemary Fig Spritz", originalPrice: 13.00, specialPrice: 9.00, tag: "Craft Cocktail" }
];

export const FOUR_PERSON_VALUE_MEAL = {
  title: "The $25/Person Mediterranean Feast (For 4 Guests)",
  totalPrice: 95.00,
  perPersonPrice: 23.75,
  description: "Crafted specifically for social diners who desire an authentic multi-course Greek experience without breaking the bank. Zero compromise on quality or portion size.",
  courses: [
    { name: "Course 1: Royal Mezze Sampler for Two", detail: "Tzatziki, hummus, dolmades, imported feta, Kalamata olives, warm pita", value: 22.50 },
    { name: "Course 2: Crispy Falafel & Lemon Tahini", detail: "Four golden herb croquettes, pickled cucumbers, sesame tahini", value: 14.50 },
    { name: "Course 3: Charcoal-Grilled Lamb Souvlaki Platter", detail: "Flame-grilled skewers over herbed Mediterranean rice pilaf and roasted vine tomatoes", value: 26.50 },
    { name: "Course 4: Athenian Gyro Dinner Plate", detail: "Tender shaved beef & lamb, lemon-herb potatoes, village salad, warm pita", value: 22.00 },
    { name: "Course 5: Honey-Pistachio Baklava (Shared)", detail: "Warm flaky phyllo pastry with spiced walnuts, thyme honey, and pistachios", value: 9.50 }
  ]
};

export const REVIEWS = [
  {
    id: "rev-1",
    author: "Elena Vasquez",
    role: "Local Pacific Beach Resident",
    rating: 5,
    tenure: "Diner for 14 years",
    content: "Café Athena has been our family's weekly ritual since 2010. The lamb souvlaki is tender and flavorful from the charcoal grill, and their spanakopita has the crispiest phyllo anywhere in San Diego. The patio on a warm PB evening feels like a taverna in Chania.",
    date: "October 2026"
  },
  {
    id: "rev-2",
    author: "Marcus Vance",
    role: "Food & Hospitality Writer, SD Coast",
    rating: 5,
    tenure: "Verified Dining Critic",
    content: "While newer spots lean into hyper-priced fusion, Café Athena remains the gold standard for honest, multi-generational Greek cooking. Unbelievable dietary care—vegans and celiacs dine with complete safety here, and the hospitality is legendary.",
    date: "September 2026"
  },
  {
    id: "rev-3",
    author: "Sophie Lin",
    role: "Crown Point Host & Event Planner",
    rating: 5,
    tenure: "Booked party of 24",
    content: "We hosted our rehearsal dinner on their back patio for 24 guests. The family-style mezze platters kept flowing, the staff anticipated every dietary need, and the per-person value was extraordinary. Our out-of-town guests are still raving about the baklava.",
    date: "August 2026"
  }
];

export const FAQS = [
  {
    id: "faq-dietary",
    question: "Does Café Athena in Pacific Beach have vegan and gluten-free options?",
    answer: "Yes, Café Athena offers one of the most comprehensive dietary selections in coastal San Diego. Our kitchen prepares certified vegan dishes including crispy house falafel, dolmades, giant Greek lima beans (Gigantes Plaki), grilled vegetable skewers, and dairy-free garlic tahini. Gluten-free diners enjoy charcoal-grilled souvlaki skewers, lemon herb potatoes, Greek salads, and gluten-free warm pita substitutes upon request."
  },
  {
    id: "faq-budget",
    question: "Can four people have dinner at Café Athena for under $25 per person?",
    answer: "Absolutely. Four diners can feast comfortably for under $25 per person ($95 total) by sharing our Royal Mezze Sampler ($22.50), two hearty Souvlaki or Gyro platters with rice, potatoes, and Greek salad ($22–$26.50 each), a plate of crispy falafel ($14.50), and warm honey baklava to share ($9.50). Generous portions are our family signature."
  },
  {
    id: "faq-signatures",
    question: "What are the signature Greek dishes at Café Athena?",
    answer: "Our most acclaimed dishes include our 35-year family recipe Spanakopita (flaky phyllo with leeks and barrel-aged feta), Charcoal-Grilled Lamb & Chicken Souvlaki, Authentic Greek Gyros with house-whipped tzatziki, Crispy Herb Falafel with sesame tahini, and Honey-Pistachio Baklava baked fresh daily."
  },
  {
    id: "faq-large-groups",
    question: "How do reservations work for large groups of 10 or more people?",
    answer: "Parties of 10 or more can be booked through our dedicated Large Party Dining Coordinator via our website group inquiry form or by calling (858) 274-1140. We offer customizable family-style Greek banquet menus, patio section reservations, and flexible prix-fixe packages designed for seamless celebration dining."
  },
  {
    id: "faq-location-parking",
    question: "Where on Garnet Avenue is Café Athena located, and what is the parking situation?",
    answer: "Café Athena is located at 1846 Garnet Avenue in Pacific Beach, San Diego, CA 92109, just minutes from Mission Bay and the Pacific Beach Boardwalk. Dedicated customer parking is available in the plaza parking lot in front of and behind the restaurant, complemented by ample Garnet Avenue street parking."
  },
  {
    id: "faq-happy-hour",
    question: "Does Café Athena offer happy hour specials in Pacific Beach?",
    answer: "Yes. Café Athena hosts Happy Hour Tuesday through Sunday from 4:00 PM to 6:00 PM on our garden patio and at the bar. Specials include small mezze plates under $12 (hummus, falafel, spanakopita bites), $7 Greek wines by the glass, $6 imported Greek Mythos beers, and signature Mediterranean spritzes."
  }
];
