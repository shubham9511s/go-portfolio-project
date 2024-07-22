function showSection(sectionId) {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');
  sections.forEach(section => {
      section.classList.remove('active');
  });
  document.getElementById(sectionId).classList.add('active');
  
  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
      }
  });
}

// Show the section based on the hash in the URL when the page loads
document.addEventListener('DOMContentLoaded', (event) => {
  if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      showSection(sectionId);
  }
});
