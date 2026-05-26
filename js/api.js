const BASE_URL = "https://social-media-backend-oimy.onrender.com";

export async function getPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

export async function createPost(formData) {
  const res = await fetch(`${BASE_URL}/create-post`, {
    method: "POST",
    body: formData
  });

  return res.json();
}
