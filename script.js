
//Using JS to scroll to top
const scrollToTopBtn = document.getElementsByClassName("scrollToTopBtn");
scrollToTopBtn[0].addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
   
  });
}

