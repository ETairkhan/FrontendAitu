function formatDateTime(date) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };
    return date.toLocaleString('ru-RU', options);
}
function displayDateTime() {
    const now = new Date();
    document.getElementById("date-time").textContent = formatDateTime(now);
    if(now.getHours() >= 12){
        document.getElementById("date-time").textContent = formatDateTime(now);
    }
}
displayDateTime();
setInterval(displayDateTime, 60000);

const popup = document.getElementById("popupOverlay");
function openPopup() {
    popup.style.display = "flex";
}
function closePopup() {
    popup.style.display = "none";
}
function outsideClick(e) {
    if (e.target === popup) {
        closePopup();
    }
}