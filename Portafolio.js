// Intersection Observer para animaciones de fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scroll para navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Manejo del formulario
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    if (nombre && email && mensaje) {
        alert('¡Gracias por tu mensaje, ' + nombre + '! Te contactaré pronto.');
        this.reset();
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});

// Agregar logos de lenguajes a las habilidades
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill-card ul li');
    const logos = {
        'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        'Express': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-original.svg',
        'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        'Pandas': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
        'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
        'Scikit-Learn': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg',
        'Power BI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powerbi/powerbi-original.svg',
        'Tableau': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg'
    };

    skills.forEach(skill => {
        const text = skill.textContent.trim();
        for (const key in logos) {
            if (text.includes(key)) {
                skill.innerHTML = `<img src="${logos[key]}" alt="${key} logo" style="width:24px; height:24px; vertical-align:middle; margin-right:8px;"> ${text}`;
                break;
            }
        }
    });
});
s