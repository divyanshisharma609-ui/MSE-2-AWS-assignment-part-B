/* ============================================================
   URBANE & VESSEL — Single Merged JavaScript File
   Contains: Product Catalog, Cart Engine, Navigation,
             Shop Filters, Product Detail, Cart Page, Checkout
   ============================================================ */


/* ════════════════════════════════════════════════════════════════
   SECTION 1: PRODUCT CATALOG DATA
   ════════════════════════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: "p1",
    name: "Terracotta Pour-Over Carafe",
    category: "ceramics",
    price: 1850,
    originalPrice: 2200,
    rating: 4.8,
    reviewsCount: 34,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Wheel-thrown clay carafe paired with an unglazed conical dripper. Hand-fired in small artisanal kilns with a breathable, heat-retentive porous wall.",
    materials: "100% Raw Terracotta Clay, Food-safe Glaze",
    dimensions: "18cm x 12cm (750ml capacity)",
    inStock: true,
    sku: "UV-CER-001"
  },
  {
    id: "p2",
    name: "Natural Hand-Loomed Linen Throw",
    category: "textiles",
    price: 2450,
    originalPrice: null,
    rating: 4.9,
    reviewsCount: 52,
    badge: "Staff Pick",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description: "Woven from 100% natural European flax linen on traditional shuttle looms. Enzyme pre-washed for effortless drape and relaxed texture.",
    materials: "100% Pure Flax Linen",
    dimensions: "130cm x 180cm",
    inStock: true,
    sku: "UV-TEX-004"
  },
  {
    id: "p3",
    name: "Cast Iron Teapot with Brass Handle",
    category: "kitchenware",
    price: 3200,
    originalPrice: 3800,
    rating: 4.7,
    reviewsCount: 28,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    description: "Heirloom-grade heavy cast iron teapot treated with enamel interior to prevent oxidation. Designed with a hand-bent solid brass arch handle.",
    materials: "Cast Iron, Food-Grade Enamel, Solid Brass",
    dimensions: "16cm x 14cm (900ml capacity)",
    inStock: true,
    sku: "UV-KIT-009"
  },
  {
    id: "p4",
    name: "Matte Sandstone Accent Lamp",
    category: "lighting",
    price: 3600,
    originalPrice: null,
    rating: 4.6,
    reviewsCount: 19,
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Architectural monolithic table lamp sculpted from granular sandstone with warm diffused ambient glow. Cord fitted with inline tactile dimmer.",
    materials: "Mineral Sandstone, Woven Cotton Cord, Brass Fittings",
    dimensions: "24cm H x 15cm Base",
    inStock: true,
    sku: "UV-LGT-012"
  },
  {
    id: "p5",
    name: "Acacia End-Grain Cutting Board",
    category: "kitchenware",
    price: 1950,
    originalPrice: 2400,
    rating: 4.9,
    reviewsCount: 41,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    description: "Crafted from sustainably harvested end-grain acacia hardwood to preserve knife edges. Finished with cold-pressed organic mineral oil & beeswax.",
    materials: "Acacia Hardwood, Beeswax Seal",
    dimensions: "40cm x 28cm x 3.5cm",
    inStock: true,
    sku: "UV-KIT-015"
  },
  {
    id: "p6",
    name: "Fluted Ceramic Serving Bowls (Set of 2)",
    category: "ceramics",
    price: 1450,
    originalPrice: null,
    rating: 4.5,
    reviewsCount: 16,
    badge: null,
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
    description: "Stackable ribbed bowls sculpted in stoneware with a reactive milky glaze that produces organic, one-of-a-kind speckles during wood firing.",
    materials: "Stoneware Ceramic, Reactive Satin Glaze",
    dimensions: "16cm Diameter x 7cm Depth",
    inStock: true,
    sku: "UV-CER-008"
  },
  {
    id: "p7",
    name: "Wabi-Sabi Asymmetric Vase",
    category: "decor",
    price: 2100,
    originalPrice: 2600,
    rating: 4.9,
    reviewsCount: 63,
    badge: "Curator's Choice",
    image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=800&q=80",
    description: "Sculptural vessel celebrating intentional imperfection. Hand-shaped from textured grog clay without a mould, left unglazed on the exterior.",
    materials: "Grog Clay, Sealed Water Reservoir",
    dimensions: "26cm H x 18cm W",
    inStock: true,
    sku: "UV-DEC-003"
  },
  {
    id: "p8",
    name: "Handmade Block-Printed Cushion Covers",
    category: "textiles",
    price: 1150,
    originalPrice: 1350,
    rating: 4.7,
    reviewsCount: 22,
    badge: "Handcrafted",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    description: "Printed by Bagru master artisans using hand-carved teak wood blocks and plant-based indigo and madder dyes. Concealed brass zipper.",
    materials: "100% Slub Cotton, Natural Vegetable Dyes",
    dimensions: "45cm x 45cm (Set of 2)",
    inStock: true,
    sku: "UV-TEX-009"
  },
  {
    id: "p9",
    name: "Spun Brass Incense Burner & Catcher",
    category: "decor",
    price: 1290,
    originalPrice: null,
    rating: 4.8,
    reviewsCount: 38,
    badge: null,
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80",
    description: "Turned on a metal lathe from solid architectural brass. Holds stick, cone, and dhoop incense while catching ash across its satin dish.",
    materials: "Solid Brass (Unlacquered, develops patina)",
    dimensions: "10cm Diameter x 3cm H",
    inStock: true,
    sku: "UV-DEC-011"
  },
  {
    id: "p10",
    name: "Pleated Paper Lantern Pendant",
    category: "lighting",
    price: 2890,
    originalPrice: 3400,
    rating: 4.6,
    reviewsCount: 14,
    badge: "Limited Drop",
    image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=800&q=80",
    description: "Origami-inspired Japanese mulberry paper shade folded by hand. Emits a soft, calming ambient glow that transforms dining or bedside corners.",
    materials: "Mulberry Washi Paper, Bamboo Ribs, Fabric Cable",
    dimensions: "35cm Diameter x 28cm H",
    inStock: true,
    sku: "UV-LGT-018"
  },
  {
    id: "p11",
    name: "Hand-Carved Walnut Salad Servers",
    category: "kitchenware",
    price: 980,
    originalPrice: null,
    rating: 4.5,
    reviewsCount: 17,
    badge: null,
    image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=800&q=80",
    description: "Paired fork and paddle spoon hand-carved from a single timber of rescued black walnut. Ergonomically shaped to feel natural in the palm.",
    materials: "Solid Black Walnut Timber",
    dimensions: "28cm Length each",
    inStock: true,
    sku: "UV-KIT-022"
  },
  {
    id: "p12",
    name: "Organic Waffle Bath Sheet",
    category: "textiles",
    price: 1750,
    originalPrice: 2100,
    rating: 4.8,
    reviewsCount: 29,
    badge: "Best Seller",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
    description: "Deep honeycomb waffle weave woven from certified organic long-staple cotton. Highly absorbent, fast-drying, and gently exfoliating.",
    materials: "100% GOTS Certified Organic Cotton",
    dimensions: "90cm x 150cm",
    inStock: true,
    sku: "UV-TEX-014"
  }
];

function formatCurrency(amount) {
  return "\u20B9" + Number(amount).toLocaleString("en-IN");
}


/* ════════════════════════════════════════════════════════════════
   SECTION 2: CART ENGINE (localStorage)
   ════════════════════════════════════════════════════════════════ */

