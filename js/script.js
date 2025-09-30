// Main JavaScript for WanderWell website

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Setup search redirection
    setupSearchRedirection();
    // Navigation smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.category-card, .article-card, .section-title').forEach(el => {
        observer.observe(el);
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Simulate form submission
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            button.textContent = 'Subscribing...';
            button.disabled = true;
            
            setTimeout(() => {
                button.textContent = 'Subscribed!';
                button.style.background = '#28a745';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                    button.style.background = '';
                    this.querySelector('input[type="email"]').value = '';
                }, 2000);
            }, 1000);
        });
    }

    // Social media link hover effects
    document.querySelectorAll('.social-link').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // CTA button ripple effect
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (hero.querySelector('.hero-image img')) {
                hero.querySelector('.hero-image img').style.transform = `translateY(${rate}px)`;
            }
        });
    }

    // Category card tilt effect
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });

    // Typewriter effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let index = 0;
        const typeWriter = () => {
            if (index < text.length) {
                heroTitle.textContent += text.charAt(index);
                index++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    // Image lazy loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        z-index: 1000;
        box-shadow: var(--shadow);
    `;
    
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Loading animation
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">
                <img src="images/logo.png" alt="WanderWell">
            </div>
            <div class="loader-text">WanderWell</div>
            <div class="loader-spinner"></div>
        </div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--bg-color);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 1;
        visibility: visible;
        transition: opacity 0.5s ease;
    `;

    // Add loader styles
    const loaderStyles = document.createElement('style');
    loaderStyles.textContent = `
        .loader-content {
            text-align: center;
            color: var(--primary-color);
        }
        
        .loader-logo img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 20px;
            animation: pulse 2s infinite;
        }
        
        .loader-text {
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
        
        .loader-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid var(--secondary-color);
            border-top: 4px solid var(--primary-color);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    document.head.appendChild(loaderStyles);
    document.body.appendChild(loader);

    // Hide loader after page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.visibility = 'hidden';
                loader.remove();
            }, 500);
        }, 1000);
    });

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#dc3545';
                    
                    // Remove error styling on input
                    field.addEventListener('input', function() {
                        this.style.borderColor = '';
                    }, { once: true });
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                
                // Show error message
                const errorMsg = document.createElement('div');
                errorMsg.textContent = 'Please fill in all required fields.';
                errorMsg.style.cssText = `
                    color: #dc3545;
                    background: #f8d7da;
                    border: 1px solid #f5c6cb;
                    padding: 10px;
                    border-radius: 4px;
                    margin-top: 10px;
                    animation: slideInUp 0.3s ease;
                `;
                
                // Remove existing error messages
                const existingError = this.querySelector('.error-message');
                if (existingError) {
                    existingError.remove();
                }
                
                errorMsg.className = 'error-message';
                this.appendChild(errorMsg);
                
                // Remove error message after 5 seconds
                setTimeout(() => {
                    errorMsg.remove();
                }, 5000);
            }
        });
    });

    // Cookie consent (if needed)
    const showCookieConsent = () => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const cookieBanner = document.createElement('div');
            cookieBanner.className = 'cookie-consent';
            cookieBanner.innerHTML = `
                <div class="cookie-content">
                    <p>We use cookies to enhance your browsing experience and provide personalized content. By continuing to use our site, you consent to our use of cookies.</p>
                    <div class="cookie-buttons">
                        <button class="accept-cookies">Accept</button>
                        <button class="decline-cookies">Decline</button>
                    </div>
                </div>
            `;
            
            cookieBanner.style.cssText = `
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                background: var(--primary-color);
                color: white;
                padding: 20px;
                z-index: 1000;
                animation: slideInUp 0.5s ease;
            `;
            
            document.body.appendChild(cookieBanner);
            
            // Handle cookie consent
            cookieBanner.querySelector('.accept-cookies').addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'accepted');
                cookieBanner.remove();
            });
            
            cookieBanner.querySelector('.decline-cookies').addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'declined');
                cookieBanner.remove();
            });
        }
    };
    
    // Show cookie consent after 2 seconds
    setTimeout(showCookieConsent, 2000);
});

// Add CSS for animations and effects
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .animate-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    .cookie-consent .cookie-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }
    
    .cookie-buttons {
        display: flex;
        gap: 10px;
    }
    
    .cookie-buttons button {
        background: white;
        color: var(--primary-color);
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 600;
        transition: var(--transition);
    }
    
    .cookie-buttons button:hover {
        background: var(--secondary-color);
    }
    
    .decline-cookies {
        background: transparent !important;
        color: white !important;
        border: 2px solid white !important;
    }
    
    .decline-cookies:hover {
        background: white !important;
        color: var(--primary-color) !important;
    }
    
    @media (max-width: 768px) {
        .cookie-consent .cookie-content {
            flex-direction: column;
            text-align: center;
        }
        
        .cookie-buttons {
            width: 100%;
            justify-content: center;
        }
    }
    
    .header.scrolled {
        background: rgba(253, 245, 230, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: 0 2px 20px rgba(139, 69, 19, 0.1);
    }
    
    .lazy {
        filter: blur(5px);
        transition: filter 0.3s;
    }
    
    .back-to-top:hover {
        background: var(--accent-color) !important;
        transform: translateY(-2px);
    }
`;

document.head.appendChild(additionalStyles);

// Setup search redirection from main pages
function setupSearchRedirection() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput && searchBtn) {
        // Handle search button click
        searchBtn.addEventListener('click', function() {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                redirectToSearch(searchTerm);
            }
        });
        
        // Handle enter key in search input
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value.trim();
                if (searchTerm) {
                    redirectToSearch(searchTerm);
                }
            }
        });
    }
}

// Redirect to search page with query
function redirectToSearch(searchTerm, category = '') {
    const params = new URLSearchParams();
    params.set('q', searchTerm);
    if (category) {
        params.set('category', category);
    }
    
    window.location.href = `search.html?${params.toString()}`;
}

// Export functions for use in other scripts
window.searchFunctions = {
    redirectToSearch
};
