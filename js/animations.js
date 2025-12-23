// Hero Animations
function animateHero() {
    const tl = gsap.timeline();
    tl.to(".hero-content h1", { opacity: 1, y: 0, duration: 1, ease: "power4.out" })
        .to(".hero-content p", { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=0.6")
        .to(".hero-content .btn", { opacity: 1, y: 0, duration: 1, ease: "power4.out" }, "-=0.6");
}

// Product Rendering
function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    // Show 3 products for the homepage
    const featured = products.slice(0, 3);

    container.innerHTML = featured.map(product => `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <div class="product-image-container">
                ${product.onSale ? '<div class="sale-badge">SALE</div>' : ''}
                <img src="${product.primaryImage}" alt="Model in boutique ${product.title} - ${product.fabric} luxury ensemble with intricate hand embroidery" class="product-image primary">
                <img src="${product.secondaryImage}" alt="${product.title} lifestyle view - ${product.fabric} fabric detail" class="product-image secondary">
                <div class="add-to-cart-quick" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Bag</div>
                <button class="wishlist-card-btn" onclick="event.stopPropagation(); toggleWishlist(${product.id})">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-price">
                    ${product.onSale ? `<span class="discount-tag">$${product.price.toFixed(2)}</span> $${product.discountPrice.toFixed(2)}` : `$${product.price.toFixed(2)}`}
                </p>
            </div>
        </div>
    `).join('');

    // Trigger Lucide icons if any were added
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Page Transitions
function setupPageTransitions() {
    window.addEventListener('load', () => {
        gsap.from("body", { opacity: 0, duration: 0.8, ease: "power2.inOut" });
    });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.html')) {
                e.preventDefault();
                gsap.to("body", {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => window.location.href = href
                });
            }
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();
    animateHero();
    setupPageTransitions();
});
