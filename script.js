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

for (let i = 0; i < faqData.length; i++) {
  let paragraphsHTML = "";

  for (let j = 0; j < faqData[i].paragraphs.length; j++) {
    paragraphsHTML += `<p class="subtext">${faqData[i].paragraphs[j]}</p>`;
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





