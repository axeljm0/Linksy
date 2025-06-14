const buttons = document.querySelectorAll('nav.sidebar button');
const sections = document.querySelectorAll('section.content-area');


buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    // Add active to clicked button
    btn.classList.add('active');

    const id = btn.id.replace('btn-', '');
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.classList.add('active');
        sec.focus();
      } else {
        sec.classList.remove('active');
      }
    });
  });
});



