const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = ${days}d ${hours}h ${minutes}m ${seconds}s;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Happy New Year!";
        document.querySelector('.fireworks').style.display = 'none'; // Hide fireworks after countdown
        document.querySelector('.name').innerHTML = "Wishes from Banisetti Syam Chand!";
        document.querySelector('.name').style.fontSize = '3em';
        document.querySelector('.name').style.color = '#FFD700'; // Change text color
        document.querySelector('.name').style.textShadow = '2px 2px #FF4500'; // Add shadow effect
        document.querySelector('.name').style.opacity = '1'; // Make it visible
        document.querySelector('.name').style.animation = 'none'; // Stop fading effect
        document.querySelector('.name').style.transition = 'color .5s ease'; // Smooth transition for color change
   }
}, 1000);