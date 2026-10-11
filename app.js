// ================= DATA MODELS & STATE (INDIAN FAST FOOD & SNACKS IN INR ₹) =================

const FOOD_MENU = [
  // 🥟 CHATPATI CHAAT & DESI STREET SNACKS
  {
    id: 'ch1',
    name: 'Dilli Wali Crispy Aloo Tikki Chaat',
    category: 'chaat',
    emoji: '🥟',
    basePrice: 149,
    calories: 420,
    prepTime: 5,
    rating: 4.9,
    reviews: 580,
    badges: ['Bestseller', 'Dilli Special', 'Veg 🌿'],
    desc: 'Golden crisp shallow-fried spiced potato tikkis topped with warm spiced chole, chilled sweet dahi, tangy saunth tamarind chutney, spicy pudina chutney & crunchy sev.',
    sizes: [
      { name: 'Single Plate (2 Tikkis)', price: 0 },
      { name: 'Hungry Box (3 Tikkis)', price: 50 }
    ],
    spiceLevels: ['Meethi Chutney More', 'Medium Chatpata', 'Teekha Desi Mirch 🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Extra Dahi & Chutneys', price: 25 },
      { name: 'Extra Crunchy Sev & Papdi', price: 20 },
      { name: 'Grated Beetroot & Pomegranate', price: 20 }
    ]
  },
  {
    id: 'ch2',
    name: 'Mumbai Style Butter Pav Bhaji',
    category: 'chaat',
    emoji: '🥘',
    basePrice: 199,
    calories: 580,
    prepTime: 7,
    rating: 4.9,
    reviews: 720,
    badges: ['Bestseller', 'Amul Butter', 'Veg 🌿'],
    desc: 'Slow-cooked mashed mixed vegetables cooked in aromatic spices on a giant tawa, drowning in a dollop of pure Amul butter. Served with 2 soft butter-toasted ladi pavs & lemon onions.',
    sizes: [
      { name: 'Regular (with 2 Pavs)', price: 0 },
      { name: 'Double Cheese Pav Bhaji', price: 50 }
    ],
    spiceLevels: ['Medium Masala', 'Extra Teekha Tawa Heat 🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Extra Butter Ladi Pav (Pair)', price: 40 },
      { name: 'Extra Block of Amul Butter', price: 30 },
      { name: 'Amul Cheese Slice Topping', price: 35 }
    ]
  },
  {
    id: 'ch3',
    name: 'Dahi Puri & Papdi Dhamaka (6 Pcs)',
    category: 'chaat',
    emoji: '🥙',
    basePrice: 129,
    calories: 360,
    prepTime: 4,
    rating: 4.8,
    reviews: 430,
    badges: ['Crowd Fav', 'Veg 🌿'],
    desc: 'Crispy hollow puris filled with boiled potato-moong mix, whipped creamy sweet curd, roasted jeera, amchur tamarind chutney and generous mountain of nylon sev.',
    sizes: [{ name: 'Standard 6 Pieces', price: 0 }],
    spiceLevels: ['Khatta Meetha', 'Chatpata'],
    isSpicy: false,
    addOns: [{ name: 'Extra Sev & Boondi', price: 20 }]
  },

  // 🍔 DESI BURGERS & ROLLS
  {
    id: 'b1',
    name: 'Butter Chicken Double Smash Burger',
    category: 'burgers',
    emoji: '🍔',
    basePrice: 249,
    calories: 680,
    prepTime: 9,
    rating: 4.9,
    reviews: 640,
    badges: ['Bestseller', 'Chef Special'],
    desc: 'Juicy tandoori spiced grilled chicken patty smothered in rich creamy Delhi makhani gravy, pickled laccha onions, mint coriander mayo on buttered brioche bun.',
    sizes: [
      { name: 'Single Patty', price: 0 },
      { name: 'Double Monster Patty', price: 90 }
    ],
    spiceLevels: ['Makhani Mild', 'Spicy Tandoori 🔥'],
    isSpicy: false,
    addOns: [
      { name: 'Extra Melted Cheddar Slice', price: 35 },
      { name: 'Extra Makhani Dip Cup', price: 30 },
      { name: 'Pickled Sirka Onions', price: 15 }
    ]
  },
  {
    id: 'b2',
    name: 'Crispy Paneer Makhani Supreme Burger',
    category: 'burgers',
    emoji: '🍔',
    basePrice: 219,
    calories: 620,
    prepTime: 8,
    rating: 4.8,
    reviews: 510,
    badges: ['Veg Bestseller', 'Veg 🌿'],
    desc: 'Thick hand-breaded crispy golden paneer block tossed in tandoori spices, crunchy cabbage slaw, rich butter makhani sauce & melted mozzarella cheese.',
    sizes: [
      { name: 'Regular Crispy', price: 0 },
      { name: 'Jumbo Size Paneer', price: 60 }
    ],
    spiceLevels: ['Medium', 'Spicy Chatpata 🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Extra Amul Cheese', price: 35 },
      { name: 'Tandoori Mayo Dip', price: 25 }
    ]
  },
  {
    id: 'b3',
    name: 'Mumbai Schezwan Vada Pav (2 Pcs)',
    category: 'burgers',
    emoji: '🥔',
    basePrice: 99,
    calories: 440,
    prepTime: 4,
    rating: 4.9,
    reviews: 890,
    badges: ['Mumbai Icon', 'Super Hit', 'Veg 🌿'],
    desc: 'Two spicy potato vadas fried crisp in gram flour batter, slathered in fiery dry garlic red chutney, fiery Schezwan sauce, green chilies in soft buttered pav.',
    sizes: [
      { name: 'Classic Duo (2 Pcs)', price: 0 },
      { name: 'Cheese Burst Vada Pav (2 Pcs)', price: 40 }
    ],
    spiceLevels: ['Medium Garlic', 'Asli Mumbai Teekha 🔥', 'Kolhapuri Blast 🌋'],
    isSpicy: true,
    addOns: [
      { name: 'Extra Fried Salted Green Chilies (4 pcs)', price: 10 },
      { name: 'Lahsuni Red Dry Chutney Cup', price: 15 }
    ]
  },
  {
    id: 'b4',
    name: 'Kolkata Kathi Chicken Tikka Roll',
    category: 'burgers',
    emoji: '🌯',
    basePrice: 199,
    calories: 520,
    prepTime: 8,
    rating: 4.8,
    reviews: 410,
    badges: ['Street Legend'],
    desc: 'Flaky paratha coated with farm egg, rolled with smoky charcoal-grilled tandoori chicken tikka, lime-soaked sliced red onions, and green mint sauce.',
    sizes: [
      { name: 'Single Egg Chicken Roll', price: 0 },
      { name: 'Double Egg Double Chicken Roll', price: 60 }
    ],
    spiceLevels: ['Medium Chaat Masala', 'Extra Green Chili Spiced 🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Cheese Melt Layer', price: 35 },
      { name: 'Extra Egg Layer', price: 20 }
    ]
  },

  // 🍕 DESI TADKA PIZZAS
  {
    id: 'p1',
    name: 'Paneer Tikka Desi Fusion Pizza',
    category: 'pizzas',
    emoji: '🍕',
    basePrice: 299,
    calories: 780,
    prepTime: 12,
    rating: 4.9,
    reviews: 540,
    badges: ['Bestseller', 'Veg 🌿'],
    desc: 'Crispy hand-stretched crust brushed with spiced makhani sauce, topped with roasted tandoori paneer cubes, crunchy capsicum, red onions & 100% mozzarella.',
    sizes: [
      { name: 'Regular 8-inch', price: 0 },
      { name: 'Medium 10-inch (Shareable)', price: 120 }
    ],
    spiceLevels: ['Makhani Mild', 'Tandoori Hot 🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Extra Cheese Burst Crust', price: 60 },
      { name: 'Extra Paneer Cubes', price: 45 },
      { name: 'Mint Chutney Swirl', price: 20 }
    ]
  },
  {
    id: 'p2',
    name: 'Tandoori Chicken Fiesta Pizza',
    category: 'pizzas',
    emoji: '🍕',
    basePrice: 349,
    calories: 840,
    prepTime: 12,
    rating: 4.9,
    reviews: 620,
    badges: ['Crowd Fav', 'Meat Feast'],
    desc: 'Oven-fired pizza with spicy makhani sauce, chunks of roasted tandoori chicken, chicken seekh kebab coins, sliced green chilies & bubbling cheese.',
    sizes: [
      { name: 'Regular 8-inch', price: 0 },
      { name: 'Medium 10-inch (Shareable)', price: 140 }
    ],
    spiceLevels: ['Medium Masala', 'Fiery Desi Chili 🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Cheese Burst Crust', price: 65 },
      { name: 'Extra Chicken Kebab Coins', price: 50 }
    ]
  },
  {
    id: 'p3',
    name: 'Corn & Cheese Spicy Jalapeño Pizza',
    category: 'pizzas',
    emoji: '🌽',
    basePrice: 269,
    calories: 710,
    prepTime: 11,
    rating: 4.7,
    reviews: 320,
    badges: ['Kids & Family', 'Veg 🌿'],
    desc: 'Sweet American golden corn, fiery pickled jalapeños, diced red paprika, oregano seasoning and generous gooey mozzarella cheese.',
    sizes: [{ name: 'Regular 8-inch', price: 0 }],
    spiceLevels: ['Mild Sweet Corn', 'Spicy Jalapeño'],
    isSpicy: false,
    addOns: [{ name: 'Extra Mozzarella', price: 50 }]
  },

  // 🍗 TANDOORI & CRISPY CHICKEN
  {
    id: 'c1',
    name: 'Masala Fried Chicken Strips (6 Pcs)',
    category: 'chicken',
    emoji: '🍗',
    basePrice: 199,
    calories: 540,
    prepTime: 6,
    rating: 4.9,
    reviews: 680,
    badges: ['Bestseller', 'Super Crunchy'],
    desc: 'Hand-breaded crunchy chicken tenders tossed in peri-peri and chaat masala seasonings. Served with tandoori mayo and pudina dip.',
    sizes: [
      { name: '6 Pcs Strips', price: 0 },
      { name: '10 Pcs Mega Bucket', price: 110 }
    ],
    spiceLevels: ['Desi Peri-Peri', 'Gunpowder Masala 🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Tandoori Mayo Dip', price: 25 },
      { name: 'Garlic Mayo Dip', price: 25 }
    ]
  },
  {
    id: 'c2',
    name: 'Chicken Seekh Kebabs on Skewers (4 Pcs)',
    category: 'chicken',
    emoji: '🍢',
    basePrice: 229,
    calories: 490,
    prepTime: 9,
    rating: 4.8,
    reviews: 370,
    badges: ['Mughlai Classic'],
    desc: 'Minced chicken blended with ginger, garlic, roasted spices, and cilantro, roasted over coals. Served with laccha onion and mint yogurt chutney.',
    sizes: [{ name: '4 Long Kebabs', price: 0 }],
    spiceLevels: ['Juicy Mild', 'Spicy Tandoori'],
    isSpicy: false,
    addOns: [{ name: 'Butter Rumali Roti (2 pcs)', price: 40 }]
  },

  // 🍟 LOADED FRIES & CRISPY MUNCHIES
  {
    id: 's1',
    name: 'Peri-Peri Crinkle Fries with Cheese Dip',
    category: 'sides',
    emoji: '🍟',
    basePrice: 139,
    calories: 460,
    prepTime: 4,
    rating: 4.8,
    reviews: 820,
    badges: ['Bestseller', 'Movie Must-Have', 'Veg 🌿'],
    desc: 'Hot golden crinkle-cut fries shaken in zesty spicy peri-peri seasoning in a bag, served with a tub of warm creamy cheese dip.',
    sizes: [
      { name: 'Regular Tub', price: 0 },
      { name: 'Large Stadium Tub', price: 50 }
    ],
    spiceLevels: ['Mild Peri-Peri', 'Spicy Peri-Peri 🔥', 'Extra Fiery 🔥🔥'],
    isSpicy: true,
    addOns: [
      { name: 'Extra Liquid Jalapeño Cheese Dip', price: 35 },
      { name: 'Peri-Peri Spice Shaker Sachet', price: 15 }
    ]
  },
  {
    id: 's2',
    name: 'Cocktail Samosas with Saunth (6 Pcs)',
    category: 'sides',
    emoji: '🥟',
    basePrice: 119,
    calories: 390,
    prepTime: 4,
    rating: 4.9,
    reviews: 910,
    badges: ['All-Time Fav', 'Veg 🌿'],
    desc: 'Crispy flaky bite-sized samosas stuffed with spiced green peas, cashew bits, and potatoes. Served with sweet tamarind and spicy mint chutneys.',
    sizes: [
      { name: '6 Cocktail Samosas', price: 0 },
      { name: '12 Samosas Party Pack', price: 90 }
    ],
    spiceLevels: ['Classic Halwai Masala'],
    isSpicy: false,
    addOns: [{ name: 'Extra Dahi & Chutneys Cup', price: 25 }]
  },
  {
    id: 's3',
    name: 'Kurkure Paneer Popcorn with Dip',
    category: 'sides',
    emoji: '🧀',
    basePrice: 169,
    calories: 480,
    prepTime: 5,
    rating: 4.8,
    reviews: 430,
    badges: ['Veg Crunch', 'Veg 🌿'],
    desc: 'Bite-sized malai paneer cubes coated in a crunchy spiced cornflake crust and fried golden. Served with chili-garlic mayo.',
    sizes: [{ name: 'Standard Tub', price: 0 }],
    spiceLevels: ['Medium Chaat', 'Spicy Schezwan'],
    isSpicy: false,
    addOns: [{ name: 'Schezwan Mayo Dip', price: 25 }]
  },

  // 🥤 CHAI, LASSI & COLD REFRESHMENTS
  {
    id: 'd1',
    name: 'Kulhad Masala Chai (Hot Flask for 2)',
    category: 'drinks',
    emoji: '☕',
    basePrice: 99,
    calories: 120,
    prepTime: 4,
    rating: 5.0,
    reviews: 1240,
    badges: ['Bestseller', 'Desi Emotion', 'Veg 🌿'],
    desc: 'Steaming rich Assam tea brewed with crushed green cardamom, ginger, cloves, and whole milk. Served in terracotta style kulhads directly to your seat.',
    sizes: [
      { name: 'Flask for 2 Cups', price: 0 },
      { name: 'Family Flask (4 Cups)', price: 70 }
    ],
    spiceLevels: ['Adrak Cardamom Sweet', 'Kadak Kam Cheeni (Less Sugar)'],
    isSpicy: false,
    addOns: [{ name: 'Parle-G Biscuit Packet', price: 15 }]
  },
  {
    id: 'd2',
    name: 'Thandi Kesar Pista Mango Lassi',
    category: 'drinks',
    emoji: '🥛',
    basePrice: 129,
    calories: 320,
    prepTime: 3,
    rating: 4.9,
    reviews: 650,
    badges: ['Refreshing', 'Chilled', 'Veg 🌿'],
    desc: 'Thick, creamy Punjabi sweet yogurt churned with real Alphonso mango pulp, Kashmiri saffron strands and garnished with slivered pistachios.',
    sizes: [
      { name: 'Tall Glass 350ml', price: 0 },
      { name: 'Jumbo Mug 500ml', price: 40 }
    ],
    spiceLevels: ['Sweet Chilled'],
    isSpicy: false,
    addOns: [{ name: 'Extra Dry Fruits Topping', price: 25 }]
  },
  {
    id: 'd3',
    name: 'Masala Soda Shikanji (Fizzy & Tangy)',
    category: 'drinks',
    emoji: '🍋',
    basePrice: 79,
    calories: 80,
    prepTime: 2,
    rating: 4.8,
    reviews: 490,
    badges: ['Thirst Buster', 'Veg 🌿'],
    desc: 'Crisp chilled sparkling soda infused with freshly squeezed lemon juice, black salt, roasted cumin, and mint leaves. The ultimate palate refresher!',
    sizes: [{ name: '350ml Glass', price: 0 }],
    spiceLevels: ['Tangy Khatta Meetha'],
    isSpicy: false,
    addOns: [{ name: 'Extra Lemon Shot', price: 10 }]
  },
  {
    id: 'd4',
    name: 'Thick KitKat Gems Chocolate Shake',
    category: 'drinks',
    emoji: '🍫',
    basePrice: 149,
    calories: 490,
    prepTime: 3,
    rating: 4.9,
    reviews: 580,
    badges: ['Kids Fav', 'Veg 🌿'],
    desc: 'Rich chocolate milkshake blended with crunchy KitKat bars, chocolate syrup, topped with whipped cream and colorful crunchy Cadbury Gems.',
    sizes: [{ name: 'Tall Cup 350ml', price: 0 }],
    spiceLevels: ['Sweet'],
    isSpicy: false,
    addOns: [{ name: 'Extra KitKat Finger', price: 20 }]
  },

  // 🍩 MITHAI & SWEET CRAVINGS
  {
    id: 'sw1',
    name: 'Hot Gulab Jamun with Rabri (2 Pcs)',
    category: 'desserts',
    emoji: '🍮',
    basePrice: 119,
    calories: 380,
    prepTime: 2,
    rating: 5.0,
    reviews: 860,
    badges: ['Bestseller', 'Desi Sweet', 'Veg 🌿'],
    desc: 'Two warm, soft melt-in-mouth mawa gulab jamuns soaked in saffron-rose sugar syrup, served with chilled thickened Malai Rabri on top.',
    sizes: [
      { name: '2 Gulab Jamun + Rabri', price: 0 },
      { name: 'Family Box (4 Jamuns + Rabri)', price: 90 }
    ],
    spiceLevels: ['Warm & Sweet'],
    isSpicy: false,
    addOns: [{ name: 'Extra Malai Rabri Scoop', price: 35 }]
  },
  {
    id: 'sw2',
    name: 'Warm Brownie with Hot Chocolate Fudge',
    category: 'desserts',
    emoji: '🍫',
    basePrice: 139,
    calories: 450,
    prepTime: 3,
    rating: 4.8,
    reviews: 430,
    badges: ['Hot Fudge', 'Veg 🌿'],
    desc: 'Fudgy walnut dark chocolate brownie warmed fresh and drenched in decadent hot chocolate sauce. Delivered piping hot to your seat.',
    sizes: [{ name: 'Single Brownie Slice', price: 0 }],
    spiceLevels: ['Rich Chocolate'],
    isSpicy: false,
    addOns: [{ name: 'Extra Hot Fudge Cup', price: 25 }]
  },

  // 🍱 VALUE COMBOS (DESI SEAT DROPS)
  {
    id: 'cb1',
    name: 'The Movie Maza Combo',
    category: 'combos',
    emoji: '🎬',
    basePrice: 299,
    calories: 920,
    prepTime: 8,
    rating: 5.0,
    reviews: 940,
    badges: ['Bestseller Combo 🔥', 'Save ₹70', 'Veg 🌿'],
    desc: 'Crispy Paneer Makhani Burger + Peri-Peri Crinkle Fries + Chilled Masala Shikanji Soda. Delivered together to your row!',
    sizes: [{ name: 'Standard Combo', price: 0 }],
    spiceLevels: ['Medium Chatpata'],
    isSpicy: false,
    addOns: [{ name: 'Add Gulab Jamun (1 pc)', price: 40 }]
  },
  {
    id: 'cb2',
    name: 'Chai & Samosa Evening Party (For 2)',
    category: 'combos',
    emoji: '☕',
    basePrice: 249,
    calories: 680,
    prepTime: 6,
    rating: 4.9,
    reviews: 780,
    badges: ['Desi Jodi 👥', 'Save ₹50', 'Veg 🌿'],
    desc: 'Hot Kulhad Masala Chai (Flask for 2) + 6 Cocktail Samosas with sweet tamarind and mint chutneys + 2 Warm Gulab Jamuns.',
    sizes: [{ name: 'Complete Jodi Pack', price: 0 }],
    spiceLevels: ['Classic'],
    isSpicy: false,
    addOns: []
  },
  {
    id: 'cb3',
    name: 'Cricket Match Day Feast',
    category: 'combos',
    emoji: '🏏',
    basePrice: 499,
    calories: 1450,
    prepTime: 12,
    rating: 4.9,
    reviews: 520,
    badges: ['Party Platter 🎉', 'Save ₹120'],
    desc: 'Tandoori Chicken Fiesta Pizza (8-inch) + 6 Masala Chicken Strips + Large Peri-Peri Fries + 2 Chilled Soft Drinks.',
    sizes: [{ name: 'Platter for 2-3', price: 0 }],
    spiceLevels: ['Spicy Masala 🔥'],
    isSpicy: true,
    addOns: []
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Snacks', emoji: '✨' },
  { id: 'chaat', name: 'Chaat & Street Food', emoji: '🥟' },
  { id: 'burgers', name: 'Burgers & Rolls', emoji: '🍔' },
  { id: 'pizzas', name: 'Desi Tadka Pizza', emoji: '🍕' },
  { id: 'chicken', name: 'Tandoori & Fried', emoji: '🍗' },
  { id: 'sides', name: 'Loaded Fries & Samosa', emoji: '🍟' },
  { id: 'drinks', name: 'Chai, Lassi & Drinks', emoji: '☕' },
  { id: 'desserts', name: 'Mithai & Desserts', emoji: '🍮' },
  { id: 'combos', name: 'Value Combos', emoji: '🍱' }
];

