console.log('connected');

document.getElementById('login-btn').addEventListener('click', async (event) => {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Reset error messages
  const errorMessages = document.getElementById('error-messages');
  errorMessages.innerHTML = '';

  // Validate input fields
  if (username === '') {
    displayErrorMessage('Please enter your username/email/mobile number');
    return;
  }

  if (password === '') {
    displayErrorMessage('Please enter your password');
    return;
  }

  // Simulate asynchronous login request
  try {
    displayLoadingMessage('Logging in...'); // Display loading message

    // Simulate server response delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Simulated response (replace with your actual login request)
    const validUsername = 'exampleuser';
    const validPassword = 'examplepass';

    if (username !== validUsername || password !== validPassword) {
      throw new Error('Invalid username/email/mobile number or password');
    }

    displaySuccessMessage('Login successful'); // Display success message
  } catch (error) {
    displayErrorMessage(error.message); // Display error message
  }
});

const displayLoadingMessage = (message) => {
  const errorMessages = document.getElementById('error-messages');
  errorMessages.innerHTML = `<p class="loading-message">${message}</p>`;
};

const displaySuccessMessage = (message) => {
  const errorMessages = document.getElementById('error-messages');
  errorMessages.innerHTML = `<p class="success-message">${message}</p>`;
};

const displayErrorMessage = (message) => {
  const errorMessages = document.getElementById('error-messages');
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessages.appendChild(errorMessage);
};

const loginWithFacebook = () => {
  // Perform login with Facebook logic
  console.log('Logging in with Facebook...');
};

const loginWithGoogle = () => {
  // Perform login with Google logic
  console.log('Logging in with Google...');
};
