// This is a standalone dark mode implementation
(function() {
    // Function to toggle dark mode
    window.toggleDarkMode = function() {
        console.log('toggleDarkMode called');
        
        // Get the button and icon
        const button = document.getElementById('themeToggle');
        const icon = button.querySelector('i');
        
        // Toggle dark mode class
        document.body.classList.toggle('dark-mode');
        
        // Check current state
        const isDarkMode = document.body.classList.contains('dark-mode');
        console.log('Dark mode is now:', isDarkMode);
        
        // Update icon
        if (isDarkMode) {
            icon.className = 'fas fa-sun';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.className = 'fas fa-moon';
            localStorage.setItem('darkMode', 'disabled');
        }
    };
    
    // Function to apply saved theme
    function applyTheme() {
        console.log('Applying saved theme');
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
            const icon = document.querySelector('#themeToggle i');
            if (icon) {
                icon.className = 'fas fa-sun';
            }
        }
    }
    
    // Apply theme when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTheme);
    } else {
        applyTheme();
    }
})();
