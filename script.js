// Dummy user data for login validation
const users = [
    { email: "test@example.com", password: "password123", name: "John Doe" },
    { email: "user@example.com", password: "userpass", name: "Jane Smith" }
];

// Add event listener for the login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission from refreshing the page

    // Get email and password values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Regular expression for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validate email format
    if (!emailPattern.test(email)) {
        alert("Invalid email format. Please include an '@' and a valid domain (e.g., example@mail.com).");
        return; // Stop further execution
    }

    // Find the user matching the entered email and password
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Successful login
        alert("Login successful");
        sessionStorage.setItem("user", JSON.stringify(user)); // Save user data in session storage
        window.location.href = "dashboard.html"; // Redirect to the dashboard page
    } else {
        // Invalid login
        alert("Invalid email or password. Please try again.");
    }
});