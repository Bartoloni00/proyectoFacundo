// cambiar imagen
const open = document.getElementById('open')
const close = document.getElementById('close')
const img = document.getElementById('img')

open.addEventListener('click', () => {
    img.src = 'img/abierto.jpg';
});

close.addEventListener('click', () => {
    img.src = 'img/cerrado.jpeg';
});

// Actualizar 
const hour = document.getElementById('hour')
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    hour.textContent = `${hours}:${minutes}HS`;
}

// Update time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();