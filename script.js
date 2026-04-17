/* Pitza Light & Clean - Scripts */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('nav-shadow');
        } else {
            navbar.classList.remove('nav-shadow');
        }
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

    // Gallery Slider Logic
    const slider = document.getElementById('gallery-slider');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    if (slider && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollLeft += 400;
        });
        prevBtn.addEventListener('click', () => {
            slider.scrollLeft -= 400;
        });
    }

    // Form Feedback
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Richiesta Inviata';
            btn.classList.add('bg-green-600');
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-green-600');
                form.reset();
            }, 3000);
        });
    }
});
