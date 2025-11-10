function toggleTheme() {
    console.log("Toggle theme function called");
    
    const body = document.body;
    const themeToggle = document.getElementById("theme-toggle");
    
    if (!themeToggle) {
        console.error("Theme toggle button not found!");
        return;
    }
    
    // Toggle dark mode
    body.classList.toggle("dark-mode");
    
    // Update button icon and save preference
    if (body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = "☀️";
        localStorage.setItem("theme", "dark");
        console.log("Dark mode activated");
    } else {
        themeToggle.innerHTML = "🌙";
        localStorage.setItem("theme", "light");
        console.log("Light mode activated");
    }
}

// Apply saved theme on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    const themeToggle = document.getElementById("theme-toggle");
    
    console.log("Applying saved theme:", savedTheme);
    
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        if (themeToggle) {
            themeToggle.innerHTML = "☀️";
        }
    }
}

// Initialize everything
function init() {
    console.log("Initializing page...");
    
    // Apply saved theme
    applySavedTheme();
    
    // Add event listener to theme toggle button
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
        console.log("Theme toggle button found, adding event listener");
        themeToggle.addEventListener("click", toggleTheme);
    } else {
        console.error("Theme toggle button not found!");
    }
  }



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
    
      currentIndex = (currentIndex + 1) % menuItems.length;  
    } else if (event.key === 'ArrowUp') {
     
      currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length; 
    }
    
 
    menuItems[currentIndex].focus();
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




  
  






