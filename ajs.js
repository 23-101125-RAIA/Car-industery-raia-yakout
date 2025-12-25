window.addEventListener("load", () => {
  setTimeout(() => {
    let preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  }, 4000);
  
  setAllText();
  setupContactForm();
});

function setAllText() {
  const elem = (id) => document.getElementById(id);
  const query = (selector) => document.querySelector(selector);

  if (elem("nav-link1")) elem("nav-link1").innerHTML = "Home";
  if (elem("nav-link2")) elem("nav-link2").innerHTML = "Products";
  if (elem("nav-link3")) elem("nav-link3").innerHTML = "Gallery";
  if (elem("nav-link4")) elem("nav-link4").innerHTML = "About";

  if (elem("mobile-link1")) elem("mobile-link1").innerHTML = "Home";
  if (elem("mobile-link2")) elem("mobile-link2").innerHTML = "Products";
  if (elem("mobile-link3")) elem("mobile-link3").innerHTML = "Gallery";
  if (elem("mobile-link4")) elem("mobile-link4").innerHTML = "About";

  if (elem("about-title")) elem("about-title").innerHTML = "DRAGON MOTORS: <br>  ABOUT EFFICIENCY";
  if (elem("about-cta")) elem("about-cta").innerHTML = "Pre-Order Now";
  if (elem("about-ctaa-text")) elem("about-ctaa-text").innerHTML = "Learn More";

  if (elem("about-text-1")) elem("about-text-1").innerHTML = "Your Registration Information Is Securely Encrypted And Handled Through Strict Automotive Data-Protection Standards. We Collect Only The Details Required To Activate Your Vehicle Profile, Verify Ownership, And Ensure Accurate Service Support. All Data Is Stored On Protected, Password-Secured Servers And Never Exposed To Unauthorized Access.";

  if (elem("about-text-2")) elem("about-text-2").innerHTML = "We Never Sell, Trade, Or Expose Your Information To Any External Parties, And Every Action Taken With Your Data Follows Transparent, User-Controlled Guidelines. Our Goal Is To Guarantee A Safe, Trusted, And Worry-Free Digital Experience For Every Dragon Motors Driver.";

  if (elem("about-text-3")) elem("about-text-3").innerHTML = "Your Registration Information Is Securely Encrypted And Handled Through Strict Automotive Data-Protection Standards. We Collect Only The Details Required To Activate Your Vehicle Profile, Verify Ownership, And Ensure Accurate Service Support. All Data Is Stored On Protected, Password-Secured Servers And Never Exposed To Unauthorized Access.";

  if (elem("about-text-4")) elem("about-text-4").innerHTML = "We Never Sell, Trade, Or Expose Your Information To Any External Parties, And Every Action Taken With Your Data Follows Transparent, User-Controlled Guidelines. Our Goal Is To Guarantee A Safe, Trusted, And Worry-Free Digital Experience For Every Dragon Motors Driver.";

  if (elem("about-text-5")) elem("about-text-5").innerHTML = "Your Registration Information Is Securely Encrypted And Handled Through Strict Automotive Data-Protection Standards. We Collect Only The Details Required To Activate Your Vehicle Profile, Verify Ownership, And Ensure Accurate Service Support. All Data Is Stored On Protected, Password-Secured Servers And Never Exposed To Unauthorized Access.";

  if (elem("about-text-6")) elem("about-text-6").innerHTML = "We Never Sell, Trade, Or Expose Your Information To Any External Parties, And Every Action Taken With Your Data Follows Transparent, User-Controlled Guidelines. Our Goal Is To Guarantee A Safe, Trusted, And Worry-Free Digital Experience For Every Dragon Motors Driver.";

  if (elem("about-subtitle")) elem("about-subtitle").innerHTML = "We Ensure:";

  if (elem("about-point-1")) elem("about-point-1").innerHTML = "Full Encryption Of All Personal And Vehicle-Related Data.";

  if (elem("about-point-2")) elem("about-point-2").innerHTML = "Restricted Internal Access, Limited Only To Verified Service Teams.";

  if (elem("about-point-3")) elem("about-point-3").innerHTML = "No Third-Party Sharing, Ensuring Complete Confidentiality.";

  if (elem("about-point-4")) elem("about-point-4").innerHTML = "Restricted Internal Access, Limited Only To Verified Service Teams.";

  if (elem("about-point-5")) elem("about-point-5").innerHTML = "No Third-Party Sharing, Ensuring Complete Confidentiality.";

  if (elem("contact-title")) elem("contact-title").innerHTML = "Get In Touch With Us";
  if (elem("contact-description")) elem("contact-description").innerHTML = "Have questions about Dragon Motors? We're here to help. Send us a message and our team will get back to you within 24 hours.";

  if (elem("label-name")) elem("label-name").innerHTML = "Full Name";
  if (elem("label-email")) elem("label-email").innerHTML = "Email Address";
  if (elem("label-message")) elem("label-message").innerHTML = "Your Message";
  if (elem("label-verify")) elem("label-verify").innerHTML = "I verify that I have read and agree to the terms";
  if (elem("contact-submit")) elem("contact-submit").innerHTML = "Send Message";
  if (elem("success-message")) elem("success-message").innerHTML = "Thank you! Your message has been sent successfully. We'll get back to you soon.";

  if (elem("footer-brand-name")) elem("footer-brand-name").innerHTML = "Dragon Motors";
  if (elem("footer-company")) elem("footer-company").innerHTML = "Company";
  if (elem("footer-about")) elem("footer-about").innerHTML = "About Us";
  if (elem("footer-careers")) elem("footer-careers").innerHTML = "Careers";
  if (elem("footer-services")) elem("footer-services").innerHTML = "Services";
  if (elem("footer-vehicles")) elem("footer-vehicles").innerHTML = "Vehicles";
  if (elem("footer-pricing")) elem("footer-pricing").innerHTML = "Pricing";
  if (elem("footer-support")) elem("footer-support").innerHTML = "Support";
  if (elem("footer-faqs")) elem("footer-faqs").innerHTML = "FAQs";
  if (elem("footer-contact")) elem("footer-contact").innerHTML = "Contact";
  if (elem("footer-subtitle")) elem("footer-subtitle").innerHTML = "READY TO DRIVE THE FUTURE?";
  if (elem("footer-input")) elem("footer-input").placeholder = "Enter your Email";
  if (query("#ctaa-sec55 .footer-cta-text")) query("#ctaa-sec55 .footer-cta-text").innerHTML = "Subscribe";
  if (elem("footer-copy")) elem("footer-copy").innerHTML = "© Copyright 2024, All Rights Reserved by Exline";
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");

  if (form && successMessage) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value;
      const email = document.getElementById("contact-email").value;
      const message = document.getElementById("contact-message").value;
      const verify = document.getElementById("contact-verify").checked;

      if (name && email && message && verify) {
        form.style.display = "none";
        successMessage.style.display = "block";

        setTimeout(() => {
          form.reset();
          form.style.display = "flex";
          successMessage.style.display = "none";
        }, 5000);
      }
    });
  }
}

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
  } else if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
    setActiveLink('nav-link1');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setAllText();
  highlightActiveLink();
  setupContactForm();
});

window.addEventListener('load', () => {
  highlightActiveLink();
  setAllText();
});

let burger = document.querySelector(".image");
let mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}