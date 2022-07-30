if (document.readyState !== "loading") {
    initializeCodeLogin();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      let elems = document.querySelectorAll(".sidenav");
      let instances = M.Sidenav.init(elems, {});
      initializeCodeLogin();
    });
  }