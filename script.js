window.addEventListener("load", () => {
  setTimeout(() => {
    let preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
  }, 4000);
});

document.getElementById("nav-link1").innerHTML = "Home";
document.getElementById("nav-link2").innerHTML = "Products";
document.getElementById("nav-link3").innerHTML = "Event";
document.getElementById("nav-link4").innerHTML = "About";

document.getElementById("section1-title").innerHTML =
  "Dragon Motors — Where legacy meets innovation since";

document.getElementById("title-sec2").innerHTML = "AI-Powered Driving";
document.getElementById("text-sec2").innerHTML =
  "Step into the future with an AI-infused machine built to understand you, protect you, and elevate every journey";
document.getElementById("cta-sec2").innerHTML = "Pre-Order Now";

let titles = [
  "Electric Powertrain",
  "Smart Autopilot",
  "Location",
  "Smart Connectivity",
  "Fast-Charging System",
  "Surround Sensor Vision",
  "Battery Efficiency",
  "Safety Features",
  "AI Navigation"
];

function updateBar() {
  let nums = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100)
  ];

  document.getElementById("bar1").style.width = nums[0] + "%";
  document.getElementById("stat-number").innerHTML = nums[0] + "%";
  document.getElementById("subtext-sec2").innerHTML =
    titles[Math.floor(Math.random() * titles.length)];

  document.getElementById("bar2").style.width = nums[1] + "%";
  document.getElementById("stat-number1").innerHTML = nums[1] + "%";
  document.getElementById("subtext-sec2-1").innerHTML =
    titles[Math.floor(Math.random() * titles.length)];

  document.getElementById("bar3").style.width = nums[2] + "%";
  document.getElementById("stat-number2").innerHTML = nums[2] + "%";
  document.getElementById("subtext-sec2-2").innerHTML =
    titles[Math.floor(Math.random() * titles.length)];
}

updateBar();
setInterval(updateBar, 2000);

document.getElementById("subtitle-sec2").innerHTML = "5G";
document.getElementById("subtext-sec2-3").innerHTML = "Smart Connectivity";
document.getElementById("subtitle-sec2-1").innerHTML = "80k";
document.getElementById("subtext-sec2-4").innerHTML = "Fast-Charging System";
document.getElementById("subtitle-sec2-2").innerHTML = "360°";
document.getElementById("subtext-sec2-5").innerHTML = "Surround Sensor Vision";

document.getElementById("title-sec3").innerHTML =
  "Find the Car That <br>Fits You";
document.getElementById("cta-sec3").innerHTML = "Pre-Order Now";
document.getElementById("ctaa-sec3").innerHTML =
  'Learn More <span class="cta-arrow">→</span>';

document.getElementById("title-sec4").innerHTML =
  "Innovation that moves <br>you forward";

let section4Data = [
  {
    icon: "img/ic7.png",
    title: "AI Autopilot",
    text:
      "Advanced neural network for autonomous navigation. Learns your driving patterns and adapts in real-time."
  },
  {
    icon: "img/ic8.png",
    title: "Ultra Performance",
    text:
      "Experience breathtaking acceleration from 0–100 in seconds. Power delivery optimized for maximum thrill."
  },
  {
    icon: "img/ic9.png",
    title: "Instant Response",
    text:
      "Zero lag acceleration and braking control. Every input translates into immediate vehicle response."
  },
  {
    icon: "img/ic10.png",
    title: "Safety Shield",
    text:
      "360° protection with predictive collision avoidance. Advanced sensors monitor surroundings letantly."
  }
];

let section4Grid = document.getElementById("section4Grid");

section4Data.forEach(item => {
  section4Grid.innerHTML += `
    <div class="section4-card">
      <img src="${item.icon}" class="section4-icon">
      <p class="text1">${item.title}</p>
      <p class="subtext">${item.text}</p>
    </div>
  `;
});

let model = document.getElementById("section5Model");
let buttons = document.querySelectorAll(".cta-text");

if (model && buttons.length) {
  let positions = {
    front: "translateX(-95%)",
    side: "translateX(-60%)",
    back: "translateX(-35%)"
  };

  model.style.transform = positions.back;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      model.style.transform = positions[btn.dataset.pos];
    });
  });
}


document.getElementById("title-sec5").innerHTML = "Smart Features the Future";
document.getElementById("subtitle-sec5").innerHTML = "Driving Reinvented";
document.getElementById("desc-sec5").innerHTML =
  "Experience advanced technology designed to make every drive safer, smarter, and more connected.";

document.getElementById("cta-main-sec5").innerHTML = "Pre-Order Now";
document.getElementById("cta-second-text-sec5").innerHTML =  
  'Learn More <span class="cta-arrow">→</span>';

document.getElementById("card1-title").innerHTML = "Futuristic Aerodynamics";
document.getElementById("card1-text").innerHTML =
  "Reduced air drag for maximum performance.";

document.getElementById("card2-title").innerHTML = "Sustainable Materials";
document.getElementById("card2-text").innerHTML =
  "Advanced AI durability with minimal waste.";

document.getElementById("bigcard-title").innerHTML = "Next-Gen Smart Systems";

