// landing.js - Orange Space Experience
document.addEventListener('DOMContentLoaded', () => {
    initGSAPAnimations();
    initNavbarScroll();
    initHeroSlider();

    // Handle cross-page anchor links (e.g., landing.html#faq loaded from another page)
    if (window.location.hash) {
        setTimeout(() => {
            const targetElement = document.querySelector(window.location.hash);
            if (targetElement) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { y: targetElement, offsetY: 70 },
                    ease: "power3.out"
                });
            }
        }, 150); // Minimal delay to instantly trigger scroll after paint
    }
});

// --- Hero Slider ---
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slider-bg');
    const dots = document.querySelectorAll('.hero-dot');
    if (slides.length === 0) return;

    let currentSlide = 0;
    let slideInterval;

    const goToSlide = (index) => {
        slides[currentSlide].classList.remove('active');
        if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

        currentSlide = index;

        slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        let next = (currentSlide + 1) % slides.length;
        goToSlide(next);
    };

    const startSlider = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000); // Change image every 5 seconds
    };

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            startSlider();
        });
    });

    startSlider();
}

// --- GSAP ANIMATIONS ---
function initGSAPAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Hero Content Fade-In
    gsap.from('.reveal-content', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2
    });

    // Reveal elements on scroll
    gsap.utils.toArray('.reveal-from-bottom').forEach((element, i) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            delay: i % 4 * 0.1 // slight stagger for grid items
        });
    });

    // Subtle image zoom on hover for amenity cards
    document.querySelectorAll('.amenity-card').forEach(card => {
        const img = card.querySelector('img');
        card.addEventListener('mouseenter', () => {
            gsap.to(img, { scale: 1.1, duration: 0.6, ease: "power2.out" });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(img, { scale: 1, duration: 0.6, ease: "power2.out" });
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth Scroll for Navigation Links (Only strictly internal hash links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Only intercept if it's purely a hash link meant for the current page
            if (targetId && targetId.startsWith('#')) {
                if (targetId === '#') {
                    e.preventDefault();
                    return;
                }
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: targetElement, offsetY: 70 },
                        ease: "power3.inOut"
                    });
                }
            }
        });
    });

    // FAQ Accordion Interactivity
    document.querySelectorAll('.faq-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('i');
            const isActive = content.style.display === 'block';

            // Reset all others
            document.querySelectorAll('.faq-content').forEach(c => c.style.display = 'none');
            document.querySelectorAll('.faq-header i').forEach(i => i.style.transform = 'rotate(0deg)');

            if (!isActive) {
                content.style.display = 'block';
                gsap.from(content, { opacity: 0, y: -10, duration: 0.3 });
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}
