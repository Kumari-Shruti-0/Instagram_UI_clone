document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("name");
  const toggle = document.getElementById("togglePassword");
const pass = document.getElementById("pass");

toggle.addEventListener("click", () => {
    const isPassword = pass.type === "password";
    pass.type = isPassword ? "text" : "password";
    toggle.textContent = isPassword ? "🙈" : "👁️"; 
});

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const loginId = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    const isValid =
      (loginId === storedUser.emailOrPhone || loginId === storedUser.username) &&
      password === storedUser.password;

    if (isValid) {
      alert("Login successful!");
      window.location.href = "home.html"; // Change this to your actual homepage
    } else {
      alert("Invalid username or password.");
    }
  });
});
