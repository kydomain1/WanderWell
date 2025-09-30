// Articles Data
const articles = [
    {
        id: 1,
        title: "Vintage Fashion Revival: Timeless Pieces for Modern Wardrobes",
        category: "fashion",
        date: "2025-01-15",
        excerpt: "Discover how vintage fashion pieces can elevate your modern wardrobe with timeless elegance and sustainable style choices.",
        image: "images/vintage-fashion.jpg",
        content: `
            <div class="article-header">
                <img src="images/vintage-fashion.jpg" alt="Vintage Fashion Revival" class="article-main-image">
                <h1>Vintage Fashion Revival: Timeless Pieces for Modern Wardrobes</h1>
                <div class="article-meta">
                    <span class="category-tag">Fashion & Accessories</span>
                    <span class="date">January 15, 2025</span>
                </div>
            </div>
            
            <div class="article-body">
                <p>In an era of fast fashion and disposable trends, vintage fashion stands as a beacon of sustainability, quality, and timeless style. The revival of vintage clothing isn't just a trend—it's a movement towards more conscious consumption and appreciation for craftsmanship that has stood the test of time.</p>
                
                <h2>The Appeal of Vintage Fashion</h2>
                <p>Vintage fashion offers something that modern clothing often lacks: character, quality construction, and unique design elements that tell a story. Each piece carries with it the essence of its era, from the structured silhouettes of the 1940s to the free-spirited designs of the 1970s.</p>
                
                <img src="images/vintage-accessories.jpg" alt="Vintage Accessories Collection" class="article-image">
                
                <h2>Essential Vintage Pieces Every Wardrobe Needs</h2>
                <ul>
                    <li><strong>A Well-Tailored Blazer:</strong> Look for pieces from the 1980s with strong shoulders and quality fabric</li>
                    <li><strong>High-Waisted Trousers:</strong> 1940s and 1970s styles that flatter every figure</li>
                    <li><strong>Statement Jewelry:</strong> Art Deco pieces from the 1920s or bold designs from the 1960s</li>
                    <li><strong>Classic Handbags:</strong> Structured bags from iconic designers of the mid-century</li>
                </ul>
                
                <h2>Product Recommendations</h2>
                <div class="product-recommendation">
                    <h3>Vintage Chanel Chain Bag (1990s)</h3>
                    <img src="images/chanel-vintage-bag.jpg" alt="Vintage Chanel Bag" class="product-image">
                    <p>This authentic vintage Chanel quilted chain bag represents the pinnacle of luxury craftsmanship. The timeless design, quality leather, and iconic chain strap make it a perfect investment piece.</p>
                    <div class="product-details">
                        <span class="price">$2,800 - $3,500</span>
                        <span class="rating">★★★★★ (4.9/5)</span>
                    </div>
                    <p><strong>Where to Find:</strong> Vestiaire Collective, The RealReal, local vintage boutiques</p>
                </div>
                
                <img src="images/vintage-styling-tips.jpg" alt="Vintage Styling Tips" class="article-image">
                
                <h2>How to Style Vintage Pieces</h2>
                <p>The key to successfully incorporating vintage pieces into your modern wardrobe is balance. Mix one or two vintage statement pieces with contemporary basics to create a look that feels fresh and current while honoring the past.</p>
                
                <h3>Styling Tips:</h3>
                <ol>
                    <li>Start with one vintage statement piece and build around it</li>
                    <li>Mix textures and eras for an eclectic, curated look</li>
                    <li>Pay attention to fit—tailoring can make a significant difference</li>
                    <li>Invest in quality vintage shoes and accessories</li>
                </ol>
                
                <h2>Sustainable Fashion Choice</h2>
                <p>Choosing vintage fashion is one of the most sustainable decisions you can make. By giving new life to pre-loved garments, you're reducing waste, supporting circular fashion, and often getting higher quality pieces than what's available in fast fashion stores today.</p>
                
                <p>The environmental impact of vintage shopping is minimal compared to purchasing new items, making it an excellent choice for the environmentally conscious fashion lover.</p>
            </div>
        `,
        products: [
            {
                name: "Vintage Chanel Chain Bag",
                price: "$2,800 - $3,500",
                rating: 4.9,
                image: "images/chanel-vintage-bag.jpg"
            }
        ]
    },
    {
        id: 2,
        title: "Natural Beauty Secrets: Timeless Skincare from Around the World",
        category: "health",
        date: "2025-02-20",
        excerpt: "Explore ancient beauty traditions and natural skincare remedies that have been passed down through generations for radiant, healthy skin.",
        image: "images/natural-beauty.jpg",
        content: `
            <div class="article-header">
                <img src="images/natural-beauty.jpg" alt="Natural Beauty Secrets" class="article-main-image">
                <h1>Natural Beauty Secrets: Timeless Skincare from Around the World</h1>
                <div class="article-meta">
                    <span class="category-tag">Health & Beauty</span>
                    <span class="date">February 20, 2025</span>
                </div>
            </div>
            
            <div class="article-body">
                <p>Long before the age of synthetic cosmetics and chemical-laden products, women around the world relied on nature's bounty to maintain their beauty. These time-tested traditions offer us valuable insights into achieving healthy, radiant skin using gentle, natural ingredients.</p>
                
                <h2>Ancient Beauty Wisdom</h2>
                <p>From Cleopatra's milk baths to Japanese rice water treatments, ancient beauty practices were rooted in understanding the skin's needs and using pure, natural ingredients to address them. These traditions focused on nourishment, protection, and enhancement rather than dramatic transformation.</p>
                
                <img src="images/天然.png" alt="Ancient Beauty Wisdom" class="article-image">
                
                <h2>Global Beauty Traditions</h2>
                
                <h3>Japanese Beauty Philosophy</h3>
                <p>The Japanese approach to beauty emphasizes simplicity, consistency, and prevention. Rice water, used for centuries as a gentle cleanser and toner, contains vitamins and minerals that brighten and soften the skin.</p>
                
                <h3>French Beauty Secrets</h3>
                <p>French women have long believed in the power of natural oils and simple routines. Rosehip oil, chamomile, and lavender have been staples in French beauty regimens for generations.</p>
                
                <img src="images/beauty-rituals.jpg" alt="Traditional Beauty Rituals" class="article-image">
                
                <h2>DIY Natural Beauty Recipes</h2>
                
                <h3>Honey Oat Face Mask</h3>
                <ul>
                    <li>2 tablespoons raw honey</li>
                    <li>1 tablespoon ground oats</li>
                    <li>1 teaspoon rose water</li>
                </ul>
                <p>Mix ingredients and apply to clean skin for 15 minutes. This mask gently exfoliates while providing deep moisture.</p>
                
                <h3>Green Tea Toner</h3>
                <p>Brew strong green tea, let cool, and use as a toner. The antioxidants help fight inflammation and provide a healthy glow.</p>
                
                <h2>Product Recommendations</h2>
                <div class="product-recommendation">
                    <h3>Weleda Rosemary Hair Oil</h3>
                    <img src="images/weleda-hair-oil.jpg" alt="Weleda Rosemary Hair Oil" class="product-image">
                    <p>This organic hair treatment has been a favorite since 1922. Made with natural rosemary extract and burdock root, it strengthens hair and promotes healthy growth using time-tested botanical ingredients.</p>
                    <div class="product-details">
                        <span class="price">$14.99</span>
                        <span class="rating">★★★★☆ (4.6/5)</span>
                    </div>
                    <p><strong>Where to Find:</strong> Whole Foods, Amazon, Weleda official website</p>
                </div>
                
                <h2>The Science Behind Natural Beauty</h2>
                <p>Modern research confirms what our ancestors knew intuitively—many natural ingredients contain powerful compounds that benefit skin health. Antioxidants in plant extracts, fatty acids in natural oils, and enzymes in fruits all contribute to healthy, beautiful skin.</p>
                
                <img src="images/护肤.png" alt="The Science Behind Natural Beauty" class="article-image">
                
                <h2>Building Your Natural Beauty Routine</h2>
                <ol>
                    <li><strong>Cleanse gently:</strong> Use oil-based cleansers or natural soaps</li>
                    <li><strong>Tone naturally:</strong> Try rose water, witch hazel, or green tea</li>
                    <li><strong>Moisturize with oils:</strong> Choose oils suited to your skin type</li>
                    <li><strong>Protect daily:</strong> Natural sunscreens with zinc oxide</li>
                </ol>
                
                <h2>Sustainable Beauty Choices</h2>
                <p>Embracing natural beauty practices isn't just good for your skin—it's good for the planet. By choosing natural, minimally processed ingredients, you reduce your environmental impact while often achieving better results than with synthetic alternatives.</p>
            </div>
        `,
        products: [
            {
                name: "Weleda Rosemary Hair Oil",
                price: "$14.99",
                rating: 4.6,
                image: "images/weleda-hair-oil.jpg"
            }
        ]
    },
    {
        id: 3,
        title: "Creating a Vintage-Inspired Garden Sanctuary",
        category: "home-garden",
        date: "2025-04-10",
        excerpt: "Transform your outdoor space into a charming vintage garden with heirloom plants, antique décor, and timeless design principles.",
        image: "images/花园.png",
        content: `
            <div class="article-header">
                <img src="images/花园.png" alt="Vintage Garden Sanctuary" class="article-main-image">
                <h1>Creating a Vintage-Inspired Garden Sanctuary</h1>
                <div class="article-meta">
                    <span class="category-tag">Home & Garden</span>
                    <span class="date">April 10, 2025</span>
                </div>
            </div>
            
            <div class="article-body">
                <p>There's something magical about a vintage-inspired garden—the romance of climbing roses, the charm of weathered garden furniture, and the peaceful beauty of heirloom flowers swaying in the breeze. Creating your own vintage garden sanctuary is about more than just plants; it's about crafting a space that tells a story and provides a retreat from the modern world.</p>
                
                <h2>The Elements of Vintage Garden Design</h2>
                <p>Vintage gardens are characterized by their informal, romantic style. Unlike modern minimalist gardens, they embrace abundance, texture, and the beauty of imperfection. The key is to create a space that feels like it has evolved naturally over time.</p>
                
                <img src="images/小径.png" alt="Vintage Garden Pathways" class="article-image">
                
                <h2>Essential Plants for a Vintage Garden</h2>
                
                <h3>Heirloom Roses</h3>
                <p>No vintage garden is complete without roses. Choose varieties like 'David Austin' English roses or antique varieties that offer fragrance and repeat blooming. These roses provide the romantic backbone of any vintage garden.</p>
                
                <h3>Cottage Garden Perennials</h3>
                <ul>
                    <li>Hollyhocks for dramatic height and old-fashioned charm</li>
                    <li>Delphiniums for tall spikes of blue and purple</li>
                    <li>Foxgloves for woodland beauty and vertical interest</li>
                    <li>Peonies for lush, fragrant blooms</li>
                    <li>Lavender for fragrance and silvery foliage</li>
                </ul>
                
                <img src="images/植物.png" alt="Cottage Garden Perennials" class="article-image">
                
                <h2>Vintage Garden Accessories</h2>
                <p>The right accessories can transform any garden into a vintage paradise. Look for pieces that show character and patina—the more weathered, the better.</p>
                
                <h3>Must-Have Vintage Garden Elements:</h3>
                <ol>
                    <li><strong>Antique Garden Gates:</strong> Wrought iron or weathered wood</li>
                    <li><strong>Vintage Planters:</strong> Aged terracotta, galvanized metal, or stone</li>
                    <li><strong>Garden Furniture:</strong> Bistro sets, wrought iron benches, or wooden garden chairs</li>
                    <li><strong>Water Features:</strong> Antique-style fountains or weathered birdbaths</li>
                    <li><strong>Garden Structures:</strong> Arbors, pergolas, and obelisks for climbing plants</li>
                </ol>
                
                <img src="images/配件.png" alt="Vintage Garden Accessories and Planters" class="article-image">
                
                <h2>Product Recommendation</h2>
                <div class="product-recommendation">
                    <h3>Cast Iron Victorian Garden Bench</h3>
                    <img src="images/长凳.png" alt="Cast Iron Garden Bench" class="product-image">
                    <p>This authentic reproduction Victorian cast iron bench features intricate fern patterns and a weathered finish that will only improve with age. Perfect for creating a focal point in your vintage garden.</p>
                    <div class="product-details">
                        <span class="price">$385.00</span>
                        <span class="rating">★★★★★ (4.8/5)</span>
                    </div>
                    <p><strong>Where to Find:</strong> Wayfair, Garden Trading Co., local antique shops</p>
                </div>
                
                <h2>Creating Garden Rooms</h2>
                <p>Vintage gardens often feature distinct "rooms" or areas, each with its own character and purpose. This might include a rose garden, herb garden, cutting garden, or quiet seating area surrounded by fragrant plants.</p>
                
                <h3>Design Tips for Garden Rooms:</h3>
                <ul>
                    <li>Use hedging or trellises to create natural boundaries</li>
                    <li>Include pathways that meander rather than go straight</li>
                    <li>Add seating in each "room" for different experiences</li>
                    <li>Plant in generous drifts rather than single specimens</li>
                </ul>
                
                <h2>Seasonal Interest in Vintage Gardens</h2>
                <p>A well-planned vintage garden provides beauty throughout the year. Spring bulbs like daffodils and tulips give way to summer's abundance, followed by autumn's late-flowering perennials and winter's structural interest from evergreens and ornamental grasses.</p>
                
                <img src="images/季节性.png" alt="Seasonal Vintage Garden Pathways" class="article-image">
                
                <h2>Maintenance with Vintage Charm</h2>
                <p>Vintage gardens should look slightly wild and natural. This means less frequent deadheading (allowing some plants to go to seed), embracing the occasional weed that adds to the cottage garden look, and allowing plants to self-sow for a natural, unplanned appearance.</p>
                
                <p>The goal is to create a space that feels timeless and established, where every element works together to transport you to a simpler, more romantic time.</p>
            </div>
        `,
        products: [
            {
                name: "Cast Iron Victorian Garden Bench",
                price: "$385.00",
                rating: 4.8,
                image: "images/cast-iron-bench.jpg"
            }
        ]
    },
    {
        id: 4,
        title: "Hidden Gems: Boutique Hotels with Vintage Character",
        category: "travel",
        date: "2025-06-15",
        excerpt: "Discover charming boutique hotels around the world that celebrate vintage design, history, and timeless hospitality.",
        image: "images/复古.png",
        content: `
            <div class="article-header">
                <img src="images/复古.png" alt="Boutique Hotels with Vintage Character" class="article-main-image">
                <h1>Hidden Gems: Boutique Hotels with Vintage Character</h1>
                <div class="article-meta">
                    <span class="category-tag">Travel & Accommodation</span>
                    <span class="date">June 15, 2025</span>
                </div>
            </div>
            
            <div class="article-body">
                <p>In a world of cookie-cutter chain hotels, boutique properties with vintage character offer something truly special: a chance to experience history, craftsmanship, and personality that tells a unique story. These hidden gems provide not just accommodation, but an immersive experience that connects travelers with the past while offering modern comfort.</p>
                
                <h2>What Makes a Hotel Vintage?</h2>
                <p>Vintage character in hotels comes from original architectural details, carefully curated antique furnishings, historical significance, and an atmosphere that feels authentic to a particular era. The best vintage hotels balance historical preservation with contemporary amenities.</p>
                
                <img src="images/大堂.png" alt="Vintage Hotel Lobby" class="article-image">
                
                <h2>Featured Vintage Boutique Hotels</h2>
                
                <h3>The Artist Residence, London</h3>
                <p>Located in a restored Victorian townhouse, this intimate hotel features original artwork, vintage furniture, and eclectic décor that tells the story of London's artistic heritage. Each room is uniquely designed with period pieces and modern artwork.</p>
                
                <h3>Hotel Emma, San Antonio</h3>
                <p>Housed in a beautifully restored 19th-century brewery, Hotel Emma seamlessly blends industrial heritage with luxury hospitality. Original brick walls, vintage fixtures, and local art create an authentic Texan experience.</p>
                
                <h3>Gramercy Park Hotel, New York</h3>
                <p>This legendary hotel has hosted everyone from the Kennedy family to punk rock legends. Its recent renovation maintains the bohemian spirit while adding contemporary luxury touches.</p>
                
                <img src="images/vintage-hotel-room.jpg" alt="Vintage Hotel Room Design" class="article-image">
                
                <h2>What to Look for in Vintage Hotels</h2>
                
                <h3>Authentic Details</h3>
                <ul>
                    <li>Original architectural elements (crown molding, hardwood floors, vintage tiles)</li>
                    <li>Period-appropriate furniture and fixtures</li>
                    <li>Historical photographs and artwork</li>
                    <li>Vintage-inspired lighting and hardware</li>
                </ul>
                
                <h3>Modern Comfort</h3>
                <ul>
                    <li>Updated bathrooms with vintage styling</li>
                    <li>Modern amenities disguised with vintage design</li>
                    <li>Climate control and quality bedding</li>
                    <li>WiFi and tech amenities integrated seamlessly</li>
                </ul>
                
                <h2>Platform Recommendation</h2>
                <div class="product-recommendation">
                    <h3>Historic Hotels of America</h3>
                    <img src="images/historic-hotels-platform.jpg" alt="Historic Hotels of America" class="product-image">
                    <p>This specialized booking platform focuses exclusively on hotels with historic significance and vintage character. Each property is vetted for authenticity and historical importance, ensuring a truly unique experience.</p>
                    <div class="product-details">
                        <span class="price">Varies by property</span>
                        <span class="rating">★★★★★ (4.7/5)</span>
                    </div>
                    <p><strong>Special Features:</strong> Historical details for each property, ghost tours, heritage packages</p>
                </div>
                
                <h2>The Romance of Train Travel Hotels</h2>
                <p>Some of the most charming vintage accommodations are found in converted train stations and railway hotels. These properties capture the golden age of travel with their grand architecture and nostalgic atmosphere.</p>
                
                <img src="images/火车站.png" alt="Converted Train Station Hotel" class="article-image">
                
                <h3>Notable Railway Hotels:</h3>
                <ol>
                    <li><strong>Union Station Hotel, Nashville:</strong> A stunning Art Deco masterpiece</li>
                    <li><strong>The Crawford Hotel, Denver:</strong> Located inside historic Union Station</li>
                    <li><strong>St. Pancras Renaissance, London:</strong> Victorian Gothic splendor</li>
                </ol>
                
                <h2>Tips for Booking Vintage Hotels</h2>
                
                <h3>Research the History</h3>
                <p>Understanding a hotel's background enhances your experience. Many vintage hotels offer historical tours or have fascinating stories about famous guests and events.</p>
                
                <h3>Book Directly</h3>
                <p>Boutique hotels often offer special packages, room upgrades, and personalized service when you book directly through their website.</p>
                
                <h3>Consider the Season</h3>
                <p>Vintage hotels often have unique seasonal offerings—holiday decorations in historic properties are particularly magical.</p>
                
                <h2>The Future of Vintage Hospitality</h2>
                <p>As travelers increasingly seek authentic, Instagram-worthy experiences, vintage boutique hotels are experiencing a renaissance. These properties offer something that modern chain hotels cannot: a sense of place, history, and character that creates lasting memories.</p>
                
                <p>Whether you're planning a romantic getaway, a cultural exploration, or simply want to experience hospitality as it was meant to be, vintage boutique hotels provide a window into the past while delivering the comfort and service expectations of today.</p>
            </div>
        `,
        products: [
            {
                name: "Historic Hotels of America Platform",
                price: "Varies by property",
                rating: 4.7,
                image: "images/historic-hotels-platform.jpg"
            }
        ]
    },
    {
        id: 5,
        title: "Investment Strategies from Warren Buffett's Golden Era",
        category: "finance",
        date: "2025-08-05",
        excerpt: "Learn timeless investment principles from the Oracle of Omaha's most successful decades and how to apply them in today's market.",
        image: "images/warren-buffett-investing.jpg",
        content: `
            <div class="article-header">
                <img src="images/warren-buffett-investing.jpg" alt="Warren Buffett Investment Strategies" class="article-main-image">
                <h1>Investment Strategies from Warren Buffett's Golden Era</h1>
                <div class="article-meta">
                    <span class="category-tag">Finance & Insurance</span>
                    <span class="date">August 5, 2025</span>
                </div>
            </div>
            
            <div class="article-body">
                <p>Warren Buffett's investment philosophy, developed during his golden era from the 1960s through the 1990s, remains as relevant today as it was decades ago. His approach to value investing, patience, and long-term thinking has created extraordinary wealth while adhering to timeless principles that any investor can apply.</p>
                
                <h2>The Foundation of Buffett's Philosophy</h2>
                <p>Buffett's investment approach is rooted in the teachings of Benjamin Graham and the concept of buying businesses, not just stocks. His golden era was marked by iconic investments in companies like Coca-Cola, Washington Post, and GEICO—investments that demonstrate his core principles in action.</p>
                
                <img src="images/value-investing-principles.jpg" alt="Value Investing Principles" class="article-image">
                
                <h2>Core Investment Principles</h2>
                
                <h3>1. Invest in What You Understand</h3>
                <p>Buffett's "circle of competence" concept suggests investors should stick to businesses they can understand. During his golden era, he focused on simple businesses with predictable cash flows—newspapers, insurance, and consumer goods.</p>
                
                <h3>2. Look for Economic Moats</h3>
                <p>Companies with sustainable competitive advantages—whether through brand strength, network effects, or cost advantages—can maintain profitability over time. Coca-Cola's brand power exemplified this principle.</p>
                
                <h3>3. Buy at Attractive Prices</h3>
                <p>Even great companies can be poor investments if purchased at excessive prices. Buffett's discipline in waiting for attractive valuations was key to his success.</p>
                
                <h2>The Power of Compound Interest</h2>
                <p>Buffett called compound interest the "eighth wonder of the world." His golden era investments demonstrate how patience and reinvestment can create extraordinary returns over time.</p>
                
                <img src="images/compound-interest-chart.jpg" alt="Compound Interest Growth Chart" class="article-image">
                
                <h3>Historical Example: Coca-Cola Investment</h3>
                <p>Buffett's $1.3 billion investment in Coca-Cola from 1988-1994 demonstrates the power of his approach:</p>
                <ul>
                    <li>Initial investment: $1.3 billion</li>
                    <li>Current value (2025): Over $25 billion</li>
                    <li>Annual dividends received: $736 million</li>
                    <li>Total return: Over 1,800%</li>
                </ul>
                
                <h2>Platform Recommendation</h2>
                <div class="product-recommendation">
                    <h3>Vanguard Value Index Fund (VTV)</h3>
                    <img src="images/vanguard-value-fund.jpg" alt="Vanguard Value Index Fund" class="product-image">
                    <p>For investors who want to apply Buffett's principles without picking individual stocks, this low-cost index fund focuses on undervalued companies with strong fundamentals—exactly the type of investments Buffett favors.</p>
                    <div class="product-details">
                        <span class="price">0.04% expense ratio</span>
                        <span class="rating">★★★★★ (4.8/5)</span>
                    </div>
                    <p><strong>Key Features:</strong> Low fees, diversified value holdings, long-term track record</p>
                </div>
                
                <h2>Modern Application of Vintage Principles</h2>
                <p>While markets have evolved since Buffett's golden era, his core principles remain applicable:</p>
                
                <h3>Technology and Value Investing</h3>
                <p>Even Buffett has adapted, making significant investments in Apple and recognizing that technology companies can have strong economic moats through network effects and switching costs.</p>
                
                <img src="images/modern-value-investing.jpg" alt="Modern Value Investing" class="article-image">
                
                <h3>ESG and Sustainable Investing</h3>
                <p>Today's equivalent of Buffett's focus on quality businesses includes considering environmental, social, and governance factors as indicators of long-term sustainability.</p>
                
                <h2>Building Your Own Value Portfolio</h2>
                
                <h3>Step 1: Define Your Circle of Competence</h3>
                <p>Identify industries and business models you understand well. This might be technology if you work in tech, healthcare if you're a medical professional, or consumer goods if you understand retail.</p>
                
                <h3>Step 2: Screen for Quality</h3>
                <ul>
                    <li>Consistent profitability over 10+ years</li>
                    <li>Strong return on equity (ROE > 15%)</li>
                    <li>Low debt levels</li>
                    <li>Growing dividends</li>
                    <li>Predictable business model</li>
                </ul>
                
                <h3>Step 3: Wait for the Right Price</h3>
                <p>Use valuation metrics like price-to-earnings ratio, price-to-book value, and discounted cash flow analysis to determine fair value.</p>
                
                <h2>The Psychology of Long-Term Investing</h2>
                <p>Perhaps Buffett's greatest insight from his golden era was understanding investor psychology. Market volatility creates opportunities for patient investors willing to think like business owners rather than stock traders.</p>
                
                <h3>Emotional Discipline</h3>
                <ul>
                    <li>Ignore short-term market noise</li>
                    <li>View market crashes as buying opportunities</li>
                    <li>Focus on business fundamentals, not stock prices</li>
                    <li>Maintain a long-term perspective (10+ years)</li>
                </ul>
                
                <h2>Insurance as Investment Protection</h2>
                <p>Buffett's golden era also emphasized the importance of insurance—both as an investment and as protection for your portfolio. Consider adequate life, disability, and property insurance as part of your overall financial strategy.</p>
                
                <p>The investment strategies from Buffett's golden era prove that successful investing isn't about complex strategies or market timing—it's about understanding businesses, exercising patience, and maintaining discipline over decades.</p>
            </div>
        `,
        products: [
            {
                name: "Vanguard Value Index Fund (VTV)",
                price: "0.04% expense ratio",
                rating: 4.8,
                image: "images/vanguard-value-fund.jpg"
            }
        ]
    }
];

