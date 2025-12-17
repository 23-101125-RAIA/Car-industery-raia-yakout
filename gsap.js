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

const heroTitle = document.getElementById("section1-title");
if (heroTitle) {
  gsap.from(heroTitle, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: 2.5,
    ease: "power3.out"
  });
}

gsap.from(".hero-3d-div", {
  x: -300,
  opacity: 0,
  rotation: 10,
  duration: 1.2,
  delay: 2.8,
  ease: "power3.out"
});

gsap.to(".hero-3d", {
  y: 0,
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 3.5
});

gsap.set(".section2, .section2 *, .slider-section, .slider-section *, .section4, .section4 *, .section5, .section5 *, .fqa-section, .fqa-section *, .footer, .footer *", {
  opacity: 0
});

ScrollTrigger.create({
  trigger: ".section2",
  start: "top 80%",
  once: true,
  onEnter: () => {
    gsap.set(".section2, .section2 *", { opacity: 1 });
    
    gsap.from("#title-sec2", {
      opacity: 0,
      x: -100,
      duration: 0.8,
      ease: "power3.out"
    });
    
    gsap.from("#text-sec2", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out"
    });
    
    gsap.from("#cta-sec2", {
      opacity: 0,
      scale: 0.8,
      y: 30,
      duration: 0.6,
      delay: 0.25,
      ease: "back.out(1.7)",
      clearProps: "all"
    });
    
    gsap.from(".stat-box", {
      opacity: 0,
      x: -100,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
      ease: "power2.out"
    });
    
    gsap.from(".mini-stat", {
      opacity: 0,
      x: 100,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      ease: "power2.out"
    });
  }
});

ScrollTrigger.create({
  trigger: ".section3",
  start: "top 75%",
  once: true,
  onEnter: () => {
    gsap.from("#title-sec3", {
      opacity: 0,
      scale: 0.9,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    });
    
    gsap.from("#cta-sec3", {
      opacity: 0,
      x: -50,
      duration: 0.6,
      delay: 0.2,
      ease: "back.out(1.5)",
      clearProps: "all"
    });
    
    gsap.from("#ctaa-sec3", {
      opacity: 0,
      x: 50,
      duration: 0.6,
      delay: 0.25,
      ease: "back.out(1.5)",
      clearProps: "all"
    });
  }
});

ScrollTrigger.create({
  trigger: ".slider-section",
  start: "top 80%",
  once: true,
  onEnter: () => {
    gsap.set(".slider-section, .slider-section *", { opacity: 1 });
  }
});

ScrollTrigger.create({
  trigger: ".section4",
  start: "top 70%",
  once: true,
  onEnter: () => {
    gsap.set(".section4, .section4 *", { opacity: 1 });
    
    gsap.from("#title-sec4", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out"
    });
    
    gsap.utils.toArray(".section4-card").forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.6,
        delay: 0.2 + (i * 0.15),
        ease: "power3.out"
      });
    });
  }
});

gsap.utils.toArray(".section4-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const icon = card.querySelector(".section4-icon");
    gsap.to(icon, {
      scale: 1.15,
      duration: 0.4,
      ease: "back.out(1.5)"
    });
  });
  
  card.addEventListener("mouseleave", () => {
    const icon = card.querySelector(".section4-icon");
    gsap.to(icon, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});

ScrollTrigger.create({
  trigger: ".section5",
  start: "top 70%",
  once: true,
  onEnter: () => {
    gsap.set(".section5, .section5 *", { opacity: 1 });
    
    gsap.from("#title-sec5", {
      opacity: 0,
      x: -80,
      duration: 0.8,
      ease: "power3.out"
    });
    
    gsap.from(".section5-text-row", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out"
    });
    
    gsap.from("#cta-main-sec5", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      delay: 0.25,
      ease: "back.out(1.5)",
      clearProps: "all"
    });
    
    gsap.from("#cta-second-text-sec5", {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      delay: 0.3,
      ease: "back.out(1.5)",
      clearProps: "all"
    });
    
    gsap.from(".section5-card", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      ease: "power2.out"
    });
    
    gsap.from(".section5-big-card", {
      opacity: 0,
      x: 150,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });
    
    gsap.from("#bigcard-title", {
      opacity: 0,
      y: -30,
      duration: 0.6,
      delay: 0.7,
      ease: "power2.out"
    });
  }
});

gsap.from(".section5-cta-row button", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.08,
  scrollTrigger: {
    trigger: ".section5-cta-row",
    start: "top 85%",
    once: true
  },
  ease: "power2.out",
  clearProps: "all"
});

ScrollTrigger.create({
  trigger: ".fqa-section",
  start: "top 75%",
  once: true,
  onEnter: () => {
    gsap.set(".fqa-section, .fqa-section *", { opacity: 1 });
    
    gsap.from("#faq-title", {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.out"
    });
    
    gsap.utils.toArray(".fqa-box").forEach((box, i) => {
      gsap.from(box, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        delay: 0.2 + (i * 0.15),
        ease: "power2.out"
      });
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

gsap.utils.toArray(".cta, .ctaa, .cta-btn").forEach(btn => {
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
  const parent = arrow.closest("button, .footer-cta");
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

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});