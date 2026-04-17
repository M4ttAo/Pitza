/* Pitza Modern - Scripts */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

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
    }
});

/* 
   Note on Framer Motion: 
   In this static context, we use the Intersection Observer for section entry. 
   For more complex path animations or specific element transitions, 
   we can hook into the 'motion' global if needed.
*/