// Pagination settings
const articlesPerPage = 6;
let currentPage = 1;
let filteredArticles = [...articles];

// DOM elements
const articlesGrid = document.getElementById('articlesGrid');
const pagination = document.getElementById('pagination');
const filterTabs = document.querySelectorAll('.filter-tab');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modal = document.getElementById('articleModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayArticles();
    setupEventListeners();
    setupMobileMenu();
});

// Display articles
function displayArticles() {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);
    
    articlesGrid.innerHTML = articlesToShow.map(article => createArticleCard(article)).join('');
    updatePagination();
    
    // Add click listeners to article cards
    document.querySelectorAll('.article-card').forEach(card => {
        card.addEventListener('click', function() {
            const articleId = parseInt(this.dataset.id);
            showArticleModal(articleId);
        });
    });
}

// Create article card HTML
function createArticleCard(article) {
    return `
        <div class="article-card fade-in" data-id="${article.id}">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <div class="article-meta">
                    <span class="article-category">${getCategoryName(article.category)}</span>
                    <span class="article-date">${formatDate(article.date)}</span>
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        </div>
    `;
}

// Get category display name
function getCategoryName(category) {
    const categoryNames = {
        'fashion': 'Fashion & Accessories',
        'health': 'Health & Beauty',
        'home-garden': 'Home & Garden',
        'travel': 'Travel & Accommodation',
        'finance': 'Finance & Insurance',
        'food': 'Food & Beverages'
    };
    return categoryNames[category] || category;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    pagination.innerHTML = `
        <button ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
            <i class="fas fa-chevron-left"></i> Previous
        </button>
        ${generatePageNumbers(totalPages)}
        <button ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
            Next <i class="fas fa-chevron-right"></i>
        </button>
    `;
}

