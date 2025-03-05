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
});
