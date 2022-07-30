//import {M} from 'materialize-css';
// Materialize refuses to work

if (document.readyState !== "loading") {
    initializeCodeLogin();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
        //let elems = document.querySelectorAll(".sidenav");
        //let instances = M.Sidenav.init(elems, options);
        initializeCodeLogin();
    });
  }
  
  function initializeCodeLogin() {
    document.getElementById("create-thread-form").addEventListener("submit", onSubmit);
    console.log("Work");
  }
  
  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    fetch("/api/thread/create", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
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
  