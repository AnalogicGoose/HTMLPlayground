document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("moderation-list");
    let posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
        container.innerHTML = "<p>No posts to moderate.</p>";
        return;
    }

    posts.forEach((post, index) => {
        const article = document.createElement("article");
        article.classList.add("post-preview");

        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content.substring(0, 100)}...</p>
            <small>Posted by ${post.author} on ${post.date}</small>
            <br />
            <button data-index="${index}">Delete</button>
        `;

        container.appendChild(article);
    });

    container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const i = parseInt(e.target.getAttribute("data-index"));
        posts.splice(i, 1);
        localStorage.setItem("posts", JSON.stringify(posts));
        location.reload();
    }
    });
});
