document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

document.querySelectorAll('.faq-item h3.question').forEach((item) => {
  item.addEventListener('click', () => {
    const parent = item.parentElement;
    parent.classList.toggle('active');
  });
});





document.querySelectorAll('.faq-question').forEach((button) => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach((item) => item.classList.remove('active'));
    if (!isOpen) {
      faqItem.classList.add('active');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.product-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
      card.style.transform = 'scale(1)';
    });
  });
});
