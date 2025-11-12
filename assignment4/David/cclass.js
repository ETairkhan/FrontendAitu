// Глобальные переменные для звука
let sound = new Audio('notification.mp3');
let isPlaying = false;
let currentTime = 0;

// Массив автомобилей с изображениями
const cars = [
    { model: "C 180", price: "31 160 000 ₸", description: "A luxury sedan with top-tier features.", image: "img/c180.jpg" },
    { model: "C 200", price: "34 310 000 ₸", description: "The epitome of luxury and performance.", image: "img/c200.jpg" },
    { model: "AMG C 43 4MATIC", price: "50 000 000 ₸", description: "A perfect blend of style and performance.", image: "img/amg43.jpg" },
    { model: "W206", price: "22 500 000 ₸", description: "A compact luxury hatchback.", image: "img/c-ext1.jpg" },
    { model: "W203", price: "29 800 000 ₸", description: "A sporty and versatile compact car.", image: "img/c-ext2.jpg" }
];

// Функция фильтрации
function filterCars(cars, minPrice, maxPrice) {
    return cars.filter(car => {
        const price = parseInt(car.price.replace(/\D/g, ''));
        return price >= minPrice && price <= maxPrice;
    });
}

// Отображение отфильтрованных автомобилей с карточками
function displayCars(filteredCars) {
    const container = document.getElementById('filtered-cars-container');
    container.innerHTML = ''; // Полностью очищаем

    if (filteredCars.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center text-muted py-5">
                <p class="fs-5">Нет автомобилей в выбранном диапазоне цен.</p>
            </div>`;
        return;
    }

    filteredCars.forEach((car, index) => {
        const col = document.createElement('div');
        col.className = 'col-md-4 col-sm-6';

        col.innerHTML = `
            <div class="card shadow-sm border-0 h-100 hover-card" style="opacity: 0; transform: translateY(20px);">
                <img src="${car.image}" class="card-img-top" alt="${car.model}" style="height: 200px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${car.model}</h5>
                    <p class="text-primary fw-semibold mt-auto">${car.price}</p>
                    <p class="text-muted small">${car.description}</p>
                </div>
            </div>
        `;

        container.appendChild(col);

        // Анимация появления с задержкой
        setTimeout(() => {
            col.querySelector('.hover-card').style.opacity = '1';
            col.querySelector('.hover-card').style.transform = 'translateY(0)';
        }, 100 + (index * 150));
    });
}

// === КНОПКА FILTER — ЕДИНСТВЕННЫЙ ТРИГГЕР ===
document.getElementById('filterCarsBtn').addEventListener('click', function() {
    const minPrice = parseInt(document.getElementById('minPrice').value) || 0;
    const maxPrice = parseInt(document.getElementById('maxPrice').value) || Infinity;

    if (minPrice > maxPrice) {
        showNotification('Минимальная цена не может быть больше максимальной!');
        return;
    }

    const filteredCars = filterCars(cars, minPrice, maxPrice);
    displayCars(filteredCars);
});

// Форма
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let phone = document.getElementById('phone').value.trim();

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

// Объекты моделей
const carModels = {
    "C-Class": { price: "31 160 000 ₸", description: "A luxury sedan with top-tier features.", showInfo: function() { alert(`Model: C-Class\nPrice: ${this.price}\nDescription: ${this.description}`); } },
    "S-Class": { price: "50 000 000 ₸", description: "The epitome of luxury and performance.", showInfo: function() { alert(`Model: S-Class\nPrice: ${this.price}\nDescription: ${this.description}`); } },
    "E-Class": { price: "34 310 000 ₸", description: "A perfect blend of style and performance.", showInfo: function() { alert(`Model: E-Class\nPrice: ${this.price}\nDescription: ${this.description}`); } }
};

document.getElementById('show-c-class').addEventListener('click', () => carModels['C-Class'].showInfo());
document.getElementById('show-s-class').addEventListener('click', () => carModels['S-Class'].showInfo());
document.getElementById('show-e-class').addEventListener('click', () => carModels['E-Class'].showInfo());

// Звук
document.getElementById('play-sound-btn').addEventListener('click', () => { if (!isPlaying) { sound.play(); sound.currentTime = currentTime; isPlaying = true; } });
document.getElementById('stop-sound-btn').addEventListener('click', () => { sound.pause(); currentTime = sound.currentTime; isPlaying = false; });
document.getElementById('resume-sound-btn').addEventListener('click', () => { if (!isPlaying) { sound.play(); sound.currentTime = currentTime; isPlaying = true; } });

// Время
function updateDateTime() {
    let now = new Date();
    document.getElementById('date-time').innerText = now.toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' });
}
setInterval(updateDateTime, 1000);

// Пробел → красный фон
window.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        document.body.style.backgroundColor = "red";
        setTimeout(() => document.body.style.backgroundColor = "", 500);
    }
});

// Уведомление
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    notification.style.opacity = '1';
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.style.display = 'none', 1000);
    }, 3000);
}

// Копирование всех авто
document.getElementById('copy-all-cars-btn').addEventListener('click', async () => {
    let text = cars.map(car => `${car.model} - ${car.price} - ${car.description}`).join('\n\n');
    try {
        await navigator.clipboard.writeText(text);
        showNotification('Данные скопированы в буфер обмена!');
    } catch (err) {
        showNotification('Ошибка копирования!');
    }
});

// === БЕЗ АВТОФИЛЬТРА ПРИ ЗАГРУЗКЕ ===
document.addEventListener('DOMContentLoaded', () => {
    updateDateTime(); // Только время
    // НИКАКОГО filterCarsBtn.click()!
});
async function getRate() {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    const data = await res.json();
    const kzt = data.rates.KZT;
    document.getElementById('rate').innerText = kzt.toFixed(2);
}
getRate();