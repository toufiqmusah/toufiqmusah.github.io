// Dark mode functionality
function toggleDarkMode() {
    // Toggle dark mode class on body
    document.body.classList.toggle('dark-mode');
    
    // Get current state
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Save preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update icon
    const icons = document.querySelectorAll('.theme-toggle i');
    icons.forEach(icon => {
        if (isDarkMode) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
}

// Apply saved theme when page loads
function applyTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        
        // Update icon
        const icons = document.querySelectorAll('.theme-toggle i');
        icons.forEach(icon => {
            icon.className = 'fas fa-sun';
        });
    }
}

// Run when page loads
document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
});
