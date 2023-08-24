const createBlogPostLink = (postNumber, title, imageSrc) => {
    const blogLink = document.createElement("a");
    blogLink.href = `blog/blogpost${postNumber}.html`;
    blogLink.classList.add('post-preview-link'); // Add a CSS class for styling
    blogLink.innerHTML = `
        <div class="post-preview">
            <img src="${imageSrc}" alt="Blog Post Image" class="thumbnail">
            <h3>${title}</h3>
        </div>`;
    return blogLink;
};


const fetchTitleAndImageFromBlogPost = (postNumber) => {
    return fetch(`blog/blogpost${postNumber}.html`)
        .then(response => response.text())
        .then(html => {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = html;
            
            const h1Content = tempElement.querySelector('h1').textContent;
            const imgElement = tempElement.querySelector('img'); // Get the <img> element
            const imgSrc = imgElement ? imgElement.getAttribute('src') : null; // Get the image src

            return { title: h1Content, imageSrc: imgSrc };
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
};

const appendBlogPostLinksAndImages = async () => {
    const numberOfPosts = 3; // Adjust this to the number of your blog posts
    const blogList = document.querySelector("#blog-list");

    for (let postNumber = 1; postNumber <= numberOfPosts; postNumber++) {
        const { title, imageSrc } = await fetchTitleAndImageFromBlogPost(postNumber);
        const blogLink = createBlogPostLink(postNumber, title, imageSrc);

        const blogPost = document.createElement("li");
        blogPost.appendChild(blogLink);
        blogList.appendChild(blogPost);
    }
};

// Call the function to fetch and display the list of blog post links and images
appendBlogPostLinksAndImages();


const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mainMenu = document.querySelector('.main-menu');

mobileMenuIcon.addEventListener('click', () => {
    mainMenu.classList.toggle('mobile-menu-open');
});