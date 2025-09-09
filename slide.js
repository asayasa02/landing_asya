const heroBg = document.querySelector('.hero-bg');
const images = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  'https://1.bp.blogspot.com/-9Q0PhMD6l0E/XDVhAggdNWI/AAAAAAABFII/AWTo3w1_oF0PJLQ4jMv9wope-UXCM4t3wCLcBGAs/s1600/aIMG_8200.jpg'
];
let current = 0;

function showImage(idx) {
  heroBg.style.opacity = 0.6;
  setTimeout(() => {
    heroBg.style.background = `linear-gradient(rgba(92,64,51,0.6), rgba(92,64,51,0.6)), url('${images[idx]}') center/cover no-repeat`;
    heroBg.style.opacity = 1;
  }, 400);
}

setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 4000);

showImage(current);