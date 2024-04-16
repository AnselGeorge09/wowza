// Add particle effects to all pages
document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const particlesCount = 100;

  for (let i = 0; i < particlesCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 10 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    body.appendChild(particle);
  }

  // Add event listener for theme and font changes
  const themeSelect = document.getElementById('theme');
  const fontSelect = document.getElementById('font');
  const saveButton = document.querySelector('.btn[type="submit"]');

  themeSelect.addEventListener('change', function() {
    document.body.className = this.value;
  });

  fontSelect.addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
  });

  saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    localStorage.setItem('theme', themeSelect.value);
    localStorage.setItem('font', fontSelect.value);
    alert('Settings saved!');
  });

  // Load saved settings
  const savedTheme = localStorage.getItem('theme');
  const savedFont = localStorage.getItem('font');

  if (savedTheme) {
    document.body.className = savedTheme;
    themeSelect.value = savedTheme;
  }

  if (savedFont) {
    document.body.style.fontFamily = savedFont;
    fontSelect.value = savedFont;
  }
});