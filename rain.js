const button = document.querySelector('.bt');
function rain() {
    
    const heart = document.querySelector('.heartBx');
    const e = document.createElement('div');

    e.classList.add('drop');
    heart.appendChild(e);
    const left = Math.floor(Math.random() * 300);
    const duration = Math.random() * .5;

    e.style.left = `${left}px`;
    e.style.animationDuration = `${1+duration}s`;

    setTimeout(() => {
        heart.removeChild(e);
        e.remove();
    }, 4000);
}


   
button.addEventListener('click', () => {
    setInterval(rain, 100);

});