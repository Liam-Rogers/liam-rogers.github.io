// JavaScript for dynamically creating blog posts

const createBlogPostLink = (postNumber) => {
    const blogLink = document.createElement("a");
    blogLink.href = `blog/blogpost${postNumber}.html`;
    blogLink.textContent = `Blog Post ${postNumber}`;
    return blogLink;
};

const appendBlogPost = (postNumber) => {
    const blogList = document.querySelector("#blog-list");
    const blogPost = document.createElement("li");
    blogPost.appendChild(createBlogPostLink(postNumber));
    blogList.appendChild(blogPost);
};

// Add new blog post links here
appendBlogPost(1);
appendBlogPost(2);
// You can continue to append more blog posts as needed
