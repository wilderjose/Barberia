function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.service-card');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    cards.forEach(card => {
      observer.observe(card);
    });
  });