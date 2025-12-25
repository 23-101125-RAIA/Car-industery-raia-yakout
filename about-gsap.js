gsap.registerPlugin(ScrollTrigger);

gsap.to("#preloader", {
  opacity: 0,
  duration: 0.6,
  delay: 1.5,
  ease: "power2.inOut"
});

gsap.from("header", {
  y: -100,
  opacity: 0,
  duration: 0.8,
  delay: 2,
  ease: "power3.out",
  clearProps: "y,opacity"
});

gsap.from(".logoo", {
  scale: 0.8,
  opacity: 0,
  rotation: -180,
  duration: 1,
  delay: 2.1,
  ease: "elastic.out(1, 0.5)",
  clearProps: "all"
});

gsap.from(".logo", {
  scale: 0.8,
  opacity: 0,
  rotation: -180,
  duration: 1,
  delay: 2.1,
  ease: "elastic.out(1, 0.5)",
  clearProps: "all"
});

gsap.from(".nav-link", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  delay: 2.2,
  ease: "power2.out",
  clearProps: "all"
});

gsap.from(".image", {
  scale: 0,
  opacity: 0,
  rotation: 180,
  duration: 0.6,
  delay: 2.4,
  ease: "back.out(1.7)",
  clearProps: "all"
});

gsap.from(".aboutSection", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 2.5,
  ease: "power3.out"
});

gsap.from(".section8-top .title", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 2.8,
  ease: "power3.out"
});

gsap.from(".section8 #about-cta", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  delay: 3,
  ease: "back.out(1.5)",
  clearProps: "all"
});

gsap.from(".section8 #about-ctaa", {
  opacity: 0,
  scale: 0.8,
  duration: 0.6,
  delay: 3.1,
  ease: "back.out(1.5)",
  clearProps: "all"
});

gsap.from(".section8-middle .text", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  stagger: 0.1,
  delay: 3.3,
  ease: "power2.out"
});

gsap.from(".section8-bottom-left", {
  opacity: 0,
  x: -60,
  duration: 0.8,
  delay: 3.5,
  ease: "power2.out"
});

gsap.from(".section8-bottom-left .text1", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  delay: 3.7,
  ease: "power2.out"
});

gsap.from(".section8-bottom-left .text", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  delay: 3.8,
  ease: "power2.out"
});

gsap.from(".section8-bottom-right", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 3.9,
  ease: "power3.out"
});

gsap.from(".about-model", {
  opacity: 0,
  rotationY: 180,
  duration: 1.2,
  delay: 4.1,
  ease: "power3.out"
});

gsap.set(".contact-section, .contact-section *, .footer, .footer *", {
  opacity: 0
});

ScrollTrigger.create({
  trigger: ".contact-section",
  start: "top 75%",
  once: true,
  onEnter: () => {
    gsap.set(".contact-section, .contact-section *", { opacity: 1 });

    gsap.from(".contact-section .title", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".contact-section .text", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out"
    });

    gsap.from(".contact-form", {
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      delay: 0.3,
      ease: "power3.out"
    });

    gsap.from(".form-group", {
      opacity: 0,
      x: -30,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.5,
      ease: "power2.out"
    });

    gsap.from(".form-checkbox", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.8,
      ease: "power2.out"
    });

    gsap.from(".form-submit", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: 0.9,
      ease: "back.out(1.5)",
      clearProps: "all"
    });
  }
});

ScrollTrigger.create({
  trigger: ".footer",
  start: "top 85%",
  once: true,
  onEnter: () => {
    gsap.set(".footer, .footer *", { opacity: 1 });

    gsap.from(".footer-logo", {
      opacity: 0,
      scale: 0.8,
      rotation: -360,
      duration: 0.8,
      ease: "back.out(1.5)"
    });

    gsap.from(".footer-brand .title1", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.1,
      ease: "power2.out"
    });

    gsap.from(".footer-link", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.04,
      delay: 0.15,
      ease: "power2.out"
    });

    gsap.from(".footer-subscribe", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.3,
      ease: "power2.out"
    });

    gsap.from(".footer-bottom", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      delay: 0.45,
      ease: "power2.out"
    });
  }
});

gsap.utils.toArray(".cta, .ctaa, .cta-btn, .cta-text").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

gsap.utils.toArray(".cta-arrow, .footer-cta-arrow").forEach(arrow => {
  let parent = arrow.closest("button, .footer-cta");
  if (parent) {
    parent.addEventListener("mouseenter", () => {
      gsap.to(arrow, {
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    parent.addEventListener("mouseleave", () => {
      gsap.to(arrow, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  }
});

gsap.utils.toArray(".form-input, .form-textarea").forEach(input => {
  input.addEventListener("focus", () => {
    gsap.to(input, {
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  input.addEventListener("blur", () => {
    gsap.to(input, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("formSuccess");

if (form && successMessage) {
  form.addEventListener("submit", (e) => {
    gsap.to(".contact-form", {
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.in",
      onComplete: () => {
        form.style.display = "none";
        successMessage.style.display = "block";
        
        gsap.fromTo(".form-success",
          { opacity: 0, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.6, 
            ease: "back.out(1.5)" 
          }
        );
      }
    });
  });
}

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});