window.addEventListener("load", () => {
  setTimeout(() => {
    let preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  }, 4000);
  
  setAllText();
  setupModelSwitching();
  setupCameraButtons();
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

  if (elem("P2-view-front")) elem("P2-view-front").innerHTML = "Front";
  if (elem("P2-view-side")) elem("P2-view-side").innerHTML = "Side";
  if (elem("P2-view-back")) elem("P2-view-back").innerHTML = "Back";

  const path = window.location.pathname;
  if (path.includes('product4.html') || !path.includes('product')) {
    if (elem("title-sec2")) elem("title-sec2").innerHTML = "Nissan GT-R Premium";
    if (elem("text-sec2")) elem("text-sec2").innerHTML = "Nissan GT-R Premium blends lightweight engineering with a powerful aerodynamic profile, giving drivers an exhilarating balance of speed and control. Its sculpted chassis is built for precision cornering, offering an ultra-responsive driving experience. Inside, the Evora GT combines track-level performance with refined comfort, making it a true everyday sports machine. ultra-responsive driving experience. Inside, the Evora GT combines track-level performance with refined comfort, making it a true everyday sports machine. ultra-responsive driving experience. Inside, the Evora GT combines track-level performance with refined comfort, making it a true everyday sports machine.";
  }

  if (elem("subtitle-sec2")) elem("subtitle-sec2").innerHTML = "5G";
  if (elem("subtext-sec2-3")) elem("subtext-sec2-3").innerHTML = "Smart Connectivity";
  if (elem("subtitle-sec2-1")) elem("subtitle-sec2-1").innerHTML = "80k";
  if (elem("subtext-sec2-4")) elem("subtext-sec2-4").innerHTML = "Fast-Charging System";

  if (elem("cta-sec3")) elem("cta-sec3").innerHTML = "Register Now";
  if (query("#ctaa-sec3 .ctaa-text")) query("#ctaa-sec3 .ctaa-text").innerHTML = "Contact Us";
  if (query("#ctaa-sec3 .cta-arrow")) query("#ctaa-sec3 .cta-arrow").innerHTML = "→";

  if (elem("title-sec6")) elem("title-sec6").innerHTML = "Wheel Options";
  if (elem("title1-sec6-card1")) elem("title1-sec6-card1").innerHTML = "Germany Ultra-Grip Tire";
  if (elem("title1-sec6-card2")) elem("title1-sec6-card2").innerHTML = "  USA TrackMax Tire";
  if (elem("title1-sec6-card3")) elem("title1-sec6-card3").innerHTML = "Italy HyperSport Slick";

  if (elem("title-sec5")) elem("title-sec5").innerHTML = "Premium Wheel Technology";
  if (elem("desc-sec5")) elem("desc-sec5").innerHTML = "Crafted to deliver maximum grip and endurance, the German-engineered improves handling during rapid acceleration and tire enhances stability at high speeds and ensures optimal traction in sharp turns and a smoother ride on both track and street.. Known for durability and quiet rolling, these wheels provide exceptional performance on both dry tracks and everyday roads.";

  if (elem("card1-title")) elem("card1-title").innerHTML = "Futuristic Aerodynamics";
  if (elem("card1-text")) elem("card1-text").innerHTML = "Reduced air drag for maximum performance.";

  if (elem("card2-title")) elem("card2-title").innerHTML = "Sustainable Materials";
  if (elem("card2-text")) elem("card2-text").innerHTML = "Advanced AI durability with minimal waste.";

  if (elem("bigcard-title")) elem("bigcard-title").innerHTML = "Smart  Car Motor";

  if (elem("bigcard-title-1")) elem("bigcard-title-1").innerHTML = "Smart Wing System";

  if (elem("title-sec5-1")) elem("title-sec5-1").innerHTML = "Aerodynamic Rear Wing System";
  if (elem("desc-sec5-1")) elem("desc-sec5-1").innerHTML = "The rear wing generates controlled downforce that stabilizes the car at high speeds and improves handling during rapid acceleration. Designed for airflow efficiency, it reduces drag while keeping the vehicle planted firmly to the ground. This system ensures sharper control, superior cornering, and a smoother ride on both track and street. Known for durability and quiet rolling, these wheels provide exceptional performance on both dry tracks .";

  if (elem("card1-title-1")) elem("card1-title-1").innerHTML = "Airflow Efficiency";
  if (elem("card1-text-1")) elem("card1-text-1").innerHTML = "Reduced air drag for maximum performance.";

  if (elem("card2-title-1")) elem("card2-title-1").innerHTML = "Vehicle Materials";
  if (elem("card2-text-1")) elem("card2-text-1").innerHTML = "Advanced AI durability with minimal waste.";

  if (elem("card2-title-2")) elem("card2-title-2").innerHTML = "Rapid Acceleration";
  if (elem("card2-text-2")) elem("card2-text-2").innerHTML = "Advanced AI durability with minimal waste.";

  if (elem("title-sec7")) elem("title-sec7").innerHTML = "Motor Technology & Labels";

  if (elem("hotspot1-title")) elem("hotspot1-title").innerHTML = "Turbo Air Intake";
  if (elem("hotspot1-desc")) elem("hotspot1-desc").innerHTML = "Turbo Air Intake – Channels compressed air into the engine for higher torque and faster acceleration.";

  if (elem("hotspot2-title")) elem("hotspot2-title").innerHTML = "High- Cooling Core";
  if (elem("hotspot2-desc")) elem("hotspot2-desc").innerHTML = "Advanced cooling system that maintains optimal engine temperature during high-performance operations.";

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
  if (query("#ctaa-sec55 .footer-cta-arrow")) query("#ctaa-sec55 .footer-cta-arrow").innerHTML = "→";
  if (elem("footer-copy")) elem("footer-copy").innerHTML = "© Copyright 2024, All Rights Reserved by Exline";

  if (elem("title-sec8")) elem("title-sec8").innerHTML = "Privacy & Registration Policy";
  if (elem("cta-sec8")) elem("cta-sec8").innerHTML = "Get Started";
  if (query("#ctaa-sec8 .ctaa-text-sec8")) query("#ctaa-sec8 .ctaa-text-sec8").innerHTML = "Learn More";
  if (query("#ctaa-sec8 .cta-arrow")) query("#ctaa-sec8 .cta-arrow").innerHTML = "→";
  if (elem("text-sec8-1")) elem("text-sec8-1").innerHTML = "We prioritize your privacy and security. Our registration process is designed to protect your personal information while providing you with seamless access to our services.";
  if (elem("text-sec8-2")) elem("text-sec8-2").innerHTML = "All data collected during registration is encrypted and stored securely. We never share your information with third parties without your explicit consent. Review our complete privacy policy for detailed information.";
  if (elem("text1-sec8-bottom")) elem("text1-sec8-bottom").innerHTML = "Experience Innovation";
  if (elem("text-sec8-bottom")) elem("text-sec8-bottom").innerHTML = "Full encryption of all personal and vehicle-related data.<br><br>Restricted internal access, limited only to verified service teams.<br><br>No third-party sharing, ensuring complete confidentiality.";
}

function setupModelSwitching() {
  const circles = document.querySelectorAll('.circles .circle');
  const modelViewer = document.getElementById('P2-section1Model');

  if (circles.length > 0 && modelViewer) {
    circles.forEach(circle => {
      circle.addEventListener('click', function() {
        circles.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        const modelPath = this.getAttribute('data-model');
        if (modelPath) {
          modelViewer.setAttribute('src', modelPath);
        }
      });
    });
  }
}

function setupCameraButtons() {
  const heroModel = document.getElementById("P2-section1Model");
  const heroButtons = document.querySelectorAll(".cta-text");
  
  const positions = {
    front: "0deg 90deg 2m",
    side: "90deg 90deg 0.2m",
    back: "180deg 90deg 3m"
  };

  if (heroModel) {
    heroModel.addEventListener("load", () => {
      heroModel.setAttribute("camera-orbit", "55deg 75deg 3m");
    });
  }

  if (heroButtons.length > 0) {
    heroButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        heroButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        if (heroModel) {
          const pos = btn.getAttribute('data-pos');
          if (pos && positions[pos]) {
            heroModel.setAttribute("camera-orbit", positions[pos]);
          }
        }
      });
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

  if (currentPath.includes('product')) {
    setActiveLink('nav-link2');
  } else if (currentPath.includes('index.html') || currentPath === '/' || currentPath.endsWith('/')) {
    setActiveLink('nav-link1');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setAllText();
  highlightActiveLink();
  setupModelSwitching();
  setupCameraButtons();

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

  const modelViewer = document.getElementById("P2-section1Model");
  const colorCircle = document.querySelector(".circle.c3");
  const colorPicker = document.getElementById("colorPicker");

  if (colorCircle && colorPicker && modelViewer) {
    colorCircle.addEventListener("click", () => {
      colorPicker.click();
    });

    colorPicker.addEventListener("input", (event) => {
      const color = event.target.value;
      colorCircle.style.backgroundColor = color;

      modelViewer.addEventListener('load', function applyColor() {
        if (modelViewer.model && modelViewer.model.materials) {
          const materials = modelViewer.model.materials;
          const bodyMaterial = materials.find(m =>
            m.name.toLowerCase().includes('body') ||
            m.name.toLowerCase().includes('paint') ||
            m.name.toLowerCase().includes('car') ||
            m.name.toLowerCase().includes('exterior')
          ) || materials[0];

          if (bodyMaterial) {
            bodyMaterial.pbrMetallicRoughness.setBaseColorFactor(color);
          }
        }
        modelViewer.removeEventListener('load', applyColor);
      });

      if (modelViewer.model && modelViewer.model.materials) {
        const materials = modelViewer.model.materials;
        const bodyMaterial = materials.find(m =>
          m.name.toLowerCase().includes('body') ||
          m.name.toLowerCase().includes('paint') ||
          m.name.toLowerCase().includes('car') ||
          m.name.toLowerCase().includes('exterior')
        ) || materials[0];

        if (bodyMaterial) {
          bodyMaterial.pbrMetallicRoughness.setBaseColorFactor(color);
        }
      }
    });
  }
});

