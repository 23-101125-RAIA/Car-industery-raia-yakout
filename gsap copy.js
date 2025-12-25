gsap.registerPlugin(ScrollTrigger);

gsap.to("#preloader", {
  opacity: 0,
  duration: 0.6,
  delay: 1.5,
  ease: "power2.inOut",
  onComplete: () => {
    const el = document.getElementById("preloader");
    if (el) el.style.display = "none";
  }
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


gsap.set(["#title-sec2", ".stat-box"], { opacity: 0, x: -100 });
gsap.set(["#text-sec2", "#title-sec3", ".slider-section", ".section5-text-row", ".fqa-box", ".footer-subscribe"], { opacity: 0, y: 30 });
gsap.set("#cta-sec2", { opacity: 0, scale: 0.8, y: 30 });
gsap.set(".mini-stat", { opacity: 0, x: 100 });
gsap.set("#cta-sec3", { opacity: 0, x: -50 });
gsap.set("#ctaa-sec3", { opacity: 0, x: 50 });
gsap.set("#title-sec4", { opacity: 0, y: 50 });
gsap.set(".section4-card", { opacity: 0, y: 60 });
gsap.set("#title-sec5", { opacity: 0, x: -80 });
gsap.set(["#cta-main-sec5", "#cta-second-text-sec5"], { opacity: 0, scale: 0.8 });
gsap.set(".section5-card", { opacity: 0, y: 50 });
gsap.set(".section5-big-card", { opacity: 0, x: 150 });
gsap.set("#bigcard-title", { opacity: 0, y: -30 });
gsap.set(".section5-cta-row button", { opacity: 0, y: 20 });
gsap.set("#faq-title", { opacity: 0, scale: 0.9 });
gsap.set(".footer-logo", { opacity: 0, scale: 0.8, rotation: -360 });
gsap.set([".footer-link", ".footer-bottom"], { opacity: 0, y: 20 });

ScrollTrigger.create({
  trigger: ".section2",
  start: "top 80%",
  once: true,
  onEnter: () => {
    gsap.to("#title-sec2", {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.to("#text-sec2", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out"
    });

    gsap.to("#cta-sec2", {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.6,
      delay: 0.25,
      ease: "back.out(1.7)",
      clearProps: "all"
    });

    gsap.to(".stat-box", {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.3,
      ease: "power2.out"
    });

    gsap.to(".mini-stat", {
      opacity: 1,
      x: 0,
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
    gsap.to("#title-sec3", {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.to("#cta-sec3", {
      opacity: 1,
      x: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "back.out(1.5)",
      clearProps: "all"
    });

    gsap.to("#ctaa-sec3", {
      opacity: 1,
      x: 0,
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
    gsap.to(".slider-section", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    });
  }
});

ScrollTrigger.create({
  trigger: ".section4",
  start: "top 70%",
  once: true,
  onEnter: () => {
    gsap.to("#title-sec4", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.to(".section4-card", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.2,
      ease: "power3.out"
    });
  }
});


ScrollTrigger.create({
  trigger: ".section5",
  start: "top 70%",
  once: true,
  onEnter: () => {
    gsap.to("#title-sec5", {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.to(".section5-text-row", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.15,
      ease: "power2.out"
    });

    gsap.to("#cta-main-sec5", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0.25,
      ease: "back.out(1.5)",
      clearProps: "all"
    });

    gsap.to("#cta-second-text-sec5", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      delay: 0.3,
      ease: "back.out(1.5)",
      clearProps: "all"
    });

    gsap.to(".section5-card", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      ease: "power2.out"
    });

    gsap.to(".section5-big-card", {
      opacity: 1,
      x: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out"
    });

    gsap.to("#bigcard-title", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.7,
      ease: "power2.out"
    });
  }
});

gsap.to(".section5-cta-row button", {
  opacity: 1,
  y: 0,
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
    gsap.to("#faq-title", {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out"
    });

    gsap.to(".fqa-box", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.2,
      ease: "power2.out"
    });
  }
});

ScrollTrigger.create({
  trigger: ".footer",
  start: "top 85%",
  once: true,
  onEnter: () => {
    gsap.to(".footer-logo", {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.8,
      ease: "back.out(1.5)"
    });

    gsap.to(".footer-link", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.04,
      delay: 0.15,
      ease: "power2.out"
    });

    gsap.to(".footer-subscribe", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.3,
      ease: "power2.out"
    });

    gsap.to(".footer-bottom", {
      opacity: 1,
      y: 0,
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