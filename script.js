// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Función para cargar componentes
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.querySelector(selector).innerHTML = data;
                if (selector === '#main-header') {
                    activateMobileMenu();
                }
            })
            .catch(error => console.error(`Error loading ${url}:`, error));
    };

    // Cargar header y footer
    loadComponent('#main-header', 'nav.html');
    loadComponent('#main-footer', 'footer.html');
    
    // Función para el menú móvil
    const activateMobileMenu = () => {
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');

        if (menuToggle && nav) {
            menuToggle.addEventListener('click', function() {
                nav.classList.toggle('open');
                const isExpanded = nav.classList.contains('open');
                menuToggle.setAttribute('aria-expanded', isExpanded);
            });
        }
    };
});