const DEMO_PRESETS = [
  { room: 'PVR INOX Screen 4 (IMAX)', row: 'Row F', seat: 'Seat 14' },
  { room: 'Grand Auditorium A', row: 'Row 3 (Balcony)', seat: 'Seat 22' },
  { room: 'Wankhede VIP Stadium Lounge', row: 'Box 08', seat: 'Seat 4B' },
  { room: 'Sports Arena Cafe', row: 'High Table 12', seat: 'Stool 3' },
  { room: 'Convention Center (Hall B)', row: 'Row 15', seat: 'Seat 8' }
];

// App Global State
let currentSeat = {
  room: 'PVR INOX Screen 4 (IMAX)',
  row: 'Row F',
  seat: 'Seat 14',
  method: 'NFC'
};

let currentCategory = 'all';
let searchQuery = '';
let cart = [];
let appliedPromo = null;
let selectedTip = 20; // In INR ₹20 tip
let ordersHistory = [];
let activeOrder = null;
let orderTickerInterval = null;
let currentModalItem = null;
let modalSelectedSize = null;
let modalSelectedSpice = null;
let modalSelectedAddOns = new Set();
let modalQty = 1;
let qrCodeInstance = null;
let cameraStream = null;

// ================= INITIALIZATION =================

window.addEventListener('DOMContentLoaded', () => {
  loadStateFromLocalStorage();
  parseUrlSeatParameters();
  renderCategoryTabs();
  renderFoodMenu();
  renderPresets();
  updateSeatHeroUi();
  updateCartUi();
  updateTagGenerator();
  checkWebNfcSupport();
});

