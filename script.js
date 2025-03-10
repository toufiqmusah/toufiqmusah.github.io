// Function to handle page switching
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Remove active class from all nav buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }

    // Add active class to the clicked button
    const clickedButton = document.querySelector(`button[onclick="showPage('${pageId}')"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    // Scroll to top when switching pages
    window.scrollTo(0, 0);
}

// Show home page by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    
    // Initialize dark mode
    initDarkMode();
    
    // Add smooth scroll behavior for anchor links
    addSmoothScrolling();
    
    // Add hover effects to navigation buttons
    addNavHoverEffects();
});

// Dark mode functionality
function initDarkMode() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const storedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply stored theme on load
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
}

// Add smooth scrolling for anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add hover effects to navigation buttons
function addNavHoverEffects() {
    const navButtons = document.querySelectorAll('.navigation-buttons button');
    
    navButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// Detect if user is idle and change the dinosaur status
let idleTimer;
const idleTime = 60000; // 1 minute

function resetIdleTimer() {
    clearTimeout(idleTimer);
    const dinoStatus = document.querySelector('.floating-dino span');
    if (dinoStatus) {
        dinoStatus.textContent = 'focusing';
    }
    
    idleTimer = setTimeout(() => {
        const dinoStatus = document.querySelector('.floating-dino span');
        if (dinoStatus) {
            dinoStatus.textContent = 'waiting...';
        }
    }, idleTime);
}

// Reset the idle timer on user activity
window.addEventListener('mousemove', resetIdleTimer);
window.addEventListener('keypress', resetIdleTimer);
window.addEventListener('scroll', resetIdleTimer);
window.addEventListener('click', resetIdleTimer);

// Initialize the idle timer
resetIdleTimer();
