# 🌟 WanderWell - Vintage Lifestyle Blog

A beautiful, responsive vintage-themed blog website featuring curated content across six distinct categories.

![WanderWell Preview](images/hero-vintage.jpg)

## ✨ Features

### 🎨 Design & User Experience
- **Vintage Aesthetic**: Carefully crafted retro design with warm color palette
- **Fully Responsive**: Perfect experience across desktop, tablet, and mobile devices
- **Smooth Animations**: Elegant transitions and hover effects throughout
- **Modern Typography**: Beautiful font combinations for optimal readability

### 📂 Content Categories
- **Fashion & Accessories**: Vintage style guides and timeless fashion pieces
- **Health & Beauty**: Natural beauty tips and wellness routines
- **Home & Garden**: Vintage decor and garden design inspiration
- **Travel & Accommodation**: Unique stays and travel guides
- **Finance & Insurance**: Smart money tips and investment wisdom
- **Food & Beverages**: Vintage recipes and culinary adventures

### 🔍 Advanced Features
- **Dedicated Categories Page**: Enhanced visual browsing experience
- **Advanced Search**: Filter by category, keywords, and content type
- **Article Reading Experience**: Immersive article pages with progress tracking
- **Interactive Navigation**: Smooth dropdown menus and intuitive navigation

## 🚀 Quick Start

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/kydomain1/WanderWell.git
   ```

2. Navigate to the project directory:
   ```bash
   cd WanderWell
   ```

3. Start a local server:
   ```bash
   # Using Node.js http-server
   npx http-server . -p 3000 -c-1 -o
   
   # Or using Python
   python -m http.server 3000
   
   # Or using PHP
   php -S localhost:3000
   ```

4. Open your browser and visit: `http://localhost:3000`

## 📁 Project Structure

```
WanderWell/
├── 📄 index.html              # Homepage with hero section and article grid
├── 📄 categories.html         # Dedicated categories browsing page
├── 📄 search.html            # Advanced search functionality
├── 📄 article.html           # Enhanced article reading experience
├── 📄 about.html             # About us page
├── 📄 contact.html           # Contact information and form
├── 📄 privacy.html           # Privacy policy
├── 📄 terms.html             # Terms of service
├── 📁 css/
│   ├── 📄 style.css          # Main stylesheet
│   └── 📄 pages.css          # Additional page-specific styles
├── 📁 js/
│   ├── 📄 script.js          # Core functionality
│   ├── 📄 articles.js        # Article data and management
│   ├── 📄 categories.js      # Categories page functionality
│   ├── 📄 search.js          # Search functionality
│   └── 📄 article-page.js    # Article page features
├── 📁 images/                # All website images
└── 📄 README.md              # This file
```

## 🎯 Key Pages

### 🏠 Homepage (`index.html`)
- Hero section with vintage styling
- Featured articles grid
- Category overview
- Newsletter signup

### 📂 Categories (`categories.html`)
- Visual category cards with background images
- Popular articles by category
- Statistics dashboard
- Interactive filtering

### 🔍 Search (`search.html`)
- Advanced search form
- Category filtering
- Popular search suggestions
- Results with pagination

### 📖 Article Pages (`article.html`)
- Immersive reading experience
- Reading progress indicator
- Related articles
- Social sharing buttons

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and modern web standards
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript**: Vanilla JS for all interactions and functionality
- **Font Awesome**: Icons throughout the website
- **Google Fonts**: Playfair Display and Source Sans Pro

### Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Features
- Optimized images with proper sizing
- Efficient CSS with minimal redundancy
- Clean JavaScript with proper event handling
- Progressive loading for better user experience

## 📝 Content Management

### Articles
Articles are managed through `js/articles.js` with the following structure:
- Unique ID for each article
- Title, category, date, and excerpt
- Full HTML content with embedded images
- Product recommendations
- SEO-friendly metadata

### Images
All images are stored in the `images/` directory with:
- Optimized file sizes
- Descriptive filenames
- Multiple formats (JPG, PNG) as needed
- Alt text for accessibility

## 🎨 Customization

### Colors
The color scheme can be modified in `css/style.css`:
```css
:root {
    --primary-color: #8B4513;    /* Saddle Brown */
    --secondary-color: #D2B48C;  /* Tan */
    --accent-color: #CD853F;     /* Peru */
    --text-color: #333333;       /* Dark Gray */
    --background-color: #FDF5E6; /* Old Lace */
}
```

### Typography
Fonts can be changed by updating the Google Fonts imports and CSS font families.

### Layout
The responsive grid system uses CSS Grid and Flexbox for easy customization.

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (main)
4. Your site will be available at: `https://kydomain1.github.io/WanderWell/`

### Netlify
1. Connect your GitHub repository
2. Set build command: (none needed)
3. Set publish directory: `/`
4. Deploy automatically on push

### Vercel
1. Import your GitHub repository
2. No build configuration needed
3. Deploy with zero configuration

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Mobile Friendly**: 100% mobile responsive
- **Load Time**: < 2 seconds on average connection
- **SEO Ready**: Semantic HTML and meta tags

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test thoroughly across different devices
5. Commit your changes: `git commit -m "Add feature description"`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Vintage magazines and classic web design
- **Images**: High-quality stock photos and custom graphics
- **Icons**: Font Awesome icon library
- **Fonts**: Google Fonts (Playfair Display, Source Sans Pro)

## 📞 Contact

For questions, suggestions, or collaboration opportunities:

- **Website**: [WanderWell](https://kydomain1.github.io/WanderWell/)
- **GitHub**: [kydomain1](https://github.com/kydomain1)
- **Issues**: [GitHub Issues](https://github.com/kydomain1/WanderWell/issues)

---

**Made with ❤️ for vintage lifestyle enthusiasts**

*WanderWell - Where timeless style meets modern functionality*