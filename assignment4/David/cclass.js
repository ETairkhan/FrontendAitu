// Объекты и методы
// Глобальные переменные для звука
let sound = new Audio('notification.mp3'); // Убедитесь, что файл существует по этому пути
let isPlaying = false; // Флаг для проверки, проигрывается ли звук
let currentTime = 0; // Переменная для хранения текущего времени воспроизведения

// Массивы и циклы
// Пример данных автомобилей
const cars = [
    { model: "C-Class", price: "31 160 000 ₸", description: "A luxury sedan with top-tier features." },
    { model: "C-Class W204", price: "50 000 000 ₸", description: "The epitome of luxury and performance." },
    { model: "W204", price: "34 310 000 ₸", description: "A perfect blend of style and performance." },
    { model: "W206", price: "22 500 000 ₸", description: "A compact luxury hatchback." },
    { model: "W203", price: "29 800 000 ₸", description: "A sporty and versatile compact car." }
];

// Функция для фильтрации автомобилей по цене
// Higher-Order Functions
function filterCars(cars, minPrice, maxPrice) {
    return cars.filter(car => {
        const price = parseInt(car.price.replace(/\D/g, '')); // Убираем нечисловые символы
        return price >= minPrice && price <= maxPrice;
    });
}

// Отображение отфильтрованных автомобилей
function displayCars(filteredCars) {
    const carList = document.getElementById('car-list');
    carList.innerHTML = ''; // Очищаем предыдущие данные

    filteredCars.forEach(car => {
        const carItem = document.createElement('li');
        carItem.classList.add('list-group-item');
        carItem.innerHTML = `<strong>${car.model}</strong>: ${car.price} <br> ${car.description}`;
        carList.appendChild(carItem);
    });
}

// Обработчик кнопки фильтрации
document.getElementById('filterCarsBtn').addEventListener('click', function() {
    const minPrice = parseInt(document.getElementById('minPrice').value);
    const maxPrice = parseInt(document.getElementById('maxPrice').value);

    const filteredCars = filterCars(cars, minPrice, maxPrice);
    displayCars(filteredCars); // Показываем отфильтрованные автомобили
});

// Форма регистрации
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы и перезагрузку страницы

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    if (!name || !email || !phone) {
        showNotification('Пожалуйста, заполните все поля!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        showNotification('Неверный формат email!');
    } else if (!/^\+?\d{1,4}?[\s.-]?\(?\d{1,3}?\)?[\s.-]?\d{1,3}[\s.-]?\d{1,4}$/.test(phone)) {
        showNotification('Неверный формат телефона!');
    } else {
        showNotification('Форма успешно отправлена!');
    }
});

// Аккордеон для FAQ
document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', function() {
        let collapse = this.getAttribute('data-bs-target');
        let content = document.querySelector(collapse);
        content.classList.toggle('collapse');
    });
});

// Объекты автомобилей
const carModels = {
    "C-Class": {
        price: "31 160 000 ₸",
        description: "A luxury sedan with top-tier features.",
        showInfo: function() {
            alert(`Model: C-Class\nPrice: ${this.price}\nDescription: ${this.description}`);
        }
    },
    "S-Class": {
        price: "50 000 000 ₸",
        description: "The epitome of luxury and performance.",
        showInfo: function() {
            alert(`Model: S-Class\nPrice: ${this.price}\nDescription: ${this.description}`);
        }
    },
    "E-Class": {
        price: "34 310 000 ₸",
        description: "A perfect blend of style and performance.",
        showInfo: function() {
            alert(`Model: E-Class\nPrice: ${this.price}\nDescription: ${this.description}`);
        }
    }
};

// Добавление событий для кнопок
document.getElementById('show-c-class').addEventListener('click', () => carModels['C-Class'].showInfo());
document.getElementById('show-s-class').addEventListener('click', () => carModels['S-Class'].showInfo());
document.getElementById('show-e-class').addEventListener('click', () => carModels['E-Class'].showInfo());

// Воспроизведение звука
document.getElementById('play-sound-btn').addEventListener('click', function() {
    if (!isPlaying) {  // Если звук не проигрывается, включаем его
        sound.play();
        sound.currentTime = currentTime; // Начинаем с сохранённой позиции
        isPlaying = true;
        console.log('Звук уведомления проигран');
    }
});

// Остановка звука
document.getElementById('stop-sound-btn').addEventListener('click', function() {
    sound.pause();  // Приостанавливаем звук
    currentTime = sound.currentTime;  // Сохраняем текущую позицию в звуке
    isPlaying = false;
    console.log('Звук приостановлен');
});

// Возобновление звука
document.getElementById('resume-sound-btn').addEventListener('click', function() {
    if (!isPlaying) {
        sound.play();  // Включаем звук снова с места приостановки
        sound.currentTime = currentTime;
        isPlaying = true;
        console.log('Звук возобновлён');
    }
});

// Слайдер изображений
let currentIndex = 0;
const images = document.querySelectorAll('.car-slide');
const totalImages = images.length;

if (totalImages > 0) {
    images[currentIndex].classList.add('active');
}

// Функция для переключения изображений
function showNextImage() {
    if (totalImages === 0) return; // Проверка на наличие изображений
    // Удаляем класс active у текущего изображения
    images[currentIndex].classList.remove('active');
    // Увеличиваем индекс, возвращаемся к 0, если достигли конца
    currentIndex = (currentIndex + 1) % totalImages;
    // Добавляем класс active к следующему изображению
    images[currentIndex].classList.add('active');
}
// Показывать следующее изображение каждые 4 секунды
setInterval(showNextImage, 4000);

// Отображение текущей даты и времени
function updateDateTime() {
    let now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000); // Обновление каждую секунду

// Обработка нажатия клавиши Пробел
window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        document.body.style.backgroundColor = "red"
    }
});

// Новые функции
// task 7: Уведомления при загрузке страницы
// Функция для отображения уведомлений
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.opacity = '1';

    // Скрыть уведомление через 3 секунды
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.style.display = 'none', 1000);
    }, 3000);
}

// Показать приветствие при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    showNotification("Добро пожаловать");
});

// Задача 8: Копирование текста (все автомобили)
document.getElementById('copy-all-cars-btn').addEventListener('click', async () => {
    let allCarsText = '';

    // Собираем информацию обо всех автомобилях
    cars.forEach(car => {
        allCarsText += `${car.model} - ${car.price} - ${car.description}\n\n`;
    });

    try {
        await navigator.clipboard.writeText(allCarsText);
        alert('Все данные о машинах скопированы!');
    } catch (err) {
        alert('Ошибка копирования!');
    }
});


// Задача 9: Ленивая загрузка изображений
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.lazy-load');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src'); // Загружаем изображение
                img.style.opacity = 1; // Плавное появление
                observer.unobserve(img);
            }
        });
    }, { threshold: 1 });

    images.forEach(img => observer.observe(img));
});