// Generate page numbers
function generatePageNumbers(totalPages) {
    let pageNumbers = '';
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers += `
            <button class="${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
                ${i}
            </button>
        `;
    }
    return pageNumbers;
}

// Change page
function changePage(page) {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        displayArticles();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Filter articles by category
function filterArticles(category) {
    if (category === 'all') {
        filteredArticles = [...articles];
    } else {
        filteredArticles = articles.filter(article => article.category === category);
    }
    
    currentPage = 1;
    displayArticles();
    
    // Update active filter tab
    filterTabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector(`[data-filter="${category}"]`).classList.add('active');
}

// Search articles
function searchArticles() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        filteredArticles = [...articles];
    } else {
        filteredArticles = articles.filter(article => 
            article.title.toLowerCase().includes(searchTerm) ||
            article.excerpt.toLowerCase().includes(searchTerm) ||
            article.content.toLowerCase().includes(searchTerm) ||
            getCategoryName(article.category).toLowerCase().includes(searchTerm)
        );
    }
    
    currentPage = 1;
    displayArticles();
    
    // Reset filter tabs
    filterTabs.forEach(tab => tab.classList.remove('active'));
    document.querySelector('[data-filter="all"]').classList.add('active');
}

// Show article modal
function showArticleModal(articleId) {
    // Redirect to dedicated article page instead of showing modal
    window.location.href = `article.html?id=${articleId}`;
}

// Close modal
function closeArticleModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Setup event listeners
function setupEventListeners() {
    // Filter tabs
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterArticles(filter);
        });
    });
    
    // Search functionality
    searchBtn.addEventListener('click', searchArticles);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchArticles();
        }
    });
    
    // Clear search when input is empty
    searchInput.addEventListener('input', function() {
        if (this.value === '') {
            searchArticles();
        }
    });
    
    // Modal event listeners
    closeModal.addEventListener('click', closeArticleModal);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeArticleModal();
        }
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeArticleModal();
        }
    });
    
    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            filterArticles(category);
            document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// Mobile menu setup
function setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}
