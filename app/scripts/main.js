const entities = document.querySelectorAll('a-video');
const button = document.getElementById('test-button');
const loadingScreen = document.getElementById('loadingScreen');

for (let i = 0, total = entities.length; i < total; i++) {
  const entity = entities[i];
  const video = document.getElementById(`${entity.id}Video`);

  button.addEventListener('click', () => {
    video.play().then(() => {
      video.pause();
    });
    loadingScreen.classList.add('hidden');
  });

  entity.addEventListener('mouseenter', () => {
    video.play();
  });

  entity.addEventListener('mouseleave', () => {
    video.pause();
  });
}