document.getElementById("view-front").innerHTML = "Front";
document.getElementById("view-side").innerHTML = "Side";
document.getElementById("view-back").innerHTML = "Back";

document.getElementById("faq-title").innerHTML = "The Future of Driving";

let faqData = [
  {
    question: "How long does it take to fully charge the car?",
    paragraphs: [
      "Charging time depends on the charger type, battery capacity, and environmental conditions. Using a standard home charger may take several hours to fully charge the vehicle, while fast public charging stations significantly reduce charging time. Advanced battery management systems regulate power intake to ensure safety, efficiency, and long-term battery health throughout repeated charging cycles."
    ]
  },
  {
    question: "Is the car fully autonomous?",
    paragraphs: [
      "The vehicle is equipped with advanced driver-assistance technologies designed to enhance safety and driving comfort. While it can handle many driving tasks automatically, full autonomy still depends on road conditions, local regulations, and active driver supervision. Continuous software updates improve system intelligence and adaptability over time."
    ]
  },
  {
    question: "How does the car communicate across systems?",
    paragraphs: [
      "The car relies on a complex communication network connecting sensors, cameras, control units, and onboard computers. These systems exchange data in real time to analyze surroundings, predict movement, and make driving decisions. This seamless internal communication ensures accuracy, responsiveness, and a smooth driving experience across different environments."
    ]
  },
  {
    question: "What safety technologies are included?",
    paragraphs: [
      "The vehicle integrates multiple safety technologies such as collision avoidance, lane monitoring, adaptive cruise control, and emergency braking. These systems work together to detect potential risks and assist the driver in preventing accidents. Safety features are continuously refined through software enhancements and real-world data analysis."
    ]
  },
  {
    question: "How does the car adapt to different driving conditions?",
    paragraphs: [
      "The car dynamically adjusts performance based on road conditions, weather, and driving behavior. Intelligent traction control, suspension tuning, and power distribution help maintain stability and comfort. This adaptive behavior ensures reliable performance whether driving in urban traffic, highways, or challenging terrains."
    ]
  },
  {
    question: "Where can I book a test drive?",
    paragraphs: [
      "Test drives can be booked through the official website or at authorized dealerships. Availability may vary depending on your location and vehicle demand. Special promotional events and scheduled demonstrations are also organized throughout the year, allowing customers to experience the vehicle firsthand in a guided environment."
    ]
  }
];


let faqContainer = document.getElementById("faqContainer");

faqData.forEach((item, i) => {
  let pHTML = "";
  item.paragraphs.forEach(p => {
    pHTML += `<p class="subtext">${p}</p>`;
  });

  faqContainer.innerHTML += `
    <div class="fqa-box" id="faq-${i}">
      <div class="fqa-question">
        <p class="text1">${item.question}</p>
        <div class="arrow"></div>
      </div>
      <div class="fqa-answer">${pHTML}</div>
    </div>
  `;
});

faqData.forEach((_, i) => {
  document.getElementById(`faq-${i}`).addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

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
document.getElementById("footer-subtitle").innerHTML =
  "READY TO DRIVE THE FUTURE?";
  document.getElementById("ctaa-sec55").innerHTML =
  'Subscribe <span class="footer-cta-arrow">→</span>';
document.getElementById("footer-copy").innerHTML =
  "© Copyright 2024, All Rights Reserved by Exline";

   let sliderTrack = document.getElementById('sliderTrack');
        let dots = document.querySelectorAll('.dot');
        let currentGroup = 0;
        let autoSlideInterval;
        let isAnimating = false;

        let cardWidth = 430;
        let gap = 40;
        let groupSize = 3;
        let slideDistance = (cardWidth + gap) * groupSize;

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentGroup);
            });
        }

        function slideToGroup(groupIndex, smooth = true) {
            if (isAnimating) return;
            
            isAnimating = true;
            let targetPosition = -(groupIndex * slideDistance);
            
            if (smooth) {
                sliderTrack.style.transition = 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            } else {
                sliderTrack.style.transition = 'none';
            }
            
            sliderTrack.style.transform = `translateX(${targetPosition}px)`;
            
            setTimeout(() => {
                if (groupIndex === 3) {
                    sliderTrack.style.transition = 'none';
                    currentGroup = 0;
                    sliderTrack.style.transform = `translateX(0px)`;
                    updateDots();
                } else {
                    currentGroup = groupIndex;
                    updateDots();
                }
                isAnimating = false;
            }, 800);
        }

        function startAutoSlide() {
            stopAutoSlide();
            autoSlideInterval = setInterval(() => {
                let nextGroup = currentGroup + 1;
                slideToGroup(nextGroup);
            }, 3000);
        }

        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
            }
        }

      
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                stopAutoSlide();
                let groupIndex = parseInt(dot.dataset.index);
                slideToGroup(groupIndex);
                setTimeout(() => {
                    startAutoSlide();
                }, 3000);
            });
        });


        updateDots();
        startAutoSlide();

   
        sliderTrack.addEventListener('mouseenter', stopAutoSlide);
        sliderTrack.addEventListener('mouseleave', startAutoSlide);