
const image = document.getElementById('img');
const audio = document.getElementById('audio');

image.addEventListener('mouseenter', () => {
  audio.play();
});

image.addEventListener('mouseleave', () => {
  audio.pause();
  audio.currentTime = 0; // Reset audio to the beginning
});
