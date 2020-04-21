const entities = document.querySelectorAll('a-video');
const button = document.getElementById('test-button');

for (let i = 0, total = entities.length; i < total; i++) {
  const entity = entities[i];
  const video = document.getElementById(`${entity.id}Video`);
  
  button.addEventListener('click', () => {
    video.play().then(() => {
      video.pause();
    });
  });

  entity.addEventListener('mouseenter', () => {
    video.play();
  });

  entity.addEventListener('mouseleave', () => {
    video.pause();
  });
}
