/* Pitza Modern - 21st.dev Interactions */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Staggered Hero Animation
    setTimeout(() => {
        const heroContent = document.querySelector('.reveal-text');
        if (heroContent) heroContent.classList.add('active');
    }, 100);

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.transform = 'translateY(-10px) scale(0.95)';
            navbar.querySelector('div').classList.add('bg-black/80');
        } else {
            navbar.style.transform = 'translateY(0) scale(1)';
            navbar.querySelector('div').classList.remove('bg-black/80');
        }
    });

    // Intersection Observer for Sections
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mouse Spotlight Effect (Optional for performance)
    const grid = document.body;
    grid.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        // Optional: Update a CSS variable for a spotlight effect
        // document.documentElement.style.setProperty('--mouse-x', `${x}px`);
        // document.documentElement.style.setProperty('--mouse-y', `${y}px`);
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
