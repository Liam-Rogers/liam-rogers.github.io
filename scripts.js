document.addEventListener("DOMContentLoaded", function () {
    const blogContainer = document.getElementById("blog-container");

    // Function to fetch and display a blog post
    function fetchAndDisplayBlogPost(postNumber) {
        fetch(`blogposts/blogpost${postNumber}.html`)
            .then(response => response.text())
            .then(html => {
                const article = document.createElement("article");
                article.innerHTML = html;
                blogContainer.appendChild(article);
            })
            .catch(error => console.error("Error fetching blog post:", error));
    }

    // Fetch and display the desired blog posts
    fetchAndDisplayBlogPost(1); // Example for blogpost1.html
    fetchAndDisplayBlogPost(2); // Example for blogpost2.html
    // Add more calls for other blog posts as needed
});
