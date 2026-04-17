/* Pitza Brand-Focused Scripts */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Trigger Hero Animations
    const heroAnims = ['.hero-title', '.hero-sub', '.hero-cta'];
    heroAnims.forEach((selector) => {
        const el = document.querySelector(selector);
        if (el) el.classList.add('active');
    });

    // Intersection Observer for Sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Navbar Scroll Behavior
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.transform = 'translateY(-10px) scale(0.95)';
            navbar.querySelector('div').style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
        } else {
            navbar.style.transform = 'translateY(0) scale(1)';
            navbar.querySelector('div').style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }
    });

    // Form Mock Submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerText = 'Richiesta Ricevuta';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
                btn.innerText = 'Invia la richiesta';
                btn.classList.remove('bg-green-600');
                form.reset();
            }, 3000);
        });
    }
});
