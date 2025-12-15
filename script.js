  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").style.display = "none";
    }, 4000);
  });

  document.getElementById("nav-link1").innerHTML = "Home"
  document.getElementById("nav-link2").innerHTML = "Products"
  document.getElementById("nav-link3").innerHTML = "Event"
  document.getElementById("nav-link4").innerHTML = "About"
  document.getElementById("section1-title").innerHTML = "Dragon Motors — Where legacy meets innovation since"

document.getElementById("title-sec2").innerHTML = "AI-Powered Driving";
document.getElementById("text-sec2").innerHTML ="Step into the future with an AI-infused machine built to understand you, protect you, and elevate every journey";
document.getElementById("cta-sec2").innerHTML = "Pre-Order Now";
     let titles = [
            'Electric Powertrain', 'Smart Autopilot', 'Location',
            'Smart Connectivity', 'Fast-Charging System', 'Surround Sensor Vision',
            'Battery Efficiency', 'Safety Features', 'AI Navigation'
        ];

        function updateBar() {
            let num1 = Math.random() * 100;
            let num2 = Math.random() * 100;
            let num3 = Math.random() * 100;

            num1 = Math.floor(num1);
            num2 = Math.floor(num2);
            num3 = Math.floor(num3);

            let title1 = titles[Math.floor(Math.random() * titles.length)];
            let title2 = titles[Math.floor(Math.random() * titles.length)];
            let title3 = titles[Math.floor(Math.random() * titles.length)];

            document.getElementById('bar1').style.width = num1 + '%';
            document.getElementById('stat-number').innerHTML = num1 + '%';
            document.getElementById('subtext-sec2').innerHTML = title1;

            document.getElementById('bar2').style.width = num2 + '%';
            document.getElementById('stat-number1').innerHTML = num2 + '%';
            document.getElementById('subtext-sec2-1').innerHTML = title2;

            document.getElementById('bar3').style.width = num3 + '%';
            document.getElementById('stat-number2').innerHTML = num3 + '%';
            document.getElementById('subtext-sec2-2').innerHTML = title3;
        }

        updateBar();
        setInterval(updateBar, 2000);

document.getElementById("subtitle-sec2").innerHTML = "5G";
document.getElementById("subtext-sec2-3").innerHTML = "Smart Connectivity";
document.getElementById("subtitle-sec2-1").innerHTML = "80k";
document.getElementById("subtext-sec2-4").innerHTML = "Fast-Charging System";
document.getElementById("subtitle-sec2-2").innerHTML = "360°";
document.getElementById("subtext-sec2-5").innerHTML = "Surround Sensor Vision";

document.getElementById("title-sec3").innerHTML = "Find the Car That <br>Fits You";
document.getElementById("cta-sec3").innerHTML = "Pre-Order Now";
document.getElementById("ctaa-sec3").innerHTML = 'Learn More <span class="cta-arrow">→</span>';


document.getElementById("title-sec4").innerHTML = "Innovation that moves <br>you forward";

let section4Data = [
  {
    icon: "img/ic7.png",
    title: "AI Autopilot",
    text: "Advanced neural network for autonomous navigation. Learns your driving patterns and adapts in real-time."
  },
  {
    icon: "img/ic8.png",
    title: "Ultra Performance",
    text: "Experience breathtaking acceleration from 0–100 in seconds. Power delivery optimized for maximum thrill."
  },
  {
    icon: "img/ic9.png",
    title: "Instant Response",
    text: "Zero lag acceleration and braking control. Every input translates into immediate vehicle response."
  },
  {
    icon: "img/ic10.png",
    title: "Safety Shield",
    text: "360° protection with predictive collision avoidance. Advanced sensors monitor your surroundings letantly."
  }
];

let section4Grid = document.getElementById("section4Grid");

for (let i = 0; i < section4Data.length; i++) {
  section4Grid.innerHTML += `
    <div class="section4-card">
      <img src="${section4Data[i].icon}" class="section4-icon">
      <p class="text1">${section4Data[i].title}</p>
      <p class="subtext">${section4Data[i].text}</p>
    </div>
  `;
}

const model = document.getElementById("section5Model");
const buttons = document.querySelectorAll(".cta-text");

const positions = {
  front: "translateX(-95%)",
  side:  "translateX(-60%)",
  back:  "translateX(-35%)"
};


model.style.transform = positions.back;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    model.style.transform = positions[btn.dataset.pos];
  });
});



const faqData = [
  {
    question: "How long does it take to fully charge the car?",
    paragraphs: [
      "Charging time depends on the charger type and the battery capacity. Home chargers typically take longer than fast public chargers.",
      "With rapid charging stations, the battery can reach up to 80% in under 30 minutes.",
      "Battery management systems are designed to protect long-term performance during frequent charging."
    ]
  },
  {
    question: "Is the car fully autonomous?",
    paragraphs: [
      "The vehicle supports advanced driver-assistance systems designed to improve safety and comfort.",
      "Full autonomy depends on road conditions, regulations, and driver supervision.",
      "Software updates continuously enhance autonomous capabilities over time."
    ]
  },
  {
    question: "How does the car communicate across systems?",
    paragraphs: [
      "The car uses intelligent communication protocols between sensors, cameras, and onboard computers.",
      "These systems work together to analyze surroundings in real time.",
      "Culturally adaptive interfaces ensure clear communication across global markets."
    ]
  },
  {
    question: "Where can I book a test drive?",
    paragraphs: [
      "Test drives can be booked through the official website or authorized dealerships.",
      "Availability may vary depending on your location.",
      "Special demo events are also held throughout the year."
    ]
  }
];

const faqContainer = document.getElementById("faqContainer");

for (let i = 0; i < faqData.length; i++) {
  let paragraphsHTML = "";

  for (let j = 0; j < faqData[i].paragraphs.length; j++) {
    paragraphsHTML += `<p class="text">${faqData[i].paragraphs[j]}</p>`;
  }

  faqContainer.innerHTML += `
    <div class="fqa-box" id="faq-${i}">
      <div class="fqa-question">
        <p class="text1">${faqData[i].question}</p>
        <div class="arrow"></div>
      </div>
      <div class="fqa-answer">
        ${paragraphsHTML}
      </div>
    </div>
  `;
}

for (let i = 0; i < faqData.length; i++) {
  document.getElementById(`faq-${i}`).addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
