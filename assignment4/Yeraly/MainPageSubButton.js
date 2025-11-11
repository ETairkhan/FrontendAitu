
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    // Применяем сохраненную тему при загрузке
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
        themeToggle.setAttribute('aria-pressed', 'true');
    } else {
        document.body.classList.remove('dark');
        themeToggle.textContent = '🌙';
        themeToggle.setAttribute('aria-pressed', 'false');
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.textContent = '☀️';
            themeToggle.setAttribute('aria-pressed', 'true');
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent = '🌙';
            themeToggle.setAttribute('aria-pressed', 'false');
        }
    });
});
