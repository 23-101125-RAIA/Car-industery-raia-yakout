window.addEventListener("load", () => {
  setTimeout(() => {
    let preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  }, 4000);
});

document.getElementById("nav-link1").innerHTML = "Home";
document.getElementById("nav-link2").innerHTML = "Products";
document.getElementById("nav-link3").innerHTML = "Event";
document.getElementById("nav-link4").innerHTML = "About";



document.getElementById("footer-brand-name").innerHTML = "Dragon Motors";
document.getElementById("footer-company").innerHTML = "Company";
document.getElementById("footer-about").innerHTML = "About Us";
document.getElementById("footer-careers").innerHTML = "Careers";
document.getElementById("footer-services").innerHTML = "Services";
document.getElementById("footer-vehicles").innerHTML = "Vehicles";
document.getElementById("footer-pricing").innerHTML = "Pricing";
document.getElementById("footer-support").innerHTML = "Support";
document.getElementById("footer-faqs").innerHTML = "FAQs";
document.getElementById("footer-contact").innerHTML = "Contact";
document.getElementById("footer-subtitle").innerHTML =
  "READY TO DRIVE THE FUTURE?";
  document.getElementById("ctaa-sec55").innerHTML =
  'Subscribe <span class="footer-cta-arrow">→</span>';
document.getElementById("footer-copy").innerHTML =
  "© Copyright 2024, All Rights Reserved by Exline";



  let burger = document.querySelector(".image");
  let mobileMenu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  document.getElementById("mobile-link1").innerHTML = "Home";
document.getElementById("mobile-link2").innerHTML = "Products";
document.getElementById("mobile-link3").innerHTML = "Event";
document.getElementById("mobile-link4").innerHTML = "About";

const heroModel = document.getElementById("P2-section1Model");
const heroButtons = document.querySelectorAll(".cta-text");

const positions = {
  front: "0deg 75deg 7.25m",
  side: "90deg 75deg 7.25m",
  back: "180deg 75deg 7.25m"
};

heroModel.addEventListener("load", () => {
  heroModel.setAttribute("camera-orbit", "40deg 68deg 7.25m"); 
});

heroButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    heroButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    heroModel.setAttribute("camera-orbit", positions[btn.dataset.pos]);
  });
});
