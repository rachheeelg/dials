const dots = document.querySelectorAll('.dial-5-dot');
const dotsTotal = dots.length;
const dotsCenterX = 75;
const dotsCenterY = 75;
const dotsRadius = 55;

dots.forEach((dot, i) => {
    const angle = (i / dotsTotal) * 2 * Math.PI - Math.PI / 2;
    const x = dotsCenterX + dotsRadius * Math.cos(angle);
    const y = dotsCenterY + dotsRadius * Math.sin(angle);
    dot.style.left = x + 'px';
    dot.style.top = y + 'px';
    dot.style.transform = 'translate(-50%, -50%)';
});

const clockStrokes = document.querySelectorAll('.dial11-stroke');  /* ← fixed */
const clockTotal = clockStrokes.length;
const clockRadius = 68;
const clockCenterX = 75;
const clockCenterY = 75;

clockStrokes.forEach((stroke, i) => {
    const angle = (i / clockTotal) * 2 * Math.PI - Math.PI / 2;
    const x = clockCenterX + clockRadius * Math.cos(angle);
    const y = clockCenterY + clockRadius * Math.sin(angle);
    stroke.style.left = x + 'px';
    stroke.style.top = y + 'px';
    stroke.style.transform = `translate(-50%, -50%) rotate(${(i / clockTotal) * 360}deg)`;
});

const holes = document.querySelectorAll('.dial12-hole');  /* ← fixed */
const holesTotal = holes.length;
const holesRadius = 35;
const holesCenterX = 75;
const holesCenterY = 75;

holes.forEach((hole, i) => {
    const angle = (i / holesTotal) * 2 * Math.PI - Math.PI / 2;
    const x = holesCenterX + holesRadius * Math.cos(angle);
    const y = holesCenterY + holesRadius * Math.sin(angle);
    hole.style.left = x + 'px';
    hole.style.top = y + 'px';
    hole.style.transform = 'translate(-50%, -50%)';
});

const dial13Strokes = document.querySelectorAll('.dial13-clock-stroke');  /* ← new */
const dial13Total = dial13Strokes.length;
const dial13Radius = 45;
const dial13CenterX = 75;
const dial13CenterY = 75;

dial13Strokes.forEach((stroke, i) => {
    const angle = (i / dial13Total) * 2 * Math.PI - Math.PI / 2;
    const x = dial13CenterX + dial13Radius * Math.cos(angle);
    const y = dial13CenterY + dial13Radius * Math.sin(angle);
    stroke.style.left = x + 'px';
    stroke.style.top = y + 'px';
    stroke.style.transform = `translate(-50%, -50%) rotate(${(i / dial13Total) * 360}deg)`;
});

const dial14Strokes = document.querySelectorAll('.dial14-clock-stroke');
const dial14Total = dial14Strokes.length;
const dial14Radius = 45;
const dial14CenterX = 75;
const dial14CenterY = 75;

dial14Strokes.forEach((stroke, i) => {
    const angle = (i / dial14Total) * 2 * Math.PI - Math.PI / 2;
    const x = dial14CenterX + dial14Radius * Math.cos(angle);
    const y = dial14CenterY + dial14Radius * Math.sin(angle);
    stroke.style.left = x + 'px';
    stroke.style.top = y + 'px';
    stroke.style.transform = `translate(-50%, -50%) rotate(${(i / dial14Total) * 360}deg)`;
});

const dial22Spokes = document.querySelectorAll('.dial22-spoke');
const dial22Total = dial22Spokes.length;

dial22Spokes.forEach((spoke, i) => {
    const angle = (i / dial22Total) * 360;
    spoke.style.transform = `translate(-50%, -100%) rotate(${angle}deg)`;
    spoke.style.transformOrigin = 'bottom center';
});

const dial25Strokes = document.querySelectorAll('.dial25-stroke');
const dial25Total = dial25Strokes.length;
const dial25Radius = 60;
const dial25CenterX = 75;
const dial25CenterY = 75;

dial25Strokes.forEach((stroke, i) => {
    const angle = (i / dial25Total) * 2 * Math.PI - Math.PI / 2;
    const x = dial25CenterX + dial25Radius * Math.cos(angle);
    const y = dial25CenterY + dial25Radius * Math.sin(angle);
    stroke.style.left = x + 'px';
    stroke.style.top = y + 'px';
    stroke.style.transform = `translate(-50%, -50%) rotate(${(i / dial25Total) * 360}deg)`;
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const angle = (scrollY * 0.5) % 360;
    const rad = angle * (Math.PI / 180);
    
    const distance = 12;
    const x = Math.round(distance * Math.sin(rad));
    const y = Math.round(distance * Math.cos(rad));
    const blur = 12;

    document.querySelectorAll('[id^="dial"]').forEach(dial => {
        dial.style.boxShadow = `${x}px ${y}px ${blur}px rgba(163, 158, 158, 0.55)`;
    });


    document.querySelectorAll('.dial-1-inner, .dial-2-inner, .dial-6-inner').forEach(el => {
        el.style.boxShadow = `${x}px ${y}px 8px rgba(163, 158, 158, 0.55)`;
    });

    document.querySelectorAll('.ring-1, .ring-2, .ring-3').forEach(el => {
        el.style.boxShadow = `${x}px ${y}px 8px rgba(163, 158, 158, 0.9)`;
    });

    document.querySelectorAll('.pill-shape, .chip-body').forEach(el => {
        el.style.boxShadow = `${x}px ${y}px 8px rgba(163, 158, 158, 0.4)`;
    });
});

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.5;

    const dial3 = document.querySelector('#dial3');
    if (dial3) {
        dial3.style.transform = `rotate(${rotation}deg)`;
    }
});