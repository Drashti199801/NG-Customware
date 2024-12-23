// Slideshow control
const menuToggle = document.querySelector(".menu-toggle");
const navMobile = document.querySelector(".nav-mobile");

menuToggle.addEventListener("click", () => {
  navMobile.style.display =
    navMobile.style.display === "block" ? "none" : "block";
});

// Close mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll(".nav-mobile ul li a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.style.display = "none";
  });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Set a delay of 1 seconds (3000 milliseconds) before showing the slogan
  setTimeout(function () {
    document.querySelector(".slogan").classList.add("show");
  }, 1000); // Adjust the time (in milliseconds) as needed
});