const CART_STORAGE_KEY = "urbane_cart_v1";
const PROMO_STORAGE_KEY = "urbane_active_promo";

const PROMO_CODES = {
  "FIRST10": { type: "percent", value: 10, label: "10% First Order Discount" },
  "URBANE15": { type: "percent", value: 15, label: "15% Member Privilege" },
  "SAVE250": { type: "flat", value: 250, label: "\u20B9250 Flat Savings" }
};

function getRawCart() {
  try {
    var data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function saveRawCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
  } catch (e) {}
}

function addToCart(productId, qty) {
  qty = parseInt(qty, 10);
  if (isNaN(qty) || qty <= 0) qty = 1;
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) { showToast("Product not found", "error"); return; }

  var cart = getRawCart();
  var idx = cart.findIndex(function(item) { return item.id === productId; });
  if (idx > -1) { cart[idx].qty += qty; } else { cart.push({ id: productId, qty: qty }); }

  saveRawCart(cart);
  showToast('Added "' + product.name + '" to your bag', "success");
}

function updateCartQuantity(productId, newQty) {
  var cart = getRawCart();
  newQty = parseInt(newQty, 10);
  if (newQty <= 0) {
    cart = cart.filter(function(item) { return item.id !== productId; });
  } else {
    var item = cart.find(function(i) { return i.id === productId; });
    if (item) item.qty = newQty;
  }
  saveRawCart(cart);
}

