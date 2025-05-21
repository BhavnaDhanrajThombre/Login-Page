// Handle login
document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    try {
        const response = await fetch("/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username,
                password
            })
        });

        const result = await response.json();

        if (response.ok) {
            localStorage.setItem("token", result.access_token);

            const protectedResponse = await fetch("/protected", {
                headers: {
                    Authorization: `Bearer ${result.access_token}`
                }
            });

            const data = await protectedResponse.json();

            if (protectedResponse.ok) {
                message.style.color = "green";
                message.innerText = data.message;
                alert("✅ Login successful! " + data.message);
            } else {
                message.style.color = "red";
                message.innerText = data.detail || "Access denied.";
                alert("❌ Access denied: " + (data.detail || "Invalid token."));
            }
        } else {
            message.style.color = "red";
            message.innerText = result.detail || "Login failed.";
            alert("❌ Login failed: " + (result.detail || "Check your credentials."));
        }
    } catch (error) {
        message.style.color = "red";
        message.innerText = "An error occurred. Please try again.";
        alert("⚠️ An unexpected error occurred. Please try again.");
    }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", () => {
    const passwordInput = document.getElementById("password");
    const icon = document.querySelector("#togglePassword i");
    const type = passwordInput.getAttribute("type");

    passwordInput.setAttribute("type", type === "password" ? "text" : "password");
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");
});