function parseUrlSeatParameters() {
  const params = new URLSearchParams(window.location.search);
  const room = params.get('room');
  const row = params.get('row');
  const seat = params.get('seat');
  const tag = params.get('tag');

  if (seat) {
    currentSeat = {
      room: room || 'Main Hall',
      row: row || 'Row A',
      seat: seat,
      method: tag === 'qr' ? 'QR Code' : 'NFC Tag'
    };
    saveStateToLocalStorage();
    showToast(`📍 Locked to ${currentSeat.seat} (${currentSeat.row}) via ${currentSeat.method}`);
  }
}

function loadStateFromLocalStorage() {
  try {
    const savedSeat = localStorage.getItem('seatbites_seat');
    if (savedSeat) currentSeat = JSON.parse(savedSeat);

    const savedCart = localStorage.getItem('seatbites_cart');
    if (savedCart) cart = JSON.parse(savedCart);

    const savedOrders = localStorage.getItem('seatbites_orders');
    if (savedOrders) ordersHistory = JSON.parse(savedOrders);

    if (ordersHistory.length > 0 && ordersHistory[0].statusIndex < 4) {
      activeOrder = ordersHistory[0];
      startOrderSimulation();
    }
  } catch (e) {
    console.warn('Storage load failed', e);
  }
}

