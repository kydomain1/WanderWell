// Search Page JavaScript

// Search state
let currentSearchResults = [];
let currentSearchTerm = '';
let currentFilters = {};
let displayedResults = 0;
const resultsPerPage = 9;

// DOM elements
const advancedSearchForm = document.getElementById('advancedSearchForm');
const searchResults = document.getElementById('searchResults');
const resultsHeader = document.getElementById('resultsHeader');
const resultsGrid = document.getElementById('resultsGrid');
const noResults = document.getElementById('noResults');
const loadMoreSection = document.getElementById('loadMoreSection');
const recentArticles = document.getElementById('recentArticles');
const quickSearchInput = document.getElementById('quickSearchInput');
const quickSearchBtn = document.getElementById('quickSearchBtn');

// Initialize search page
document.addEventListener('DOMContentLoaded', function() {
    setupSearchEventListeners();
    displayRecentArticles();
    handleURLParameters();
});

// Setup event listeners
function setupSearchEventListeners() {
    // Advanced search form
    if (advancedSearchForm) {
        advancedSearchForm.addEventListener('submit', handleAdvancedSearch);
    }
    
    // Clear search button
    const clearSearchBtn = document.getElementById('clearSearch');
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
    }
    
    // Quick search
    if (quickSearchBtn) {
        quickSearchBtn.addEventListener('click', handleQuickSearch);
    }
    
    if (quickSearchInput) {
        quickSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleQuickSearch();
            }
        });
    }
    
    // Popular tags
    document.querySelectorAll('.tag-btn').forEach(tag => {
        tag.addEventListener('click', function() {
            const searchTerm = this.dataset.search;
            performSearch(searchTerm);
        });
    });
    
    // Sort by dropdown
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        sortBy.addEventListener('change', function() {
            if (currentSearchResults.length > 0) {
                sortResults(this.value);
                displayResults();
            }
        });
    }
    
    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreResults);
    }
}

// Handle URL parameters for direct search links
function handleURLParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');
    const category = urlParams.get('category');
    
    if (searchQuery) {
        document.getElementById('searchKeywords').value = searchQuery;
        if (category) {
            document.getElementById('searchCategory').value = category;
        }
        performAdvancedSearch();
    }
}

// Handle advanced search form submission
function handleAdvancedSearch(e) {
    e.preventDefault();
    performAdvancedSearch();
}

// Handle quick search
function handleQuickSearch() {
    const searchTerm = quickSearchInput.value.trim();
    if (searchTerm) {
        document.getElementById('searchKeywords').value = searchTerm;
        performSearch(searchTerm);
    }
}

// Perform advanced search with all filters
function performAdvancedSearch() {
    const formData = new FormData(advancedSearchForm);
    const filters = {
        keywords: formData.get('keywords'),
        category: formData.get('category'),
        dateRange: formData.get('dateRange'),
        contentType: formData.get('contentType')
    };
    
    currentFilters = filters;
    currentSearchTerm = filters.keywords || '';
    
    // Perform search with filters
    const results = searchArticles(filters);
    displaySearchResults(results, filters.keywords || 'Advanced Search');
}

// Perform simple search
function performSearch(searchTerm) {
    currentSearchTerm = searchTerm;
    currentFilters = { keywords: searchTerm };
    
    const results = searchArticles({ keywords: searchTerm });
    displaySearchResults(results, searchTerm);
}

