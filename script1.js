document.addEventListener("DOMContentLoaded", () => {
  const signUpBtn = document.getElementById("b2");
  
  signUpBtn.addEventListener("click", () => {
    const emailOrPhone = document.getElementById("mobno").value.trim();
    const password = document.getElementById("pass").value.trim();
    const fullName = document.getElementById("full").value.trim();
    const username = document.getElementById("user").value.trim();

    if (!emailOrPhone || !password || !fullName || !username) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a user object
    const user = {
      emailOrPhone,
      password,
      fullName,
      username
    };

    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    
    alert("Account created successfully! Redirecting to login...");
    window.location.href = "index.html"; // Change this to your login page filename
  });
});
