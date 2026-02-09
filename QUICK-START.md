# 🚀 QUICK SETUP GUIDE - Crazy Chef Website

## ⚡ GET STARTED IN 5 MINUTES

### Step 1: Download Files
You now have 3 main files:
- `index.html` - Main website file
- `style.css` - All styling
- `script.js` - Interactive features

### Step 2: Test Locally
1. Put all 3 files in the same folder
2. Double-click `index.html`
3. Website opens in your browser!

### Step 3: Essential Updates (Do These First!)

#### 🔴 CRITICAL - WhatsApp Numbers
**File: script.js**

Find these 2 lines:
```javascript
const phoneNumber = '961XXXXXXX';
```

Replace with YOUR WhatsApp number (no spaces, no +):
```javascript
const phoneNumber = '96112345678';
```

**File: index.html**

Find and replace ALL instances of `+961 XX XXX XXX` with your phone number:
- Use Find & Replace (Ctrl+H) for efficiency
- Replace: `+961 XX XXX XXX`
- With: `+961 12 345 678`

#### 📧 Email Address
Replace `contact@crazychef.com` with your email throughout index.html

#### 🗺️ Google Maps
1. Google Maps → Search your location
2. Click Share → Embed a map
3. Copy iframe code
4. Paste in index.html (around line 890)

### Step 4: Add Your Images

Create an `images` folder in the same location as your HTML files:

```
your-website/
├── index.html
├── style.css
├── script.js
└── images/          ← Create this folder
    ├── hero-background.jpg (1920x1080)
    ├── about-image.jpg (800x1000)
    ├── burger-1.jpg (400x400)
    ├── burger-2.jpg (400x400)
    ├── gallery-1.jpg (600x600)
    └── ... more images
```

Then replace placeholder blocks in HTML with:
```html
<!-- Instead of placeholder div, use: -->
<img src="images/your-image.jpg" alt="Description">
```

### Step 5: Customize Menu

In `index.html`, find menu items (line ~330) and edit:

```html
<h3 data-en="Your Burger Name" data-ar="اسم برجرك">Your Burger Name</h3>
<p data-en="Description" data-ar="الوصف">Description</p>
<span class="price">$9.99</span>
```

### Step 6: Upload to Web Hosting

**Option A: Using cPanel/File Manager**
1. Log into your hosting control panel
2. Open File Manager
3. Go to `public_html` folder
4. Upload all files and the images folder
5. Done! Visit yourwebsite.com

**Option B: Using FTP**
1. Download FileZilla (free FTP client)
2. Connect using FTP credentials from your host
3. Upload all files to public_html or www folder
4. Done!

## 📱 WHAT WORKS RIGHT NOW

✅ Full bilingual support (EN/AR toggle)
✅ Mobile responsive design
✅ Animated loading screen
✅ Sticky navigation
✅ Menu category tabs
✅ Gallery with lightbox
✅ WhatsApp ordering (after you add your number)
✅ Reservation form → WhatsApp
✅ Smooth scroll animations
✅ Floating WhatsApp button
✅ Professional design

## 🎯 PRIORITY TASKS (IN ORDER)

1. ✏️ Update WhatsApp number (script.js + index.html)
2. ✏️ Update phone/email in index.html
3. 🗺️ Add Google Maps embed
4. 🖼️ Add real food images
5. 📝 Customize menu items
6. ⭐ Update customer reviews
7. 🌐 Upload to web hosting
8. 📱 Share on social media!

## ⚠️ COMMON MISTAKES TO AVOID

❌ Forgetting to update WhatsApp number in BOTH files
❌ Wrong image file paths (check spelling and case)
❌ Not keeping all files in same folder
❌ Uploading to wrong folder on server (use public_html)
❌ Not testing on mobile before launch

## 💡 PRO TIPS

1. **Test Before Launch**: Always test locally first
2. **Compress Images**: Use TinyPNG.com to reduce file sizes
3. **Use WebP Format**: Better quality, smaller files
4. **Mobile First**: Test on your phone before going live
5. **SEO**: Update page title and meta description in HTML head
6. **Backup**: Always keep a copy of your original files

## 📞 NEED HELP?

Read the detailed README.md file for:
- Complete customization guide
- Troubleshooting tips
- Advanced features
- Performance optimization

---

## ⏱️ TIME ESTIMATE

- Basic setup (numbers, email): **5 minutes**
- Add images: **30 minutes**
- Customize menu: **20 minutes**
- Update content: **30 minutes**
- Upload and test: **15 minutes**

**Total: ~90 minutes to fully customized website!**

## 🎉 READY TO LAUNCH?

Once everything is set up:
1. Test all links and forms
2. Check mobile version
3. Try language switching
4. Test WhatsApp buttons
5. Upload to hosting
6. Share with the world! 🚀

---

**Your premium restaurant website is ready!**
Built with modern design, conversion optimization, and Lebanese market in mind.

Good luck with your restaurant! 🍔