// Search through articles based on filters
function searchArticles(filters) {
    let results = [...articles]; // Use articles from articles.js
    
    // Filter by keywords
    if (filters.keywords && filters.keywords.trim()) {
        const keywords = filters.keywords.toLowerCase().trim();
        results = results.filter(article => {
            return article.title.toLowerCase().includes(keywords) ||
                   article.excerpt.toLowerCase().includes(keywords) ||
                   article.content.toLowerCase().includes(keywords) ||
                   getCategoryName(article.category).toLowerCase().includes(keywords);
        });
    }
    
    // Filter by category
    if (filters.category) {
        results = results.filter(article => article.category === filters.category);
    }
    
    // Filter by date range
    if (filters.dateRange) {
        const now = new Date();
        results = results.filter(article => {
            const articleDate = new Date(article.date);
            switch (filters.dateRange) {
                case 'last-month':
                    return articleDate > new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
                case 'last-3-months':
                    return articleDate > new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
                case 'last-6-months':
                    return articleDate > new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
                case 'this-year':
                    return articleDate.getFullYear() === now.getFullYear();
                default:
                    return true;
            }
        });
    }
    
    // Filter by content type (simplified - could be enhanced with metadata)
    if (filters.contentType) {
        switch (filters.contentType) {
            case 'articles':
                // All current content are articles
                break;
            case 'products':
                results = results.filter(article => article.products && article.products.length > 0);
                break;
            case 'guides':
                results = results.filter(article => 
                    article.title.toLowerCase().includes('guide') ||
                    article.title.toLowerCase().includes('tips') ||
                    article.title.toLowerCase().includes('how to')
                );
                break;
        }
    }
    
    return results;
}

// Display search results
function displaySearchResults(results, searchTerm) {
    currentSearchResults = results;
    displayedResults = 0;
    
    // Hide recent articles
    recentArticles.style.display = 'none';
    
    // Show search results section
    searchResults.style.display = 'block';
    
    if (results.length === 0) {
        showNoResults(searchTerm);
    } else {
        showResults(results, searchTerm);
    }
}

// Show search results
function showResults(results, searchTerm) {
    // Update results header
    resultsHeader.style.display = 'flex';
    document.getElementById('resultsTitle').textContent = `Search Results for "${searchTerm}"`;
    document.getElementById('resultsCount').textContent = `${results.length} result${results.length !== 1 ? 's' : ''} found`;
    
    // Hide no results
    noResults.style.display = 'none';
    
    // Sort results by relevance initially
    sortResults('relevance');
    
    // Display results
    displayResults();
    
    // Show/hide load more button
    updateLoadMoreButton();
}

// Display current batch of results
function displayResults() {
    const endIndex = Math.min(displayedResults + resultsPerPage, currentSearchResults.length);
    const resultsToShow = currentSearchResults.slice(displayedResults, endIndex);
    
    if (displayedResults === 0) {
        resultsGrid.innerHTML = '';
    }
    
    resultsToShow.forEach(article => {
        const articleCard = createSearchResultCard(article);
        resultsGrid.appendChild(articleCard);
    });
    
    displayedResults = endIndex;
    updateLoadMoreButton();
    
    // Add click listeners to new cards
    addCardClickListeners();
}

