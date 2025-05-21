document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("Username").value.trim();
        const password = document.getElementById("Password").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.username === username && u.password === password);

        if (!user) {
            alert("Invalid username or password.");
            return;
        }

        // Guardar sesión (opcional)
        localStorage.setItem("currentUser", username);

        if (username === "admin") {
            localStorage.setItem("isAdmin", "true");
        } else {
            localStorage.setItem("isAdmin", "false");
        }

        window.location.href = "main-page.html";
    });

    window.resetToAdminOnly = function () {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        const adminExists = users.some(u => u.username === "admin");

        if (!adminExists) {
            users.push({ username: "admin", password: "admin123" });
        }

        const filtered = users.filter(u => u.username === "admin");

        localStorage.setItem("users", JSON.stringify(filtered));

        console.log("Reset complete: only 'admin' remains.");
    };
});