if (document.readyState !== "loading") {
    initializeCodeLogin();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
        initializeCodeLogin();
    });
  }
  
  function initializeCodeLogin() {
    document.getElementById("create-thread-form").addEventListener("submit", onSubmit);
  }
  
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log("test");
    fetch("/api/thread/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
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
  