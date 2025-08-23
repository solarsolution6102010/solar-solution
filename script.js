function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Remove active class from all nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Show selected page
    document.getElementById(pageId).classList.add('active');

    // Add active class to clicked nav item
    event.target.classList.add('active');
}

// Create more floating panels dynamically
function createFloatingPanels() {
    const container = document.querySelector('.floating-panels');
    for (let i = 0; i < 10; i++) {
        const panel = document.createElement('div');
        panel.className = 'floating-panel';
        panel.style.left = Math.random() * 100 + '%';
        panel.style.animationDelay = Math.random() * 15 + 's';
        panel.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(panel);
    }
}

// Initialize floating panels
createFloatingPanels();

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
    this.reset();
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Analytics tracking could go here
    });
});

// Add some interactive animations
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect for hero sections
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelectorAll('.hero-section');
    
    parallax.forEach(section => {
        const speed = 0.5;
        section.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
