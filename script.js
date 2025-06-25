// Product data
const products = [
    {
        id: 1,
        name: "Premium Jacket",
        price: 299,
        originalPrice: 399,
        image: "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/2024/OCTOBER/15/7spdUFuC_fd6d3e9bec364b8aa1e033ac3b31430d.jpg",
        category: "outerwear",
        description: "Crafted from the finest Italian leather, this jacket combines timeless style with modern comfort.",
        rating: 4.8,
        reviews: 124,
        inStock: true,
        featured: true
    },
    {
        id: 2,
        name: "Leather Jacket",
        price: 189,
        image: "https://m.media-amazon.com/images/I/718QlGtpXTL._AC_SX342_.jpg",
        category: "knitwear",
        description: "Luxuriously soft cashmere blend sweater perfect for any season.",
        rating: 4.9,
        reviews: 89,
        inStock: true,
        featured: true
    },
    {
        id: 3,
        name: "",
        price: 459,
        image: "https://image.made-in-china.com/202f0j00IfpqaVhFsUgj/New-Korean-Women-Ponytail-Hair-Accessories-Cellulose-Acetate-Bow-Knot-Hair-Ties-Elastic-Hair-Rubber-Bands.webp",
        category: "accessories",
        description: "Elegant handcrafted leather handbag with gold-tone hardware.",
        rating: 4.7,
        reviews: 156,
        inStock: true,
        featured: true
    },
    {
        id: 4,
        name: "Classic black footwear",
        price: 129,
        originalPrice: 159,
        image: "https://cindyfootwears.com/assets/img/women%20shoes%20collections/casual-indian-women-sandals/Cindy%20Subtle%20Sophistication%20Sandals/Pure%20Step%20black%20Sandals%20by%20Cindy%20Footwears.jpg",
        category: "footwear",
        description: "Minimalist design meets maximum comfort in these premium sneakers.",
        rating: 4.6,
        reviews: 203,
        inStock: true
    },
    {
        id: 5,
        name: "Silk Blend Dress",
        price: 245,
        image: "https://angelandrocket.in/cdn/shop/files/AR2283_1.jpg?v=1690191019",
        category: "knitwear",
        description: "Flowing silk blend dress with elegant draping and modern silhouette.",
        rating: 4.8,
        reviews: 67,
        inStock: true
    },
    {
        id: 6,
        name: "Tailored Blazer",
        price: 279,
        image: "https://img.faballey.com/images/Product/XKS03763F/d3.jpg",
        category: "outerwear",
        description: "Perfectly tailored blazer for the modern professional.",
        rating: 4.7,
        reviews: 112,
        inStock: true
    },
    {
        id: 7,
        name: "Tailored Blazer",
        price: 279,
        image: "https://assets2.andaazfashion.com/media/catalog/product/cache/1/image/500x750/a12781a7f2ccb3d663f7fd01e1bd2e4e/r/e/red-anarkali-suit-1-lstv01084_1.jpg",
        category: "outerwear",
        description: "Perfectly tailored blazer for the modern professional.",
        rating: 4.7,
        reviews: 112,
        inStock: true
    },
    {
        id: 8,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://images.meesho.com/images/products/278280932/z6ays_512.webp",
        category: "outerwear",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 9,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://kajols.com/cdn/shop/products/georgette-printed-green-and-mustard-jacket-style-salwar-suit-253342-1000x1375.jpg",
        category: "outerwear",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 10,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://images.cbazaar.com/images/Yellow-Digital-Print-Organza-Jacket-N-Green-Dress--DRBS02209637-u.jpg",
        category: "outerwear",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 11,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://img.faballey.com/images/Product/XJS01707/d3.jpg",
        category: "accessorie",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 12,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://img.joomcdn.net/ea046d110c3057ba9a029227573e3304c19a2e99_original.jpeg",
        category: "accessories",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 13,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://yellowchimes.com/cdn/shop/files/71wG9HedQyL.jpg?v=1738121417",
        category: "accessories",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 14,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://www.netmeds.com/images/product-v1/400x400/1155091/majestique_big_satin_layered_hair_bows_for_women_long_tail_ribbon_barrettes_clip_accessories_best_gift_pink_1s_796561_0_0.webp",
        category: "accessories",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 15,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://www.aldoshoes.in/on/demandware.static/-/Sites-aldo_master_catalog/default/dw305dbd9d/large/caro101_1.jpg",
        category: "accessories",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 16,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30677660/2024/9/2/1da1cc89-a2e3-4cd2-ba51-8c95cb9728e51725257925027-Styli-PU-Structured-Sling-Bag-with-Quilted-7181725257924748-1.jpg",
        category: "accessories",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 17,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://assets.ajio.com/medias/sys_master/root/20250311/Anx2/67d03cc059f83539802fa0d1/-473Wx593H-4934585700-multi-MODEL.jpg",
        category: "accessories",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 18,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://i.pinimg.com/474x/11/35/3c/11353c1e3b858a474f471e5f2f47bb9f.jpg",
        category: "knitwear",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 19,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://shops.ae/products/Shopping/b87bbdff0a2caa87ad51468ec3297c8a.300x300.jpeg",
        category: "knitwear",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 20,
        name: "Artisan Sunglasses",
        price: 189,
        originalPrice: 229,
        image: "https://assets.ajio.com/medias/sys_master/root/20240613/HzB5/666c59be6f60443f313a1a77/-473Wx593H-465730939-navy-MODEL.jpg",
        category: "knitwear",
        description: "Hand-polished frames with premium UV protection lenses.",
        rating: 4.5,
        reviews: 78,
        inStock: true
    },
    {
        id: 21,
        name: "Classic White Sneakers",
        price: 129,
        originalPrice: 159,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ay0b-lIO84f7_jtWcoLywjj2mT3nxu4XfA&s",
        category: "footwear",
        description: "Minimalist design meets maximum comfort in these premium sneakers.",
        rating: 4.6,
        reviews: 203,
        inStock: true
    },
    {
        id: 22,
        name: "Classic White Sneakers",
        price: 129,
        originalPrice: 159,
        image: "https://fausto.in/cdn/shop/files/FSTKI-8859BEIGE_400x.jpg?v=1688106747",
        category: "footwear",
        description: "Minimalist design meets maximum comfort in these premium sneakers.",
        rating: 4.6,
        reviews: 203,
        inStock: true
    },
    {
        id: 23,
        name: "Classic White Sneakers",
        price: 129,
        originalPrice: 159,
        image: "https://fausto.in/cdn/shop/products/FST_KI-204_CAMEL_1_e109e86c-e9ec-44f4-a5a4-9cde07ffcf7a_1200x1200.jpg?v=1743177666",
        category: "footwear",
        description: "Minimalist design meets maximum comfort in these premium sneakers.",
        rating: 4.6,
        reviews: 203,
        inStock: true
    },
    {
        id: 24,
        name: "Classic White Sneakers",
        price: 129,
        originalPrice: 159,
        image: "https://availeverything.com/public/uploads/all/QK3TImQDhMkkwBlKkMyiWZsO2NjOBOcOQZRuqFFv.jpg",
        category: "footwear",
        description: "Minimalist design meets maximum comfort in these premium sneakers.",
        rating: 4.6,
        reviews: 203,
        inStock: true
    },
];