function saveStateToLocalStorage() {
  try {
    localStorage.setItem('seatbites_seat', JSON.stringify(currentSeat));
    localStorage.setItem('seatbites_cart', JSON.stringify(cart));
    localStorage.setItem('seatbites_orders', JSON.stringify(ordersHistory));
  } catch (e) {
    console.warn('Storage save failed', e);
  }
}

// ================= SEAT UI MANAGEMENT =================

function updateSeatHeroUi() {
  document.getElementById('navSeatLabel').textContent = `${currentSeat.row} • ${currentSeat.seat}`;
  document.getElementById('seatHeroRoom').textContent = currentSeat.room;
  document.getElementById('seatHeroRow').textContent = currentSeat.row;
  document.getElementById('seatHeroNum').textContent = currentSeat.seat;
  document.getElementById('seatHeroMethod').textContent = `${currentSeat.method.toUpperCase()} VERIFIED`;
  document.getElementById('seatAvatarIcon').textContent = currentSeat.method.includes('QR') ? '📷' : '📡';
  document.getElementById('drawerSeatText').textContent = `Delivering to: ${currentSeat.row} • ${currentSeat.seat}`;
  document.getElementById('drawerAlertSeatName').textContent = `${currentSeat.room} • ${currentSeat.row} • ${currentSeat.seat}`;
}

