window.addEventListener("load", () => {
  setTimeout(() => {
    let preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  }, 4000);
});

function highlightActiveLink() {
  let navLinks = document.querySelectorAll('.nav-link');
  let mobileLinks = document.querySelectorAll('.mobile-link');
  let currentPath = window.location.pathname;

  navLinks.forEach(link => link.classList.remove('active'));
  mobileLinks.forEach(link => link.classList.remove('active'));

  let setActiveLink = (id) => {
    let desktopLink = document.getElementById(id);
    let mobileLink = document.getElementById(id.replace('nav', 'mobile'));
    if (desktopLink) desktopLink.classList.add('active');
    if (mobileLink) mobileLink.classList.add('active');
  };

  if (currentPath.includes('about')) {
    setActiveLink('nav-link4');
  } else if (currentPath.includes('product')) {
    setActiveLink('nav-link2');
  } else {
    setActiveLink('nav-link1');
  }
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);
window.addEventListener('load', highlightActiveLink);


document.getElementById("nav-link1").innerHTML = "Home";
document.getElementById("nav-link2").innerHTML = "Products";
document.getElementById("nav-link3").innerHTML = "Gallery";
document.getElementById("nav-link4").innerHTML = "About";

document.getElementById("mobile-link1").innerHTML = "Home";
document.getElementById("mobile-link2").innerHTML = "Products";
document.getElementById("mobile-link3").innerHTML = "Gallery";
document.getElementById("mobile-link4").innerHTML = "About";


document.getElementById("about-title").innerHTML = "DRAGON MOTORS: <br>  ABOUT EFFICIENCY";
document.getElementById("about-cta").innerHTML = "Pre-Order Now";
document.getElementById("about-ctaa-text").innerHTML = "Learn More";

document.getElementById("about-text-1").innerHTML = "Your Registration Information Is Securely Encrypted And Handled Through Strict Automotive Data-Protection Standards. We Collect Only The Details Required To Activate Your Vehicle Profile, Verify Ownership, And Ensure Accurate Service Support. All Data Is Stored On Protected, Password-Secured Servers And Never Exposed To Unauthorized Access.";

document.getElementById("about-text-2").innerHTML = "We Never Sell, Trade, Or Expose Your Information To Any External Parties, And Every Action Taken With Your Data Follows Transparent, User-Controlled Guidelines. Our Goal Is To Guarantee A Safe, Trusted, And Worry-Free Digital Experience For Every Dragon Motors Driver.";

document.getElementById("about-text-3").innerHTML = "Your Registration Information Is Securely Encrypted And Handled Through Strict Automotive Data-Protection Standards. We Collect Only The Details Required To Activate Your Vehicle Profile, Verify Ownership, And Ensure Accurate Service Support. All Data Is Stored On Protected, Password-Secured Servers And Never Exposed To Unauthorized Access.";

document.getElementById("about-text-4").innerHTML = "We Never Sell, Trade, Or Expose Your Information To Any External Parties, And Every Action Taken With Your Data Follows Transparent, User-Controlled Guidelines. Our Goal Is To Guarantee A Safe, Trusted, And Worry-Free Digital Experience For Every Dragon Motors Driver.";

document.getElementById("about-text-5").innerHTML = "Your Registration Information Is Securely Encrypted And Handled Through Strict Automotive Data-Protection Standards. We Collect Only The Details Required To Activate Your Vehicle Profile, Verify Ownership, And Ensure Accurate Service Support. All Data Is Stored On Protected, Password-Secured Servers And Never Exposed To Unauthorized Access.";

document.getElementById("about-text-6").innerHTML = "We Never Sell, Trade, Or Expose Your Information To Any External Parties, And Every Action Taken With Your Data Follows Transparent, User-Controlled Guidelines. Our Goal Is To Guarantee A Safe, Trusted, And Worry-Free Digital Experience For Every Dragon Motors Driver.";

document.getElementById("about-subtitle").innerHTML = "We Ensure:";

document.getElementById("about-point-1").innerHTML = "Full Encryption Of All Personal And Vehicle-Related Data.";

document.getElementById("about-point-2").innerHTML = "Restricted Internal Access, Limited Only To Verified Service Teams.";

document.getElementById("about-point-3").innerHTML = "No Third-Party Sharing, Ensuring Complete Confidentiality.";

document.getElementById("about-point-4").innerHTML = "Restricted Internal Access, Limited Only To Verified Service Teams.";

document.getElementById("about-point-5").innerHTML = "No Third-Party Sharing, Ensuring Complete Confidentiality.";

document.getElementById("contact-title").innerHTML = "Get In Touch With Us";
document.getElementById("contact-description").innerHTML = "Have questions about Dragon Motors? We're here to help. Send us a message and our team will get back to you within 24 hours.";

document.getElementById("label-name").innerHTML = "Full Name";
document.getElementById("label-email").innerHTML = "Email Address";
document.getElementById("label-message").innerHTML = "Your Message";
document.getElementById("label-verify").innerHTML = "I verify that I have read and agree to the terms";
document.getElementById("contact-submit").innerHTML = "Send Message";
document.getElementById("success-message").innerHTML = "Thank you! Your message has been sent successfully. We'll get back to you soon.";

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
document.getElementById("footer-subtitle").innerHTML = "READY TO DRIVE THE FUTURE?";
document.querySelector("#ctaa-sec55 .footer-cta-text").innerHTML = "Subscribe";
document.querySelector("#ctaa-sec55 .footer-cta-arrow").innerHTML = "→";
document.getElementById("footer-copy").innerHTML = "© Copyright 2024, All Rights Reserved by Exline";


let burger = document.querySelector(".image");
let mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});


let contactForm = document.getElementById("contactForm");
let formSuccess = document.getElementById("formSuccess");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = document.getElementById("contact-name").value;
  let email = document.getElementById("contact-email").value;
  let message = document.getElementById("contact-message").value;
  let verify = document.getElementById("contact-verify").checked;

  if (name && email && message && verify) {
    contactForm.style.display = "none";
    formSuccess.style.display = "block";

    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = "flex";
      formSuccess.style.display = "none";
    }, 5000);
  }
});