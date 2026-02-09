# 🍔 CRAZY CHEF - Premium Restaurant Website

## 📁 Project Structure

```
crazy-chef-website/
├── index.html          # Main HTML file with all sections
├── style.css          # Complete styling and animations
├── script.js          # Interactive functionality
└── README.md          # This file
```

## 🚀 Quick Start

1. **Upload to your web server:**
   - Upload all three files (index.html, style.css, script.js) to your web hosting
   - Keep them in the same directory
   - Open index.html in a browser

2. **Test locally:**
   - Simply open index.html in your web browser
   - All features will work except external links (WhatsApp, Maps)

## 🎨 Customization Guide

### 1. REPLACE IMAGES

The website uses **image placeholders** that you need to replace with actual photos. Look for these in the HTML file:

#### Hero Background (1920x1080px recommended)
```html
<!-- Line ~117 in index.html -->
<div class="hero-background">
    <!-- Add: background-image: url('hero-background.jpg'); to style.css -->
</div>
```

#### About Section Image (800x1000px recommended)
```html
<!-- Line ~231 in index.html -->
<div class="about-image">
    <div class="image-placeholder">
        <!-- Replace this entire div with: -->
        <img src="images/about-restaurant.jpg" alt="Crazy Chef Restaurant">
    </div>
</div>
```

#### Menu Item Images (400x400px each)
```html
<!-- Search for "menu-image" in index.html -->
<div class="menu-image">
    <div class="image-placeholder">
        <!-- Replace with: -->
        <img src="images/burger-classic.jpg" alt="Classic Crazy Burger">
    </div>
</div>
```

#### Gallery Images (600x600px each)
```html
<!-- Search for "gallery-item" in index.html -->
<div class="gallery-item">
    <div class="image-placeholder">
        <!-- Replace with: -->
        <img src="images/gallery-1.jpg" alt="Gallery Image">
    </div>
</div>
```

**Recommended folder structure:**
```
your-website/
├── index.html
├── style.css
├── script.js
└── images/
    ├── hero-background.jpg
    ├── about-restaurant.jpg
    ├── burger-1.jpg
    ├── burger-2.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    └── ... (more images)
```

### 2. UPDATE CONTACT INFORMATION

#### Phone Numbers
Search and replace ALL instances of `+961 XX XXX XXX` with your actual phone number:
- In index.html (multiple locations)
- In script.js (WhatsApp functions)

Example:
```html
<!-- Before -->
<p>+961 XX XXX XXX</p>

<!-- After -->
<p>+961 12 345 678</p>
```

#### WhatsApp Number
In **script.js**, find and update:
```javascript
// Line ~227 and ~275
const phoneNumber = '961XXXXXXX';
// Change to:
const phoneNumber = '96112345678'; // No spaces, no +
```

#### Email Address
Replace `contact@crazychef.com` with your actual email throughout index.html

#### Google Maps
1. Go to Google Maps
2. Search for your restaurant location
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder map in index.html (around line ~890)

```html
<!-- Replace this section -->
<iframe 
    src="YOUR_GOOGLE_MAPS_EMBED_URL_HERE"
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

### 3. EDIT MENU ITEMS

Find the menu sections in index.html (starting around line ~330). Each menu item follows this structure:

```html
<div class="menu-card">
    <div class="menu-image">
        <!-- Your image here -->
        <span class="menu-badge">Popular</span> <!-- Optional badge -->
    </div>
    <div class="menu-content">
        <h3 data-en="ENGLISH NAME" data-ar="ARABIC NAME">ENGLISH NAME</h3>
        <p data-en="English description" data-ar="Arabic description">English description</p>
        <div class="menu-footer">
            <span class="price">$8.99</span> <!-- Change price -->
            <button class="btn-order" onclick="orderOnWhatsApp('ITEM NAME')">
                <i class="fab fa-whatsapp"></i>
                <span data-en="Order" data-ar="اطلب">Order</span>
            </button>
        </div>
    </div>
</div>
```

**To add a new menu item:**
1. Copy an existing menu card
2. Update the image
3. Change the name (both English and Arabic)
4. Update the description
5. Modify the price
6. Update the orderOnWhatsApp parameter

**To remove a menu item:**
- Simply delete the entire `<div class="menu-card">...</div>` block

### 4. CUSTOMIZE TEXT CONTENT

All bilingual text uses this pattern:
```html
<!-- HTML element with translations -->
<h2 data-en="English Text" data-ar="النص العربي">English Text</h2>
```

**To edit text:**
1. Change the `data-en` attribute for English
2. Change the `data-ar` attribute for Arabic
3. Change the displayed text (should match data-en)

**Example:**
```html
<!-- Before -->
<h1 data-en="TASTE THE" data-ar="تذوق">TASTE THE</h1>

<!-- After -->
<h1 data-en="WELCOME TO" data-ar="مرحباً بك في">WELCOME TO</h1>
```

### 5. UPDATE REVIEWS/TESTIMONIALS

Find the reviews section (around line ~750) and edit:

```html
<div class="review-card">
    <div class="review-stars">
        <!-- 5 stars = full rating, remove <i> tags for lower ratings -->
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="review-text" 
       data-en="YOUR ENGLISH REVIEW TEXT" 
       data-ar="YOUR ARABIC REVIEW TEXT">
        YOUR ENGLISH REVIEW TEXT
    </p>
    <div class="review-author">
        <div class="author-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="author-info">
            <h4 data-en="Customer Name" data-ar="اسم العميل">Customer Name</h4>
            <span data-en="Customer Title" data-ar="لقب العميل">Customer Title</span>
        </div>
    </div>
