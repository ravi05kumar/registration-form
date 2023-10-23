 // Password strength indicator logic
 const passwordInput = document.getElementById('password');
 const passwordStrengthText = document.getElementById('password-strength-text');

 passwordInput.addEventListener('input', function () {
     const password = passwordInput.value;
     const strength = calculatePasswordStrength(password);
     passwordStrengthText.textContent = strength;
     passwordStrengthText.className = 'password-strength ' + strength;
 });

 function calculatePasswordStrength(password) {
     // Implement your password strength calculation logic here.
     // You can use regular expressions and other criteria to determine strength.
     if (password.length < 8) {
         return 'Weak';
     } else if (password.length < 12) {
         return 'Medium';
     } else {
         return 'Strong';
     }
 }