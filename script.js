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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe contact cards for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.contact-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add loading animation to map
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

    // Add click-to-copy functionality for email and phone
    const contactValues = document.querySelectorAll('.contact-value');
    contactValues.forEach(value => {
        if (value.tagName === 'A' && (value.href.startsWith('mailto:') || value.href.startsWith('tel:'))) {
            value.style.cursor = 'pointer';
            value.title = 'Kliknij aby skopiować';
            
            value.addEventListener('click', async (e) => {
                if (e.ctrlKey || e.metaKey) {
                    e.preventDefault();
                    const text = value.textContent.trim();
                    try {
                        await navigator.clipboard.writeText(text);
                        showCopyNotification(value);
                    } catch (err) {
                        console.error('Błąd kopiowania:', err);
                    }
                }
            });
        }
    });
});

// Show copy notification
function showCopyNotification(element) {
    const notification = document.createElement('div');
    notification.textContent = 'Skopiowano!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #48bb78;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Print functionality (optional - can be triggered with Ctrl+P)
window.addEventListener('beforeprint', () => {
    document.body.style.background = 'white';
});

window.addEventListener('afterprint', () => {
    document.body.style.background = 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)';
});
