const products = [
    // Adidas (Sport & Casual)
    { id: 1, name: "Ultraboost 5.0", brand: "Adidas", category: "Sport", price: 180 },
    { id: 2, name: "Stan Smith Classic", brand: "Adidas", category: "Casual", price: 100 },
    { id: 3, name: "Forum Low 84", brand: "Adidas", category: "Casual", price: 110 },
    { id: 4, name: "Adizero Pro", brand: "Adidas", category: "Sport", price: 200 },
    { id: 5, name: "Samba OG White", brand: "Adidas", category: "Casual", price: 90 },
    { id: 6, name: "Gazelle Indoor", brand: "Adidas", category: "Casual", price: 120 },
    { id: 7, name: "Superstar XLG", brand: "Adidas", category: "Casual", price: 110 },
    { id: 8, name: "Terrex Speed Ultra", brand: "Adidas", category: "Sport", price: 160 },
    { id: 9, name: "NMD_R1 V3", brand: "Adidas", category: "Sport", price: 170 },
    { id: 10, name: "Campus 00s", brand: "Adidas", category: "Casual", price: 110 },
    { id: 11, name: "4DFWD 3", brand: "Adidas", category: "Sport", price: 220 },
    { id: 12, name: "Handball Spezial", brand: "Adidas", category: "Casual", price: 105 },
    { id: 13, name: "Duramo Speed", brand: "Adidas", category: "Sport", price: 95 },
    { id: 14, name: "Ozweego Triple Black", brand: "Adidas", category: "Casual", price: 130 },
    { id: 15, name: "Questar Flow", brand: "Adidas", category: "Sport", price: 110 },
    { id: 16, name: "Copa Pure 2", brand: "Adidas", category: "Sport", price: 250 },
    { id: 17, name: "SolarGlide 6", brand: "Adidas", category: "Sport", price: 140 },
    { id: 18, name: "Continental 80", brand: "Adidas", category: "Casual", price: 100 },
    { id: 19, name: "Busenitz Pro", brand: "Adidas", category: "Sport", price: 85 },
    { id: 20, name: "Retropy F2", brand: "Adidas", category: "Casual", price: 95 },

    // Puma (Sport & Casual)
    { id: 21, name: "Suede Classic XXI", brand: "Puma", category: "Casual", price: 75 },
    { id: 22, name: "RS-X Efekt", brand: "Puma", category: "Sport", price: 110 },
    { id: 23, name: "Cali Court", brand: "Puma", category: "Casual", price: 90 },
    { id: 24, name: "Deviate Nitro 2", brand: "Puma", category: "Sport", price: 160 },
    { id: 25, name: "Palermo Special", brand: "Puma", category: "Casual", price: 100 },
    { id: 26, name: "Slipstream Lo", brand: "Puma", category: "Casual", price: 110 },
    { id: 27, name: "ForeverRun Nitro", brand: "Puma", category: "Sport", price: 150 },
    { id: 28, name: "Mayze Platform", brand: "Puma", category: "Casual", price: 100 },
    { id: 29, name: "Future Ultimate", brand: "Puma", category: "Sport", price: 230 },
    { id: 30, name: "Tishatsu Runner", brand: "Puma", category: "Sport", price: 80 },
    { id: 31, name: "Morphic Base", brand: "Puma", category: "Sport", price: 105 },
    { id: 32, name: "Super Team OG", brand: "Puma", category: "Casual", price: 110 },
    { id: 33, name: "Mirage Sport", brand: "Puma", category: "Casual", price: 120 },
    { id: 34, name: "Liberate Nitro 2", brand: "Puma", category: "Sport", price: 130 },
    { id: 35, name: "Velophasis Phased", brand: "Puma", category: "Sport", price: 140 },
    { id: 36, name: "King Top FG", brand: "Puma", category: "Sport", price: 150 },
    { id: 37, name: "Easy Rider", brand: "Puma", category: "Casual", price: 90 },
    { id: 38, name: "All-Pro Nitro", brand: "Puma", category: "Sport", price: 130 },
    { id: 39, name: "Army Trainer", brand: "Puma", category: "Casual", price: 95 },
    { id: 40, name: "Electron E", brand: "Puma", category: "Sport", price: 70 },

    // Crocs (Casual & Sport-ish)
    { id: 41, name: "Classic Clog White", brand: "Crocs", category: "Casual", price: 50 },
    { id: 42, name: "Echo Clog Black", brand: "Crocs", category: "Sport", price: 80 },
    { id: 43, name: "LiteRide 360", brand: "Crocs", category: "Sport", price: 70 },
    { id: 44, name: "Mega Crush Clog", brand: "Crocs", category: "Casual", price: 85 },
    { id: 45, name: "Classic Sandal 2.0", brand: "Crocs", category: "Casual", price: 40 },
    { id: 46, name: "Mellow Recovery", brand: "Crocs", category: "Casual", price: 60 },
    { id: 47, name: "All-Terrain Clog", brand: "Crocs", category: "Sport", price: 65 },
    { id: 48, name: "Baya Clog", brand: "Crocs", category: "Casual", price: 55 },
    { id: 49, name: "Classic Geometric", brand: "Crocs", category: "Casual", price: 60 },
    { id: 50, name: "Pollex Clog", brand: "Crocs", category: "Casual", price: 85 },
    { id: 51, name: "Duet Max II", brand: "Crocs", category: "Sport", price: 75 },
    { id: 52, name: "Classic Lined Clog", brand: "Crocs", category: "Casual", price: 65 },
    { id: 53, name: "Swiftwater Wave", brand: "Crocs", category: "Sport", price: 45 },
    { id: 54, name: "Classic Cozzzy", brand: "Crocs", category: "Casual", price: 55 },
    { id: 55, name: "Brooklyn Low Wedge", brand: "Crocs", category: "Casual", price: 60 },
    { id: 56, name: "Kadee II Flip", brand: "Crocs", category: "Casual", price: 30 },
    { id: 57, name: "Literide Pacer", brand: "Crocs", category: "Sport", price: 75 },
    { id: 58, name: "Yukon Mesa Clog", brand: "Crocs", category: "Casual", price: 70 },
    { id: 59, name: "Splash Strappy", brand: "Crocs", category: "Casual", price: 45 },
    { id: 60, name: "Crocband Clog", brand: "Crocs", category: "Casual", price: 55 }
];

