function formatDateTime(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };
    return date.toLocaleString('ru-RU', options);
}
function displayDateTime() {
    const now = new Date();
    document.getElementById("date-time").textContent = formatDateTime(now);
    if(now.getHours() >= 12){
        document.getElementById("date-time").textContent = formatDateTime(now);
    }
}
displayDateTime();
setInterval(displayDateTime, 60000);

const popup = document.getElementById("popupOverlay");
function openPopup() {
    popup.style.display = "flex";
}
function closePopup() {
    popup.style.display = "none";
}
function outsideClick(e) {
    if (e.target === popup) {
        closePopup();
    }
}
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