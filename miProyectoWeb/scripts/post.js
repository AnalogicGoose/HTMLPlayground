document.addEventListener("DOMContentLoaded", () => {
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