function removeFromCart(productId) {
  var cart = getRawCart().filter(function(item) { return item.id !== productId; });
  saveRawCart(cart);
  showToast("Item removed from bag", "info");
}

function clearCart() { saveRawCart([]); }

function getCartCount() {
  return getRawCart().reduce(function(sum, item) { return sum + item.qty; }, 0);
}

function getDetailedCart() {
  return getRawCart().map(function(item) {
    var prod = PRODUCTS.find(function(p) { return p.id === item.id; });
    if (!prod) return null;
    return Object.assign({}, prod, { quantity: item.qty, lineTotal: prod.price * item.qty });
  }).filter(Boolean);
}

function getAppliedPromo() { return localStorage.getItem(PROMO_STORAGE_KEY) || null; }

function applyPromoCode(code) {
  var cleanCode = (code || "").trim().toUpperCase();
  if (PROMO_CODES[cleanCode]) {
    localStorage.setItem(PROMO_STORAGE_KEY, cleanCode);
    return { success: true, message: "Coupon " + cleanCode + " applied!", promo: PROMO_CODES[cleanCode] };
  }
  return { success: false, message: "Invalid promotional code" };
}

function removePromoCode() { localStorage.removeItem(PROMO_STORAGE_KEY); }

function calculateCartTotals() {
  var items = getDetailedCart();
  var subtotal = items.reduce(function(sum, item) { return sum + item.lineTotal; }, 0);
  var freeShippingThreshold = 2000;
  var shippingFee = (subtotal >= freeShippingThreshold || subtotal === 0) ? 0 : 150;

  var discount = 0, promoDetails = null;
  var activePromoCode = getAppliedPromo();
  if (activePromoCode && PROMO_CODES[activePromoCode] && subtotal > 0) {
    var promo = PROMO_CODES[activePromoCode];
    promoDetails = Object.assign({ code: activePromoCode }, promo);
    if (promo.type === "percent") discount = Math.round((subtotal * promo.value) / 100);
    else if (promo.type === "flat") discount = Math.min(promo.value, subtotal);
  }

  var taxableAmount = Math.max(0, subtotal - discount);
  var tax = Math.round(taxableAmount * 0.05);
  var grandTotal = taxableAmount + shippingFee + tax;

  return {
    itemCount: items.reduce(function(acc, cur) { return acc + cur.quantity; }, 0),
    subtotal: subtotal, discount: discount, promoDetails: promoDetails,
    shippingFee: shippingFee, tax: tax, grandTotal: grandTotal,
    qualifiesFreeShipping: subtotal >= freeShippingThreshold
  };
}

function updateCartBadges() {
  var count = getCartCount();
  document.querySelectorAll(".cart-badge-count").forEach(function(badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "inline-flex" : "none";
  });
}

function showToast(message, type) {
  type = type || "info";
  var container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  var toast = document.createElement("div");
  toast.className = "toast toast-" + type;
  toast.innerHTML = '<span class="toast-dot"></span><span class="toast-message">' + message + '</span>';
  container.appendChild(toast);
  requestAnimationFrame(function() { toast.classList.add("toast-show"); });
  setTimeout(function() {
    toast.classList.remove("toast-show");
    setTimeout(function() { toast.remove(); }, 300);
  }, 2800);
}


