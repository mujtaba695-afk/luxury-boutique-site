let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast("Removed from wishlist");
    } else {
        wishlist.push(productId);
        showToast("Added to wishlist");
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistIcons();
}

function updateWishlistIcons() {
    document.querySelectorAll('.wishlist-btn i').forEach(icon => {
        // Since we reload icon colors/styles, we check the product context if possible
        // For the header icon, it just shows if anything is in wishlist
        if (wishlist.length > 0) {
            icon.style.fill = 'var(--color-coral)';
            icon.style.color = 'var(--color-coral)';
        } else {
            icon.style.fill = 'none';
            icon.style.color = 'currentColor';
        }
    });
}

function renderWishlistPage() {
    const container = document.getElementById('wishlistGrid');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="wishlist-empty">
                <h2 class="serif">Your wishlist is empty</h2>
                <p>Save your favorite items here to find them later.</p>
                <a href="collection.html" class="btn btn-primary" style="margin-top: 20px;">Explore Collection</a>
            </div>
        `;
        return;
    }

    const items = wishlist.map(id => getProductById(id)).filter(p => p);

    container.innerHTML = items.map(product => `
        <div class="product-card">
            <div class="product-image-container" onclick="window.location.href='product.html?id=${product.id}'">
                <img src="${product.primaryImage}" alt="${product.title}" class="product-image primary">
                <img src="${product.secondaryImage}" alt="${product.title}" class="product-image secondary">
                <div class="add-to-cart-quick" onclick="event.stopPropagation(); addToCart(${product.id})">Add to Bag</div>
            </div>
            <div class="product-info">
                <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                    <h3 class="product-title">${product.title}</h3>
                    <button class="icon-btn" onclick="toggleWishlist(${product.id}); renderWishlistPage();" style="padding: 0;">
                        <i data-lucide="trash-2" style="width: 16px; color: #ff6b6b;"></i>
                    </button>
                </div>
                <p class="product-price">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', () => {
    updateWishlistIcons();
    renderWishlistPage();
});
