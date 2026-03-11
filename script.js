const dots = document.querySelectorAll('.dial-5-dot');
const total = dots.length;
const radius = 55;
const centerX = 75;
const centerY = 75;

dots.forEach((dot, i) => {
    const angle = (i / total) * 2 * Math.PI - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    dot.style.transform = 'translate(-50%, -50%)';
});