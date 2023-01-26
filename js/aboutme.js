const aboutMeButton = document.querySelector('.about-me-button');
const collapseButton = document.querySelector('.collapse-button');
const aboutMeContent = document.querySelector('.about-me-content');

aboutMeButton.addEventListener('click', function() {
  aboutMeButton.style.display = "none";
  collapseButton.style.display = "block";
  aboutMeContent.style.display = "block";
});

collapseButton.addEventListener('click', function() {
  aboutMeButton.style.display = "block";
  collapseButton.style.display = "none";
  aboutMeContent.style.display = "none";
});