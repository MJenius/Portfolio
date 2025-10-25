// Main JavaScript file for Mevin Jose Portfolio
// Handles all interactive functionality across pages

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollReveal();
    initTypewriter();
    initProjectCarousel();
    initProjectFiltering();
    initSkillsRadarChart();
    initContactForm();
    initMobileMenu();

    // Page-specific initializations
    const currentPage = getCurrentPage();
    if (currentPage === 'index') {
        initIndexPage();
    } else if (currentPage === 'projects') {
        initProjectsPage();
    } else if (currentPage === 'skills') {
        initSkillsPage();
    } else if (currentPage === 'contact') {
        initContactPage();
    }
});

// Utility Functions
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('projects.html')) return 'projects';
    if (path.includes('skills.html')) return 'skills';
    if (path.includes('contact.html')) return 'contact';
    return 'index';
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Re-apply on resize (debounced)
window.addEventListener('resize', debounce(() => {
    adjustHeroPadding();
}, 150));

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Typewriter Effect for Hero Text
function initTypewriter() {
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const typed = new Typed('#typed-text', {
            strings: [
                'AI/ML Developer',
                'Software Engineer',
                'Full-Stack Developer',
                'Data Analyst',
                'Problem Solver',
                'Machine Learning Enthusiast'
            ],
            typeSpeed: 80,
            backSpeed: 40,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            showCursor: false
        });
    }
}

// Project Carousel (Index Page)
function initProjectCarousel() {
    const carousel = document.getElementById('featured-projects');
    if (carousel) {
        new Splide('#featured-projects', {
            type: 'loop',
            perPage: 1,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            breakpoints: {
                768: {
                    perPage: 1,
                    gap: '1rem'
                }
            }
        }).mount();
    }
}

// Project Filtering (Projects Page)
function initProjectFiltering() {
    const searchInput = document.getElementById('project-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!searchInput || !filterButtons.length) return;
    
    let currentFilter = 'all';
    
    // Filter button functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            currentFilter = button.dataset.filter;
            filterProjects();
        });
    });
    
    // Search functionality
    const debouncedSearch = debounce(() => {
        filterProjects();
    }, 300);
    
    searchInput.addEventListener('input', debouncedSearch);
    
    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        
        projectCards.forEach(card => {
            const category = card.dataset.category;
            const title = card.dataset.title.toLowerCase();
            
            const matchesFilter = currentFilter === 'all' || category === currentFilter;
            const matchesSearch = searchTerm === '' || title.includes(searchTerm);
            
            if (matchesFilter && matchesSearch) {
                card.style.display = 'block';
                anime({
                    targets: card,
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            } else {
                anime({
                    targets: card,
                    opacity: [1, 0],
                    translateY: [0, -20],
                    duration: 200,
                    easing: 'easeInQuad',
                    complete: () => {
                        card.style.display = 'none';
                    }
                });
            }
        });
    }
}

// Skills Radar Chart (Skills Page)
function initSkillsRadarChart() {
    const chartContainer = document.getElementById('radar-chart');
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    
    const option = {
        backgroundColor: 'transparent',
        radar: {
            indicator: [
                { name: 'Python', max: 100 },
                { name: 'JavaScript', max: 100 },
                { name: 'Machine Learning', max: 100 },
                { name: 'React', max: 100 },
                { name: 'Node.js', max: 100 },
                { name: 'Databases', max: 100 },
                { name: 'AI/ML', max: 100 },
                { name: 'Web Development', max: 100 }
            ],
            shape: 'polygon',
            splitNumber: 4,
            axisName: {
                color: '#f8fafc',
                fontSize: 12,
                fontFamily: 'Inter'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(59, 130, 246, 0.2)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(59, 130, 246, 0.3)'
                }
            }
        },
        series: [{
            name: 'Skills',
            type: 'radar',
            data: [{
                value: [95, 90, 90, 90, 85, 80, 90, 90],
                name: 'Current Skills',
                areaStyle: {
                    color: 'rgba(59, 130, 246, 0.2)'
                },
                lineStyle: {
                    color: '#3b82f6',
                    width: 2
                },
                itemStyle: {
                    color: '#3b82f6',
                    borderColor: '#1e293b',
                    borderWidth: 2
                }
            }],
            animationDuration: 2000,
            animationEasing: 'cubicOut'
        }]
    };
    
    chart.setOption(option);
    
    // Responsive chart
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// Contact Form (Contact Page) - Simplified to mailto link
function initContactForm() {
    // Contact form functionality has been simplified to use mailto links
    // This function now serves as a placeholder for any future contact-related features
    console.log('Contact form functionality: Using mailto links for direct email communication');
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (!mobileMenuBtn) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        // Simple mobile menu toggle (you can expand this)
        alert('Mobile menu functionality - can be expanded with a dropdown menu');
    });
}

// Modal Functions (Projects Page)
function openModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Animate modal content
        const modalContent = modal.querySelector('.modal-content');
        anime({
            targets: modalContent,
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(`modal-${modalId}`);
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        
        anime({
            targets: modalContent,
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInQuad',
            complete: () => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        const modalId = e.target.id.replace('modal-', '');
        closeModal(modalId);
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            const modalId = activeModal.id.replace('modal-', '');
            closeModal(modalId);
        }
    }
});

// Page-specific initialization functions
function initIndexPage() {
    // Additional index page specific functionality
    console.log('Index page initialized');
}

function initProjectsPage() {
    // Additional projects page specific functionality
    console.log('Projects page initialized');
}

function initSkillsPage() {
    // Animate progress bars when they come into view
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                
                anime({
                    targets: entry.target,
                    width: width,
                    duration: 1500,
                    easing: 'easeOutQuad',
                    delay: 200
                });
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

function initContactPage() {
    // Additional contact page specific functionality
    console.log('Contact page initialized');
}

// Smooth scrolling for anchor links
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

// Add loading animation for page transitions
window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.7';
});

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
if (document.querySelectorAll('img[data-src]').length > 0) {
    initLazyLoading();
}

// Error handling for missing elements
window.addEventListener('error', (e) => {
    console.warn('Portfolio warning:', e.message);
});

// Console welcome message
console.log('%c👋 Hello! Welcome to Mevin Jose\'s Portfolio', 'color: #3b82f6; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with modern web technologies and lots of ☕', 'color: #64748b; font-size: 12px;');
console.log('%cFeel free to explore the code and reach out for collaboration!', 'color: #10b981; font-size: 12px;');