// Create search result card
function createSearchResultCard(article) {
    const card = document.createElement('div');
    card.className = 'search-result-card';
    card.dataset.id = article.id;
    
    const highlightedTitle = highlightSearchTerm(article.title, currentSearchTerm);
    const highlightedExcerpt = highlightSearchTerm(article.excerpt, currentSearchTerm);
    
    card.innerHTML = `
        <div class="result-image">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="result-category">${getCategoryName(article.category)}</div>
        </div>
        <div class="result-content">
            <h3 class="result-title">${highlightedTitle}</h3>
            <p class="result-excerpt">${highlightedExcerpt}</p>
            <div class="result-meta">
                <span class="result-date">${formatDate(article.date)}</span>
                ${article.products && article.products.length > 0 ? '<span class="result-tag">Product Review</span>' : ''}
            </div>
            <a href="#" class="result-link">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
    
    return card;
}

// Highlight search terms in text
function highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || !searchTerm.trim()) return text;
    
    const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Show no results message
function showNoResults(searchTerm) {
    resultsHeader.style.display = 'none';
    resultsGrid.innerHTML = '';
    noResults.style.display = 'block';
    loadMoreSection.style.display = 'none';
    
    // Update no results message
    noResults.querySelector('h3').textContent = `No Results Found for "${searchTerm}"`;
}

// Sort results
function sortResults(sortBy) {
    switch (sortBy) {
        case 'date-desc':
            currentSearchResults.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'date-asc':
            currentSearchResults.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'title':
            currentSearchResults.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'relevance':
        default:
            // Sort by relevance (keyword matches in title get higher priority)
            currentSearchResults.sort((a, b) => {
                const aScore = calculateRelevanceScore(a, currentSearchTerm);
                const bScore = calculateRelevanceScore(b, currentSearchTerm);
                return bScore - aScore;
            });
            break;
    }
}

// Calculate relevance score
function calculateRelevanceScore(article, searchTerm) {
    if (!searchTerm) return 0;
    
    const term = searchTerm.toLowerCase();
    let score = 0;
    
    // Title matches are most important
    if (article.title.toLowerCase().includes(term)) {
        score += 10;
    }
    
    // Category matches
    if (getCategoryName(article.category).toLowerCase().includes(term)) {
        score += 5;
    }
    
    // Excerpt matches
    if (article.excerpt.toLowerCase().includes(term)) {
        score += 3;
    }
    
    // Content matches
    if (article.content.toLowerCase().includes(term)) {
        score += 1;
    }
    
    return score;
}

// Update load more button visibility
function updateLoadMoreButton() {
    if (displayedResults < currentSearchResults.length) {
        loadMoreSection.style.display = 'block';
        const remaining = currentSearchResults.length - displayedResults;
        document.getElementById('loadMoreBtn').innerHTML = `
            <i class="fas fa-plus"></i>
            Load More Results (${remaining} remaining)
        `;
    } else {
        loadMoreSection.style.display = 'none';
    }
}

// Load more results
function loadMoreResults() {
    displayResults();
}

// Display recent articles
function displayRecentArticles() {
    if (!recentGrid) return;
    
    // Get recent articles (last 6)
    const recentArticlesList = [...articles]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);
    
    recentGrid.innerHTML = recentArticlesList.map(article => `
        <div class="recent-card" data-id="${article.id}">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="recent-content">
                <span class="recent-category">${getCategoryName(article.category)}</span>
                <h4>${article.title}</h4>
                <span class="recent-date">${formatDate(article.date)}</span>
            </div>
        </div>
    `).join('');
    
    // Add click listeners
    addCardClickListeners();
}

// Add click listeners to cards
function addCardClickListeners() {
    // Search result cards
    document.querySelectorAll('.search-result-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName !== 'A') {
                const articleId = parseInt(this.dataset.id);
                window.location.href = `article.html?id=${articleId}`;
            }
        });
    });
    
    // Recent article cards
    document.querySelectorAll('.recent-card').forEach(card => {
        card.addEventListener('click', function() {
            const articleId = parseInt(this.dataset.id);
            window.location.href = `article.html?id=${articleId}`;
        });
    });
}

// Clear search
function clearSearch() {
    // Clear form
    advancedSearchForm.reset();
    quickSearchInput.value = '';
    
    // Hide search results
    searchResults.style.display = 'none';
    
    // Show recent articles
    recentArticles.style.display = 'block';
    
    // Reset search state
    currentSearchResults = [];
    currentSearchTerm = '';
    currentFilters = {};
    displayedResults = 0;
    
    // Update URL
    window.history.pushState({}, '', window.location.pathname);
}

// Update URL with search parameters
function updateURL(searchTerm, filters = {}) {
    const params = new URLSearchParams();
    
    if (searchTerm) {
        params.set('q', searchTerm);
    }
    
    if (filters.category) {
        params.set('category', filters.category);
    }
    
    const newURL = window.location.pathname + (params.toString() ? '?' + params.toString() : '');
    window.history.pushState({}, '', newURL);
}

// Handle browser back/forward
window.addEventListener('popstate', function() {
    handleURLParameters();
});

// Export functions for use in other scripts
window.searchFunctions = {
    performSearch,
    clearSearch
};
