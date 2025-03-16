const coverSection = document.querySelector('.cover');
const contentSection = document.querySelector('.content');
const rows = document.querySelectorAll('.row');


rows.forEach((row, index) => {
  row.style.backgroundImage = `url('images/image${index + 1}.jpg')`; 
  row.style.animationDelay = `${index * 0.5}s`; });

const observer = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    // Animate the cover section when it's within the viewport
    coverSection.classList.add('animate');
    contentSection.classList.add('animate');
  } else {
    // Remove the animation when the cover section is not within the viewport
    coverSection.classList.remove('animate');
    contentSection.classList.remove('animate');
  }
}, {
  rootMargin: '0px',
  threshold: 1.0,
});

observer.observe(coverSection);