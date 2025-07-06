
// WhatsApp functionality
const whatsappNumber = "+2349150713490";

function openWhatsApp(service) {
    const message = `Hi! I'm interested in your ${service} service. Can you tell me more?`;
    const url = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.service-card, .feature-card, .testimonial-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Add staggered animation delays
function addStaggeredAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    const featureCards = document.querySelectorAll('.feature-card');
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    featureCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
}

// Smooth scrolling for any internal links (if added later)
function initSmoothScrolling() {
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
}

// Add hover effects to service cards
function addHoverEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addScrollAnimations();
    addStaggeredAnimations();
    initSmoothScrolling();
    addHoverEffects();
    
    // Add loading animation to body
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-section');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add click tracking for analytics (optional)
function trackClick(element, action) {
    // This can be connected to Google Analytics or other tracking services
    console.log(`User clicked: ${action} on ${element}`);
}

// Add click event listeners to buttons for tracking
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.trim();
            trackClick('button', action);
        });
    });
});
