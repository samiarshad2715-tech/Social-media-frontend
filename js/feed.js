import { getPosts } from "./api.js";

async function loadPosts() {
  const data = await getPosts();   // this gets full response object

  const posts = data.getposts;     // ✅ extract actual array

  const container = document.getElementById("posts");

  container.innerHTML = "";

  if (!posts || posts.length === 0) {
    container.innerHTML = "<p>No posts available</p>";
    return;
  }

  posts.forEach(post => {
    const div = document.createElement("div");
    div.classList.add("post");

    div.innerHTML = `
      <img src="${post.image}" />
      <p>${post.caption}</p>
    `;

    container.appendChild(div);
  });
}

loadPosts();