// Shopping cart
let cart = [];
let currentFilter = 'all';
let searchQuery = '';

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    // Cart events
    cartBtn.addEventListener('click', toggleCart);
    cartClose.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', function(e) {
        if (e.target === cartOverlay) {
            toggleCart();
        }
    });

    // Search events
    searchBtn.addEventListener('click', toggleSearch);
    searchClose.addEventListener('click', toggleSearch);
    searchOverlay.addEventListener('click', function(e) {
        if (e.target === searchOverlay) {
            toggleSearch();
        }
    });
    searchInput.addEventListener('input', handleSearch);

    // Filter events
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            setActiveFilter(this);
            filterProducts(category);
        });
    });

    // Hero CTA
    const heroCta = document.querySelector('.hero-cta');
    if (heroCta) {
        heroCta.addEventListener('click', function() {
            document.querySelector('.products').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
}

// Product rendering
function renderProducts() {
    const filteredProducts = getFilteredProducts();
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<div class="col-span-full text-center text-gray-500 py-8">No products found.</div>';
        return;
    }

    productsGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" />
                ${product.originalPrice ? '<div class="product-badge">Sale</div>' : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${renderStars(product.rating)}
                    </div>
                    <span class="rating-text">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">$${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">$${product.originalPrice}</span>` : ''}
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<span class="star">★</span>';
    }
    
    if (hasHalfStar) {
        starsHtml += '<span class="star">☆</span>';
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
        starsHtml += '<span class="star" style="color: #e2e8f0;">★</span>';
    }
    
    return starsHtml;
}

// Filtering and search
function getFilteredProducts() {
    let filtered = products;
    
    // Filter by category
    if (currentFilter !== 'all') {
        filtered = filtered.filter(product => product.category === currentFilter);
    }
    
    // Filter by search query
    if (searchQuery) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    return filtered;
}

function filterProducts(category) {
    currentFilter = category;
    renderProducts();
}

function setActiveFilter(activeBtn) {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

function handleSearch() {
    searchQuery = searchInput.value;
    renderProducts();
}

// Search functionality
function toggleSearch() {
    searchOverlay.classList.toggle('active');
    if (searchOverlay.classList.contains('active')) {
        searchInput.focus();
    }
}

// Cart functionality
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.product.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ product, quantity: 1 });
    }
    
    updateCartUI();
    
    // Show success feedback
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '#1e293b';
    }, 1000);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.product.id !== productId);
    updateCartUI();
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.product.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartUI();
    }
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.classList.toggle('show', totalItems > 0);
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    
    // Render cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.product.image}" alt="${item.product.name}" class="cart-item-image" />
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.product.name}</div>
                    <div class="cart-item-price">$${item.product.price}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.product.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.product.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.product.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function toggleCart() {
    cartOverlay.classList.toggle('active');
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});