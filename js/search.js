function setupSearch() {
    const searchBtn = document.querySelector('.search-btn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    if (!searchBtn || !searchOverlay) return;

    searchBtn.addEventListener('click', () => {
        searchOverlay.style.display = 'flex';
        gsap.from(searchOverlay, { opacity: 0, duration: 0.5 });
        searchInput.focus();
    });

    closeSearch.addEventListener('click', () => {
        gsap.to(searchOverlay, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => searchOverlay.style.display = 'none'
        });
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }

        const filtered = products.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.fabric.toLowerCase().includes(query)
        );

        renderSearchResults(filtered);
    });
}

function renderSearchResults(results) {
    const container = document.getElementById('searchResults');
    if (results.length === 0) {
        container.innerHTML = '<p class="serif" style="grid-column: 1/-1; text-align: center;">No products found.</p>';
        return;
    }

    container.innerHTML = results.map(product => `
        <div class="product-card" onclick="window.location.href='product.html?id=${product.id}'">
            <div class="product-image-container" style="aspect-ratio: 3/4;">
                <img src="${product.primaryImage}" alt="${product.title}" class="product-image">
            </div>
            <div class="product-info">
                <h4 class="product-title" style="font-size: 0.9rem;">${product.title}</h4>
                <p class="product-price" style="font-size: 0.8rem;">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `).join('');
}

function setupMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mobileOverlay = document.getElementById('mobileMenuOverlay');
    const closeBtn = document.getElementById('closeMobileMenu');

    if (!menuBtn || !mobileOverlay) return;

    menuBtn.addEventListener('click', () => {
        mobileOverlay.style.display = 'flex';
        gsap.from(".mobile-menu-links a", {
            x: -50,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    closeBtn.addEventListener('click', () => {
        mobileOverlay.style.display = 'none';
    });
}

function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    setupSearch();
    setupMobileMenu();
});
