/* ==========================================
   CRAZY CHEF - INTERACTIVE FUNCTIONALITY
   Language Toggle, Animations, Menu, Forms
   ========================================== */

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initLoadingScreen();
    initNavigation();
    initLanguageSwitch();
    initMenuTabs();
    initGallery();
    initScrollAnimations();
    initScrollTop();
    initReservationForm();
    updateYear();
});

// ==================== LOADING SCREEN ====================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after page loads
    window.addEventListener('load', function() {
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            // Remove from DOM after animation completes
            setTimeout(function() {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1500); // Show loading for minimum 1.5 seconds
    });
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight active section in navigation
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== LANGUAGE SWITCH ====================
let currentLanguage = 'en';

function initLanguageSwitch() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            if (lang !== currentLanguage) {
                currentLanguage = lang;
                
                // Update button states
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Apply language changes
                applyLanguage(lang);
            }
        });
    });
}

function applyLanguage(lang) {
    const elementsToTranslate = document.querySelectorAll('[data-en], [data-ar]');
    
    // Set HTML direction and language
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Translate all elements
    elementsToTranslate.forEach(element => {
        const translation = element.getAttribute('data-' + lang);
        if (translation) {
            // Handle different element types
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    // Update form placeholders separately
    updateFormPlaceholders(lang);
}

function updateFormPlaceholders(lang) {
    const placeholders = {
        en: {
            name: 'John Doe',
            phone: '+961 XX XXX XXX',
            message: 'Any special requirements or dietary restrictions?'
        },
        ar: {
            name: 'الاسم الكامل',
            phone: '+961 XX XXX XXX',
            message: 'أي متطلبات خاصة أو قيود غذائية؟'
        }
    };

    document.getElementById('name').placeholder = placeholders[lang].name;
    document.getElementById('phone').placeholder = placeholders[lang].phone;
    document.getElementById('message').placeholder = placeholders[lang].message;
}

// ==================== MENU TABS ====================
function initMenuTabs() {
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active tab
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding category
            menuCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.getAttribute('data-category') === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
}

// ==================== GALLERY & LIGHTBOX ====================
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // In production, you would get the actual image source
            // For now, we'll just show the lightbox structure
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// ==================== SCROLL ANIMATIONS ====================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Observe cards
    const cards = document.querySelectorAll('.feature-card, .service-card, .menu-card, .review-card, .gallery-item');
    cards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// ==================== SCROLL TO TOP BUTTON ====================
function initScrollTop() {
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== WHATSAPP ORDER FUNCTION ====================
function orderOnWhatsApp(itemName) {
    const phoneNumber = '961XXXXXXX'; // Replace with actual WhatsApp number
    const message = `Hello! I want to order: ${itemName}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
}

// ==================== RESERVATION FORM ====================
function initReservationForm() {
    const form = document.getElementById('reservation-form');
    
    // Set minimum date to today
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            guests: document.getElementById('guests').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        // Create WhatsApp message
        const reservationMessage = `
🍔 *New Reservation Request*

👤 Name: ${formData.name}
📞 Phone: ${formData.phone}
👥 Guests: ${formData.guests}
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
${formData.message ? '💬 Message: ' + formData.message : ''}

Please confirm my reservation. Thank you!
        `.trim();

        const phoneNumber = '961XXXXXXX'; // Replace with actual WhatsApp number
        const encodedMessage = encodeURIComponent(reservationMessage);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Show success message
        showFormSuccess();
        
        // Reset form
        form.reset();
    });
}

function validateForm(data) {
    if (!data.name || !data.phone || !data.guests || !data.date || !data.time) {
        alert(currentLanguage === 'en' 
            ? 'Please fill in all required fields.' 
            : 'يرجى ملء جميع الحقول المطلوبة.');
        return false;
    }

    // Validate phone number (basic check)
    const phoneRegex = /^\+?[0-9\s-]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        alert(currentLanguage === 'en' 
            ? 'Please enter a valid phone number.' 
            : 'يرجى إدخال رقم هاتف صالح.');
        return false;
    }

    return true;
}

function showFormSuccess() {
    const successMessage = currentLanguage === 'en'
        ? '✅ Redirecting to WhatsApp to confirm your reservation!'
        : '✅ إعادة التوجيه إلى واتساب لتأكيد حجزك!';
    
    // Create success alert
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: #28A745;
        color: white;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        font-weight: 600;
        animation: slideDown 0.5s ease;
    `;
    alertDiv.textContent = successMessage;
    
    document.body.appendChild(alertDiv);
    
    // Remove alert after 3 seconds
    setTimeout(() => {
        alertDiv.style.animation = 'slideUp 0.5s ease';
        setTimeout(() => alertDiv.remove(), 500);
    }, 3000);
}

// ==================== UPDATE YEAR ====================
function updateYear() {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// ==================== SMOOTH SCROLL FOR ALL ANCHOR LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal links
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const navbar = document.getElementById('navbar');
                const navHeight = navbar ? navbar.offsetHeight : 0;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ==================== UTILITY FUNCTIONS ====================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add debounced scroll handler for performance
const handleScroll = debounce(function() {
    // Any heavy scroll operations can go here
}, 100);

window.addEventListener('scroll', handleScroll);

// ==================== CONSOLE WELCOME MESSAGE ====================
console.log(`
%c🍔 CRAZY CHEF 🍔
%cWelcome to our premium restaurant website!
Built with passion and great taste.

%c📧 Contact: contact@crazychef.com
📱 Phone: +961 XX XXX XXX

%cEnjoy your visit! 🎉
`, 
'color: #E63946; font-size: 24px; font-weight: bold;',
'color: #555; font-size: 14px;',
'color: #E63946; font-size: 12px;',
'color: #28A745; font-size: 14px; font-weight: bold;'
);

// ==================== PERFORMANCE MONITORING ====================
if ('performance' in window) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}
