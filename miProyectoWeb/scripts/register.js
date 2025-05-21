document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("Username").value.trim();
        const password = document.getElementById("Password").value;

        if (!username || !password) return;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find(u => u.username === username);
        if (exists) {
            alert("Username already exists");
            return;
        }

        users.push({username, password});
        localStorage.setItem("users", JSON.stringify(users));

        alert("User register successfully!")
        window.location.href = "../pages/main-page.html"
    })
})

function resetToAdminOnly() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const adminExists = users.some(u => u.username === "admin");

    if (!adminExists) {
        users.push({ username: "admin", password: "admin123" });
    }

    const filtered = users.filter(u => u.username === "admin");

    localStorage.setItem("users", JSON.stringify(filtered));

    console.log("Reset complete: only 'admin' remains.");
}