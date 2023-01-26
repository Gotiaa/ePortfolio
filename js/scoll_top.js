const scrollTopButton = document.querySelector('#scroll-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    scrollTopButton.style.display = 'block';
  } else {
    scrollTopButton.style.display = 'none';
  }
});

scrollTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});