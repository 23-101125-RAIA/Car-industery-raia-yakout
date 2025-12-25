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

  if (currentPath.includes('gallery')) {
    setActiveLink('nav-link3');
  } else if (currentPath.includes('about')) {
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

document.getElementById("gallery-title").innerHTML = "A Gallery in Motion";

document.getElementById("gallery-subtitle").innerHTML =
  "Explore a rotating showcase of design, form, and detail. Each frame tells a story — from powerful silhouettes to refined craftsmanship — presented in a seamless 3D experience that moves as beautifully as the machines themselves.";

document.getElementById("gallery-cta").innerHTML = "Explore More";

document.getElementById("gallery-ctaa-text").innerHTML = "Contact Information";


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
document.getElementById("footer-copy").innerHTML = "© Copyright 2024, All Rights Reserved by Exline";

function initGallerySlider() {
  let xPos = 0;
  let autoRotate;

  gsap.timeline()
    .set('.ring-gallery', { rotationY: 180, cursor: 'grab' })
    .set('.img-gallery', {
      rotateY: (i) => i * -36,
      transformOrigin: '50% 50% 800px',
      z: -800,
    backgroundImage: (i) => 'url(img/' + (i + 1) + '.jpg)',

      backgroundPosition: (i) => getBgPos(i),
      backfaceVisibility: 'hidden'
    })
    .from('.img-gallery', {
      duration: 1.5,
      y: 200,
      opacity: 0,
      stagger: 0.1,
      ease: 'expo'
    })
    .add(() => {
      $('.img-gallery').on('mouseenter', (e) => {
        let current = e.currentTarget;
        gsap.to('.img-gallery', {
          opacity: (i, t) => (t === current) ? 1 : 0.5
        });
        stopAutoRotate();
      });

      $('.img-gallery').on('mouseleave', () => {
        gsap.to('.img-gallery', { opacity: 1 });
        startAutoRotate();
      });
    }, '-=0.5');

  function startAutoRotate() {
    autoRotate = gsap.to('.ring-gallery', {
      rotationY: '+=360',
      duration: 40,
      ease: 'none',
      repeat: -1,
      onUpdate: () => {
        gsap.set('.img-gallery', {
          backgroundPosition: (i) => getBgPos(i)
        });
      }
    });
  }

  function stopAutoRotate() {
    if (autoRotate) autoRotate.kill();
  }

  startAutoRotate();

  $(window).on('mousedown touchstart', dragStart);
  $(window).on('mouseup touchend', dragEnd);

  function dragStart(e) {
    if (e.touches) e.clientX = e.touches[0].clientX;
    xPos = Math.round(e.clientX);
    gsap.set('.ring-gallery', { cursor: 'grabbing' });
    stopAutoRotate();
    $(window).on('mousemove touchmove', drag);
  }

  function drag(e) {
    if (e.touches) e.clientX = e.touches[0].clientX;

    gsap.to('.ring-gallery', {
      rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
      onUpdate: () => {
        gsap.set('.img-gallery', {
          backgroundPosition: (i) => getBgPos(i)
        });
      }
    });

    xPos = Math.round(e.clientX);
  }

  function dragEnd() {
    $(window).off('mousemove touchmove', drag);
    gsap.set('.ring-gallery', { cursor: 'grab' });
    startAutoRotate();
  }

  function getBgPos(i) {
    return (
      (100 -
        gsap.utils.wrap(
          0,
          360,
          gsap.getProperty('.ring-gallery', 'rotationY') - 180 - i * 36
        ) /
        360) *
        800 +
      'px 0px'
    );
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

  if (currentPath.includes('gallery')) {
    setActiveLink('nav-link3');
  } else if (currentPath.includes('about')) {
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

document.addEventListener("DOMContentLoaded", () => {
  initGallerySlider();
});
