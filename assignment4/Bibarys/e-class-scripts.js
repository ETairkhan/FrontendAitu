// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Function to toggle theme
    function toggleTheme() {
        document.documentElement.setAttribute('data-theme', 
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
        
        // Update button text/icon
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        themeToggleBtn.innerHTML = isDark ? '☀️ <span class="visually-hidden">Switch to light mode</span>' : 
                                          '🌙 <span class="visually-hidden">Switch to dark mode</span>';
        themeToggleBtn.setAttribute('aria-pressed', isDark);
        
        // Save preference to localStorage
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }

    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        const isDark = savedTheme === 'dark';
        themeToggleBtn.innerHTML = isDark ? '☀️ <span class="visually-hidden">Switch to light mode</span>' : 
                                          '🌙 <span class="visually-hidden">Switch to dark mode</span>';
        themeToggleBtn.setAttribute('aria-pressed', isDark);
    } else {
        const isDark = prefersDarkScheme.matches;
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        themeToggleBtn.innerHTML = isDark ? '☀️ <span class="visually-hidden">Switch to light mode</span>' : 
                                          '🌙 <span class="visually-hidden">Switch to dark mode</span>';
        themeToggleBtn.setAttribute('aria-pressed', isDark);
    }

    // Add click handler
    themeToggleBtn.addEventListener('click', toggleTheme);
});


$(document).ready(function() {
    const $bar = $('.sp-bar');
    const $label = $('.sp-label');
    $(window).on('scroll', function() {
        const scrollTop = $(document).scrollTop();
        const scrollHeight = $(document).height() - $(window).height();
        const progress = (scrollTop / scrollHeight) * 100;
        $bar.css('transform', `scaleX(${progress / 100})`);
        $label.text(`${Math.round(progress)}%`);
    });
});

