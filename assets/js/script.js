/* --- assets/js/script.js --- */

document.addEventListener('DOMContentLoaded', () => {
    // --- HERO SLIDESHOW ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000;

        // Create dots container
        const hero = document.querySelector('.hero');
        if (hero) {
            const dotsContainer = document.createElement('div');
            dotsContainer.className = 'hero-dots';
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Слайд ${i + 1}`);
                dot.addEventListener('click', () => goToSlide(i));
                dotsContainer.appendChild(dot);
            });
            hero.appendChild(dotsContainer);
        }

        const dots = document.querySelectorAll('.hero-dot');

        function goToSlide(index) {
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide((currentSlide + 1) % slides.length);
        }

        setInterval(nextSlide, slideInterval);
    }

    // --- HOME PROMO VIDEO OVERLAY ---
    const video = document.getElementById('school-video');
    const playOverlay = document.getElementById('video-play-overlay');
    const playBtn = document.getElementById('video-play-btn');

    if (video && playOverlay && playBtn) {
        const hideOverlay = () => {
            playOverlay.classList.add('hidden');
        };

        // If autoplay succeeded, hide overlay after a short delay
        video.addEventListener('playing', function onPlaying() {
            setTimeout(hideOverlay, 600);
            video.removeEventListener('playing', onPlaying);
        });

        // Click on play button: unmute + ensure playing
        playBtn.addEventListener('click', function () {
            video.muted = false;
            video.play().catch(function () { video.muted = true; video.play(); });
            hideOverlay();
        });

        // Click anywhere on the video wrapper toggles play/pause
        const wrapper = video.closest('.video-wrapper');
        if (wrapper) {
            wrapper.addEventListener('click', function (e) {
                if (e.target === playBtn || playBtn.contains(e.target)) return;
                if (video.paused) { video.play(); } else { video.pause(); }
            });
        }
    }

    // --- REPORTS MODAL (PROZORIST) ---
    const reportsModal = document.getElementById('reportsModal');
    const openReportsBtn = document.getElementById('openReports');
    const closeReportsBtn = document.getElementById('closeModal');

    if (reportsModal && openReportsBtn && closeReportsBtn) {
        openReportsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            reportsModal.classList.add('open');
        });
        closeReportsBtn.addEventListener('click', () => {
            reportsModal.classList.remove('open');
        });
        reportsModal.addEventListener('click', (e) => {
            if (e.target === reportsModal) {
                reportsModal.classList.remove('open');
            }
        });
    }
});

/**
 * Switch tabs in the educational programs section
 * @param {Event} evt 
 * @param {string} tabId 
 */
function openGradeTab(evt, tabId) {
    const parentSection = evt.currentTarget.closest('section');
    if (!parentSection) return;

    // Hide all tab contents in this section
    parentSection.querySelectorAll('.grade-tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // Remove active class from all buttons in this section
    parentSection.querySelectorAll('.grade-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected content and activate button
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        targetContent.style.display = 'block';
    }
    evt.currentTarget.classList.add('active');
}

/**
 * Toggle visibility of the parents governance table
 */
function toggleParentsGovernance() {
    const content = document.getElementById("parents-governance-content");
    const icon = document.getElementById("governance-icon");
    if (!content || !icon) return;

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.style.transform = "rotate(180deg)";
    } else {
        content.style.display = "none";
        icon.style.transform = "rotate(0deg)";
    }
}

/**
 * Generic Switcher for Year Tabs (Samoanaliz, Finances, Atestacia, Antibullying)
 */
document.addEventListener('click', (e) => {
    const tab = e.target.closest('.year-tab');
    if (!tab) return;
    
    const yearId = tab.getAttribute('data-year');
    if (!yearId) return;
    
    const container = tab.closest('.year-tabs');
    if (!container) return;
    
    // Deactivate siblings
    container.querySelectorAll('.year-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Find all content panels under the parent section
    const parentSection = container.closest('section');
    if (!parentSection) return;
    
    parentSection.querySelectorAll('.year-content').forEach(c => {
        c.classList.remove('active');
        if (c.id === `year-${yearId}`) {
            c.classList.add('active');
        }
    });
});