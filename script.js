// Scroll animation (logo scale)

window.addEventListener('scroll', () => {
  const logo = document.getElementById('hero-logo');
  const scrollY = window.scrollY;
  const scale = Math.max(1 - scrollY / 600, 0.4);
  logo.style.transform = `scale(${scale})`;
});

// Reveal sections on scroll

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.3
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Contact form (simple alert)

document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('🎉 Thanks! We’ll be in touch shortly.');
  e.target.reset();
});
