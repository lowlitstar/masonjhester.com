import '../styles/modern-normalize.css'
import '../styles/style.css'

const subTitle2 = document.querySelector('.sub__title2');
const intro = document.querySelector('.intro');

document.addEventListener('mousemove', (event) => {
  if (window.innerWidth > 768) {
    const x = event.clientX;
    const y = event.clientY;
    subTitle2.style.left = `${x}px`;
    subTitle2.style.top = `${y}px`;
  } else {
    subTitle2.style.left = '';
    subTitle2.style.top = '';
  }
});
