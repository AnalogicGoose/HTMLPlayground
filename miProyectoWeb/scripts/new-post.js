document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("new-post-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value.trim();
        const content = document.getElementById("content").value.trim();
        const date = new Date().toLocaleDateString();
        const author = "Anonymous"; // Podés cambiarlo si luego agregás usuarios

        if (!title || !content) return;

        const post = { title, content, date, author };

        // Obtener los posts anteriores
        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        // Agregar nuevo post al inicio
        posts.unshift(post);

        // Guardar actualizados
        localStorage.setItem("posts", JSON.stringify(posts));

        // Redirigir al feed
        window.location.href = "../pages/main-page.html";
    });
});