</div>
```

### 6. CHANGE COLORS (OPTIONAL)

To change the red/white theme, edit the CSS variables in **style.css** (around line ~9):

```css
:root {
    /* Change these colors */
    --primary-red: #E63946;        /* Main red color */
    --primary-red-dark: #C1121F;   /* Darker red */
    --primary-red-light: #FF4D5A;  /* Lighter red */
    
    /* Example: Change to blue theme */
    --primary-red: #2563EB;
    --primary-red-dark: #1E40AF;
    --primary-red-light: #3B82F6;
}
```

### 7. UPDATE OPENING HOURS

Find and update in multiple locations:
1. Hero section feature items (line ~194)
2. Opening hours display (line ~835)
3. Footer contact info (line ~975)

```html
<span data-en="Open 2PM - 10PM" data-ar="مفتوح 2م - 10م">Open 2PM - 10PM</span>
```

Change the time slots in the reservation form (line ~880):
```html
<option value="14:00">2:00 PM</option>
<option value="15:00">3:00 PM</option>
<!-- Add or remove time slots as needed -->
```

### 8. CUSTOMIZE LOGO

The current logo is text-based. To add a custom logo image:

**In index.html** (line ~40 and ~960):
```html
<!-- Before -->
<div class="logo">
    <i class="fas fa-burger"></i>
    <span>Crazy Chef</span>
</div>

<!-- After -->
<div class="logo">
    <img src="images/logo.png" alt="Crazy Chef Logo" style="height: 40px;">
</div>
```

**For the loading screen** (line ~24):
Replace the burger animation with your logo image.

### 9. SOCIAL MEDIA LINKS

Update social media URLs in the footer (around line ~965):

```html
<div class="social-links">
    <a href="https://facebook.com/YOUR_PAGE" aria-label="Facebook">
        <i class="fab fa-facebook"></i>
    </a>
    <a href="https://instagram.com/YOUR_HANDLE" aria-label="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
    <a href="https://twitter.com/YOUR_HANDLE" aria-label="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://wa.me/961XXXXXXX" target="_blank" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
</div>
```

### 10. MODIFY LOADING SCREEN

To change the loading screen duration, edit **script.js** (line ~25):

```javascript
setTimeout(function() {
    loadingScreen.classList.add('hidden');
    // ... code
}, 1500); // Change 1500 (milliseconds) to your preferred duration
```

To disable the loading screen completely:
1. Delete the loading screen HTML (lines ~21-29 in index.html)
2. Remove loading screen code from script.js (lines ~14-27)

## 🌐 Language Features

The website supports English and Arabic with a toggle switch. The system:
- Changes text content dynamically
- Switches text direction (LTR/RTL)
- Updates form placeholders
- All without page reload

**To add more languages:**
1. Add language data attributes: `data-fr`, `data-es`, etc.
2. Add a new language button in the navigation
3. Update the `applyLanguage()` function in script.js

## 📱 Mobile Responsiveness

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

Test on different devices before publishing!

## ⚡ Performance Tips

1. **Optimize Images:**
   - Use WebP format for smaller file sizes
   - Compress images (use tools like TinyPNG)
   - Recommended dimensions are in the customization guide

2. **Enable Caching:**
   - Add caching headers on your web server
   - Use a CDN for static files

3. **Minify Files:**
   - Minify CSS and JavaScript for production
   - Use tools like UglifyJS or online minifiers

## 🔧 Troubleshooting

### WhatsApp buttons not working
- Check that you've replaced `961XXXXXXX` with your actual number
- Format: No spaces, no +, just digits (e.g., `96112345678`)

### Language switch not working
- Ensure all text elements have both `data-en` and `data-ar` attributes
- Check browser console for JavaScript errors

### Images not showing
- Verify image file paths are correct
- Check file names (they're case-sensitive on Linux servers)
- Ensure images are uploaded to the correct folder

### Mobile menu not closing
- Check that hamburger icon JavaScript is working
- Clear browser cache and reload

### Slow loading
- Compress and optimize all images
- Consider lazy loading images
- Check your hosting server speed

## 📞 Support & Questions

**Contact Information:**
- Email: contact@crazychef.com
- Phone: +961 XX XXX XXX
- WhatsApp: +961 XX XXX XXX

## 📄 Files Checklist

Before going live, ensure:
- [ ] All placeholder text replaced
- [ ] All images updated
- [ ] Contact information updated
- [ ] WhatsApp number configured
- [ ] Google Maps embedded
- [ ] Menu items customized
- [ ] Reviews updated
- [ ] Opening hours correct
- [ ] Social media links added
- [ ] Tested on mobile devices
- [ ] Tested language switching
- [ ] All forms tested
- [ ] SEO meta tags updated

## 🎉 Launch Checklist

1. Upload all files to web hosting
2. Test all features on live site
3. Submit to Google Search Console
4. Set up Google Analytics (optional)
5. Create social media accounts
6. Print QR code for table tents (linking to menu)
7. Add website to Google My Business
8. Share on social media

---

## 💡 Advanced Customization

### Add Google Analytics
Add before closing `</head>` tag in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Add Facebook Pixel
Add after opening `<body>` tag:
```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

---

**Built with ❤️ for Crazy Chef**

Version 1.0 - February 2026
