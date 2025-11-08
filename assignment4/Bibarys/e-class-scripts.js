$(document).ready(function(){
    console.log("jQuery is ready!");
});
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('open');
    document.querySelectorAll('.accordion-content').forEach(el => {
        el.style.maxHeight = null;
        el.classList.remove('open');
        el.style.padding = '0 20px';
    });
    if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}

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

$(document).ready(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        $('body').addClass('light-mode').removeClass('bg-black text-white');
        $('#themeToggle').text('🌙 Dark Mode');
    } else {
        $('body').removeClass('light-mode').addClass('bg-black text-white');
        $('#themeToggle').text('☀️ Light Mode');
    }
    $('#themeToggle').on('click', function() {
        $('body').toggleClass('light-mode bg-black text-white');

        // Update button text
        if ($('body').hasClass('light-mode')) {
            $(this).text('🌙 Dark Mode');
            localStorage.setItem('theme', 'light');
        } else {
            $(this).text('☀️ Light Mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});