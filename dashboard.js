// Get user data
const user = JSON.parse(sessionStorage.getItem("user"));
if (!user) {
    window.location.href = "index.html";
}

document.getElementById("welcomeMessage").innerText = Welcome, ${user.name}!;

const postButton = document.getElementById("postButton");
const postsContainer = document.getElementById("postsContainer");

postButton.addEventListener("click", function () {
    const title = document.getElementById("postTitle").value;
    const content = document.getElementById("postContent").value;
    const image = document.getElementById("postImage").files[0];

    if (!title || !content) {
        alert("Please fill in all fields!");
        return;
    }

    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const postTitle = document.createElement("h3");
    postTitle.innerText = title;

    const postContent = document.createElement("p");
    postContent.innerText = content;

    const likeButton = document.createElement("button");
    likeButton.innerText = "Like";
    likeButton.classList.add("like");
    likeButton.addEventListener("click", function () {
        if (likeButton.innerText === "Like") {
            likeButton.innerText = "Liked";
            likeButton.classList.remove("like");
            likeButton.classList.add("unlike");
        } else {
            likeButton.innerText = "Like";
            likeButton.classList.remove("unlike");
            likeButton.classList.add("like");
        }
    });

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    if (image) {
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(image);
        postDiv.appendChild(imgElement);
    }

    postDiv.appendChild(likeButton);
    postsContainer.appendChild(postDiv);

    // Clear inputs
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
    document.getElementById("postImage").value = "";
});