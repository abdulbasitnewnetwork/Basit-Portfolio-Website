// ==================== THEME MANAGEMENT ====================

const themeToggle = document.querySelector('.theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

// Initialize theme based on localStorage or system preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let theme = savedTheme || (prefersDark ? 'dark' : 'light');

    if (theme === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerHTML = '<span class="theme-icon">🌙</span>';
    } else {
        body.classList.remove('light-mode');
        themeToggle.innerHTML = '<span class="theme-icon">☀️</span>';
    }

    localStorage.setItem('theme', theme);
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    const isLightMode = body.classList.toggle('light-mode');
    const theme = isLightMode ? 'light' : 'dark';

    themeToggle.innerHTML = isLightMode
        ? '<span class="theme-icon">🌙</span>'
        : '<span class="theme-icon">☀️</span>';

    localStorage.setItem('theme', theme);
});

// Initialize theme on page load
initializeTheme();

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        initializeTheme();
    }
});

// ==================== MOBILE NAVIGATION ====================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ==================== SMOOTH SCROLLING ====================

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        scrollToSection(targetId);
    });
});

// Smooth scroll for any buttons with onclick="scrollToSection(...)"
// Already handled by the function above

// ==================== ACTIVE NAVIGATION STATE ====================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeLink = document.querySelector(`.nav-menu a[href="#${section.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// ==================== BACK TO TOP BUTTON ====================

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== CONTACT FORM VALIDATION ====================

const contactForm = document.getElementById('contactForm');

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    // Clear previous error states
    [name, email, message].forEach(field => {
        field.style.borderColor = '';
    });

    // Validate name
    if (name.value.trim().length < 2) {
        name.style.borderColor = 'var(--error-color)';
        isValid = false;
    }

    // Validate email
    if (!validateEmail(email.value.trim())) {
        email.style.borderColor = 'var(--error-color)';
        isValid = false;
    }

    // Validate message
    if (message.value.trim().length < 10) {
        message.style.borderColor = 'var(--error-color)';
        isValid = false;
    }

    if (!isValid) {
        showNotification('Please fill in all fields correctly.', 'error');
        return;
    }

    // Form is valid - show success message
    showNotification('Thank you for your message! To receive your message, connect this form to a backend service (Formspree, EmailJS, or your own API).', 'success');
    contactForm.reset();
    [name, email, message].forEach(field => {
        field.style.borderColor = '';
    });
});

// ==================== NOTIFICATION SYSTEM ====================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--${type === 'error' ? 'error-color' : type === 'success' ? 'success-color' : 'accent-cyan'});
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        max-width: 90%;
        max-width: min(90%, 500px);
        animation: slideDown 0.3s ease;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ==================== DYNAMIC FOOTER YEAR ====================

document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ==================== LAB DETAILS INTERACTION ====================

const labDetails = document.querySelectorAll('.lab-details');

labDetails.forEach(detail => {
    const summary = detail.querySelector('summary');

    // Prevent default summary behavior and handle manually for better control
    summary.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = detail.hasAttribute('open');

        // Close all other details
        labDetails.forEach(otherDetail => {
            if (otherDetail !== detail && otherDetail.hasAttribute('open')) {
                otherDetail.removeAttribute('open');
            }
        });

        // Toggle current detail
        if (isOpen) {
            detail.removeAttribute('open');
        } else {
            detail.setAttribute('open', '');
        }
    });
});

// ==================== INTERSECTION OBSERVER FOR REVEAL ON SCROLL ====================

// Check for reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
    const revealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, revealOptions);

    // Add animation to various elements
    const elementsToReveal = document.querySelectorAll('.project-card, .lab-card, .about-card, .skill-category, .education-card');
    elementsToReveal.forEach(el => {
        el.style.opacity = '0';
        revealOnScroll.observe(el);
    });
}

// Add fadeInUp animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
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
`;
document.head.appendChild(fadeInStyle);

// ==================== FORM INPUT CLEARING ====================

// Clear error styling when user starts typing
const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
formInputs.forEach(input => {
    input.addEventListener('input', () => {
        input.style.borderColor = '';
    });
});

// ==================== KEYBOARD NAVIGATION ====================

// Enhanced keyboard support for interactive elements
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }

    // Skip back to top with keyboard
    if (e.key === 'End' && backToTopButton.classList.contains('show')) {
        backToTopButton.focus();
    }
});

// ==================== PERFORMANCE: LAZY LOADING SETUP ====================

// If you add images later, this will help with lazy loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== UTILITY FUNCTIONS ====================

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Debounce function for scroll events
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

// ==================== PAGE LOAD COMPLETE ====================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');

    // You can add any initialization code here
    // For example, logging analytics or initializing third-party libraries
});

// ==================== WINDOW UNLOAD (OPTIONAL CLEANUP) ====================

window.addEventListener('beforeunload', () => {
    // Cleanup if needed
});

// ==================== CONSOLE GREETING ====================

console.log('%c╔═════════════════════════════════════════════════════════╗', 'color: #00d4ff; font-weight: bold;');
console.log('%c║       Welcome to Abdul Basit\'s Portfolio           ║', 'color: #00d4ff; font-weight: bold;');
console.log('%c║  Computer Engineer | Networking Enthusiast         ║', 'color: #00d4ff; font-weight: bold;');
console.log('%c╚═════════════════════════════════════════════════════════╝', 'color: #00d4ff; font-weight: bold;');
console.log('%cTo edit content, check the HTML file for data and configuration areas.', 'color: #00f0ff;');
console.log('%cTheme: ' + localStorage.getItem('theme'), 'color: #00d4ff;');
