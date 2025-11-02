// Task 1: Form Validation
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting and page redirection

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        alert('Пожалуйста, заполните все поля!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Неверный формат email!');
    } else if (!/^\+?\d{1,4}?[\s.-]?\(?\d{1,3}?\)?[\s.-]?\d{1,3}[\s.-]?\d{1,4}$/.test(phone)) {
        alert('Неверный формат телефона!');
    } else {
        alert('Форма успешно отправлена!');
    }
});

// Task 2: Accordion for FAQs
document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', function() {
        let collapse = this.getAttribute('data-bs-target');
        let content = document.querySelector(collapse);
        content.classList.toggle('collapse');
    });
});




// Task 5: Display Current Date and Time
function updateDateTime() {
    let now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString();
}

setInterval(updateDateTime, 1000);  // Updates every second


document.getElementById('change-bg-btn')?.addEventListener('click', function() {
        let randomColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        document.body.style.backgroundColor = randomColor;

        let textColor = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        document.body.style.color = textColor; });

const themeToggleButton = document.getElementById('theme-toggle');
const themeText = document.getElementById('theme-text');
const themeIcon = document.getElementById('theme-icon');

// Проверка, есть ли уже в localStorage сохранённый выбор темы
if(localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    themeText.textContent = 'Светлая тема';
    themeIcon.textContent = '🌞';
} else {
    document.body.classList.remove('dark-theme');
    themeText.textContent = 'Тёмная тема';
    themeIcon.textContent = '🌙';
}

// Слушатель события для кнопки переключения темы
themeToggleButton.addEventListener('click', () => {
    // Переключаем класс на body
    document.body.classList.toggle('dark-theme');

    // Проверяем текущий режим и обновляем текст и иконку
    if (document.body.classList.contains('dark-theme')) {
        themeText.textContent = 'Светлая тема';
        themeIcon.textContent = '🌞';
        localStorage.setItem('theme', 'dark'); // Сохраняем выбор в localStorage
    } else {
        themeText.textContent = 'Тёмная тема';
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Сохраняем выбор в localStorage
    }
});
