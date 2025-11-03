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

$(document).ready(function() {
    const $text = $('#practice1');
    const $button1 = $('#practice2');
    const $division = $('#rrr');
    function Addword() {
        const text1 = $('#practice1').val().trim();
        if (text1.length === 0) {
            alert("fff")
            return;
        }
        const $li = $('<li></li>').text(text1);
        $division.append($li);
        $text.val("");

    }
    $button1.on('click', Addword
    );
})
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

$(document).ready(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        $('body').addClass('light-mode').removeClass('bg-black text-white');
        $('#themeToggle').text('🌙 Dark Mode');
    }
    else {
        $('body').removeClass('light-mode').addClass('bg-black text-white');
        $('#themeToggle').text('☀️ Light Mode');
    }
    $('#themeToggle').on('click', function() {
        $('body').toggleClass('light-mode bg-black text-white');
        if ($('body').hasClass('light-mode')) {
            $(this).text('🌙 Dark Mode');
            localStorage.setItem('theme', 'light');
        } else {
            $(this).text('☀️ Light Mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
