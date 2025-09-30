// Categories Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeCategoriesPage();
});

function initializeCategoriesPage() {
    setupCategoryCards();
    loadPopularArticles();
    setupCategoryFiltering();
    animateOnScroll();
}

// Setup category card interactions
function setupCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card-enhanced');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('category-btn')) {
                return; // Let button handle its own click
            }
            
            const category = this.dataset.category;
            redirectToSearch('', category);
        });
    });
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const category = this.closest('.category-card-enhanced').dataset.category;
            redirectToSearch('', category);
        });
    });
}

// Load popular articles by category
function loadPopularArticles() {
    const categoryArticlesContainer = document.getElementById('categoryArticles');
    if (!categoryArticlesContainer) return;
    
    // Group articles by category
    const articlesByCategory = {};
    
    articles.forEach(article => {
        const categoryKey = getCategoryKey(article.category);
        if (!articlesByCategory[categoryKey]) {
            articlesByCategory[categoryKey] = [];
        }
        articlesByCategory[categoryKey].push(article);
    });
    
    // Create sections for each category
    let sectionsHTML = '';
    
    Object.keys(articlesByCategory).forEach(categoryKey => {
        const categoryInfo = getCategoryInfo(categoryKey);
        const categoryArticles = articlesByCategory[categoryKey].slice(0, 3); // Show top 3
        
        sectionsHTML += `
            <div class="category-section">
                <h3>
                    <i class="${categoryInfo.icon}"></i>
                    ${categoryInfo.name}
                </h3>
                <div class="category-articles-grid">
                    ${categoryArticles.map(article => createCategoryArticleCard(article)).join('')}
                </div>
            </div>
        `;
    });
    
    categoryArticlesContainer.innerHTML = sectionsHTML;
    
    // Add click listeners to article cards
    addArticleCardListeners();
}

// Create article card for category section
function createCategoryArticleCard(article) {
    return `
        <div class="category-article-card" data-id="${article.id}">
            <img src="${article.image}" alt="${article.title}" class="category-article-image">
            <div class="category-article-content">
                <h4 class="category-article-title">${article.title}</h4>
                <p class="category-article-excerpt">${article.excerpt}</p>
                <div class="category-article-meta">
                    <span class="article-date">${formatDate(article.date)}</span>
                    <span class="article-category">${getCategoryInfo(article.category).name}</span>
                </div>
            </div>
        </div>
    `;
}

// Add click listeners to article cards
function addArticleCardListeners() {
    const articleCards = document.querySelectorAll('.category-article-card');
    articleCards.forEach(card => {
        card.addEventListener('click', function() {
            const articleId = parseInt(this.dataset.id);
            window.location.href = `article.html?id=${articleId}`;
        });
    });
}

// Get category key from category string
function getCategoryKey(category) {
    const categoryMap = {
        'fashion': 'fashion',
        'health': 'health',
        'home': 'home-garden',
        'travel': 'travel',
        'finance': 'finance',
        'food': 'food'
    };
    return categoryMap[category] || category;
}

// Get category information
function getCategoryInfo(categoryKey) {
    const categories = {
        'fashion': {
            name: 'Fashion & Accessories',
            icon: 'fas fa-tshirt'
        },
        'health': {
            name: 'Health & Beauty',
            icon: 'fas fa-spa'
        },
        'home-garden': {
            name: 'Home & Garden',
            icon: 'fas fa-home'
        },
        'travel': {
            name: 'Travel & Accommodation',
            icon: 'fas fa-plane'
        },
        'finance': {
            name: 'Finance & Insurance',
            icon: 'fas fa-piggy-bank'
        },
        'food': {
            name: 'Food & Beverages',
            icon: 'fas fa-utensils'
        }
    };
    
    return categories[categoryKey] || { name: 'Unknown', icon: 'fas fa-question' };
}

// Setup category filtering from URL parameters
function setupCategoryFiltering() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCategory = urlParams.get('category');
    
    if (selectedCategory) {
        // Highlight the selected category
        const categoryCard = document.querySelector(`[data-category="${selectedCategory}"]`);
        if (categoryCard) {
            categoryCard.classList.add('selected');
            categoryCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        
        // Show only articles from selected category
        filterArticlesByCategory(selectedCategory);
    }
}

// Filter articles by category
function filterArticlesByCategory(category) {
    const categoryArticlesContainer = document.getElementById('categoryArticles');
    if (!categoryArticlesContainer) return;
    
    const categoryInfo = getCategoryInfo(category);
    const categoryArticles = articles.filter(article => getCategoryKey(article.category) === category);
    
    const sectionHTML = `
        <div class="category-section">
            <h3>
                <i class="${categoryInfo.icon}"></i>
                ${categoryInfo.name} Articles
            </h3>
            <div class="category-articles-grid">
                ${categoryArticles.map(article => createCategoryArticleCard(article)).join('')}
            </div>
        </div>
    `;
    
    categoryArticlesContainer.innerHTML = sectionHTML;
    addArticleCardListeners();
}

// Redirect to search page with category filter
function redirectToSearch(searchTerm = '', category = '') {
    const params = new URLSearchParams();
    if (searchTerm) params.set('q', searchTerm);
    if (category) params.set('category', category);
    
    window.location.href = `search.html?${params.toString()}`;
}

// Format date for display
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Animate elements on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe category cards
    document.querySelectorAll('.category-card-enhanced').forEach(card => {
        observer.observe(card);
    });
    
    // Observe stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        observer.observe(card);
    });
    
    // Observe article cards
    document.querySelectorAll('.category-article-card').forEach(card => {
        observer.observe(card);
    });
}

// Add animation styles
const animationStyles = `
    .category-card-enhanced,
    .stat-card,
    .category-article-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .category-card-enhanced.animate-in,
    .stat-card.animate-in,
    .category-article-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .category-card-enhanced.selected {
        transform: translateY(-15px);
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        border: 3px solid var(--accent-color);
    }
`;

// Inject animation styles
const styleSheet = document.createElement('style');
styleSheet.textContent = animationStyles;
document.head.appendChild(styleSheet);

// Newsletter form submission
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('.newsletter-input').value;
            
            if (email) {
                // Show success message
                showToast('Thank you for subscribing to our newsletter!', 'success');
                this.querySelector('.newsletter-input').value = '';
            }
        });
    }
});

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Add toast styles
const toastStyles = `
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
        max-width: 300px;
    }
    
    .toast.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .toast-success {
        background: #28a745;
    }
    
    .toast-error {
        background: #dc3545;
    }
`;

const toastStyleSheet = document.createElement('style');
toastStyleSheet.textContent = toastStyles;
document.head.appendChild(toastStyleSheet);
