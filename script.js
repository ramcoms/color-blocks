const hello = document.getElementById('hello');
const good = document.getElementById('good');
const allColors = document.querySelectorAll('p');

const audioColors = document.querySelectorAll('audio');
const audioHello = document.getElementById('audio--hello');
const audioGood = document.getElementById('audio--good');

hello.addEventListener('click', () => {
  audioHello.play();
});

good.addEventListener('click', () => {
  audioGood.play();
});

for (let i = 0; i < allColors.length; i++) {
  allColors[i].addEventListener('click', () => {
    audioColors[i].play();
  });
}
