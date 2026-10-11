// ================= DATA MODELS & STATE =================

const FOOD_MENU = [
  // 🍔 BURGERS
  {
    id: 'b1',
    name: 'Double Smash Bacon Cheddar',
    category: 'burgers',
    emoji: '🍔',
    basePrice: 10.99,
    calories: 820,
    prepTime: 8,
    rating: 4.9,
    reviews: 342,
    badges: ['Bestseller', 'Chef Special'],
    desc: 'Two 100% Angus beef smashed patties, applewood smoked bacon, sharp melted cheddar, caramelized onions & secret smash sauce on toasted brioche.',
    sizes: [
      { name: 'Regular Double', price: 0 },
      { name: 'Hungry Triple (+1 Patty)', price: 3.00 }
    ],
    spiceLevels: ['Mild', 'Medium', 'Hot', 'Atomic Fire 🔥'],
    isSpicy: false,
    addOns: [
      { name: 'Extra Smoked Bacon', price: 1.75 },
      { name: 'Fried Free-Range Egg', price: 1.25 },
      { name: 'Truffle Mayo Dip', price: 0.95 },
      { name: 'Extra Cheddar Slice', price: 0.80 }
    ]
  },
  {
    id: 'b2',
    name: 'Nashville Hot Crispy Chicken',
    category: 'burgers',
    emoji: '🍗',
    basePrice: 9.99,
    calories: 740,
    prepTime: 10,
    rating: 4.8,
    reviews: 289,
    badges: ['Spicy 🔥', 'Crowd Fav'],
    desc: 'Double-breaded golden fried chicken thigh dipped in fiery Nashville cayenne chili oil, tangy slaw, house pickles & comeback sauce.',
    sizes: [
      { name: 'Regular', price: 0 },
      { name: 'Giant Breast Filet', price: 2.25 }
    ],
    spiceLevels: ['Medium Kick', 'Hot', 'Xtra Hot 🔥', 'Reaper Inferno ☠️'],
    isSpicy: true,
    addOns: [
      { name: 'Pickled Jalapeños', price: 0.75 },
      { name: 'Pepper Jack Cheese', price: 1.00 },
      { name: 'Extra Crunchy Slaw', price: 0.60 }
    ]
  },
  {
    id: 'b3',
    name: 'Truffle Swiss Mushroom Melt',
    category: 'burgers',
    emoji: '🍄',
    basePrice: 11.49,
    calories: 790,
    prepTime: 9,
    rating: 4.7,
    reviews: 178,
    badges: ['Gourmet'],
    desc: 'Flame-broiled beef patty, garlic butter cremini mushrooms, melted Swiss Emmental cheese, and decadent black truffle aioli.',
    sizes: [
      { name: 'Regular', price: 0 },
      { name: 'Double Stack', price: 3.50 }
    ],
    spiceLevels: ['Mild'],
    isSpicy: false,
    addOns: [
      { name: 'Caramelized Balsamic Onions', price: 1.10 },
      { name: 'Crispy Fried Onion Strings', price: 0.90 }
    ]
  },
  {
    id: 'b4',
    name: 'Spicy Volcano Jalapeño Burger',
    category: 'burgers',
    emoji: '🌶️',
    basePrice: 10.49,
    calories: 810,
    prepTime: 9,
    rating: 4.8,
    reviews: 215,
    badges: ['Spicy 🔥'],
    desc: 'Charbroiled Angus patty, pepper jack cheese, fire-roasted serranos, crispy tortilla strips, and smoky chipotle volcano drizzle.',
    sizes: [{ name: 'Regular', price: 0 }],
    spiceLevels: ['Hot 🔥', 'Volcano Fire 🌋'],
    isSpicy: true,
    addOns: [{ name: 'Melted Queso Splash', price: 1.50 }]
  },
  {
    id: 'b5',
    name: 'Avocado Green Goddess Vegan',
    category: 'burgers',
    emoji: '🥑',
    basePrice: 9.75,
    calories: 520,
    prepTime: 8,
    rating: 4.6,
    reviews: 142,
    badges: ['Vegan 🌱', 'Healthy'],
    desc: 'Golden black bean & quinoa crisp patty, sliced ripe Hass avocado, cilantro-lime vegan crema, heirloom tomato on artisan multigrain bun.',
    sizes: [{ name: 'Regular', price: 0 }],
    spiceLevels: ['Mild', 'Zesty'],
    isSpicy: false,
    addOns: [{ name: 'Extra Guacamole Scoop', price: 1.50 }]
  },

  // 🍕 PIZZAS
  {
    id: 'p1',
    name: 'Pepperoni Overload Detroit Style',
    category: 'pizzas',
    emoji: '🍕',
    basePrice: 13.99,
    calories: 960,
    prepTime: 14,
    rating: 4.9,
    reviews: 420,
    badges: ['Bestseller', 'Hot Honey'],
    desc: 'Thick square buttery crust with crispy caramelized cheddar edges, double cupping pepperoni, whipped ricotta dollops & spicy hot honey.',
    sizes: [
      { name: 'Personal 4-Corner', price: 0 },
      { name: 'Shareable 8-Corner', price: 5.50 }
    ],
    spiceLevels: ['Mild', 'Hot Honey Drizzle'],
    isSpicy: false,
    addOns: [
      { name: 'Extra Hot Honey Cup', price: 1.25 },
      { name: 'Garlic Butter Crust Dip', price: 0.85 }
    ]
  },
  {
    id: 'p2',
    name: 'Smoky BBQ Pulled Chicken & Bacon',
    category: 'pizzas',
    emoji: '🍕',
    basePrice: 13.49,
    calories: 890,
    prepTime: 13,
    rating: 4.8,
    reviews: 210,
    badges: ['Smoky BBQ'],
    desc: 'Sweet & smoky pit BBQ sauce, tender pulled chicken breast, crispy applewood bacon, red onion rings, smoked gouda & mozzarella.',
    sizes: [{ name: 'Personal Square', price: 0 }],
    spiceLevels: ['Sweet & Smoky'],
    isSpicy: false,
    addOns: [{ name: 'Ranch Crust Dip', price: 0.75 }]
  },
  {
    id: 'p3',
    name: 'Classic Margherita Rustica',
    category: 'pizzas',
    emoji: '🧀',
    basePrice: 11.25,
    calories: 680,
    prepTime: 11,
    rating: 4.7,
    reviews: 165,
    badges: ['Vegetarian 🌿'],
    desc: 'Crushed San Marzano tomatoes, fior di latte mozzarella, whole fresh basil leaves, extra virgin cold-pressed olive oil & sea salt.',
    sizes: [{ name: 'Personal', price: 0 }],
    spiceLevels: ['Classic'],
    isSpicy: false,
    addOns: [{ name: 'Fresh Burrata Ball', price: 2.75 }]
  },

  // 🍗 FRIED CHICKEN
  {
    id: 'c1',
    name: 'Mega Crunch Chicken Tenders (6 Pcs)',
    category: 'chicken',
    emoji: '🍗',
    basePrice: 8.99,
    calories: 620,
    prepTime: 7,
    rating: 4.9,
    reviews: 512,
    badges: ['Bestseller', 'Kids Fav'],
    desc: 'Buttermilk-brined hand-breaded crispy golden chicken breast tenders seasoned with 12 spices. Served with 2 dipping sauces.',
    sizes: [
      { name: '6 Tenders', price: 0 },
      { name: '10 Tenders (Hungry Box)', price: 4.50 }
    ],
    spiceLevels: ['Crispy Original', 'Spicy Nashville'],
    isSpicy: false,
    addOns: [
      { name: 'Signature SeatBites Sauce', price: 0.75 },
      { name: 'Creamy Garlic Ranch', price: 0.75 },
      { name: 'Sweet Bourbon Mustard', price: 0.75 }
    ]
  },
  {
    id: 'c2',
    name: 'Korean Sweet Chili Glazed Wings (8 Pcs)',
    category: 'chicken',
    emoji: '🍗',
    basePrice: 11.25,
    calories: 780,
    prepTime: 11,
    rating: 4.8,
    reviews: 310,
    badges: ['Korean Crunch', 'Glazed'],
    desc: 'Ultra crunchy double-fried jumbo chicken wings tossed in sticky gochujang sweet-spicy glaze with toasted sesame and green scallions.',
    sizes: [
      { name: '8 Wings', price: 0 },
      { name: '16 Wings Party Pack', price: 9.00 }
    ],
    spiceLevels: ['Sweet Heat 🔥', 'Extreme Fire 🌋'],
    isSpicy: true,
    addOns: [{ name: 'Pickled Daikon Radish', price: 1.00 }]
  },

  // 🌮 TACOS & NACHOS
  {
    id: 't1',
    name: 'Slow-Cooked Birria Beef Tacos (3 Pcs)',
    category: 'tacos',
    emoji: '🌮',
    basePrice: 11.99,
    calories: 820,
    prepTime: 10,
    rating: 4.9,
    reviews: 460,
    badges: ['Bestseller', 'Consommé Dip'],
    desc: 'Crispy grilled corn tortillas soaked in chili consommé broth, loaded with 12-hour braised beef, melted Oaxaca cheese, onions & cilantro.',
    sizes: [{ name: '3 Tacos + Dip Broth', price: 0 }],
    spiceLevels: ['Medium Zesty', 'Hot Diablo'],
    isSpicy: true,
    addOns: [{ name: 'Extra Cup of Consommé', price: 1.50 }]
  },
  {
    id: 't2',
    name: 'Cinema Loaded Stadium Nachos',
    category: 'tacos',
    emoji: '🧀',
    basePrice: 9.49,
    calories: 880,
    prepTime: 6,
    rating: 4.8,
    reviews: 388,
    badges: ['Movie Night Fav', 'Shareable'],
    desc: 'Warm stone-ground tortilla chips smothered in warm velvety queso blanco, fresh pico de gallo, black beans, guacamole & jalapeño slices.',
    sizes: [{ name: 'Standard Tray', price: 0 }],
    spiceLevels: ['Mild', 'Jalapeño Kick'],
    isSpicy: false,
    addOns: [
      { name: 'Add Seasoned Angus Beef', price: 2.25 },
      { name: 'Add Pulled Chicken', price: 2.00 },
      { name: 'Extra Guacamole Scoop', price: 1.50 }
    ]
  },

  // 🍟 LOADED SIDES
  {
    id: 's1',
    name: 'Loaded Bacon Cheddar Animal Fries',
    category: 'sides',
    emoji: '🍟',
    basePrice: 6.99,
    calories: 690,
    prepTime: 5,
    rating: 4.9,
    reviews: 520,
    badges: ['Bestseller', 'Cheesy Bomb'],
    desc: 'Crispy skin-on french fries topped with bubbly melted sharp cheddar, chopped smoked applewood bacon, caramelized onions & secret thousand sauce.',
    sizes: [{ name: 'Loaded Basket', price: 0 }],
    spiceLevels: ['Original'],
    isSpicy: false,
    addOns: [{ name: 'Extra Bacon Bits', price: 1.25 }]
  },
  {
    id: 's2',
    name: 'Truffle Parmesan Herb Fries',
    category: 'sides',
    emoji: '🍟',
    basePrice: 6.49,
    calories: 540,
    prepTime: 5,
    rating: 4.8,
    reviews: 290,
    badges: ['Gourmet', 'Vegetarian 🌿'],
    desc: 'Hand-cut russet fries tossed with fragrant white truffle oil, freshly shaved aged Parmesan cheese, sea salt crystals and fresh Italian parsley.',
    sizes: [{ name: 'Regular Basket', price: 0 }],
    spiceLevels: ['Savory'],
    isSpicy: false,
    addOns: [{ name: 'Truffle Aioli Dip', price: 0.95 }]
  },
  {
    id: 's3',
    name: 'Stretchy Mozzarella Sticks (6 Pcs)',
    category: 'sides',
    emoji: '🧀',
    basePrice: 6.25,
    calories: 580,
    prepTime: 5,
    rating: 4.7,
    reviews: 230,
    badges: ['Cheesy Stretch'],
    desc: 'Golden Italian herb crumb coated whole milk mozzarella with epic stretch, served piping hot with marinara dipping sauce.',
    sizes: [{ name: '6 Sticks', price: 0 }],
    spiceLevels: ['Classic'],
    isSpicy: false,
    addOns: [{ name: 'Extra Marinara', price: 0.60 }]
  },

  // 🥤 DRINKS & SHAKES
  {
    id: 'd1',
    name: 'Thick Salted Caramel Pretzel Shake',
    category: 'drinks',
    emoji: '🥤',
    basePrice: 5.99,
    calories: 610,
    prepTime: 4,
    rating: 4.9,
    reviews: 380,
    badges: ['Bestseller', 'Decadent'],
    desc: 'Slow-churned vanilla bean custard blended with buttery salted caramel swirl, topped with whipped cream and salty crushed pretzel crumbs.',
    sizes: [{ name: 'Regular 16oz', price: 0 }, { name: 'Giant 24oz', price: 1.75 }],
    spiceLevels: ['Sweet'],
    isSpicy: false,
    addOns: [{ name: 'Extra Whipped Cream', price: 0.50 }]
  },
  {
    id: 'd2',
    name: 'Cookies & Cream Oreo Blast Shake',
    category: 'drinks',
    emoji: '🥤',
    basePrice: 5.99,
    calories: 640,
    prepTime: 4,
    rating: 4.9,
    reviews: 410,
    badges: ['Crowd Fav'],
    desc: 'Creamy rich milkshake packed with real crushed chocolate Oreos, dark chocolate fudge drizzle and a whole Oreo cookie crown.',
    sizes: [{ name: 'Regular 16oz', price: 0 }],
    spiceLevels: ['Sweet'],
    isSpicy: false,
    addOns: []
  },
  {
    id: 'd3',
    name: 'Fountain Soda (Free Seat Refills)',
    category: 'drinks',
    emoji: '🥤',
    basePrice: 3.49,
    calories: 180,
    prepTime: 2,
    rating: 4.7,
    reviews: 650,
    badges: ['Seat Refill 🔄'],
    desc: 'Ice-cold fountain beverage: Coca-Cola, Sprite, Dr Pepper, Fanta Orange, or Diet Coke. Free refill brought straight to your seat!',
    sizes: [{ name: 'Large 32oz', price: 0 }, { name: 'Cinema Tub 44oz', price: 1.00 }],
    spiceLevels: ['Ice Cold'],
    isSpicy: false,
    addOns: [{ name: 'Flavor Shot: Vanilla', price: 0.50 }, { name: 'Flavor Shot: Cherry', price: 0.50 }]
  },

  // 🍩 SWEET TREATS
  {
    id: 'sw1',
    name: 'Warm Cinnamon Sugar Churros (5 Pcs)',
    category: 'desserts',
    emoji: '🍩',
    basePrice: 6.75,
    calories: 520,
    prepTime: 5,
    rating: 4.9,
    reviews: 310,
    badges: ['Fresh & Hot', 'Bestseller'],
    desc: 'Golden-fried Spanish churros rolled in fragrant cinnamon sugar crystals. Served with warm Dulce de Leche and dark chocolate dips.',
    sizes: [{ name: '5 Churros', price: 0 }],
    spiceLevels: ['Sweet'],
    isSpicy: false,
    addOns: [{ name: 'Extra Dulce de Leche', price: 0.90 }]
  },

  // 🍱 COMBOS
  {
    id: 'cb1',
    name: 'The Ultimate Seat Drop Combo',
    category: 'combos',
    emoji: '🍱',
    basePrice: 15.99,
    calories: 1480,
    prepTime: 10,
    rating: 5.0,
    reviews: 680,
    badges: ['Best Value 🔥', 'Save $4.50'],
    desc: 'Double Smash Bacon Cheddar Burger + Crispy Seasoned Fries + Thick Gourmet Shake of your choice. Brought straight to your row!',
    sizes: [{ name: 'Complete Combo Meal', price: 0 }],
    spiceLevels: ['Mild', 'Medium Spice'],
    isSpicy: false,
    addOns: [{ name: 'Upgrade to Truffle Fries', price: 1.50 }]
  },
  {
    id: 'cb2',
    name: 'Movie Night Duo Feast (For 2)',
    category: 'combos',
    emoji: '🎬',
    basePrice: 28.99,
    calories: 2200,
    prepTime: 15,
    rating: 4.9,
    reviews: 340,
    badges: ['For Two 👥', 'Save $8'],
    desc: 'Pepperoni Detroit Pizza + 6-Pc Mega Crunch Tenders + Loaded Cheddar Animal Fries + 2 Large Fountain Sodas delivered together.',
    sizes: [{ name: 'Duo Feast Box', price: 0 }],
    spiceLevels: ['Classic'],
    isSpicy: false,
    addOns: []
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Items', emoji: '✨' },
  { id: 'burgers', name: 'Burgers', emoji: '🍔' },
  { id: 'pizzas', name: 'Pizzas', emoji: '🍕' },
  { id: 'chicken', name: 'Fried Chicken', emoji: '🍗' },
  { id: 'tacos', name: 'Tacos & Nachos', emoji: '🌮' },
  { id: 'sides', name: 'Loaded Sides', emoji: '🍟' },
  { id: 'drinks', name: 'Drinks & Shakes', emoji: '🥤' },
  { id: 'desserts', name: 'Sweet Treats', emoji: '🍩' },
  { id: 'combos', name: 'Value Combos', emoji: '🍱' }
];

const DEMO_PRESETS = [
  { room: 'Cinema Hall 4 (IMAX)', row: 'Row F', seat: 'Seat 14' },
  { room: 'Grand Auditorium A', row: 'Row 3 (Balcony)', seat: 'Seat 22' },
  { room: 'VIP Stadium Lounge', row: 'Box 08', seat: 'Seat 4B' },
  { room: 'Sports Bar & Arena', row: 'High Table 12', seat: 'Stool 3' },
  { room: 'Conference Center B', row: 'Row 15', seat: 'Seat 8' }
];

// App Global State
let currentSeat = {
  room: 'Cinema Hall 4 (IMAX)',
  row: 'Row F',
  seat: 'Seat 14',
  method: 'NFC' // 'NFC', 'QR', 'MANUAL'
};

let currentCategory = 'all';
let searchQuery = '';
let cart = [];
let appliedPromo = null;
let selectedTip = 2.00;
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
  parseUrlSeatParameters(); // Detect if page was opened by tapping an NFC tag or scanning a QR code!
  renderCategoryTabs();
  renderFoodMenu();
  renderPresets();
  updateSeatHeroUi();
  updateCartUi();
  updateTagGenerator();
  checkWebNfcSupport();
});