function setSeat(room, row, seat, method = 'NFC') {
  currentSeat = { room, row, seat, method };
  saveStateToLocalStorage();
  updateSeatHeroUi();
  updateTagGenerator();
  closeScannerModal();
  showToast(`Seat updated to ${seat} (${row}, ${room})!`);
}

// ================= CATEGORIES & MENU =================

function renderCategoryTabs() {
  const container = document.getElementById('categoryTabs');
  container.innerHTML = CATEGORIES.map(cat => `
    <button class="cat-chip ${cat.id === currentCategory ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
      <span>${cat.emoji}</span>
      <span>${cat.name}</span>
    </button>
  `).join('');
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategoryTabs();
  renderFoodMenu();
}

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  document.getElementById('clearSearchBtn').style.display = searchQuery ? 'block' : 'none';
  renderFoodMenu();
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  searchQuery = '';
  document.getElementById('clearSearchBtn').style.display = 'none';
  renderFoodMenu();
}

function renderFoodMenu() {
  const grid = document.getElementById('foodGrid');
  const countLabel = document.getElementById('itemsCount');
  const titleLabel = document.getElementById('sectionTitle');

  const filtered = FOOD_MENU.filter(item => {
    const matchesCat = currentCategory === 'all' || item.category === currentCategory;
    const matchesQuery = !searchQuery ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.desc.toLowerCase().includes(searchQuery) ||
      item.badges.some(b => b.toLowerCase().includes(searchQuery));
    return matchesCat && matchesQuery;
  });

  const catObj = CATEGORIES.find(c => c.id === currentCategory);
  titleLabel.textContent = searchQuery ? `Search Results for "${searchQuery}"` : (catObj ? catObj.name : 'All Snacks');
  countLabel.textContent = `${filtered.length} snacks`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: #888;">
        <span style="font-size: 48px; display: block; margin-bottom: 10px;">🔍</span>
        <h3>No matching snacks found</h3>
        <p>Try searching for samosa, chaat, pav bhaji, pizza, or chai!</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <div class="food-card" onclick="openFoodModal('${item.id}')">
      <div class="food-card-top">
        <div class="food-avatar">${item.emoji}</div>
        <div class="food-meta">
          <div class="food-badges">
            ${item.badges.map(b => `
              <span class="badge-tag ${b.includes('Veg') ? 'veg' : ''} ${b.includes('Spicy') || b.includes('Mirch') || b.includes('Teekha') ? 'spicy' : ''}">${b}</span>
            `).join('')}
          </div>
          <h3 class="food-name">${item.name}</h3>
          <div class="food-specs">
            <span>⭐ ${item.rating}</span>
            <span>•</span>
            <span>⏱️ ${item.prepTime}m</span>
            <span>•</span>
            <span>${item.calories} kcal</span>
          </div>
        </div>
      </div>
      <p class="food-desc">${item.desc}</p>
      <div class="food-footer">
        <span class="food-price">₹${item.basePrice}</span>
        <button class="add-btn" onclick="event.stopPropagation(); openFoodModal('${item.id}')">
          <span>+ Add</span>
        </button>
      </div>
    </div>
  `).join('');
}

// ================= FOOD CUSTOMIZATION MODAL =================

function openFoodModal(itemId) {
  const item = FOOD_MENU.find(f => f.id === itemId);
  if (!item) return;

  currentModalItem = item;
  modalSelectedSize = item.sizes[0];
  modalSelectedSpice = item.spiceLevels[0] || 'Medium';
  modalSelectedAddOns.clear();
  modalQty = 1;
  document.getElementById('modalKitchenNote').value = '';

  document.getElementById('modalFoodEmoji').textContent = item.emoji;
  document.getElementById('modalFoodName').textContent = item.name;
  document.getElementById('modalFoodRating').textContent = `⭐ ${item.rating} (${item.reviews})`;
  document.getElementById('modalFoodPrep').textContent = `⏱️ ${item.prepTime} mins`;
  document.getElementById('modalFoodCalories').textContent = `${item.calories} kcal`;
  document.getElementById('modalFoodDesc').textContent = item.desc;
  document.getElementById('modalQtyDisplay').textContent = '1';

  // Render Sizes
  const sizeGroup = document.getElementById('sizeOptionsGroup');
  const sizeList = document.getElementById('sizeOptionsList');
  if (item.sizes.length > 1) {
    sizeGroup.style.display = 'block';
    sizeList.innerHTML = item.sizes.map((s, idx) => `
      <div class="radio-card ${idx === 0 ? 'active' : ''}" onclick="selectModalSize(${idx}, this)">
        <span>${s.name}</span>
        <span>${s.price > 0 ? `+₹${s.price}` : 'Included'}</span>
      </div>
    `).join('');
  } else {
    sizeGroup.style.display = 'none';
  }

  // Render Spice
  const spiceGroup = document.getElementById('spiceGroup');
  const spiceList = document.getElementById('spiceOptionsList');
  if (item.spiceLevels.length > 0) {
    spiceGroup.style.display = 'block';
    spiceList.innerHTML = item.spiceLevels.map((lvl, idx) => `
      <button class="spice-pill ${idx === 0 ? 'active' : ''}" onclick="selectModalSpice('${lvl}', this)">
        ${lvl}
      </button>
    `).join('');
  } else {
    spiceGroup.style.display = 'none';
  }

  // Render Add-ons
  const addOnsGroup = document.getElementById('addOnsGroup');
  const addOnsList = document.getElementById('addOnsList');
  if (item.addOns.length > 0) {
    addOnsGroup.style.display = 'block';
    addOnsList.innerHTML = item.addOns.map((add, idx) => `
      <div class="checkbox-card" onclick="toggleModalAddOn(${idx}, this)">
        <span>${add.name}</span>
        <span>+₹${add.price}</span>
      </div>
    `).join('');
  } else {
    addOnsGroup.style.display = 'none';
  }

  updateModalPrice();
  document.getElementById('foodModal').style.display = 'flex';
}

function closeFoodModal() {
  document.getElementById('foodModal').style.display = 'none';
  currentModalItem = null;
}

function selectModalSize(index, element) {
  modalSelectedSize = currentModalItem.sizes[index];
  document.querySelectorAll('#sizeOptionsList .radio-card').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
  updateModalPrice();
}

function selectModalSpice(spice, element) {
  modalSelectedSpice = spice;
  document.querySelectorAll('#spiceOptionsList .spice-pill').forEach(el => el.classList.remove('active'));
  element.classList.add('active');
}

function toggleModalAddOn(index, element) {
  const addOn = currentModalItem.addOns[index];
  if (modalSelectedAddOns.has(addOn)) {
    modalSelectedAddOns.delete(addOn);
    element.classList.remove('active');
  } else {
    modalSelectedAddOns.add(addOn);
    element.classList.add('active');
  }
  updateModalPrice();
}

function changeModalQty(delta) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQtyDisplay').textContent = modalQty;
  updateModalPrice();
}

function calculateModalPrice() {
  if (!currentModalItem) return 0;
  let price = currentModalItem.basePrice + (modalSelectedSize ? modalSelectedSize.price : 0);
  modalSelectedAddOns.forEach(a => price += a.price);
  return price * modalQty;
}

function updateModalPrice() {
  const total = calculateModalPrice();
  document.getElementById('modalTotalPrice').textContent = `₹${total}`;
}

function confirmAddToCart() {
  if (!currentModalItem) return;

  const addOnsArray = Array.from(modalSelectedAddOns);
  const note = document.getElementById('modalKitchenNote').value.trim();

  cart.push({
    id: `cart_${Date.now()}_${Math.floor(Math.random() * 999)}`,
    food: currentModalItem,
    size: modalSelectedSize,
    spice: modalSelectedSpice,
    addOns: addOnsArray,
    note: note,
    quantity: modalQty,
    unitPrice: currentModalItem.basePrice + modalSelectedSize.price + addOnsArray.reduce((acc, c) => acc + c.price, 0)
  });

  saveStateToLocalStorage();
  updateCartUi();
  closeFoodModal();
  showToast(`Added ${modalQty}x ${currentModalItem.name} to seat order!`);
}

// ================= CART DRAWER & CHECKOUT =================

function updateCartUi() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const discount = appliedPromo ? (appliedPromo === 'SEAT50' ? Math.min(100, Math.round(subtotal * 0.5)) : 50) : 0;
  const gst = Math.round(subtotal * 0.05); // 5% GST for restaurant/food
  const finalTotal = Math.max(0, subtotal + gst + selectedTip - discount);

  // Navbar Badges
  document.getElementById('cartBadge').textContent = totalCount;

  // Sticky bottom bar
  const stickyBar = document.getElementById('stickyCartBar');
  if (totalCount > 0) {
    stickyBar.style.display = 'block';
    document.getElementById('stickyCartQty').textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
    document.getElementById('stickyCartPrice').textContent = `₹${finalTotal}`;
    document.getElementById('stickyCartSeat').textContent = `To: ${currentSeat.row} • ${currentSeat.seat}`;
  } else {
    stickyBar.style.display = 'none';
  }

  // Drawer list
  const container = document.getElementById('cartItemsList');
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #888;">
        <span style="font-size: 42px; display: block; margin-bottom: 8px;">🛍️</span>
        <h4>Your seat snack tray is empty</h4>
        <p style="font-size: 13px; margin-top: 4px;">Choose delicious chaat, rolls, samosas or chai!</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-emoji">${item.food.emoji}</div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.food.name}</div>
          <div class="cart-item-sub">
            ${item.size.name !== 'Regular' && !item.size.name.includes('Single') ? item.size.name + ' • ' : ''}
            ${item.spice ? item.spice + ' • ' : ''}
            ${item.addOns.map(a => `+${a.name}`).join(', ')}
            ${item.note ? `Note: "${item.note}"` : ''}
          </div>
          <div class="cart-item-price">₹${item.unitPrice * item.quantity}</div>
        </div>
        <div class="qty-counter">
          <button onclick="updateCartItemQty('${item.id}', -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartItemQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `).join('');
  }

  // Bill calculations
  document.getElementById('billSubtotal').textContent = `₹${subtotal}`;
  document.getElementById('billTax').textContent = `₹${gst}`;
  document.getElementById('billTip').textContent = `₹${selectedTip}`;
  document.getElementById('billTotal').textContent = `₹${finalTotal}`;
  document.getElementById('checkoutPriceLabel').textContent = `₹${finalTotal}`;

  if (discount > 0) {
    document.getElementById('billDiscountRow').style.display = 'flex';
    document.getElementById('billDiscount').textContent = `-₹${discount}`;
  } else {
    document.getElementById('billDiscountRow').style.display = 'none';
  }
}

