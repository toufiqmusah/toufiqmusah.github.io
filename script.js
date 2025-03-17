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

// Document ready function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize dark mode
    initDarkMode();
    
    // Add smooth scroll behavior for anchor links
    addSmoothScrolling();
    
    // Add hover effects to navigation buttons
    addNavHoverEffects();
    
    // Add click event to floating dinosaur
    initFloatingDino();
});

// Initialize floating dinosaur functionality
function initFloatingDino() {
    const floatingDinos = document.querySelectorAll('.floating-dino');
    floatingDinos.forEach(dino => {
        dino.addEventListener('click', () => {
            alert('Focus mode activated! 🦖');
        });
    });
}

// Dark mode functionality
function initDarkMode() {
    // Remove the old theme toggle button if it exists
    const oldToggle = document.querySelector('.theme-toggle');
    if (oldToggle) {
        oldToggle.remove();
    }
    
    // Create the new dark mode button
    const darkModeButton = document.createElement('button');
    darkModeButton.id = 'darkModeButton';
    darkModeButton.style.position = 'fixed';
    darkModeButton.style.top = '20px';
    darkModeButton.style.right = '30px';
    darkModeButton.style.padding = '10px 15px';
    darkModeButton.style.backgroundColor = '#333';
    darkModeButton.style.color = 'white';
    darkModeButton.style.border = 'none';
    darkModeButton.style.borderRadius = '5px';
    darkModeButton.style.cursor = 'pointer';
    darkModeButton.style.zIndex = '1000';
    darkModeButton.style.fontWeight = 'bold';
    darkModeButton.style.fontSize = '14px';
    darkModeButton.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    darkModeButton.style.transition = 'all 0.3s ease';
    
    // Check if dark mode is saved in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    // Set initial text and apply dark mode if needed
    darkModeButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeButton.style.backgroundColor = '#121212';
    }
    
    // Add click event
    darkModeButton.onclick = function() {
        // Toggle dark mode
        document.body.classList.toggle('dark-mode');
        
        // Update button text and style based on current state
        const isDarkMode = document.body.classList.contains('dark-mode');
        this.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        this.style.backgroundColor = isDarkMode ? '#121212' : '#333';
        
        // Save preference to localStorage
        localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
        
        console.log('Dark mode toggled:', isDarkMode);
    };
    
    // Add button to the body
    document.body.appendChild(darkModeButton);
    
    console.log('Dark mode button initialized');
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
