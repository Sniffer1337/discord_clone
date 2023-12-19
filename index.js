// function changeLanguage(language) {
//     // Implement logic to change the language as needed
//     console.log(`Language selected: ${language}`);
//   }


const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'user2@example.com', password: 'password2' },
  ];

  function login() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const messageElement = document.getElementById('message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^.{6,}$/;

    const email = emailInput.value;
    const password = passwordInput.value;

    if (!emailRegex.test(email) || !passwordRegex.test(password)) {
        alert('Invalid email or password format');
        return;
      }

    const user = users.find(users => users.email === email && users.password === password);

    if (user) {
        messageElement.innerHTML = 'Login successful';
      window.location.href = './index.html';
    } else {
        messageElement.innerHTML = 'Invalid email or password';
    }
  }