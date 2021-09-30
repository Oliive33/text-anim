//Animation écriture

const AnimTxt = document.getElementById("target");

let typewriter = new Typewriter(AnimTxt, {
  loop: false,
  deleteSpeed: 80,
});

typewriter
  .pauseFor(500)
  .typeString('<span style="color: #333;">Je suis </span>')
  .pauseFor(500)
  .typeString('<span style="color: #f1080f;">déterminé</span>')
  .pauseFor(500)
  .deleteChars(9)
  .typeString('<span style="color: #381DD9;">sérieux</span>')
  .pauseFor(500)
  .deleteChars(8)
  .typeString('<span style="color: #7e0f9f;">travailleur</span>')
  .pauseFor(500)
  .deleteChars(12)
  .typeString('<span style="color: #ec4c13;"> organisé</span>')
  .pauseFor(500)
  .deleteChars(8)
  .typeString('<span style="color: #2ab666">développeur web</span>')
  .pauseFor(300)
  .deleteChars(24)
  .typeString(
    '<span style="color:#5c64d5;">À bientôt pour vos projets web.</span>'
  )
  .pauseFor(500)
  .deleteChars(34)
  .typeString('<span style="color: #333;">homemade-web.com</span>')
  .pauseFor(500)
  .deleteChars(17)
  .typeString('<span style="color: #333;">I am </span>')
  .pauseFor(500)
  .typeString('<span style="color: #f1080f;">determined</span>')
  .pauseFor(500)
  .deleteChars(10)
  .typeString('<span style="color: #381DD9;">serious</span>')
  .pauseFor(500)
  .deleteChars(8)
  .typeString('<span style="color: #7e0f9f;">hardworker</span>')
  .pauseFor(500)
  .deleteChars(11)
  .typeString('<span style="color: #ec4c13;"> organised</span>')
  .pauseFor(500)
  .deleteChars(9)
  .typeString('<span style="color: #2ab666">web developer</span>')
  .pauseFor(300)
  .deleteChars(24)
  .typeString('<span style="color:#5c64d5;">See you soon your projects.</span>')
  .start();