/* ════════════════════════════════════════════════════════════════
   SECTION 3: GLOBAL NAVIGATION & INTERACTIONS
   ════════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", function() {
  // Update cart badge on every page
  updateCartBadges();

  // Mobile Nav Toggle
  var toggleBtn = document.querySelector(".mobile-toggle-btn");
  var navMenu = document.querySelector(".nav-menu");
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", function() {
      navMenu.classList.toggle("nav-open");
      toggleBtn.setAttribute("aria-expanded", navMenu.classList.contains("nav-open"));
    });
    document.addEventListener("click", function(e) {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove("nav-open");
      }
    });
  }

  // Highlight Current Navigation Link
  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(function(link) {
    var href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Newsletter Subscription Handlers
  document.querySelectorAll(".newsletter-form").forEach(function(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      var input = form.querySelector(".newsletter-input");
      if (input && input.value.trim()) {
        showToast("Welcome to our circle! Check your inbox for 10% off.", "success");
        input.value = "";
      }
    });
  });

  // ── Homepage Featured Products ──
  var homepageGrid = document.getElementById("homepage-featured-grid");
  if (homepageGrid) {
    var featured = PRODUCTS.slice(0, 4);
    homepageGrid.innerHTML = featured.map(function(prod) {
      return '<article class="product-card">' +
        '<div class="product-card-media">' +
          '<a href="product-detail.html?id=' + prod.id + '"><img src="' + prod.image + '" alt="' + prod.name + '" loading="lazy" /></a>' +
          (prod.badge ? '<span class="product-badge' + (prod.badge.toLowerCase().indexOf("seller") > -1 ? ' badge-featured' : '') + '">' + prod.badge + '</span>' : '') +
          '<button class="quick-add-btn" onclick="addToCart(\'' + prod.id + '\', 1)">Add to Bag</button>' +
        '</div>' +
        '<div class="product-card-body">' +
          '<span class="product-category-tag">' + prod.category + '</span>' +
          '<h3 class="product-card-title"><a href="product-detail.html?id=' + prod.id + '">' + prod.name + '</a></h3>' +
          '<div class="product-rating"><span class="stars">\u2605</span> <span>' + prod.rating + '</span> <span>(' + prod.reviewsCount + ')</span></div>' +
          '<div class="product-price-row"><span class="product-price">' + formatCurrency(prod.price) + '</span>' +
          (prod.originalPrice ? '<span class="product-original-price">' + formatCurrency(prod.originalPrice) + '</span>' : '') +
          '</div>' +
        '</div>' +
      '</article>';
    }).join("");
  }

  // ── Shop Page: Filtering, Searching, Sorting ──
  var shopGrid = document.getElementById("shop-products-grid");
  if (shopGrid) { initShopPage(shopGrid); }

  // ── Product Detail Page ──
  var detailTitle = document.getElementById("detail-title");
  if (detailTitle) { initProductDetailPage(); }

  // ── Cart Page ──
  var cartContainer = document.getElementById("cart-view-container");
  if (cartContainer) { renderCartView(); }

  // ── Checkout Page ──
  var checkoutForm = document.getElementById("checkout-form");
  if (checkoutForm) { initCheckoutPage(checkoutForm); }
});


/* ════════════════════════════════════════════════════════════════
   SECTION 4: SHOP PAGE ENGINE
   ════════════════════════════════════════════════════════════════ */

