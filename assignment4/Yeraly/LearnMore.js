



document.getElementById('showTimeButton').addEventListener('click', function() {
      
      let currentTime = new Date().toLocaleTimeString();
      
      
      let timeDisplay = document.getElementById('timeDisplay');
      
      
      if (timeDisplay.textContent === "") {
        
        timeDisplay.textContent = currentTime;
      } else {
        
        timeDisplay.textContent = "";
      }
    });



 document.addEventListener('DOMContentLoaded', function () {
  const menuItems = document.querySelectorAll('.nav-item');
  let currentIndex = 0;

 
  menuItems[currentIndex].focus();


  document.getElementById('navbarMenu').addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown') {
    
      currentIndex = (currentIndex + 1) % menuItems.length; // 
    } else if (event.key === 'ArrowUp') {
     
      currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; 
    }
    
 
    menuItems[currentIndex].focus();
  });
});



  
  
function displayGreeting() {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Доброе утро!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Добрый день!";
  } else {
    greeting = "Добрый вечер!";
  }

 
  document.querySelector("#greeting").innerText = greeting;
}

window.onload = displayGreeting;

function toggleNavbarMenu() {
  const navbarMenu = document.getElementById("navbarMenu");
  navbarMenu.classList.toggle("active");
}

document.getElementById("navbarToggle").addEventListener("click", toggleNavbarMenu);





$(document).ready(function() {
  $('#enquiryForm').submit(function(event) {
    event.preventDefault(); 
    
    $('#submitButton').html('<i class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></i> Please wait...').prop('disabled', true);

    
    setTimeout(function() {
      
      $('#submitButton').html('Submit Enquiry').prop('disabled', false);

      
      alert("Form Submitted Successfully!"); 
    }, 2000); 
  });
});




