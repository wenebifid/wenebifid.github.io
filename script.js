document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Simulate form submission
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display a response message
  document.getElementById('formResponse').textContent = `Thank you, ${name}! Your message has been sent.`;
  document.getElementById('formResponse').style.color = '#4CAF50';

  // Clear the form
  document.getElementById('contactForm').reset();
});