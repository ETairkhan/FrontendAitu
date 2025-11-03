
const accordions = document.querySelectorAll('.accordion-header');


accordions.forEach(acc => {
    acc.addEventListener('click', function() {
        
        const content = this.nextElementSibling;

       
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
         
            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = "none";
            });
            content.style.display = "block";
        }
    });
});


$(document).ready(function() {
  let subscribers = 0; 
  const updateCount = () => {
    const increment = Math.floor(Math.random() * (10 - 5 + 1)) + 5; 
    subscribers += increment;
    $('#subscribersCount p').text(`+${subscribers} people have subscribed`);
  };



  
  setInterval(updateCount, Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000); 


  $('#subscriptionForm').submit(function(event) {
    event.preventDefault(); 
    alert('Thank you for subscribing!');
    $('#overlay').fadeOut();
    $('#popupForm').fadeOut();
  });
});



function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  
  body.classList.toggle("dark-mode");

  
  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = "🌙";  
    localStorage.setItem("theme", "light");
  }
}


function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const themeToggle = document.getElementById("theme-toggle");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggle) {
      themeToggle.innerHTML = "☀️";
    }
  }
}

function init() {
  
  applySavedTheme();


  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

document.addEventListener('DOMContentLoaded', init);