function updateCartItemQty(cartId, delta) {
  const item = cart.find(i => i.id === cartId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter(i => i.id !== cartId);
  }
  saveStateToLocalStorage();
  updateCartUi();
}

function openCartDrawer() {
  document.getElementById('cartDrawerBackdrop').style.display = 'flex';
  updateCartUi();
}

function closeCartDrawer(e) {
  if (e.target.id === 'cartDrawerBackdrop') {
    document.getElementById('cartDrawerBackdrop').style.display = 'none';
  }
}

function closeCartDrawerDirect() {
  document.getElementById('cartDrawerBackdrop').style.display = 'none';
}

function selectTip(amount) {
  selectedTip = amount;
  document.querySelectorAll('#tipOptions .tip-pill').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  updateCartUi();
}

function applyPromoCode() {
  const val = document.getElementById('promoInput').value.trim().toUpperCase();
  if (val === 'SEAT50' || val === 'FIRSTBITE' || val === 'DESI50') {
    appliedPromo = 'SEAT50';
    document.getElementById('promoInputRow').style.display = 'none';
    const badge = document.getElementById('appliedPromoBadge');
    badge.style.display = 'flex';
    badge.querySelector('span').innerHTML = `🎉 Promo <strong>${val}</strong> Applied (-₹100 Off)!`;
    updateCartUi();
    showToast(`Promo ${val} applied successfully!`);
  } else {
    showToast('Invalid promo code. Try SEAT50 or DESI50');
  }
}

function removePromoCode() {
  appliedPromo = null;
  document.getElementById('promoInputRow').style.display = 'flex';
  document.getElementById('appliedPromoBadge').style.display = 'none';
  document.getElementById('promoInput').value = '';
  updateCartUi();
}

