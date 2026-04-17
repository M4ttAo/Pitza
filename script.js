<<<<<<< HEAD
/* Pitza x Oryzo - Interaction Script */
=======
/* Pitza Modern - Scripts */
>>>>>>> parent of d0b97ce (test 21st.dev)

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

<<<<<<< HEAD
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
>>>>>>> parent of d0b97ce (test 21st.dev)
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

<<<<<<< HEAD
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
=======
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
>>>>>>> parent of d0b97ce (test 21st.dev)
            }, 3000);
        });
    }
});

/* 
   Note on Framer Motion: 
   In this static context, we use the Intersection Observer for section entry. 
   For more complex path animations or specific element transitions, 
   we can hook into the 'motion' global if needed.
*/
