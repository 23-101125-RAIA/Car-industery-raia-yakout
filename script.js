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
document.getElementById("ctaa-sec3").innerHTML = "Learn More ";


  //  let track = document.getElementById("sliderTrack");
  // let cards = document.querySelectorAll(".card");
  // let dots = document.querySelectorAll(".dot");

  // let cardStep = 470; 
  // let index = 0;
  // let autoSlide;

  // function updateSlider() {
  //   track.style.transform = "translateX(-" + (index * cardStep) + "px)";

  //   cards.forEach(function(card) {
  //     card.classList.remove("active");
  //   });
  //   dots.forEach(function(dot) {
  //     dot.classList.remove("active");
  //   });

  //   cards[index + 1].classList.add("active");
  //   if (dots[index + 1]) dots[index + 1].classList.add("active");
  // }

  // function startAutoSlide() {
  //   autoSlide = setInterval(function () {
  //     if (index < cards.length - 3) {
  //       index++;
  //     } else {
  //       index = 0;
  //     }
  //     updateSlider();
  //   }, 2000);
  // }

  // dots.forEach(function(dot, i) {
  //   dot.addEventListener("click", function () {
  //     clearInterval(autoSlide);
  //     index = i > 0 ? i - 1 : 0;
  //     updateSlider();
  //     startAutoSlide();
  //   });
  // });

  // updateSlider();
  // startAutoSlide();

  








    
  