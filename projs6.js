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

  if (currentPath.includes('product')) {
    setActiveLink('nav-link2');
  } else if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
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

document.getElementById("P2-view-front").innerHTML = "Front";
document.getElementById("P2-view-side").innerHTML = "Side";
document.getElementById("P2-view-back").innerHTML = "Back";

const path = window.location.pathname;
if (path.includes('product6.html') || !path.includes('product')) {
  document.getElementById("title-sec2").innerHTML = "Nissan Z Nismo";
  document.getElementById("text-sec2").innerHTML = "Nissan Z Nismo blends lightweight engineering with a powerful aerodynamic profile, giving drivers an exhilarating balance of speed and control. Its sculpted chassis is built for precision cornering, offering an ultra-responsive driving experience. Inside, the Evora GT combines track-level performance with refined comfort, making it a true everyday sports machine. ultra-responsive driving experience. Inside, the Evora GT combines track-level performance with refined comfort, making it a true everyday sports machine. ultra-responsive driving experience. Inside, the Evora GT combines track-level performance with refined comfort, making it a true everyday sports machine.";
}

document.getElementById("subtitle-sec2").innerHTML = "5G";
document.getElementById("subtext-sec2-3").innerHTML = "Smart Connectivity";
document.getElementById("subtitle-sec2-1").innerHTML = "80k";
document.getElementById("subtext-sec2-4").innerHTML = "Fast-Charging System";

document.getElementById("cta-sec3").innerHTML = "Register Now";
document.querySelector("#ctaa-sec3 .ctaa-text").innerHTML = "Contact Us";
document.querySelector("#ctaa-sec3 .cta-arrow").innerHTML = "→";

document.getElementById("title-sec6").innerHTML = "Wheel Options";
document.getElementById("title1-sec6-card1").innerHTML = "Japan Nismo Tire";
document.getElementById("title1-sec6-card2").innerHTML = " USA StreetSport Tire";
document.getElementById("title1-sec6-card3").innerHTML = "Italy Pro-Cornering Tire";

document.getElementById("title-sec5").innerHTML = "Premium Wheel Technology";
document.getElementById("desc-sec5").innerHTML = "Crafted to deliver maximum grip and endurance, the German-engineered improves handling during rapid acceleration and tire enhances stability at high speeds and ensures optimal traction in sharp turns and a smoother ride on both track and street.. Known for durability and quiet rolling, these wheels provide exceptional performance on both dry tracks and everyday roads.";

document.getElementById("card1-title").innerHTML = "Futuristic Aerodynamics";
document.getElementById("card1-text").innerHTML = "Reduced air drag for maximum performance.";

document.getElementById("card2-title").innerHTML = "Sustainable Materials";
document.getElementById("card2-text").innerHTML = "Advanced AI durability with minimal waste.";

document.getElementById("bigcard-title").innerHTML = "Smart  Car Motor";

document.getElementById("bigcard-title-1").innerHTML = "Smart Wing System";

document.getElementById("title-sec5-1").innerHTML = "Aerodynamic Rear Wing System";
document.getElementById("desc-sec5-1").innerHTML = "The rear wing generates controlled downforce that stabilizes the car at high speeds and improves handling during rapid acceleration. Designed for airflow efficiency, it reduces drag while keeping the vehicle planted firmly to the ground. This system ensures sharper control, superior cornering, and a smoother ride on both track and street. Known for durability and quiet rolling, these wheels provide exceptional performance on both dry tracks .";

document.getElementById("card1-title-1").innerHTML = "Airflow Efficiency";
document.getElementById("card1-text-1").innerHTML = "Reduced air drag for maximum performance.";

document.getElementById("card2-title-1").innerHTML = "Vehicle Materials";
document.getElementById("card2-text-1").innerHTML = "Advanced AI durability with minimal waste.";

document.getElementById("card2-title-2").innerHTML = "Rapid Acceleration";
document.getElementById("card2-text-2").innerHTML = "Advanced AI durability with minimal waste.";

document.getElementById("title-sec7").innerHTML = "Motor Technology & Labels";

document.getElementById("hotspot1-title").innerHTML = "Turbo Air Intake";
document.getElementById("hotspot1-desc").innerHTML = "Turbo Air Intake – Channels compressed air into the engine for higher torque and faster acceleration.";

document.getElementById("hotspot2-title").innerHTML = "High- Cooling Core";
document.getElementById("hotspot2-desc").innerHTML = "Advanced cooling system that maintains optimal engine temperature during high-performance operations.";

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
document.getElementById("footer-input").placeholder = "Enter your Email";
document.querySelector("#ctaa-sec55 .footer-cta-text").innerHTML = "Subscribe";
document.querySelector("#ctaa-sec55 .footer-cta-arrow").innerHTML = "→";
document.getElementById("footer-copy").innerHTML = "© Copyright 2024, All Rights Reserved by Exline";

document.getElementById("title-sec8").innerHTML = "Privacy & Registration Policy";
document.getElementById("cta-sec8").innerHTML = "Get Started";
document.querySelector("#ctaa-sec8 .ctaa-text-sec8").innerHTML = "Learn More";
document.querySelector("#ctaa-sec8 .cta-arrow").innerHTML = "→";
document.getElementById("text-sec8-1").innerHTML = "We prioritize your privacy and security. Our registration process is designed to protect your personal information while providing you with seamless access to our services.";
document.getElementById("text-sec8-2").innerHTML = "All data collected during registration is encrypted and stored securely. We never share your information with third parties without your explicit consent. Review our complete privacy policy for detailed information.";
document.getElementById("text1-sec8-bottom").innerHTML = "Experience Innovation";
document.getElementById("text-sec8-bottom").innerHTML = "Full encryption of all personal and vehicle-related data.<br><br>Restricted internal access, limited only to verified service teams.<br><br>No third-party sharing, ensuring complete confidentiality.";

let burger = document.querySelector(".image");
let mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

let heroModel = document.getElementById("P2-section1Model");
let heroButtons = document.querySelectorAll(".cta-text");

let positions = {
  front: "0deg 90deg 2m",
  side: "90deg 90deg 0.2m",
  back: "180deg 90deg 3m"
};

heroModel.addEventListener("load", () => {
  heroModel.setAttribute("camera-orbit", "55deg 75deg 3m");
});

heroButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    heroButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    heroModel.setAttribute("camera-orbit", positions[btn.dataset.pos]);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let hotspots = document.querySelectorAll('.hotspot');

  hotspots.forEach((hotspot) => {
    hotspot.addEventListener('click', function (e) {
      e.stopPropagation();

      this.classList.toggle('active');

      hotspots.forEach((other) => {
        if (other !== this) {
          other.classList.remove('active');
        }
      });
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.hotspot')) {
      hotspots.forEach(hotspot => {
        hotspot.classList.remove('active');
      });
    }
  });
});