function placeOrder() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }

  const orderId = `IND-${Math.floor(10000 + Math.random() * 90000)}`;
  const pin = Math.floor(1000 + Math.random() * 9000);
  const payment = document.getElementById('paymentSelect').value;

  const newOrder = {
    orderId,
    pin,
    createdAt: new Date().toISOString(),
    seat: { ...currentSeat },
    items: [...cart],
    total: document.getElementById('billTotal').textContent,
    paymentMethod: payment,
    statusIndex: 0,
    etaMinutes: 10
  };

  ordersHistory.unshift(newOrder);
  activeOrder = newOrder;
  cart = [];
  appliedPromo = null;
  saveStateToLocalStorage();
  updateCartUi();
  closeCartDrawerDirect();

  startOrderSimulation();
  openTrackerModal();
  showToast(`Order #${orderId} placed for ${currentSeat.seat}!`);
}

// ================= LIVE ORDER TRACKER =================

const STATUS_STAGES = [
  { title: 'Order Received in Kitchen', desc: 'Halwai & Chef accepted your ticket', progress: 15, eta: 10 },
  { title: 'Frying & Assembling Fresh', desc: 'Tawa bhaji simmering & samosas frying crisp', progress: 45, eta: 7 },
  { title: 'Quality & Temperature Check', desc: 'Kulhad tea insulated & sealed packaging', progress: 70, eta: 4 },
  { title: 'Seat Runner En Route', desc: 'Runner Rahul is walking fast to your exact row', progress: 90, eta: 2 },
  { title: 'Delivered to Seat! 🥟', desc: 'Enjoy your hot Desi snacks right at your chair', progress: 100, eta: 0 }
];

function openTrackerModal() {
  if (!activeOrder) return;

  const currentStage = STATUS_STAGES[activeOrder.statusIndex];
  document.getElementById('trackerOrderId').textContent = `Order #${activeOrder.orderId}`;
  document.getElementById('trackerSeatSub').textContent = `Delivering to: ${activeOrder.seat.row} • ${activeOrder.seat.seat}`;
  document.getElementById('trackerDestRoom').textContent = activeOrder.seat.room;
  document.getElementById('trackerDestExact').textContent = `${activeOrder.seat.row} • ${activeOrder.seat.seat}`;
  document.getElementById('trackerPinCode').textContent = activeOrder.pin;

  document.getElementById('trackerStatusTitle').textContent = currentStage.title;
  document.getElementById('trackerStatusDesc').textContent = currentStage.desc;
  document.getElementById('trackerEtaText').textContent = activeOrder.statusIndex === 4 ? 'Delivered' : `ETA: ~${currentStage.eta} mins`;
  document.getElementById('trackerProgressBar').style.width = `${currentStage.progress}%`;

  // Render Timeline
  document.getElementById('trackerTimeline').innerHTML = STATUS_STAGES.map((s, idx) => `
    <div class="timeline-step ${idx < activeOrder.statusIndex ? 'completed' : ''} ${idx === activeOrder.statusIndex ? 'active' : ''}">
      <div class="timeline-indicator">
        <div class="step-node">${idx < activeOrder.statusIndex ? '✓' : idx + 1}</div>
        ${idx < STATUS_STAGES.length - 1 ? '<div class="step-line"></div>' : ''}
      </div>
      <div class="step-content">
        <strong>${s.title}</strong>
        <p>${s.desc}</p>
      </div>
    </div>
  `).join('');

  // Render Items Summary
  document.getElementById('trackerItemsSummary').innerHTML = `
    <h4 style="font-size: 14px; font-weight: 800; margin-bottom: 8px;">Order Details (${activeOrder.total})</h4>
    ${activeOrder.items.map(i => `
      <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
        <span>${i.food.emoji} ${i.quantity}x ${i.food.name}</span>
        <span>₹${i.unitPrice * i.quantity}</span>
      </div>
    `).join('')}
  `;

  document.getElementById('trackerModal').style.display = 'flex';
}

function closeTrackerModal() {
  document.getElementById('trackerModal').style.display = 'none';
}

function advanceOrderStatus() {
  if (!activeOrder) return;
  if (activeOrder.statusIndex < STATUS_STAGES.length - 1) {
    activeOrder.statusIndex++;
    saveStateToLocalStorage();
    openTrackerModal();
    showToast(`Order status updated: ${STATUS_STAGES[activeOrder.statusIndex].title}`);
  } else {
    showToast('Order is already delivered!');
  }
}

function startOrderSimulation() {
  if (orderTickerInterval) clearInterval(orderTickerInterval);

  orderTickerInterval = setInterval(() => {
    if (activeOrder && activeOrder.statusIndex < STATUS_STAGES.length - 1) {
      activeOrder.statusIndex++;
      saveStateToLocalStorage();
      if (document.getElementById('trackerModal').style.display === 'flex') {
        openTrackerModal();
      }
    } else {
      clearInterval(orderTickerInterval);
    }
  }, 16000);
}

// ================= ORDER HISTORY MODAL =================