// Detects seat directly from URL query parameters (e.g. ?room=Cinema%20Hall%204&row=Row%20F&seat=Seat%2014)
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

    // If an active order is in progress
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
  titleLabel.textContent = searchQuery ? `Search Results for "${searchQuery}"` : (catObj ? catObj.name : 'All Items');
  countLabel.textContent = `${filtered.length} items`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px 20px; color: #888;">
        <span style="font-size: 48px; display: block; margin-bottom: 10px;">🔍</span>
        <h3>No matching items found</h3>
        <p>Try searching for burgers, pizza, wings, or change category.</p>
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
              <span class="badge-tag ${b.includes('Veg') ? 'veg' : ''} ${b.includes('Spicy') ? 'spicy' : ''}">${b}</span>
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
        <span class="food-price">$${item.basePrice.toFixed(2)}</span>
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
  modalSelectedSpice = item.spiceLevels[0] || 'Mild';
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
        <span>${s.price > 0 ? `+$${s.price.toFixed(2)}` : 'Included'}</span>
      </div>
    `).join('');
  } else {
    sizeGroup.style.display = 'none';
  }

  // Render Spice
  const spiceGroup = document.getElementById('spiceGroup');
  const spiceList = document.getElementById('spiceOptionsList');
  if (item.isSpicy && item.spiceLevels.length > 0) {
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
        <span>+$${add.price.toFixed(2)}</span>
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
  document.getElementById('modalTotalPrice').textContent = `$${total.toFixed(2)}`;
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
  showToast(`Added ${modalQty}x ${currentModalItem.name} to order!`);
}

// ================= CART DRAWER & CHECKOUT =================

function updateCartUi() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const discount = appliedPromo ? (appliedPromo === 'SEAT50' ? Math.min(5.00, subtotal * 0.5) : 3.50) : 0;
  const tax = subtotal * 0.0825;
  const finalTotal = Math.max(0, subtotal + tax + selectedTip - discount);

  // Navbar Badges
  document.getElementById('cartBadge').textContent = totalCount;

  // Sticky bottom bar
  const stickyBar = document.getElementById('stickyCartBar');
  if (totalCount > 0) {
    stickyBar.style.display = 'block';
    document.getElementById('stickyCartQty').textContent = `${totalCount} item${totalCount > 1 ? 's' : ''}`;
    document.getElementById('stickyCartPrice').textContent = `$${finalTotal.toFixed(2)}`;
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
        <h4>Your seat order is empty</h4>
        <p style="font-size: 13px; margin-top: 4px;">Select delicious items from the menu!</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map(item => `
      <div class="cart-item-row">
        <div class="cart-item-emoji">${item.food.emoji}</div>
        <div class="cart-item-details">
          <div class="cart-item-name">${item.food.name}</div>
          <div class="cart-item-sub">
            ${item.size.name !== 'Regular' ? item.size.name + ' • ' : ''}
            ${item.food.isSpicy ? item.spice + ' • ' : ''}
            ${item.addOns.map(a => `+${a.name}`).join(', ')}
            ${item.note ? `Note: "${item.note}"` : ''}
          </div>
          <div class="cart-item-price">$${(item.unitPrice * item.quantity).toFixed(2)}</div>
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
  document.getElementById('billSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('billTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('billTip').textContent = `$${selectedTip.toFixed(2)}`;
  document.getElementById('billTotal').textContent = `$${finalTotal.toFixed(2)}`;
  document.getElementById('checkoutPriceLabel').textContent = `$${finalTotal.toFixed(2)}`;

  if (discount > 0) {
    document.getElementById('billDiscountRow').style.display = 'flex';
    document.getElementById('billDiscount').textContent = `-$${discount.toFixed(2)}`;
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
  if (val === 'SEAT50' || val === 'FIRSTBITE' || val === 'FREEDROP') {
    appliedPromo = val;
    document.getElementById('promoInputRow').style.display = 'none';
    const badge = document.getElementById('appliedPromoBadge');
    badge.style.display = 'flex';
    badge.querySelector('span').innerHTML = `🎉 Promo <strong>${val}</strong> Applied!`;
    updateCartUi();
    showToast(`Promo ${val} applied successfully!`);
  } else {
    showToast('Invalid promo code. Try SEAT50 or FREEDROP');
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

  const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
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
    etaMinutes: 12
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
  { title: 'Order Received', desc: 'Kitchen accepted your ticket', progress: 15, eta: 12 },
  { title: 'Cooking & Grilling', desc: 'Chefs are grilling patties and frying fresh sides', progress: 45, eta: 8 },
  { title: 'Quality Check & Packaging', desc: 'Temperature inspection & sealing food containers', progress: 70, eta: 4 },
  { title: 'Runner En Route to Seat', desc: 'Runner Carlos is walking to your exact chair', progress: 90, eta: 2 },
  { title: 'Delivered to Seat! 🍔', desc: 'Enjoy your hot meal directly at your seat', progress: 100, eta: 0 }
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
        <span>$${(i.unitPrice * i.quantity).toFixed(2)}</span>
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
  }, 16000); // Advances step every 16 seconds automatically
}

// ================= ORDER HISTORY MODAL =================

function openOrdersModal() {
  const container = document.getElementById('ordersListBody');
  if (ordersHistory.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: #888;">
        <span style="font-size: 42px; display: block; margin-bottom: 8px;">🧾</span>
        <h4>No orders yet</h4>
        <p style="font-size: 13px;">Your seat deliveries will show up here.</p>
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
          <span style="font-weight: 800;">${ord.total} (${ord.items.length} items)</span>
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

// Web NFC API Integration
async function checkWebNfcSupport() {
  const statusEl = document.getElementById('nfcSupportText');
  const btn = document.getElementById('webNfcStartBtn');

  if ('NDEFReader' in window) {
    statusEl.innerHTML = '<span style="color: #4ADE80;">✓ Native Web NFC detected on this device!</span>';
    btn.style.display = 'inline-flex';
  } else {
    statusEl.innerHTML = 'Web NFC API available on Android Chrome (or tap any simulated tag below)';
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

// Camera QR Scanner
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

// Unified QR Tag & Web URL Generator
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

// ================= TOAST SYSTEM =================

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
