// Article Page JavaScript

let currentArticle = null;
let bookmarked = false;

// Initialize article page
document.addEventListener('DOMContentLoaded', function() {
    loadArticleFromURL();
    setupEventListeners();
    generateTableOfContents();
    setupReadingProgress();
    loadRelatedArticles();
});

// Load article from URL parameters
function loadArticleFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    
    if (articleId && articles) {
        const article = articles.find(a => a.id === parseInt(articleId));
        if (article) {
            loadArticle(article);
        } else {
            showArticleNotFound();
        }
    } else {
        // Load default article if no ID provided
        if (articles && articles.length > 0) {
            loadArticle(articles[0]);
        }
    }
}

// Load article content
function loadArticle(article) {
    currentArticle = article;
    
    // Update page title
    document.title = `${article.title} - WanderWell`;
    
    // Update hero section
    updateHeroSection(article);
    
    // Update article body
    updateArticleBody(article);
    
    // Load products if available
    loadProducts(article);
    
    // Generate tags
    generateTags(article);
    
    // Update author info
    updateAuthorInfo(article);
    
    // Update meta tags for SEO
    updateMetaTags(article);
}

// Update hero section
function updateHeroSection(article) {
    const heroBackground = document.getElementById('heroBackground');
    const heroCategory = document.getElementById('heroCategory');
    const heroTitle = document.getElementById('heroTitle');
    const publishDate = document.getElementById('publishDate');
    const readTime = document.getElementById('readTime');
    const viewCount = document.getElementById('viewCount');
    
    // Set background image
    heroBackground.style.backgroundImage = `url(${article.image})`;
    
    // Update content
    heroCategory.textContent = getCategoryName(article.category);
    heroTitle.textContent = article.title;
    publishDate.textContent = formatDate(article.date);
    
    // Calculate read time (rough estimate: 200 words per minute)
    const wordCount = article.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const readTimeMinutes = Math.ceil(wordCount / 200);
    readTime.textContent = `${readTimeMinutes} min read`;
    
    // Random view count for demo
    const randomViews = Math.floor(Math.random() * 5000) + 500;
    viewCount.textContent = `${randomViews.toLocaleString()} views`;
}

// Update article body
function updateArticleBody(article) {
    const articleBody = document.getElementById('articleBody');
    
    // Parse the article content and enhance it
    let content = article.content;
    
    // Add reading-friendly formatting
    content = content.replace(/<h2>/g, '<h2 class="content-heading">');
    content = content.replace(/<h3>/g, '<h3 class="content-subheading">');
    content = content.replace(/<p>/g, '<p class="content-paragraph">');
    content = content.replace(/<img([^>]*)>/g, '<figure class="content-image"><img$1><figcaption></figcaption></figure>');
    
    // Add dropcap to first paragraph
    content = content.replace(/<p class="content-paragraph">([A-Z])/, '<p class="content-paragraph first-paragraph"><span class="dropcap">$1</span>');
    
    articleBody.innerHTML = content;
    
    // Add image captions
    const images = articleBody.querySelectorAll('figure img');
    images.forEach((img, index) => {
        const figure = img.closest('figure');
        const figcaption = figure.querySelector('figcaption');
        if (figcaption && img.alt) {
            figcaption.textContent = img.alt;
        }
    });
}

// Load products
function loadProducts(article) {
    const productRecommendations = document.getElementById('productRecommendations');
    const productsGrid = document.getElementById('productsGrid');
    
    if (article.products && article.products.length > 0) {
        productRecommendations.style.display = 'block';
        
        productsGrid.innerHTML = article.products.map(product => `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <h4 class="product-name">${product.name}</h4>
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                        <span class="rating-text">${product.rating}/5</span>
                    </div>
                    <div class="product-price">${product.price}</div>
                    <button class="product-btn">View Product</button>
                </div>
            </div>
        `).join('');
    }
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Generate tags
function generateTags(article) {
    const articleTags = document.getElementById('articleTags');
    const categoryName = getCategoryName(article.category);
    
    // Extract potential tags from content
    const tags = [categoryName];
    
    // Add some relevant tags based on category
    const categoryTags = {
        'fashion': ['Vintage Style', 'Sustainable Fashion', 'Timeless Pieces'],
        'health': ['Natural Beauty', 'Wellness', 'Self Care'],
        'home-garden': ['Home Decor', 'Gardening', 'DIY'],
        'travel': ['Travel Tips', 'Hotels', 'Destinations'],
        'finance': ['Investment', 'Money Tips', 'Financial Planning'],
        'food': ['Recipes', 'Cooking', 'Food Culture']
    };
    
    if (categoryTags[article.category]) {
        tags.push(...categoryTags[article.category]);
    }
    
    articleTags.innerHTML = `
        <h4>Tags</h4>
        <div class="tag-list">
            ${tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
        </div>
    `;
}

// Update author info
function updateAuthorInfo(article) {
    // Author info is pre-set in HTML for demo
    // In a real app, this would be dynamic based on article data
}

// Generate table of contents
function generateTableOfContents() {
    setTimeout(() => {
        const articleBody = document.getElementById('articleBody');
        const toc = document.getElementById('tableOfContents');
        
        if (!articleBody || !toc) return;
        
        const headings = articleBody.querySelectorAll('h2, h3');
        if (headings.length === 0) return;
        
        let tocHTML = '<ul class="toc-list">';
        
        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;
            
            const level = heading.tagName === 'H2' ? 'toc-level-2' : 'toc-level-3';
            const text = heading.textContent;
            
            tocHTML += `<li class="${level}"><a href="#${id}" class="toc-link">${text}</a></li>`;
        });
        
        tocHTML += '</ul>';
        toc.innerHTML = tocHTML;
        
        // Setup smooth scrolling for TOC links
        const tocLinks = toc.querySelectorAll('.toc-link');
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }, 500);
}

