document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

    function fetchAndDisplayBlogPost(postNumber) {
        fetch(`blogpost${postNumber}.html`)
            .then(response => response.text())
            .then(html => {
                const article = document.createElement("article");
                article.innerHTML = html;
                blogContainer.appendChild(article);
            })
            .catch(error => console.error("Error fetching blog post:", error));
    }

    fetchAndDisplayBlogPost(1);
    fetchAndDisplayBlogPost(2);
    // Add more fetch calls for other posts as needed
});