function initShopPage(productsContainer) {
  var resultsCounter = document.getElementById("results-counter");
  var categoryFilterBtns = document.querySelectorAll(".filter-chip-btn");
  var searchInput = document.getElementById("shop-search-input");
  var sortSelect = document.getElementById("shop-sort-select");
  var priceRange = document.getElementById("shop-price-range");
  var priceDisplay = document.getElementById("price-max-display");
  var clearFiltersBtn = document.getElementById("clear-filters-btn");

  var urlParams = new URLSearchParams(window.location.search);
  var activeCategory = urlParams.get("category") || "all";
  var searchQuery = urlParams.get("search") || "";
  var maxPrice = parseInt(priceRange ? priceRange.max : 5000, 10);
  var sortOption = "featured";

  if (searchInput && searchQuery) searchInput.value = searchQuery;

  function syncCategoryButtons() {
    categoryFilterBtns.forEach(function(btn) {
      btn.classList.toggle("active", btn.dataset.category === activeCategory);
    });
  }
  syncCategoryButtons();

  function renderProducts() {
    var filtered = PRODUCTS.filter(function(prod) {
      var matchesCat = (activeCategory === "all") || (prod.category === activeCategory);
      var term = searchQuery.toLowerCase().trim();
      var matchesSearch = !term || prod.name.toLowerCase().indexOf(term) > -1 || prod.description.toLowerCase().indexOf(term) > -1 || prod.category.toLowerCase().indexOf(term) > -1;
      var matchesPrice = prod.price <= maxPrice;
      return matchesCat && matchesSearch && matchesPrice;
    });

    if (sortOption === "price-low") filtered.sort(function(a, b) { return a.price - b.price; });
    else if (sortOption === "price-high") filtered.sort(function(a, b) { return b.price - a.price; });
    else if (sortOption === "rating") filtered.sort(function(a, b) { return b.rating - a.rating; });
    else if (sortOption === "name-az") filtered.sort(function(a, b) { return a.name.localeCompare(b.name); });

    if (resultsCounter) resultsCounter.textContent = "Showing " + filtered.length + " of " + PRODUCTS.length + " objects";

    if (filtered.length === 0) {
      productsContainer.innerHTML = '<div class="no-results-state" style="grid-column:1/-1;"><h3>No matching artisanal pieces found</h3><p style="color:var(--text-muted);margin:0.8rem 0 1.5rem;">Try relaxing your search or adjusting the price threshold.</p><button class="btn btn-outline" id="reset-filters-btn">Reset All Filters</button></div>';
      var resetBtn = document.getElementById("reset-filters-btn");
      if (resetBtn) resetBtn.addEventListener("click", resetFilters);
      return;
    }

    productsContainer.innerHTML = filtered.map(function(prod) {
      return '<article class="product-card" data-id="' + prod.id + '">' +
        '<div class="product-card-media">' +
          '<a href="product-detail.html?id=' + prod.id + '"><img src="' + prod.image + '" alt="' + prod.name + '" loading="lazy" /></a>' +
          (prod.badge ? '<span class="product-badge' + (prod.badge.toLowerCase().indexOf("seller") > -1 ? ' badge-featured' : '') + '">' + prod.badge + '</span>' : '') +
          '<button class="quick-add-btn" onclick="addToCart(\'' + prod.id + '\', 1)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg> Add to Bag</button>' +
        '</div>' +
        '<div class="product-card-body">' +
          '<span class="product-category-tag">' + prod.category + '</span>' +
          '<h3 class="product-card-title"><a href="product-detail.html?id=' + prod.id + '">' + prod.name + '</a></h3>' +
          '<div class="product-rating"><span class="stars">\u2605</span> <span>' + prod.rating + '</span> <span>(' + prod.reviewsCount + ')</span></div>' +
          '<div class="product-price-row"><span class="product-price">' + formatCurrency(prod.price) + '</span>' +
          (prod.originalPrice ? '<span class="product-original-price">' + formatCurrency(prod.originalPrice) + '</span>' : '') +
          '</div></div></article>';
    }).join("");
  }

  function resetFilters() {
    activeCategory = "all"; searchQuery = "";
    if (searchInput) searchInput.value = "";
    if (priceRange) { priceRange.value = priceRange.max; maxPrice = parseInt(priceRange.max, 10); if (priceDisplay) priceDisplay.textContent = formatCurrency(maxPrice); }
    syncCategoryButtons(); renderProducts();
  }

  categoryFilterBtns.forEach(function(btn) {
    btn.addEventListener("click", function() { activeCategory = btn.dataset.category; syncCategoryButtons(); renderProducts(); });
  });
  if (searchInput) searchInput.addEventListener("input", function(e) { searchQuery = e.target.value; renderProducts(); });
  if (priceRange) priceRange.addEventListener("input", function(e) { maxPrice = parseInt(e.target.value, 10); if (priceDisplay) priceDisplay.textContent = formatCurrency(maxPrice); renderProducts(); });
  if (sortSelect) sortSelect.addEventListener("change", function(e) { sortOption = e.target.value; renderProducts(); });
  if (clearFiltersBtn) clearFiltersBtn.addEventListener("click", resetFilters);

  renderProducts();
}


/* ════════════════════════════════════════════════════════════════
   SECTION 5: PRODUCT DETAIL PAGE
   ════════════════════════════════════════════════════════════════ */

