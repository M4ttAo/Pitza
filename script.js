/* Pitza Liquid Elegance - Scripts */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Staggered Hero Reveal
    const heroElements = ['.hero-title', '.hero-sub', '.hero-cta'];
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            document.querySelector(el).classList.add('active');
        }, 200 * index + 300);
    });

    // Intersection Observer for Section Reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Navbar Scroll Refinement
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.paddingTop = '1rem';
            navbar.style.paddingBottom = '1rem';
            navbar.querySelector('div').style.backgroundColor = 'rgba(15, 15, 15, 0.7)';
        } else {
            navbar.style.paddingTop = '2rem';
            navbar.style.paddingBottom = '2rem';
            navbar.querySelector('div').style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
        }
    });

    // Parallax effect on pizza (optional, smooth)
    const pizzaImg = document.querySelector('.hero-img-wrap');
    window.addEventListener('scroll', () => {
        const speed = 0.05;
        const yPos = window.scrollY * speed;
        if (pizzaImg) {
            pizzaImg.style.transform = `translateY(${yPos}px)`;
        }
    });

    // Simple Form Validation Feedback
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Richiesta Inviata';
            btn.style.backgroundColor = '#10B981'; // Success Green
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                form.reset();
            }, 3000);
        });
    }
});
