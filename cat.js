const cat = document.querySelector('.cat');
const acceptButton = document.getElementById('acceptButton');


const cloud = document.createElement('div');
cloud.classList.add('cloud');
cloud.textContent = 'Miau';
cat.appendChild(cloud);


cloud.style.opacity = '0';
cloud.style.transition = 'opacity 0.3s ease';

// Animación de los bigotes
setInterval(() => {
    document.querySelectorAll('.whiskers').forEach((whisker, index) => {
        const angle = index % 2 === 0 ? 15 : -15; // Alterna entre izquierda y derecha
        whisker.style.transform = `rotate(${angle}deg)`;

        // Volver a la posición inicial tras un corto intervalo
        setTimeout(() => {
            whisker.style.transform = 'rotate(0deg)';
        }, 150);
    });
}, 3000);


cat.addEventListener('mouseenter', () => {
    cat.style.transform = 'scale(1.1)';
    cat.style.transition = 'transform 0.3s';
    cloud.style.opacity = '1'; 
    cloud.style.display = 'block';
});

cat.addEventListener('mouseleave', () => {
    cat.style.transform = 'scale(1)';
    cloud.style.opacity = '0'; 
});
