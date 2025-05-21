document.addEventListener("DOMContentLoaded", () => {
    const feed = document.getElementById("post-feed");
    const posts = JSON.parse(localStorage.getItem("posts")) || [];

    if (posts.length === 0) {
        feed.innerHTML = "<p>No posts yet. Create one!</p>";
        return;
    }

    posts.forEach((post, index) => {
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