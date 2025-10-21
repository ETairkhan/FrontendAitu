//Objects and Methods
// Глобальные переменные для звука
let sound = new Audio('notification.mp3'); // Убедитесь, что файл существует по этому пути
let isPlaying = false; // Флаг для проверки, проигрывается ли звук
let currentTime = 0; // Переменная для хранения текущего времени воспроизведения


//Arrays and Loops
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

// Form Validation
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы и перезагрузку страницы

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

// Accordion for FAQs
document.querySelectorAll('.accordion-button').forEach((button) => {
    button.addEventListener('click', function() {
        let collapse = this.getAttribute('data-bs-target');
        let content = document.querySelector(collapse);
        content.classList.toggle('collapse');
    });
});


//Arrays and Loops
// Пример данных автомобилей
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

// Task 4: Play Sounds when Button is Clicked
//Play Sounds
document.getElementById('play-sound-btn').addEventListener('click', function() {
    if (!isPlaying) {  // Если звук не проигрывается, включаем его
        sound.play();
        sound.currentTime = currentTime; // Начинаем с сохранённой позиции
        isPlaying = true;
        console.log('Звук уведомления проигран');
    }
});

// Stop Sound: Останавливаем текущий проигрываемый звук
document.getElementById('stop-sound-btn').addEventListener('click', function() {
    sound.pause();  // Приостанавливаем звук
    currentTime = sound.currentTime;  // Сохраняем текущую позицию в звуке
    isPlaying = false;
    console.log('Звук приостановлен');
});

// Resume Sound: Возобновляем звук с места приостановки
document.getElementById('resume-sound-btn').addEventListener('click', function() {
    if (!isPlaying) {
        sound.play();  // Включаем звук снова с места приостановки
        sound.currentTime = currentTime;
        isPlaying = true;
        console.log('Звук возобновлён');
    }
});
//Animations
// Слайдер изображений
let currentIndex = 0;
const images = document.querySelectorAll('.car-slide');
const totalImages = images.length;
// Убедитесь, что первое изображение активно при загрузке
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

//Display Current Date and Time
function updateDateTime() {
    let now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString();
}
setInterval(updateDateTime, 1000); // Обновление каждую секунду