document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });

  // Close the menu when a link is clicked
  navLinks.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      navLinks.classList.remove('show');
    }
  });
});
