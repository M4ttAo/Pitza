/* Pitza Hybrid Light Modern - Scripts */

const eventData = {
    matrimoni: {
        title: "MATRIMONI",
        image: "./assets/gallery-2.jpg",
        description: "Il corner pizza perfetto per il tuo giorno più bello. Eleganza, show cooking e la vera tradizione napoletana che conquista tutti gli invitati. Offriamo un servizio curato nei minimi dettagli, dal setup del forno alla scelta degli ingredienti premium.",
        features: ["Corner pizza elegante", "Pizza live show", "Ingredienti gourmet"]
    },
    aziendali: {
        title: "CORPORATE",
        image: "./assets/gallery-1.jpg",
        description: "Launch party, team building e meeting aziendali con un format dinamico e di impatto. La pizza diventa un momento di condivisione e networking informale ma di altissima qualità.",
        features: ["Servizio rapido", "Brand integration", "Format dinamico"]
    },
    privati: {
        title: "PRIVATE",
        image: "./assets/gallery-3.jpeg",
        description: "Compleanni, lauree o semplicemente una festa tra amici. Portiamo la pizzeria napoletana a casa tua o nella tua location preferita. Un'esperienza conviviale e divertente per tutti.",
        features: ["Setup versatile", "Atmosfera conviviale", "Flessibilità totale"]
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
            <h3 class="text-5xl font-black tracking-tighter italic text-dark">${data.title}</h3>
            <p class="text-neutral-500 leading-relaxed font-medium">${data.description}</p>
            <ul class="space-y-3">
                ${data.features.map(f => `
                    <li class="flex items-center space-x-3 text-xs font-bold uppercase tracking-widest text-neutral-400">
                        <span class="w-1.5 h-1.5 bg-primary rounded-full"></span> 
                        <span>${f}</span>
                    </li>
                `).join('')}
            </ul>
            <div class="pt-8">
                <a href="#contatti" onclick="closeModal()" class="bg-primary text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest inline-block hover:bg-dark transition-all">Richiedi Info</a>
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
    lucide.createIcons();

    // Hero Reveal
    const revealItems = document.querySelectorAll('.reveal-item');
    revealItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('active');
        }, index * 150 + 200);
    });

    // Section Observer
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

    // Navbar scroll logic
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.querySelector('div').classList.add('nav-scrolled');
        } else {
            navbar.querySelector('div').classList.remove('nav-scrolled');
        }
    });

    // Gallery Slider
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

    // Modal click outside
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'modal-overlay') closeModal();
    });
});
