const Thread = require("../models/Thread");

if (document.readyState !== "loading") {
    initializeCodeLogin();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCodeLogin();
    });
  }
  
  function initializeCodeLogin() {
    let elems = document.querySelectorAll(".sidenav");
    let instances = M.Sidenav.init(elems, {});
    //loadPosts();
}

/* function loadPosts() {
    Thread.find
} */