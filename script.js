const ScrollReveal = require('scrollreveal')

document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'dark';

    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    const sr = ScrollReveal({
        origin: 'bottom',    
        distance: '50px',    
        duration: 1000,       
        delay: 200,           
        opacity: 0,           
        scale: 0.8,           
        easing: 'ease-out',   
        reset: false,         
    });

    sr.reveal('.section', { interval: 300 }); 
    sr.reveal('#intro', { interval: 300 });
    sr.reveal('#skills', { interval: 300 });
    sr.reveal('#projects', { interval: 300 });
    sr.reveal('#experience', { interval: 300 });
    sr.reveal('#contact', { interval: 300 });

    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 100 });
    sr.reveal('.experience-card', { interval: 100 });
});
