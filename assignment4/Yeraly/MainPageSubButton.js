
const openFormBtn = document.getElementById("openFormBtn");
const popupForm = document.getElementById("popupForm");
const overlay = document.getElementById("overlay");
const closeFormBtn = document.getElementById("closeFormBtn");
const subscriptionForm = document.getElementById("subscriptionForm");


openFormBtn.addEventListener("click", function () {
  popupForm.style.display = "block";
  overlay.style.display = "block";
});


closeFormBtn.addEventListener("click", function () {
  popupForm.style.display = "none";
  overlay.style.display = "none";
});


overlay.addEventListener("click", function () {
  popupForm.style.display = "none";
  overlay.style.display = "none";
});







subscriptionForm.addEventListener("submit", function (e) {
  e.preventDefault();



  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const model = document.getElementById("model").value;

  if (!name || !email || !model) {
    alert("Please fill all required fields.");
    return;
  }

  alert(`Thank you, ${name}! You subscribed for Mercedes-Benz ${model} news.`);
  popupForm.style.display = "none";
  overlay.style.display = "none";
  subscriptionForm.reset();
});



const changeColorBtn = document.getElementById('changeColorBtn');


let isGray = false; 


function changeBackgroundColor() {
  if (isGray) {
    document.body.style.backgroundColor = 'white'; 
  } else {
    document.body.style.backgroundColor = 'grey'; 
  }
  isGray = !isGray; 
}


changeColorBtn.addEventListener('click', changeBackgroundColor);





