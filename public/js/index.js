if (document.readyState !== "loading") {
    initializeCodeLogin();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCodeLogin();
    });
  }
  
  function initializeCodeLogin() {
    loadPosts();
}

function loadPosts() {
    
}