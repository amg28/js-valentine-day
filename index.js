document.addEventListener("DOMContentLoaded", function () {
  const heart = document.getElementById('heart');
  const card = document.getElementById('card');
  const quote = document.getElementById('quote');
  const message = document.getElementById('message');

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

    message.style.display = 'block';
    message.style.animation = 'fadeInAnimation';
    message.style.animationDuration = '1.5s';
    message.style.animationFillMode = 'forwards';

    typeWriter(txt3);
  });

  message.addEventListener("click", function () {

    message.style.animation = 'fadeOutAnimation';
    message.style.animationDuration = '2s';
    message.style.animationFillMode = 'forwards';
    message.style.display = "none";

    card.style.animation = 'fadeOutAnimation';
    card.style.animationDuration = '3s';
    card.style.animationFillMode = 'forwards';
    card.style.display = "none";

    document.getElementById('fireworks-canvas').style.display = "inline";
    document.getElementById('fireworks-canvas').style.position = "absolute";
    fireworks();
  });

  let i = 0;
  let j = 0;
  let k = 0;
  const speed = 35; /* The speed/duration of the effect in milliseconds */
  const txt1 = "Happy Valentine’s Day to the sweetest valentine I could ever wish for."; /* The text */
  const txt2 = "I like all the ways that we hang out together, even when we’re mad."
  const txt3 = "And I like the things that are not \nappropriate for a greeting card."

  function typeWriter() {

    if (i < txt1.length) {
      document.getElementById("myMessage1").innerHTML += txt1.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      if (j < txt2.length) {
        document.getElementById("myMessage2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter, speed);
      } else {
        if (k < txt3.length) {
          document.getElementById("myMessage3").innerHTML += txt3.charAt(k);
          k++;
          setTimeout(typeWriter, speed);
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