function initProductDetailPage() {
  var urlParams = new URLSearchParams(window.location.search);
  var productId = urlParams.get("id") || PRODUCTS[0].id;
  var product = PRODUCTS.find(function(p) { return p.id === productId; }) || PRODUCTS[0];

  document.title = product.name + " \u2014 Urbane & Vessel";

  var el = function(id) { return document.getElementById(id); };
  var bc = el("detail-breadcrumb-category");
  if (bc) { bc.textContent = product.category.charAt(0).toUpperCase() + product.category.slice(1); bc.href = "shop.html?category=" + product.category; }
  var bt = el("detail-breadcrumb-title"); if (bt) bt.textContent = product.name;
  var mi = el("detail-main-img"); if (mi) { mi.src = product.image; mi.alt = product.name; }

  var badge = el("detail-badge");
  if (badge) { if (product.badge) { badge.textContent = product.badge; badge.style.display = "inline-block"; } else { badge.style.display = "none"; } }

  var cat = el("detail-category"); if (cat) cat.textContent = product.category;
  var ttl = el("detail-title"); if (ttl) ttl.textContent = product.name;
  var rv = el("detail-rating-val"); if (rv) rv.textContent = product.rating;
  var rc = el("detail-reviews-count"); if (rc) rc.textContent = "(" + product.reviewsCount + " verified reviews)";
  var pr = el("detail-price"); if (pr) pr.textContent = formatCurrency(product.price);
  var op = el("detail-original-price");
  if (op) { if (product.originalPrice) { op.textContent = formatCurrency(product.originalPrice); op.style.display = "inline-block"; } else { op.style.display = "none"; } }
  var desc = el("detail-desc"); if (desc) desc.textContent = product.description;
  var sku = el("detail-sku"); if (sku) sku.textContent = product.sku;
  var mat = el("detail-materials"); if (mat) mat.textContent = product.materials;
  var dim = el("detail-dimensions"); if (dim) dim.textContent = product.dimensions;

  var qtyInput = el("detail-qty-input");
  var qtyMinus = el("qty-minus-btn");
  var qtyPlus = el("qty-plus-btn");
  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener("click", function() { var v = parseInt(qtyInput.value, 10) || 1; if (v > 1) qtyInput.value = v - 1; });
    qtyPlus.addEventListener("click", function() { var v = parseInt(qtyInput.value, 10) || 1; if (v < 10) qtyInput.value = v + 1; });
  }

  var addBtn = el("detail-add-to-bag-btn");
  if (addBtn) {
    addBtn.addEventListener("click", function() {
      var qty = parseInt(qtyInput ? qtyInput.value : 1, 10) || 1;
      addToCart(product.id, qty);
    });
  }

  var relatedGrid = el("related-products-grid");
  if (relatedGrid) {
    var related = PRODUCTS.filter(function(p) { return p.id !== product.id; }).slice(0, 4);
    relatedGrid.innerHTML = related.map(function(item) {
      return '<article class="product-card"><div class="product-card-media"><a href="product-detail.html?id=' + item.id + '"><img src="' + item.image + '" alt="' + item.name + '" loading="lazy" /></a><button class="quick-add-btn" onclick="addToCart(\'' + item.id + '\', 1)">Add to Bag</button></div><div class="product-card-body"><span class="product-category-tag">' + item.category + '</span><h3 class="product-card-title"><a href="product-detail.html?id=' + item.id + '">' + item.name + '</a></h3><div class="product-price-row"><span class="product-price">' + formatCurrency(item.price) + '</span></div></div></article>';
    }).join("");
  }
}


/* ════════════════════════════════════════════════════════════════
   SECTION 6: CART PAGE VIEW
   ════════════════════════════════════════════════════════════════ */

