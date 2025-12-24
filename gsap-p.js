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

gsap.from(".P2-section1-hero-card", {
  opacity: 0,
  scale: 0.9,
  y: 50,
  duration: 1,
  delay: 2.5,
  ease: "power3.out"
});

gsap.from(".P2-title", {
  opacity: 0,
  y: 30,
  duration: 0.6,
  delay: 2.8,
  ease: "power2.out"
});

gsap.from(".circles", {
  opacity: 0,
  scale: 0,
  duration: 0.6,
  delay: 3,
  ease: "back.out(1.7)"
});

gsap.from(".P2-section1-model-frame", {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 3.1,
  ease: "power3.out"
});

gsap.from(".P2-section1-cta-row button", {
  opacity: 0,
  y: 20,
  duration: 0.5,
  stagger: 0.1,
  delay: 3.3,
  ease: "power2.out",
  clearProps: "all"
});

gsap.set(".p2-section2, .p2-section2 *, .p2-section6, .p2-section6 *, .section5, .section5 *, .p2-section7, .p2-section7 *, .section8, .section8 *, .footer, .footer *", {
  opacity: 0
});

ScrollTrigger.create({
  trigger: ".p2-section2",
  start: "top 80%",
  once: true,
  onEnter: () => {
    gsap.set(".p2-section2, .p2-section2 *", { opacity: 1 });

    gsap.from(".p2-section2-middle .text", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".mini-stat", {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.2,
      ease: "power2.out"
    });

    gsap.from(".p2-section2 #cta-sec3", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: 0.4,
      ease: "back.out(1.5)",
      clearProps: "all"
    });

    gsap.from(".p2-section2 #ctaa-sec3", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: 0.5,
      ease: "back.out(1.5)",
      clearProps: "all"
    });
  }
});

ScrollTrigger.create({
  trigger: ".p2-section6",
  start: "top 75%",
  once: true,
  onEnter: () => {
    gsap.set(".p2-section6, .p2-section6 *", { opacity: 1 });

    gsap.from(".p2-section6 .title", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".p2-card", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      delay: 0.2,
      ease: "power2.out",
      clearProps: "all"
    });
  }
});

gsap.utils.toArray(".section5").forEach((section, sectionIndex) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top 75%",
    once: true,
    onEnter: () => {
      gsap.set(section, { opacity: 1 });
      gsap.set(section.querySelectorAll("*"), { opacity: 1 });

      const title = section.querySelector(".title");
      if (title) {
        gsap.from(title, {
          opacity: 0,
          x: -60,
          duration: 0.8,
          ease: "power3.out"
        });
      }

      const text = section.querySelector(".text");
      if (text) {
        gsap.from(text, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: 0.15,
          ease: "power2.out"
        });
      }

      const cards = section.querySelectorAll(".p2-section5-card");
      if (cards.length > 0) {
        cards.forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: 0.25 + (i * 0.15),
            ease: "power2.out"
          });
        });
      }

      const bigCard = section.querySelector(".p2-section5-big-card");
      if (bigCard) {
        gsap.from(bigCard, {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          delay: 0.3,
          ease: "power3.out"
        });

        const bigCardTitle = bigCard.querySelector(".title1");
        if (bigCardTitle) {
          gsap.from(bigCardTitle, {
            opacity: 0,
            y: -20,
            duration: 0.6,
            delay: 0.5,
            ease: "power2.out"
          });
        }
      }
    }
  });
});

ScrollTrigger.create({
  trigger: ".p2-section7",
  start: "top 75%",
  once: true,
  onEnter: () => {
    gsap.set(".p2-section7, .p2-section7 *", { opacity: 1 });

    gsap.from(".p2-card-section7 .title", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".p2-card-section7 model-viewer", {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      delay: 0.2,
      ease: "power3.out"
    });

    gsap.utils.toArray(".hotspot").forEach((hotspot, i) => {
      gsap.from(hotspot, {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        delay: 0.4 + (i * 0.15),
        ease: "back.out(1.7)"
      });
    });
  }
});

ScrollTrigger.create({
  trigger: ".section8",
  start: "top 75%",
  once: true,
  onEnter: () => {
    gsap.set(".section8, .section8 *", { opacity: 1 });

    gsap.from(".section8-top .title", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".section8 #cta-sec8", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: 0.15,
      ease: "back.out(1.5)",
      clearProps: "all"
    });

    gsap.from(".section8 #ctaa-sec8", {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: 0.2,
      ease: "back.out(1.5)",
      clearProps: "all"
    });

    gsap.from(".section8-middle .text", {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.3,
      ease: "power2.out"
    });

    gsap.from(".section8-bottom-left", {
      opacity: 0,
      x: -50,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out"
    });

    gsap.from(".section8-bottom-right", {
      opacity: 0,
      x: 50,
      duration: 0.8,
      delay: 0.6,
      ease: "power2.out"
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