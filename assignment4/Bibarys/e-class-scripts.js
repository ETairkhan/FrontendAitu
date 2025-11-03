$(document).ready(function(){
    console.log("jQuery is ready!");
});
const colors = ["black" , "blue" , "red" , "green" , "yellow"];
let count = 0 ;
function changeColor() {
    const color = colors[count];
    count++;count%=colors.length;
    document.body.style.backgroundColor = color;
}
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
function validateForm() {
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmError").textContent = "";

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "") {
        document.getElementById("nameError").textContent = "Имя обязательно.";
        valid = false;
    }
    if (email === "") {
        document.getElementById("emailError").textContent = "Email обязателен.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Неверный формат email.";
        valid = false;
    }
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Минимум 6 символов.";
        valid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById("confirmError").textContent = "Пароли не совпадают.";
        valid = false;
    }
    return valid;
}

const quotes = [
    "Assignment 6",
    "Suiii",
    "Do you want to know what you want?",
    "Success is not the key to happiness. Happiness is the key to success."
];

const content = document.querySelector("#text_changer");
const button =document.querySelector("#last_btn");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    content.textContent = randomQuote;
});


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