function renderCartView() {
  var container = document.getElementById("cart-view-container");
  if (!container) return;

  var items = getDetailedCart();
  var totals = calculateCartTotals();

  if (items.length === 0) {
    container.innerHTML = '<div class="empty-cart-view"><div class="empty-cart-icon"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg></div><h2>Your shopping bag is empty</h2><p style="color:var(--text-muted);margin:0.8rem auto 2rem;max-width:440px;">Explore our collection of wheel-thrown ceramics, raw linen, and artisanal homeware pieces.</p><a href="shop.html" class="btn btn-primary">Discover the Collection</a></div>';
    return;
  }

  var activePromo = getAppliedPromo();
  var itemsHtml = items.map(function(item) {
    return '<div class="cart-item-row" data-id="' + item.id + '"><div class="cart-item-info"><img src="' + item.image + '" alt="' + item.name + '" class="cart-item-thumb" /><div><h4 class="cart-item-name"><a href="product-detail.html?id=' + item.id + '">' + item.name + '</a></h4><p class="cart-item-sku">SKU: ' + item.sku + '</p></div></div><div class="cart-item-unit-price">' + formatCurrency(item.price) + '</div><div class="cart-item-qty"><div class="qty-stepper" style="height:38px;"><button class="qty-btn" onclick="handleChangeQty(\'' + item.id + '\',' + (item.quantity - 1) + ')">−</button><input type="text" class="qty-input" value="' + item.quantity + '" readonly style="width:36px;font-size:0.88rem;" /><button class="qty-btn" onclick="handleChangeQty(\'' + item.id + '\',' + (item.quantity + 1) + ')">+</button></div></div><div style="display:flex;align-items:center;justify-content:flex-end;gap:0.8rem;"><strong style="font-size:1rem;">' + formatCurrency(item.lineTotal) + '</strong><button class="cart-remove-btn" title="Remove item" onclick="handleRemoveItem(\'' + item.id + '\')"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button></div></div>';
  }).join("");

  var shippingNote = totals.qualifiesFreeShipping
    ? '<span style="color:var(--color-olive);font-weight:600;">\u2713 You\'ve unlocked Complimentary Standard Shipping!</span>'
    : 'Add <strong>' + formatCurrency(2000 - totals.subtotal) + '</strong> more to enjoy <strong>Free Shipping</strong>.';

  var promoHtml = activePromo
    ? '<div class="promo-applied-badge"><span>Code "' + activePromo + '" applied</span><button onclick="handleRemovePromo()" style="color:inherit;text-decoration:underline;font-size:0.75rem;">Remove</button></div>'
    : '<form id="promo-apply-form" class="promo-form" onsubmit="return handleApplyPromo(event)"><input type="text" id="promo-code-input" class="promo-input" placeholder="Promo code (e.g. FIRST10)" /><button type="submit" class="btn btn-outline btn-sm">Apply</button></form><div style="font-size:0.72rem;color:var(--text-light);margin-top:0.4rem;">Try <strong>FIRST10</strong> (10%) or <strong>URBANE15</strong> (15%)</div>';

  container.innerHTML =
    '<div class="cart-layout"><div class="cart-items-card"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;"><h3>Items in Bag (' + totals.itemCount + ')</h3><button class="btn btn-outline btn-sm" id="clear-bag-btn" style="padding:0.4rem 0.8rem;font-size:0.72rem;">Clear All</button></div><div class="cart-table-header"><span>Product</span><span>Price</span><span>Quantity</span><span style="text-align:right;">Total</span></div><div class="cart-items-list">' + itemsHtml + '</div><div style="margin-top:2rem;padding:1.2rem;background:var(--bg-subtle);border-radius:var(--radius-sm);font-size:0.86rem;">' + shippingNote + '</div></div>' +
    '<aside class="order-summary-box"><h3 class="summary-title">Order Summary</h3><div class="summary-line-item"><span>Bag Subtotal</span><span>' + formatCurrency(totals.subtotal) + '</span></div>' +
    (totals.discount > 0 ? '<div class="summary-line-item discount-item"><span>Promotion (' + totals.promoDetails.code + ')</span><span>-' + formatCurrency(totals.discount) + '</span></div>' : '') +
    '<div class="summary-line-item"><span>Estimated Shipping</span><span>' + (totals.shippingFee === 0 ? '<strong style="color:var(--color-olive);">FREE</strong>' : formatCurrency(totals.shippingFee)) + '</span></div><div class="summary-line-item"><span>Estimated Taxes (GST 5%)</span><span>' + formatCurrency(totals.tax) + '</span></div><div class="promo-box">' + promoHtml + '</div><div class="summary-line-item total-line"><span>Grand Total</span><span style="color:var(--color-terracotta);">' + formatCurrency(totals.grandTotal) + '</span></div><a href="checkout.html" class="btn btn-terracotta btn-block" style="margin-top:1.5rem;padding:1rem;">Proceed to Checkout &rarr;</a><div style="text-align:center;margin-top:1.2rem;"><a href="shop.html" style="font-size:0.82rem;color:var(--text-muted);text-decoration:underline;">Continue browsing collection</a></div></aside></div>';

  var clearBtn = document.getElementById("clear-bag-btn");
  if (clearBtn) {
    clearBtn.addEventListener("click", function() {
      if (confirm("Are you sure you want to empty your shopping bag?")) { clearCart(); renderCartView(); }
    });
  }
}

window.handleChangeQty = function(productId, newQty) { updateCartQuantity(productId, newQty); renderCartView(); };
window.handleRemoveItem = function(productId) { removeFromCart(productId); renderCartView(); };
window.handleApplyPromo = function(e) { e.preventDefault(); var input = document.getElementById("promo-code-input"); if (!input) return false; var result = applyPromoCode(input.value); if (result.success) { showToast(result.message, "success"); renderCartView(); } else { showToast(result.message, "error"); } return false; };
window.handleRemovePromo = function() { removePromoCode(); showToast("Promotional code removed", "info"); renderCartView(); };


/* ════════════════════════════════════════════════════════════════
   SECTION 7: CHECKOUT PAGE
   ════════════════════════════════════════════════════════════════ */

