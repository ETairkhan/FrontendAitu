$(document).ready(function() {
    const $newsContainer = $('#news .row.g-4');
    const searchableElements = '.date, h3, p.text-secondary';
    const highlightClass = 'highlight';
    const $searchInput = $('#highlightSearch');

    // 🧠 Restore saved search term from localStorage
    const savedKeyword = localStorage.getItem('newsSearch');
    if (savedKeyword) {
        $searchInput.val(savedKeyword);
    }

    function removeHighlights() {
        $newsContainer.find(`span.${highlightClass}`).each(function() {
            $(this).contents().unwrap();
        });
    }

    function applyHighlighting() {
        const keyword = $searchInput.val().trim();

        // 💾 Save keyword to localStorage
        localStorage.setItem('newsSearch', keyword);

        removeHighlights();

        if (keyword.length === 0) return;

        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp('(' + escapedKeyword + ')', 'gi');

        $newsContainer.find(searchableElements).each(function() {
            const $this = $(this);
            const originalHtml = $this.html();
            const newHtml = originalHtml.replace(regex, `<span class="${highlightClass}">$1</span>`);
            if (newHtml !== originalHtml) {
                $this.html(newHtml);
            }
        });
    }

    // 🔍 Apply highlighting live
    $searchInput.on('input', applyHighlighting);

    // 🚀 Re-apply highlight after reload if keyword existed
    applyHighlighting();
});
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
async function getWeather() {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.17&longitude=71.43&current_weather=true');
    const data = await res.json();
    const w = data.current_weather;
    document.getElementById('weatherInfo').innerHTML =
        `🌤 ${w.temperature}°C, wind ${w.windspeed} km/h`;
}
getWeather();