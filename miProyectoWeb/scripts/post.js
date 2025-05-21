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

    const params = new URLSearchParams(window.location.search);
    const index = parseInt(params.get("index"));

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const post = posts[index];

    const container = document.getElementById("post-container");

    if (!post) {
        container.innerHTML = "<p>Post not found.</p>";
        return;
    }

    container.innerHTML = `
        <article class="full-post">
        <h2>${post.title}</h2>
        <p><small>Posted by ${post.author} on ${post.date}</small></p>
        <p>${post.content}</p>
        </article>
    `;
});