$(document).ready(function() {
    const $newsContainer = $('#news .row.g-4');
    const searchableElements = '.date, h3, p.text-secondary';
    const highlightClass = 'highlight';
    const $searchInput = $('#highlightSearch');
    function removeHighlights() {
        $newsContainer.find(`span.${highlightClass}`).each(function() {
            $(this).contents().unwrap();
        });
    }
    function applyHighlighting() {
        const keyword = $searchInput.val().trim();
        removeHighlights();
        if (keyword.length === 0) {
            return;
        }

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
    $searchInput.on('input', applyHighlighting);
});
$(document).ready(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark-mode');
        $('#themeToggle').text('☀️ Light Mode');
    }
    $('#themeToggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            $(this).text('☀️ Light Mode');
        } else {
            localStorage.setItem('theme', 'light');
            $(this).text('🌙 Dark Mode');
        }
    });
});
