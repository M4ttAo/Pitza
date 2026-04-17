/* Pitza x Oryzo - Interaction Script */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Staggered Reveal for Hero Items
    const revealItems = document.querySelectorAll('.reveal-item');
    revealItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 150 + 200);
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

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.querySelector('div').classList.add('bg-card/90');
            navbar.querySelector('div').classList.remove('bg-card/60');
        } else {
            navbar.querySelector('div').classList.add('bg-card/60');
            navbar.querySelector('div').classList.remove('bg-card/90');
        }
    });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple Form Validation Feedback
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Richiesta Ricevuta';
            btn.style.backgroundColor = '#10B981';
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
                form.reset();
            }, 3000);
        });
    }
});
