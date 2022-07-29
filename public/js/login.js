if (document.readyState !== "loading") {
  initializeCodeLogin();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, options);
    initializeCodeLogin();
  });
}

function initializeCodeLogin() {
  document.getElementById("login-form").addEventListener("submit", onSubmit);
}

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch("/api/user/login", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        storeToken(data.token);
        window.location.href = "/";
      } else {
        if (data.message) {
          document.getElementById("error").innerHTML = data.message;
        } else {
          document.getElementById("error").innerHTML = "Generic error";
        }
      }
    });
}

function storeToken(token) {
  localStorage.setItem("auth_token", token);
}
