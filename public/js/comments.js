/* Loading threads is handled in routes/index.js */

if (document.readyState !== "loading") {
  initializeCodeLogin();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCodeLogin();
    loadComments();
  });
}

function initializeCodeLogin() {}

function loadComments() {
  const id = document.getElementById("threadId").getAttribute("tId");
  console.log(id);
  fetch(`/api/comment/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        data.forEach((comment) => {
          const container = document.getElementById("comment-container");
          const d = document.createElement("div");
          d.className = "card-panel";
          container.appendChild(d);
          const text = document.createElement("textarea");
          text.className = "materialize-textarea";
          text.readOnly = true;
          text.innerText = comment.text;
          d.appendChild(text);
        });
      } else {
        if (data.message) {
          document.getElementById("error").innerHTML = data.message;
        } else {
          document.getElementById("error").innerHTML = "Generic error";
        }
      }
    });
}
