document.body.addEventListener('click', (event) => {
    const container = document.getElementById('container');
    const candyColors = ['#FF69B4', '#FFB6C1', '#FFD700', '#FF4500', '#DA70D6', '#BA55D3', '#7B68EE', '#00FA9A', '#40E0D0', '#00CED1'];

    // 创建一个大星星
    const bigStar = document.createElement('div');
    bigStar.classList.add('star');
    bigStar.style.width = '60px';
    bigStar.style.height = '60px';
    const bigColor = candyColors[Math.floor(Math.random() * candyColors.length)];

    bigStar.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L14.09 8.26L20.97 8.91L15.41 12.99L17.45 19.74L12 15.77L6.55 19.74L8.59 12.99L3.03 8.91L9.91 8.26L12 2Z" stroke="${bigColor}" stroke-width="2" fill="none" stroke-linejoin="round"/>
        </svg>
    `;

    const x = event.clientX;
    const y = event.clientY;

    // 调整大星星的位置，使其中心与点击位置对齐
    bigStar.style.left = `${x - 30}px`; // 因为星星的宽度是60px，减去一半
    bigStar.style.top = `${y - 30}px`;  // 因为星星的高度是60px，减去一半

    container.appendChild(bigStar);

    setTimeout(() => {
        bigStar.remove();
    }, 2000);

    // 创建周围的小星星
    for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = '20px';
        star.style.height = '20px';

        const color = candyColors[Math.floor(Math.random() * candyColors.length)];
        const isHollow = Math.random() > 0.5;
        
        if (isHollow) {
            star.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.09 8.26L20.97 8.91L15.41 12.99L17.45 19.74L12 15.77L6.55 19.74L8.59 12.99L3.03 8.91L9.91 8.26L12 2Z" stroke="${color}" stroke-width="2" fill="none" stroke-linejoin="round"/>
                </svg>
            `;
        } else {
            star.innerHTML = `
                <svg viewBox="0 0 24 24" fill="${color}" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L14.09 8.26L20.97 8.91L15.41 12.99L17.45 19.74L12 15.77L6.55 19.74L8.59 12.99L3.03 8.91L9.91 8.26L12 2Z" stroke="${color}" stroke-width="2" stroke-linejoin="round"/>
                </svg>
            `;
        }

        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 300;

        star.style.setProperty('--x', Math.cos(angle) * distance);
        star.style.setProperty('--y', Math.sin(angle) * distance);

        container.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 2000);
    }
});
