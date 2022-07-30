if (document.readyState !== "loading") {
    initializeCodeLogin();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
      });
      initializeCodeLogin();
    });
  }
  
  function initializeCodeLogin() {
    document.getElementById("comment-form").addEventListener("submit", onSubmit);
  }
  
  function onSubmit(event) {
    event.preventDefault();

    const authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      const error = document.getElementById("error");
      error.innerHTML = "<h4 class='red-text lighten-2'>You need to be logged in to post comments!</>"
      return
    }

    const formData = new FormData(event.target);
    fetch("/api/comment/create", {
      method: "POST",
      headers: {
        "authorization": "Bearer " + authToken
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          window.location.reload();
        } else {
          if (data.message) {
            document.getElementById("error").innerHTML = data.message;
          } else {
            document.getElementById("error").innerHTML = "Generic error";
          }
        }
      });
  }