const itemsPerPage = 12;
let currentPage = 1;
let filteredList = [...products];

const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const brandFilters = document.querySelectorAll('.filter-brand');
const categoryFilters = document.querySelectorAll('.filter-category');
const paginationContainer = document.createElement('div');
paginationContainer.className = 'pagination reveal reveal-up active';

function renderProducts() {
    productsGrid.innerHTML = '';
    
    if (filteredList.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary); padding: 40px;">No se encontraron productos en nuestro archivo.</p>';
        return;
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filteredList.slice(start, end);

    paginatedItems.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card reveal reveal-up active';
        productCard.innerHTML = `
            <div class="product-image">${product.brand}</div>
            <div class="product-info">
                <p class="brand">${product.brand}</p>
                <h4>${product.name}</h4>
                <p class="price">$${product.price}</p>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    renderPagination();
}

function renderPagination() {
    const totalPages = Math.ceil(filteredList.length / itemsPerPage);
    paginationContainer.innerHTML = '';
    
    if (totalPages <= 1) return;

    // Previous Button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '←';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
        currentPage--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderProducts();
    });
    paginationContainer.appendChild(prevBtn);

    // Page Numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            renderProducts();
        });
        paginationContainer.appendChild(pageBtn);
    }

    // Next Button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = '→';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
        currentPage++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderProducts();
    });
    paginationContainer.appendChild(nextBtn);

    // Ensure pagination is after the grid
    if (!productsGrid.nextSibling || productsGrid.nextSibling !== paginationContainer) {
        productsGrid.parentNode.insertBefore(paginationContainer, productsGrid.nextSibling);
    }
}

function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    const activeBrands = Array.from(brandFilters)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
        
    const activeCategories = Array.from(categoryFilters)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    filteredList = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.brand.toLowerCase().includes(searchTerm);
        
        const matchesBrand = activeBrands.length === 0 || activeBrands.includes(product.brand);
        const matchesCategory = activeCategories.length === 0 || activeCategories.includes(product.category);
        
        return matchesSearch && matchesBrand && matchesCategory;
    });

    currentPage = 1; // Reset to first page on new filter
    renderProducts();
}

// Event Listeners
if (searchInput) {
    searchInput.addEventListener('input', filterProducts);
    brandFilters.forEach(cb => cb.addEventListener('change', filterProducts));
    categoryFilters.forEach(cb => cb.addEventListener('change', filterProducts));
}

// Initial Render
renderProducts();