function initCheckoutPage(checkoutForm) {
  var summaryContainer = document.getElementById("checkout-summary-container");
  var modalBackdrop = document.getElementById("order-confirmation-modal");
  var orderNumberSpan = document.getElementById("confirmed-order-number");
  var orderEmailSpan = document.getElementById("confirmed-order-email");

  var items = getDetailedCart();
  if (items.length === 0) {
    if (summaryContainer) summaryContainer.innerHTML = '<div style="padding:2rem;background:var(--bg-surface);border:1px solid var(--border-color);border-radius:var(--radius-md);text-align:center;"><p style="margin-bottom:1rem;color:var(--text-muted);">Your bag is currently empty.</p><a href="shop.html" class="btn btn-primary btn-sm">Return to Shop</a></div>';
    var placeOrderBtn = document.getElementById("place-order-btn");
    if (placeOrderBtn) placeOrderBtn.disabled = true;
    return;
  }

  // Render Summary
  var totals = calculateCartTotals();
  if (summaryContainer) {
    var itemsHtml = items.map(function(item) {
      return '<div style="display:flex;gap:1rem;align-items:center;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--border-color);"><img src="' + item.image + '" alt="' + item.name + '" style="width:52px;height:52px;object-fit:cover;border-radius:4px;" /><div style="flex-grow:1;"><h5 style="font-size:0.9rem;font-family:var(--font-serif);">' + item.name + '</h5><span style="font-size:0.76rem;color:var(--text-light);">Qty: ' + item.quantity + '</span></div><strong style="font-size:0.9rem;">' + formatCurrency(item.lineTotal) + '</strong></div>';
    }).join("");

    summaryContainer.innerHTML = '<div class="checkout-card" style="position:sticky;top:calc(var(--nav-height)+20px);"><h3 class="summary-title" style="margin-bottom:1.2rem;">Order Review (' + totals.itemCount + ' items)</h3><div style="max-height:280px;overflow-y:auto;margin-bottom:1.5rem;padding-right:5px;">' + itemsHtml + '</div><div class="summary-line-item"><span>Subtotal</span><span>' + formatCurrency(totals.subtotal) + '</span></div>' + (totals.discount > 0 ? '<div class="summary-line-item discount-item"><span>Discount (' + totals.promoDetails.code + ')</span><span>-' + formatCurrency(totals.discount) + '</span></div>' : '') + '<div class="summary-line-item"><span>Shipping</span><span>' + (totals.shippingFee === 0 ? '<strong style="color:var(--color-olive);">FREE</strong>' : formatCurrency(totals.shippingFee)) + '</span></div><div class="summary-line-item"><span>Taxes (5% GST)</span><span>' + formatCurrency(totals.tax) + '</span></div><div class="summary-line-item total-line"><span>Total Payable</span><span style="color:var(--color-terracotta);">' + formatCurrency(totals.grandTotal) + '</span></div></div>';
  }

  // Radio button styling
  document.querySelectorAll(".radio-card-label").forEach(function(label) {
    var radio = label.querySelector("input[type='radio']");
    if (radio) {
      radio.addEventListener("change", function() {
        document.querySelectorAll("input[name='" + radio.name + "']").forEach(function(r) { r.closest(".radio-card-label").classList.remove("selected"); });
        label.classList.add("selected");
      });
    }
  });

  // Form Submission
  checkoutForm.addEventListener("submit", function(e) {
    e.preventDefault();
    var isValid = true;
    var fields = {
      "first-name": { test: function(v) { return v.length >= 2; }, msg: "Please provide your first name." },
      "last-name": { test: function(v) { return v.length >= 1; }, msg: "Please provide your last name." },
      "email": { test: function(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, msg: "Enter a valid email address." },
      "phone": { test: function(v) { return /^[0-9]{10}$/.test(v.replace(/\D/g, "")); }, msg: "Enter a 10-digit mobile number." },
      "address": { test: function(v) { return v.length >= 6; }, msg: "Enter your full street address." },
      "city": { test: function(v) { return v.length >= 2; }, msg: "Enter your city." },
      "state": { test: function(v) { return v.length >= 2; }, msg: "Select your state." },
      "pincode": { test: function(v) { return /^[0-9]{6}$/.test(v); }, msg: "Enter a 6-digit postal PIN code." }
    };

    Object.keys(fields).forEach(function(id) {
      var input = document.getElementById(id);
      if (!input) return;
      var val = input.value.trim();
      var errSpan = input.parentElement.querySelector(".field-error");
      if (!fields[id].test(val)) {
        isValid = false;
        input.style.borderColor = "#c0392b";
        if (errSpan) { errSpan.textContent = fields[id].msg; errSpan.style.display = "block"; }
      } else {
        input.style.borderColor = "";
        if (errSpan) errSpan.style.display = "none";
      }
    });

    if (!isValid) { showToast("Please review the highlighted fields.", "error"); return; }

    var randomOrderNum = "UV-" + Math.floor(100000 + Math.random() * 900000);
    if (orderNumberSpan) orderNumberSpan.textContent = randomOrderNum;
    if (orderEmailSpan) orderEmailSpan.textContent = document.getElementById("email").value.trim();
    if (modalBackdrop) modalBackdrop.classList.add("modal-active");
    clearCart();
  });
}
