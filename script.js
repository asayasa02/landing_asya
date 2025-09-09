<script>
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
</script>

<script>
  const revealElements = document.querySelectorAll(".card, .about, .contact");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
</script>

<style>
  /* Tambahan CSS untuk efek muncul */
  .card, .about, .contact {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
  }
  .card.visible, .about.visible, .contact.visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>

<script>
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "#3a2b22"; // warna lebih gelap
    } else {
      header.style.background = "#5c4033"; // warna awal
    }
  });
</script>

<script>
  const heroSection = document.querySelector('.hero');
  const images = [
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
    'https://1.bp.blogspot.com/-9Q0PhMD6l0E/XDVhAggdNWI/AAAAAAABFII/AWTo3w1_oF0PJLQ4jMv9wope-UXCM4t3wCLcBGAs/s1600/aIMG_8200.jpg'
  ];
  let current = 0;

  function changeHeroBg() {
    heroSection.style.background =
      `linear-gradient(rgba(92,64,51,0.6), rgba(92,64,51,0.6)), url('${images[current]}') no-repeat center/cover`;
    current = (current + 1) % images.length;
  }

  setInterval(changeHeroBg, 3500); // ganti gambar tiap 3.5 detik
  changeHeroBg(); // set gambar awal
</script>