function openOrdersModal() {
  const container = document.getElementById('ordersListBody');
  if (ordersHistory.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #888;">
        <span style="font-size: 42px; display: block; margin-bottom: 8px;">🧾</span>
        <h4>No orders yet</h4>
        <p style="font-size: 13px;">Your seat snack orders will show up here.</p>
      </div>
    `;
  } else {
    container.innerHTML = ordersHistory.map((ord, idx) => `
      <div style="background: #F8F9FA; border: 1px solid var(--border); border-radius: 12px; padding: 14px; margin-bottom: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: baseline;">
          <strong style="font-size: 15px;">#${ord.orderId}</strong>
          <span style="font-size: 12px; font-weight: 800; color: ${ord.statusIndex === 4 ? '#007E33' : 'var(--primary)'};">
            ${STATUS_STAGES[ord.statusIndex].title}
          </span>
        </div>
        <div style="font-size: 13px; color: #666; margin-top: 4px;">
          📍 ${ord.seat.room} • ${ord.seat.row} • ${ord.seat.seat}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; border-top: 1px solid #E5E7EB; padding-top: 8px;">
          <span style="font-weight: 800;">${ord.total} (${ord.items.length} snacks)</span>
          <button class="btn btn-small btn-primary" onclick="viewSpecificOrder(${idx})">
            ${ord.statusIndex === 4 ? 'Receipt' : 'Live Track'}
          </button>
        </div>
      </div>
    `).join('');
  }
  document.getElementById('ordersModal').style.display = 'flex';
}

function viewSpecificOrder(index) {
  activeOrder = ordersHistory[index];
  closeOrdersModal();
  openTrackerModal();
}

function closeOrdersModal() {
  document.getElementById('ordersModal').style.display = 'none';
}

// ================= SCANNER MODAL & SERVICES =================

function openScannerModal() {
  document.getElementById('scannerModal').style.display = 'flex';
}

function closeScannerModal() {
  document.getElementById('scannerModal').style.display = 'none';
  stopCamera();
}

function switchScanTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

  if (tabName === 'nfc') {
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
    document.getElementById('tabPaneNfc').classList.add('active');
    stopCamera();
  } else if (tabName === 'qr') {
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
    document.getElementById('tabPaneQr').classList.add('active');
  } else if (tabName === 'manual') {
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
    document.getElementById('tabPaneManual').classList.add('active');
    stopCamera();
  } else if (tabName === 'generator') {
    document.querySelectorAll('.tab-btn')[3].classList.add('active');
    document.getElementById('tabPaneGenerator').classList.add('active');
    updateTagGenerator();
    stopCamera();
  }
}

async function checkWebNfcSupport() {
  const statusEl = document.getElementById('nfcSupportText');
  const btn = document.getElementById('webNfcStartBtn');

  if ('NDEFReader' in window) {
    statusEl.innerHTML = '<span style="color: #4ADE80;">✓ Native Web NFC detected on this device!</span>';
    btn.style.display = 'inline-flex';
  } else {
    statusEl.innerHTML = 'Web NFC API active on Android Chrome (or tap any simulated tag below)';
  }
}

async function initiateWebNfc() {
  if ('NDEFReader' in window) {
    try {
      const ndef = new NDEFReader();
      await ndef.scan();
      showToast('📡 NFC sensor active! Tap armrest sticker now...');

      ndef.addEventListener('reading', ({ message, serialNumber }) => {
        showToast('NFC Tag detected! Reading seat data...');
        for (const record of message.records) {
          const textDecoder = new TextDecoder(record.encoding);
          const dataString = textDecoder.decode(record.data);
          parsePayloadAndSetSeat(dataString, 'NFC Tag');
          return;
        }
      });
    } catch (error) {
      alert(`NFC Scan error: ${error.message}. You can also use the preset chips below!`);
    }
  } else {
    showToast('Web NFC is not supported in this browser. Please use the simulated NFC chips or QR scanner.');
  }
}

function renderPresets() {
  const nfcList = document.getElementById('nfcPresetsList');
  const qrList = document.getElementById('qrPresetsList');

  const htmlNfc = DEMO_PRESETS.map(p => `
    <div class="preset-item" onclick="setSeat('${p.room}', '${p.row}', '${p.seat}', 'NFC')">
      <div class="preset-info">
        <strong>${p.seat} • ${p.row}</strong>
        <span>${p.room}</span>
      </div>
      <button class="btn btn-small btn-primary">Simulate NFC Tap</button>
    </div>
  `).join('');

  const htmlQr = DEMO_PRESETS.map(p => `
    <div class="preset-item" onclick="setSeat('${p.room}', '${p.row}', '${p.seat}', 'QR Code')">
      <div class="preset-info">
        <strong>${p.seat} • ${p.row}</strong>
        <span>${p.room}</span>
      </div>
      <button class="btn btn-small btn-secondary">Scan QR Tag</button>
    </div>
  `).join('');

  if (nfcList) nfcList.innerHTML = htmlNfc;
  if (qrList) qrList.innerHTML = htmlQr;
}

async function toggleCameraScanner() {
  const video = document.getElementById('qrVideo');
  const btn = document.getElementById('startCamBtn');
  const status = document.getElementById('cameraStatusText');

  if (cameraStream) {
    stopCamera();
    btn.innerHTML = '<span>📸</span> Open Live Camera';
    video.style.display = 'none';
    status.textContent = 'Camera closed';
  } else {
    try {
      cameraStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      video.srcObject = cameraStream;
      video.style.display = 'block';
      btn.innerHTML = '<span>🛑</span> Stop Camera';
      status.textContent = 'Point camera directly at seat QR sticker';
    } catch (e) {
      status.textContent = 'Camera permission denied or camera unavailable';
      showToast('Camera not available or access denied.');
    }
  }
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
    const video = document.getElementById('qrVideo');
    if (video) video.style.display = 'none';
  }
}

function handleManualSeatSubmit(e) {
  e.preventDefault();
  const room = document.getElementById('manualRoom').value.trim();
  const row = document.getElementById('manualRow').value.trim();
  const seat = document.getElementById('manualSeat').value.trim();
  setSeat(room, row, seat, 'Manual');
}

function updateTagGenerator() {
  const room = document.getElementById('genRoomInput').value.trim() || currentSeat.room;
  const row = document.getElementById('genRowInput').value.trim() || currentSeat.row;
  const seat = document.getElementById('genSeatInput').value.trim() || currentSeat.seat;

  const standardPayload = `SEAT_TAG|room=${room}|row=${row}|seat=${seat}|sys=SeatBites`;
  const urlLink = `${window.location.origin}${window.location.pathname}?room=${encodeURIComponent(room)}&row=${encodeURIComponent(row)}&seat=${encodeURIComponent(seat)}&tag=qr`;

  document.getElementById('sharedPayloadCode').textContent = standardPayload;
  document.getElementById('sharedUrlCode').textContent = urlLink;
  document.getElementById('qrTagLabel').textContent = `${seat} • ${row} (${room})`;

  const qrContainer = document.getElementById('qrCodeOutput');
  if (qrContainer && window.QRCode) {
    qrContainer.innerHTML = '';
    qrCodeInstance = new QRCode(qrContainer, {
      text: urlLink,
      width: 170,
      height: 170,
      colorDark: '#111418',
      colorLight: '#ffffff',
      correctLevel: QRCode.CorrectLevel.M
    });
  }
}

function copyTagUrl() {
  const text = document.getElementById('sharedUrlCode').textContent;
  navigator.clipboard.writeText(text);
  showToast('Copied seat tag link to clipboard!');
}

function parsePayloadAndSetSeat(payloadString, method) {
  try {
    if (payloadString.includes('|')) {
      const parts = payloadString.split('|');
      let room = 'Room 1', row = 'Row A', seat = 'Seat 1';
      for (const p of parts) {
        const [k, v] = p.split('=');
        if (k === 'room') room = v;
        if (k === 'row') row = v;
        if (k === 'seat') seat = v;
      }
      setSeat(room, row, seat, method);
      return;
    }
  } catch (e) {}
  setSeat('Main Area', 'Table 1', payloadString, method);
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>💬</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}
