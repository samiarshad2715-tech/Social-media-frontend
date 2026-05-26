import { createPost } from "./api.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const button = form.querySelector("button");
  button.innerText = "Uploading...";

  try {
    await createPost(formData);

    // ✅ Redirect after success
    window.location.href = "index.html";

  } catch (err) {
    console.error(err);
    alert("Upload failed!");
    button.innerText = "Upload";
  }
});