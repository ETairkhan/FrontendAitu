document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark', savedTheme === 'dark');
        themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
    }

    // Theme toggle click handler
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        this.innerHTML = isDark ? '☀️' : '🌙';
    });
});