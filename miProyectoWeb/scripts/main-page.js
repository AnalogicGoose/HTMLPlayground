console.log("main-page.js loaded");
document.addEventListener("DOMContentLoaded", () => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
        window.location.href = "login-page.html";
        return;
    }

    const userInfo = document.getElementById("user-info");
    if (userInfo) {
        userInfo.textContent = `Logged in as: ${currentUser}`;
        console.log("User is logged");
    }

    const isAdmin = localStorage.getItem("isAdmin");
    const moderationLink = document.getElementById("moderation-link");

    if (moderationLink && isAdmin === "true") {
        console.log("Es admin")
        moderationLink.style.display = "inline";
    } else {console.log("No es admin")}

    console.log("Listo para clickear");
    const logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            console.log("main-page.js click");
            e.preventDefault();
            localStorage.removeItem("currentUser");
            localStorage.removeItem("isAdmin");
            window.location.href = "login-page.html";
        });
    }

    const feed = document.getElementById("post-feed");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
        console.log("No hay posts");
        feed.innerHTML = "<p>No posts yet. Create one!</p>";
        return;
    }

    posts.forEach((post, index) => {
        console.log("hay posts");
        const article = document.createElement("article");
        article.classList.add("post-preview");

        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>
                ${post.content.substring(0, 100)}...
                <a href="../pages/post.html?index=${index}">Read more</a>
            </p>
            <small>Posted by ${post.author} on ${post.date}</small>
        `;

        feed.appendChild(article);
    });
});