window.addEventListener('load', () => {
  highlightActiveLink();
  setAllText();
  setupModelSwitching();
  setupCameraButtons();
});

let burger = document.querySelector(".image");
let mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}


function setupProgressBars() {
  const modelViewers = document.querySelectorAll('model-viewer');
  
  modelViewers.forEach(viewer => {
    const progressBar = viewer.querySelector('.progress-bar');
    const updateBar = viewer.querySelector('.update-bar');
    
    if (!progressBar || !updateBar) return;
    
    if (viewer.loaded) {
      progressBar.classList.add('hide');
      return;
    }
    
    progressBar.classList.remove('hide');
    
    viewer.addEventListener('progress', (event) => {
      const progress = event.detail.totalProgress;
      updateBar.style.width = `${progress * 100}%`;
    });
    
    viewer.addEventListener('load', () => {
      updateBar.style.width = '100%';
      setTimeout(() => {
        progressBar.classList.add('hide');
      }, 300);
    });
    
    setTimeout(() => {
      if (!viewer.loaded) {
        progressBar.classList.add('hide');
      }
    }, 5000);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    let preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
    
    setupProgressBars();
  }, 4000);
  
  setAllText();
  setupModelSwitching();
  setupCameraButtons();
});

document.addEventListener('DOMContentLoaded', () => {
  setupProgressBars();
});