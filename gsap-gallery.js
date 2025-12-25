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

gsap.from(".gallery-header", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 2.5,
  ease: "power3.out"
});

gsap.from(".gallery-header .title", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 2.8,
  ease: "power3.out"
});

gsap.from(".gallery-header .text", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 3,
  ease: "power2.out"
});

gsap.from(".container-gallery", {
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  delay: 3.2,
  ease: "power3.out"
});

gsap.set(".footer, .footer *", {
  opacity: 0
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

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});