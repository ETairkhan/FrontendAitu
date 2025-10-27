
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

  
  $('#openFormBtn').click(function() {
    $('#overlay').fadeIn();
    $('#popupForm').fadeIn();
  });

  
  $('#closeFormBtn').click(function() {
    $('#overlay').fadeOut();
    $('#popupForm').fadeOut();
  });

 
  $('#subscriptionForm').submit(function(event) {
    event.preventDefault(); 
    alert('Thank you for subscribing!');
    $('#overlay').fadeOut();
    $('#popupForm').fadeOut();
  });
});
