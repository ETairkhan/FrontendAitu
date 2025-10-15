
function updateDateTime() {
  const now = new Date();
  
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  };
  
  
  const formattedDateTime = now.toLocaleString('en-US', options);
  
  
  document.getElementById('date-time').textContent = formattedDateTime;
}


setInterval(updateDateTime, 1000);


updateDateTime();




