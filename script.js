/* Pitza Explosive 3D Assets - Scripts */

const eventData = {
    matrimoni: {
        title: "MATRIMONI",
        image: "./assets/gallery-2.jpg",
        description: "Il corner pizza perfetto per il tuo giorno più bello. Eleganza e sapore autentico per conquistare i tuoi ospiti.",
        features: ["Setup Luxury", "Show Cooking Live", "Ingredienti Gourmet"]
    },
    aziendali: {
        title: "CORPORATE",
        image: "./assets/gallery-1.jpg",
        description: "Format dinamico e professionale per meeting, lanci di prodotto e team building d'impatto.",
        features: ["Velocità di Servizio", "Brand Identity", "Pizza Live Show"]
    },
    privati: {
        title: "PRIVATI",
        image: "./assets/gallery-3.jpeg",
        description: "Portiamo la pizzeria napoletana a casa tua. Compleanni e feste private con un tocco di classe.",
        features: ["Setup Versatile", "Pizzeria Mobile", "Flessibilità"]
    }
};

// Ingredient background management
function createIngredients() {
    const container = document.getElementById('ingredients-bg');
    const items = [
        { src: './3d/mozzarella.png', vx: 0.1, vy: 0.8 },
        { src: './3d/pomodoro.png', vx: -0.15, vy: 0.6 },
        { src: './3d/basilico.png', vx: 0.2, vy: 1.0 },
        { src: './3d/mozzarella.png', vx: -0.1, vy: 0.7 },
        { src: './3d/basilico.png', vx: 0.05, vy: 0.9 }
    ];

    items.forEach((item, i) => {
        const img = document.createElement('img');
        img.src = item.src;
        img.className = 'floating-item';
        img.style.left = (20 * i + 10) + '%';
        img.style.top = '-200px';
        img.style.width = (Math.random() * 100 + 150) + 'px';
        img.dataset.vy = item.vy;
        img.dataset.vx = item.vx;
        container.appendChild(img);
    });
}

function updateExplosion() {
    const scrollY = window.scrollY;
    const innerH = window.innerHeight;
    const progress = Math.min(scrollY / innerH, 1);
    const totalH = document.documentElement.scrollHeight - innerH;
    const globalProgress = scrollY / totalH;

    // Pizza Morphing
    const whole = document.getElementById('pizza-whole');
    const exploded = document.getElementById('pizza-exploded');
    
    if (whole && exploded) {
        whole.style.opacity = 1 - (progress * 1.5);
        whole.style.transform = `scale(${1 - progress * 0.5}) rotate(${progress * 20}deg)`;
        
        exploded.style.opacity = progress;
        exploded.style.transform = `scale(${0.8 + progress * 0.5}) rotate(${progress * -10}deg)`;
    }

    // Background Ingredients falling
    const items = document.querySelectorAll('.floating-item');
    items.forEach((item, i) => {
        const vy = parseFloat(item.dataset.vy);
        const vx = parseFloat(item.dataset.vx);
        
        // Appear after initial scroll
        item.style.opacity = globalProgress > 0.1 ? 0.3 : 0;
        
        const yPos = (scrollY * vy) % (innerH + 400) - 200;
        const xPos = scrollY * vx;
        
        item.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) rotate(${scrollY * 0.1 * (i+1)}deg)`;
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
            <div class="pt-6">
                <a href="#contatti" onclick="closeModal()" class="bg-primary text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest inline-block transition-transform hover:scale-105">Richiedi Preventivo</a>
            </div>
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
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) nav.classList.add('shadow-sm'); else nav.classList.remove('shadow-sm');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('section').forEach(s => observer.observe(s));

    const slider = document.getElementById('gallery-slider');
    document.getElementById('next')?.addEventListener('click', () => { slider.scrollLeft += 500; });
    document.getElementById('prev')?.addEventListener('click', () => { slider.scrollLeft -= 500; });
});
