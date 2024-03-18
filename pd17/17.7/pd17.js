// Create a form with a text input and a button
const form = document.createElement('form');
const input = document.createElement('input');
input.type = 'text';
const button = document.createElement('button');
button.textContent = 'Submit';

// Append input and button to the form
form.appendChild(input);
form.appendChild(button);

// Append the form to the body
document.body.appendChild(form);

// Add event listener to the form on submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submit action
  alert(input.value); // Show an alert with the input's text content
});