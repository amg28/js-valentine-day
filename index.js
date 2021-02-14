document.addEventListener("DOMContentLoaded", function () {
  const heart = document.getElementById('heart');
  const card = document.getElementById('card');
  const quote = document.getElementById('quote');
  const message1 = document.getElementById('message1');
  const message2 = document.getElementById('message2');
  const message3 = document.getElementById('message3');
  const message4 = document.getElementById('message4');

  setInterval(function () { backgroundIconSelect(); }, 500);

  heart.addEventListener("click", function () {
    heart.style.animation = 'fadeOutAnimation';
    heart.style.animationDuration = '1.5s';
    heart.style.animationFillMode = 'forwards';

    card.style.display = 'block';
    card.style.animation = 'fadeInAnimation';
    card.style.animationDuration = '1.5s';
    card.style.animationFillMode = 'forwards';
  });

  quote.addEventListener("click", function () {
    quote.style.animation = 'fadeOutAnimation';
    quote.style.animationDuration = '1.5s';
    quote.style.animationFillMode = 'forwards';
    quote.style.display = "none";

    message1.style.display = 'block';
    message1.style.animation = 'fadeInAnimation';
    message1.style.animationDuration = '1.5s';
    message1.style.animationFillMode = 'forwards';

    typeWriter1();
  });

  message1.addEventListener("click", function () {
    message1.style.animation = 'fadeOutAnimation';
    message1.style.animationDuration = '1.5s';
    message1.style.animationFillMode = 'forwards';
    message1.style.display = "none";

    message2.style.display = 'block';
    message2.style.animation = 'fadeInAnimation';
    message2.style.animationDuration = '1.5s';
    message2.style.animationFillMode = 'forwards';

    typeWriter2();
  });

  message2.addEventListener("click", function () {
    message2.style.animation = 'fadeOutAnimation';
    message2.style.animationDuration = '1.5s';
    message2.style.animationFillMode = 'forwards';
    message2.style.display = "none";

    message3.style.display = 'block';
    message3.style.animation = 'fadeInAnimation';
    message3.style.animationDuration = '1.5s';
    message3.style.animationFillMode = 'forwards';

    typeWriter3();
  });

  message3.addEventListener("click", function () {
    message3.style.animation = 'fadeOutAnimation';
    message3.style.animationDuration = '1.5s';
    message3.style.animationFillMode = 'forwards';
    message3.style.display = "none";

    message4.style.display = 'block';
    message4.style.animation = 'fadeInAnimation';
    message4.style.animationDuration = '1.5s';
    message4.style.animationFillMode = 'forwards';

    typeWriter4();
  });

  message4.addEventListener("click", function () {

    message4.style.animation = 'fadeOutAnimation';
    message4.style.animationDuration = '2s';
    message4.style.animationFillMode = 'forwards';
    message4.style.display = "none";

    card.style.animation = 'fadeOutAnimation';
    card.style.animationDuration = '3s';
    card.style.animationFillMode = 'forwards';

    setTimeout( () => {card.style.display = "none";}, 1500);
    
    const background = document.getElementById('background');
    background.style.display="none";
    document.querySelector('body').style.backgroundColor='black';

    document.getElementById('fireworks-canvas').style.display = "inline";
    document.getElementById('fireworks-canvas').style.position = "absolute";
    document.getElementById('MyClockDisplay').style.display = "flex";
    document.getElementById('MyClockDisplay').style.position = "absolute";
    fireworks();
  });

  let i = 0;
  let j = 0;
  let k = 0;
  
  let l = 0;
  let m = 0;
  let n = 0;
  
  let o = 0;
  let p = 0;
  let q = 0;
  let r = 0;

  let s = 0;
  let t = 0;
  let u = 0;
  let v = 0;
  let b = 0;

  const speed = 60; /* The speed/duration of the effect in milliseconds */
  
  const txt1 = "Hey Mira!"; /* The text */
  const txt2 = "Looks like i won a golden ticket this year."
  const txt3 = "You are the sweetest valentine I could ever wish for. 😊"

  const txt4 = "We know each other for few weeks, but from the begining..."
  const txt5 = "It felt like I have known you for ages. 😁"
  const txt6 = "With this card I wanted to express how happy and grateful I am."

  const txt7 = "I am always amazed, with such an ease you combine: "
  const txt8 = "support and cheerfulness of a friend, "
  const txt9 = "elegance of a lady... "
  const txt10 = "and (sexy) kinkiness of a woman 😏"

  const txt11 = "In the end,"
  const txt12 = "For this card I have picked a song called – \"Magnificient\" by Hurts."
  const txt13 = "My favourite part of a song is... ‘And hope that fireworks will never end...they never end’"
  const txt14 = "I wish our fireworks will never end too <3"
  const txt15 = "Happy Valentine’s Day, Mira! 😊😘"


  function typeWriter1() {

    if (i < txt1.length) {
      document.getElementById("myMessage1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    } else {
      if (j < txt2.length) {
        document.getElementById("myMessage2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter1, speed);
      } else {
        if (k < txt3.length) {
          document.getElementById("myMessage3").innerHTML += txt3.charAt(k);
          k++;
          setTimeout(typeWriter1, speed);
        }
      }
    }
  }

  function typeWriter2() {

    if (l < txt4.length) {
      document.getElementById("myMessage4").innerHTML += txt4.charAt(l);
      l++;
      setTimeout(typeWriter2, speed);
    } else {
      if (m < txt5.length) {
        document.getElementById("myMessage5").innerHTML += txt5.charAt(m);
        m++;
        setTimeout(typeWriter2, speed);
      } else {
        if (n < txt6.length) {
          document.getElementById("myMessage6").innerHTML += txt6.charAt(n);
          n++;
          setTimeout(typeWriter2, speed);
        }
      }
    }
  }

  function typeWriter3() {

    if (o < txt7.length) {
      document.getElementById("myMessage7").innerHTML += txt7.charAt(o);
      o++;
      setTimeout(typeWriter3, speed);
    } else {
      if (p < txt8.length) {
        document.getElementById("myMessage8").innerHTML += txt8.charAt(p);
        p++;
        setTimeout(typeWriter3, speed);
      } else {
        if (q < txt9.length) {
          document.getElementById("myMessage9").innerHTML += txt9.charAt(q);
          q++;
          setTimeout(typeWriter3, speed);
        } else {
          if (r < txt10.length) {
            document.getElementById("myMessage10").innerHTML += txt10.charAt(r);
            r++;
            setTimeout(typeWriter3, speed);
          }
        }
      }
    }
  }

  function typeWriter4() {

    if (s < txt11.length) {
      document.getElementById("myMessage11").innerHTML += txt11.charAt(s);
      s++;
      setTimeout(typeWriter4, speed);
    } else {
      if (t < txt12.length) {
        document.getElementById("myMessage12").innerHTML += txt12.charAt(t);
        t++;
        setTimeout(typeWriter4, speed);
      } else {
        if (u < txt13.length) {
          document.getElementById("myMessage13").innerHTML += txt13.charAt(u);
          u++;
          setTimeout(typeWriter4, speed);
        } else {
          if (v < txt14.length) {
            document.getElementById("myMessage14").innerHTML += txt14.charAt(v);
            v++;
            setTimeout(typeWriter4, speed);
          } else {
            if (b < txt15.length) {
              document.getElementById("myMessage15").innerHTML += txt15.charAt(b);
              b++;
              setTimeout(typeWriter4, speed);
            }
          }
        }
      }
    }
  }

  function fireworks() {
    var firework = JS_FIREWORKS.Fireworks({
      id: 'fireworks-canvas',
      hue: 120,
      particleCount: 50,
      delay: 0,
      minDelay: 20,
      maxDelay: 40,
      boundaries: { // of respawn and target
        top: 100,
        bottom: 240,
        left: 50,
        right: 590
      },
      fireworkSpeed: 2,
      fireworkAcceleration: 1.05,
      particleFriction: 0.90,
      particleGravity: 1.5
    });
    firework.start();
  };
});

function backgroundIconSelect() {
  console.log('triggered');
  const heart = document.querySelectorAll('.fas.fa-heart');
  const heartFilled = document.querySelectorAll('.fab.fa-gratipay');
  const kiss = document.querySelectorAll('.far.fa-kiss-wink-heart');
  const inLove = document.querySelectorAll('.far.fa-grin-hearts');
  const outlinedHeart = document.querySelectorAll('.far.fa-heart');

  const array = [...heart, ...heartFilled, ...kiss, ...inLove, ...outlinedHeart];
  let selectedElements = getRandomArrayElement(array);
  hoverElement(selectedElements);

}

function getRandomArrayElement(elements) {
  return elements[Math.floor(Math.random() * elements.length)];
}

function hoverElement(element) {
  if (element) {
    element.classList.add('hovered');
    setTimeout(function () { element.classList.remove('hovered'); }, 3000);
  }
}

function showTime(){
  var date = new Date();
  var date2 = new Date("2021/02/01 16:39:00");
  var diff = Math.abs(date2 - date);
  var years = Math.floor(diff/(1000*60*60*24*365)); // 1
  var months = Math.floor((diff - years) / (1000*60*60*24*30)) % 12; // 0
  var days = Math.floor((diff - years - months) / (1000*60*60*24)) % 30; // 0
  var hours = Math.floor((diff - years - months - days) / (1000*60*60)) % 24; // 0
  var minutes = Math.floor((diff - years - months - days - hours) / (1000*60)) % 60; // 0
  var seconds = Math.floor((diff - years - months - days - hours - minutes) / (1000)) % 60; // 0
  
  var time = years + ":" + months + ":" + days + ":" + hours + ":" + minutes + ":" + seconds;

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
  
  setTimeout(showTime, 1000);
  
}

showTime();