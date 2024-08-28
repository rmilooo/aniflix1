const form = document.getElementById('login-form');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const validCredentials = [
    { password: 'fcd41048e47b5e2506fe6c3a285a3aae' }, // MD5 hash of 'pass1'
  ];

  const password = passwordInput.value;
  const md5Password = md5(password); // using the blueimp-md5 library

  for (const credential of validCredentials) {
    if (credential.password === md5Password) {
      // Set a cookie named "logged_in" with a value of "true"
      document.cookie = "logged_in=true; path=/";

      // Redirect to index.html in the same folder
      window.location.href = 'index.html';
    } else {
      alert('Invalid credentials');
    }
  }
});