// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to map
document.addEventListener('DOMContentLoaded', () => {
    const mapWrapper = document.querySelector('.map-wrapper');
    if (mapWrapper) {
        const iframe = mapWrapper.querySelector('iframe');
        if (iframe) {
            iframe.addEventListener('load', () => {
                mapWrapper.style.opacity = '1';
            });
            mapWrapper.style.opacity = '0.5';
            mapWrapper.style.transition = 'opacity 0.6s ease';
        }
    }
});

// Print functionality (optional - can be triggered with Ctrl+P)
window.addEventListener('beforeprint', () => {
    document.body.style.background = 'white';
});

window.addEventListener('afterprint', () => {
    document.body.style.background = 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)';
});
