/* Pitza Liquid Elegance Interactive - Scripts */

const eventData = {
    matrimoni: {
        title: "MATRIMONI",
        image: "./assets/gallery-2.jpg",
        description: "Un corner pizza gourmet che si integra perfettamente nelle location più esclusive. Eleganza, show cooking e la vera tradizione napoletana che conquista tutti gli invitati. Offriamo un servizio curato nei minimi dettagli.",
        features: ["Corner elegante", "Live Show Cooking", "Ingredienti Premium"]
    },
    aziendali: {
        title: "CORPORATE",
        image: "./assets/gallery-1.jpg",
        description: "Team building, lanci di prodotto e cene aziendali con un format dinamico e professionale. La pizza diventa un momento di condivisione e networking informale ma di altissima qualità.",
        features: ["Brand Integration", "Servizio Rapido", "Format Dinamico"]
    },
    privati: {
        title: "PRIVATI",
        image: "./assets/gallery-3.jpeg",
        description: "Portiamo l'atmosfera di una vera pizzeria napoletana direttamente a casa tua o nella tua location preferita. Un'esperienza conviviale e divertente per ogni occasione speciale.",
        features: ["Setup Versatile", "Pizzeria Mobile", "Flessibilità Totale"]
    }
};

function openModal(type) {
    const data = eventData[type];
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');

    content.innerHTML = `
        <div class="md:w-1/2 h-[300px] md:h-auto overflow-hidden">
            <img src="${data.image}" class="w-full h-full object-cover">
        </div>
        <div class="md:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-8">
            <h3 class="text-5xl font-serif italic text-white tracking-tight">${data.title}</h3>
            <p class="text-stone-400 leading-relaxed font-light">${data.description}</p>
            <ul class="space-y-3 text-stone-200">
                ${data.features.map(f => `
                    <li class="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest">
                        <span class="w-1.5 h-1.5 bg-primary rounded-full"></span> 
                        <span>${f}</span>
                    </li>
                `).join('')}
            </ul>
            <div class="pt-8">
                <a href="#contatti" onclick="closeModal()" class="bg-primary text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest inline-block transition-transform hover:scale-105">Richiedi Preventivo</a>
            </div>
        </div>
    `;

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    if (typeof lucide !== 'undefined') lucide.createIcons();

    // Hero Entry Animations
    const heroElements = ['.hero-logo-wrap', '.hero-title', '.hero-sub', '.hero-cta'];
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            const item = document.querySelector(el);
            if (item) item.classList.add('active');
        }, index * 200 + 300);
    });

    // Intersection Observer for Section Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Gallery Slider
    const slider = document.getElementById('gallery-slider');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    if (slider && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollLeft += 500;
        });
        prevBtn.addEventListener('click', () => {
            slider.scrollLeft -= 500;
        });
    }

    // Modal click outside
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') closeModal();
    });

    // Navbar scroll refinement
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.querySelector('div').style.backgroundColor = 'rgba(15, 15, 15, 0.8)';
            navbar.style.paddingTop = '1rem';
            navbar.style.paddingBottom = '1rem';
        } else {
            navbar.querySelector('div').style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
            navbar.style.paddingTop = '2rem';
            navbar.style.paddingBottom = '2rem';
        }
    });
});