// Setup reading progress
function setupReadingProgress() {
    const progressBar = document.getElementById('progressBar');
    
    window.addEventListener('scroll', () => {
        const articleBody = document.getElementById('articleBody');
        if (!articleBody) return;
        
        const articleStart = articleBody.offsetTop;
        const articleHeight = articleBody.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.pageYOffset;
        
        const articleEnd = articleStart + articleHeight - windowHeight;
        const progress = Math.max(0, Math.min(100, ((scrollTop - articleStart) / (articleEnd - articleStart)) * 100));
        
        progressBar.style.width = progress + '%';
    });
}

// Load related articles
function loadRelatedArticles() {
    const relatedContainer = document.getElementById('relatedArticles');
    
    if (!currentArticle || !articles) return;
    
    // Find articles from the same category
    const relatedArticles = articles
        .filter(article => article.id !== currentArticle.id && article.category === currentArticle.category)
        .slice(0, 3);
    
    // If not enough from same category, add from other categories
    if (relatedArticles.length < 3) {
        const otherArticles = articles
            .filter(article => article.id !== currentArticle.id && article.category !== currentArticle.category)
            .slice(0, 3 - relatedArticles.length);
        relatedArticles.push(...otherArticles);
    }
    
    relatedContainer.innerHTML = relatedArticles.map(article => `
        <div class="related-article" onclick="loadArticle(${JSON.stringify(article).replace(/"/g, '&quot;')})">
            <img src="${article.image}" alt="${article.title}" loading="lazy">
            <div class="related-content">
                <span class="related-category">${getCategoryName(article.category)}</span>
                <h5>${article.title}</h5>
                <span class="related-date">${formatDate(article.date)}</span>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Back to top button
    const backToTop = document.getElementById('backToTop');
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show/hide floating buttons based on scroll
    window.addEventListener('scroll', () => {
        const floatingActions = document.querySelector('.floating-actions');
        if (window.pageYOffset > 300) {
            floatingActions.classList.add('visible');
        } else {
            floatingActions.classList.remove('visible');
        }
    });
    
    // Bookmark button
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    bookmarkBtn.addEventListener('click', toggleBookmark);
    
    // Share float button
    const shareFloat = document.getElementById('shareFloat');
    shareFloat.addEventListener('click', () => {
        document.querySelector('.share-section').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Newsletter form
    const newsletterForm = document.querySelector('.sidebar-newsletter');
    newsletterForm.addEventListener('submit', handleNewsletterSignup);
    
    // Comment form
    const commentForm = document.querySelector('.comment-form textarea');
    const submitComment = document.querySelector('.submit-comment');
    
    submitComment.addEventListener('click', handleCommentSubmit);
}

// Toggle bookmark
function toggleBookmark() {
    const bookmarkBtn = document.getElementById('bookmarkBtn');
    const icon = bookmarkBtn.querySelector('i');
    
    bookmarked = !bookmarked;
    
    if (bookmarked) {
        icon.className = 'fas fa-bookmark';
        bookmarkBtn.title = 'Remove Bookmark';
        showToast('Article bookmarked!');
    } else {
        icon.className = 'far fa-bookmark';
        bookmarkBtn.title = 'Bookmark';
        showToast('Bookmark removed');
    }
}

// Share functions
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(currentArticle?.title || 'WanderWell Article');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(currentArticle?.title || 'WanderWell Article');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
}

function shareOnPinterest() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(currentArticle?.title || 'WanderWell Article');
    const image = encodeURIComponent(currentArticle?.image || '');
    window.open(`https://pinterest.com/pin/create/button/?url=${url}&description=${title}&media=${image}`, '_blank');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!');
    });
}

// Handle newsletter signup
function handleNewsletterSignup(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate signup
    showToast('Thank you for subscribing!');
    e.target.reset();
}

// Handle comment submit
function handleCommentSubmit() {
    const textarea = document.querySelector('.comment-form textarea');
    const content = textarea.value.trim();
    
    if (!content) {
        showToast('Please write a comment first.');
        return;
    }
    
    // Simulate comment submission
    showToast('Comment submitted! Thank you for your feedback.');
    textarea.value = '';
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

// Show article not found
function showArticleNotFound() {
    document.querySelector('.article-hero .hero-title').textContent = 'Article Not Found';
    document.getElementById('articleBody').innerHTML = `
        <div class="not-found">
            <h2>Sorry, we couldn't find this article.</h2>
            <p>The article you're looking for might have been moved or deleted.</p>
            <a href="index.html" class="cta-button">Return to Home</a>
        </div>
    `;
}

// Update meta tags for SEO
function updateMetaTags(article) {
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
    }
    metaDescription.content = article.excerpt;
    
    // Update Open Graph tags
    updateOrCreateMetaTag('property', 'og:title', article.title);
    updateOrCreateMetaTag('property', 'og:description', article.excerpt);
    updateOrCreateMetaTag('property', 'og:image', article.image);
    updateOrCreateMetaTag('property', 'og:url', window.location.href);
    
    // Update Twitter Card tags
    updateOrCreateMetaTag('name', 'twitter:title', article.title);
    updateOrCreateMetaTag('name', 'twitter:description', article.excerpt);
    updateOrCreateMetaTag('name', 'twitter:image', article.image);
}

function updateOrCreateMetaTag(attribute, value, content) {
    let tag = document.querySelector(`meta[${attribute}="${value}"]`);
    if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
    }
    tag.content = content;
}

// Export function for use in other scripts
window.articlePageFunctions = {
    loadArticle,
    shareOnFacebook,
    shareOnTwitter,
    shareOnPinterest,
    copyLink
};
