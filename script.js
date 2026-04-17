/* Pitza Explosive 3D - Scripts */

const eventData = {
    matrimoni: {
        title: "MATRIMONI",
        image: "./assets/gallery-2.jpg",
        description: "L'eccellenza per il tuo Sì. Un'esperienza gastronomica che unisce show cooking live e un'estetica impeccabile, perfettamente integrata in location di lusso.",
        features: ["Setup Luxury", "Show Cooking", "Menu Gourmet"]
    },
    aziendali: {
        title: "CORPORATE",
        image: "./assets/gallery-1.jpg",
        description: "Professionalità e sapore per i tuoi eventi business. Dai launch party ai team building, portiamo un format dinamico che favorisce la convivialità.",
        features: ["Servizio Rapido", "Brand Integration", "Format Dinamico"]
    },
    privati: {
        title: "PRIVATI",
        image: "./assets/gallery-3.jpeg",
        description: "La vera pizzeria napoletana a casa tua. Compleanni, lauree o feste tra amici: portiamo il calore e il profumo del forno a legna ovunque tu sia.",
        features: ["Setup Versatile", "Atmosfera Unica", "Flessibilità"]
    }
};

// Ingredient Icons (using Lucide names or custom shapes for demo)
const ingredients = [
    { type: 'leaf', color: '#10B981', label: 'basilico' },
    { type: 'circle', color: '#EF4444', label: 'pomodoro' },
    { type: 'square', color: '#F3F4F6', label: 'mozzarella' },
    { type: 'dot', color: '#FFFFFF', label: 'sale' },
    { type: 'box', color: '#FEF3C7', label: 'farina' }
];

function createIngredients() {
    const container = document.getElementById('explosion-layer');
    for (let i = 0; i < 20; i++) {
        const item = ingredients[i % ingredients.length];
        const div = document.createElement('div');
        div.className = 'ingredient';
        div.style.backgroundColor = item.color;
        div.style.borderRadius = item.type === 'circle' ? '50%' : '8px';
        div.style.width = Math.random() * 30 + 20 + 'px';
        div.style.height = div.style.width;
        
        // Random initial positions near center
        div.dataset.vx = (Math.random() - 0.5) * 2000; // velocity X
        div.dataset.vy = (Math.random() - 0.5) * 2000; // velocity Y
        div.dataset.vr = (Math.random() - 0.5) * 720;  // rotation speed
        
        container.appendChild(div);
    }
}

function updateExplosion() {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;
    const progress = Math.min(scrollY / (heroHeight * 1.5), 1);
    
    const pizza = document.querySelector('.main-pizza');
    if (pizza) {
        pizza.style.transform = `scale(${1 - progress}) rotate(${progress * 45}deg)`;
        pizza.style.opacity = 1 - (progress * 1.5);
    }

    const items = document.querySelectorAll('.ingredient');
    items.forEach(el => {
        const vx = parseFloat(el.dataset.vx);
        const vy = parseFloat(el.dataset.vy);
        const vr = parseFloat(el.dataset.vr);
        
        const tx = vx * progress;
        const ty = vy * progress;
        const rotation = vr * progress;
        
        el.style.opacity = progress > 0.05 ? (1 - progress * 0.8) : 0;
        el.style.transform = `translate3d(${window.innerWidth/2 + tx}px, ${window.innerHeight/2 + ty}px, 0) rotate(${rotation}deg)`;
    });
}

function openModal(type) {
    const data = eventData[type];
    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    content.innerHTML = `
        <div class="md:w-1/2 h-[300px] md:h-auto overflow-hidden">
            <img src="${data.image}" class="w-full h-full object-cover">
        </div>
        <div class="md:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-6 text-dark">
            <h3 class="text-5xl font-black tracking-tight">${data.title}</h3>
            <p class="text-gray-500 leading-relaxed font-medium">${data.description}</p>
            <ul class="space-y-2">
                ${data.features.map(f => `<li class="flex items-center space-x-2 font-bold text-sm"><span class="w-2 h-2 bg-primary rounded-full"></span> <span>${f}</span></li>`).join('')}
            </ul>
            <div class="pt-6"><a href="#contatti" onclick="closeModal()" class="bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest inline-block transition-transform hover:scale-105 shadow-xl shadow-primary/20">Richiedi Info</a></div>
        </div>
    `;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    createIngredients();
    window.addEventListener('scroll', () => {
        updateExplosion();
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) navbar.classList.add('shadow-sm'); else navbar.classList.remove('shadow-sm');
    });

    // Observer for Sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(s => observer.observe(s));

    // Gallery Logic
    const slider = document.getElementById('gallery-slider');
    document.getElementById('next')?.addEventListener('click', () => { slider.scrollLeft += 500; });
    document.getElementById('prev')?.addEventListener('click', () => { slider.scrollLeft -= 500; });
});
