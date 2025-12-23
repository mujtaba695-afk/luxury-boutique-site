let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
}

function addToCart(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    const effectivePrice = product.onSale ? product.discountPrice : product.price;

    if (existingItem) {
        existingItem.quantity += 1;
        existingItem.price = effectivePrice; // Sync price in case it changed
    } else {
        cart.push({ ...product, price: effectivePrice, quantity: 1 });
    }

    triggerConfetti();
    saveCart();
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function openCart() {
    document.getElementById('cartDrawer').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const subtotalContainer = document.getElementById('cartSubtotal');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-msg">Your bag is empty.</p>';
        if (subtotalContainer) subtotalContainer.textContent = '$0.00';
        return;
    }

    let subtotal = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        subtotal += item.price * item.quantity;
        return `
            <div class="cart-item" style="display: flex; margin-bottom: 20px;">
                <img src="${item.primaryImage}" alt="${item.title}" style="width: 70px; aspect-ratio: 3/4; object-fit: cover;">
                <div class="cart-item-info" style="flex: 1; margin-left:15px;">
                    <h4 class="serif" style="font-size: 0.9rem; margin: 0;">${item.title}</h4>
                    <p style="font-size: 0.8rem; color: var(--color-gold); margin: 5px 0;">$${item.price.toFixed(2)}</p>
                    <div class="quantity-controls" style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 0.8rem;">Qty: ${item.quantity}</span>
                        <button onclick="removeFromCart(${item.id})" style="background: none; border: none; font-size: 0.7rem; color: #ff6b6b; cursor: pointer;">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    if (subtotalContainer) subtotalContainer.textContent = `$${subtotal.toFixed(2)}`;
}

// Confetti Effect
function triggerConfetti() {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 3000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // Brand colors: Gold, Coral, Blush
        const colors = ['#C5A059', '#DFA69D', '#E8D5D5'];

        confetti({
            ...defaults,
            particleCount,
            colors: colors,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });
        confetti({
            ...defaults,
            particleCount,
            colors: colors,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);
}

// Event Listeners
document.getElementById('cartToggle')?.addEventListener('click', openCart);
document.getElementById('closeCart')?.addEventListener('click', closeCart);
document.getElementById('cartOverlay')?.addEventListener('click', closeCart);

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCartItems();
});
