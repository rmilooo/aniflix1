function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  // Check if user is logged in by looking for the "logged_in" cookie
  if (getCookie("logged_in") !== "true") {
    window.location.href = "login.html";
  }
