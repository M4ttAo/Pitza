<<<<<<< HEAD
/* Pitza Brand-Focused Scripts */
=======
/* Pitza Modern - Scripts */
>>>>>>> parent of d0b97ce (test 21st.dev)

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

<<<<<<< HEAD
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
=======
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // Intersection Observer for section reveal
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Animation for Bento Cards on hover (Magnetic effect)
    const bentoCards = document.querySelectorAll('.bento-card');
    bentoCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = card.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            card.style.transform = `translateY(-5px) rotateX(${y * 10}deg) rotateY(${x * 10}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `translateY(0) rotateX(0) rotateY(0)`;
        });
    });

    // Handle Form Submission (Mock)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = contactForm.querySelector('button');
            const originalText = button.innerText;
            
            button.innerText = 'INVIATO!';
            button.classList.replace('bg-primary', 'bg-accent');
            
            setTimeout(() => {
                button.innerText = originalText;
                button.classList.replace('bg-accent', 'bg-primary');
                contactForm.reset();
            }, 3000);
        });
>>>>>>> parent of d0b97ce (test 21st.dev)
    }
});

/* 
   Note on Framer Motion: 
   In this static context, we use the Intersection Observer for section entry. 
   For more complex path animations or specific element transitions, 
   we can hook into the 'motion' global if needed.
*/
