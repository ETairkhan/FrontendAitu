




 document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.nav-item');
  let currentIndex = 0;

 
  menuItems[currentIndex].focus();


  document.getElementById('navbarMenu').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {
    
      currentIndex = (currentIndex + 1) % menuItems.length;  
    } else if (event.key === 'ArrowUp') {
     
      currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; 
    }
    
 
    menuItems[currentIndex].focus();
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var carouselElement = document.getElementById('mercedesCarousel');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: 2000, 
        ride: 'carousel'  
    });

   
    document.querySelector('.carousel-control-next').addEventListener('click', function() {
        carousel.next();
    });

    
    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
        carousel.prev();
    });
});








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




document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Загрузка темы
  if (localStorage.getItem('theme') === 'dark') {
    html.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
  } else {
    toggle.textContent = '🌙';
  }

  // Переключение
  toggle.addEventListener('click', () => {
    if (html.getAttribute('data-theme') === 'dark') {
      html.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
      toggle.textContent = '🌙';
    } else {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggle.textContent = '☀️';
    }
  });
});
