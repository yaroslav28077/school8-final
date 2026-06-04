/**
 * components.js
 * Manages runtime dynamic behavior: mobile burger navigation, dropdown accordion triggers,
 * active link highlighting, scroll-to-top, and image lazy-loading.
 * Static HTML injection is removed as it is now pre-rendered via Eleventy.
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    highlightActiveNav();
    injectScrollToTop();
    lazyLoadImages();
});

/**
 * Highlights the current page in navigation
 */
function highlightActiveNav() {
    let currentPath = location.pathname.toLowerCase();
    
    // Normalize trailing slash for current path
    if (currentPath !== '/' && currentPath.endsWith('/')) {
        currentPath = currentPath.slice(0, -1);
    }
    
    document.querySelectorAll('.dropdown-menu a, .nav-link[href]').forEach(link => {
        let href = link.getAttribute('href');
        if (!href) return;
        
        // Ignore external links
        if (href.startsWith('http') || href.startsWith('//')) return;
        
        // Normalize href
        let normalizedHref = href.toLowerCase();
        
        // Remove trailing slash if present
        if (normalizedHref !== '/' && normalizedHref.endsWith('/')) {
            normalizedHref = normalizedHref.slice(0, -1);
        }
        
        // Check match
        let isMatch = false;
        if (currentPath === '/' || currentPath === '/index.html' || currentPath === '/index') {
            isMatch = (normalizedHref === '/' || normalizedHref === '/index.html' || normalizedHref === '/index' || normalizedHref === '');
        } else {
            isMatch = (normalizedHref === currentPath);
        }
        
        if (isMatch) {
            link.classList.add('nav-active');
            // Highlight parent nav-item if inside dropdown
            const parentItem = link.closest('.nav-item');
            if (parentItem) parentItem.classList.add('nav-item-active');
        }
    });
}

/**
 * Scroll-to-top button
 */
function injectScrollToTop() {
    const btn = document.createElement('button');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', 'Прокрутити вгору');
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
}

/**
 * Add loading="lazy" to all images that don't have it
 */
function lazyLoadImages() {
    document.querySelectorAll('img:not([loading])').forEach(img => {
        // Don't lazy-load above-the-fold images (logo, hero)
        if (!img.closest('.logo') && !img.closest('.hero')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

/**
 * Mobile navigation and dropdown triggers
 */
function initializeNavigation() {
    const burger = document.getElementById('burger-btn');
    const nav = document.getElementById('main-nav');
    const closeBtn = document.getElementById('close-btn');
    const overlay = document.getElementById('overlay') || createOverlay();
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    // ---- Mobile menu open/close ----
    const openMenu = () => {
        nav.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        nav.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        // Close all dropdowns when menu closes
        dropdownItems.forEach(item => {
            item.classList.remove('open');
            const link = item.querySelector('.nav-link');
            if (link) link.setAttribute('aria-expanded', 'false');
        });
    };

    if (burger) burger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    // Escape key closes menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // ---- Dropdown interactions ----
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        if (!link) return;

        // -- Mobile: accordion click --
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 1200) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = item.classList.contains('open');

                // Accordion: close all other dropdowns first
                dropdownItems.forEach(other => {
                    if (other !== item) {
                        other.classList.remove('open');
                        const otherLink = other.querySelector('.nav-link');
                        if (otherLink) otherLink.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current
                item.classList.toggle('open', !isOpen);
                link.setAttribute('aria-expanded', String(!isOpen));
            }
        });

        // -- Keyboard: Enter/Space --
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                link.click();
            }
        });

        // -- Desktop: hover with delay to prevent flicker --
        if (window.matchMedia('(min-width: 1201px)').matches) {
            item.addEventListener('mouseenter', () => {
                link.setAttribute('aria-expanded', 'true');
            });
            item.addEventListener('mouseleave', () => {
                link.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close mobile menu on link click
    nav.querySelectorAll('.dropdown-menu a').forEach(a => {
        a.addEventListener('click', () => {
            if (window.innerWidth <= 1200) {
                closeMenu();
            }
        });
    });
}

function createOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.id = 'overlay';
    document.body.prepend(overlay);
    return overlay;
}
