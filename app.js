// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "5px 10px";
    document.getElementById("logo").style.fontSize = "10px";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}