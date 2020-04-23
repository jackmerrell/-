const entities = document.querySelectorAll('a-video');
const button = document.getElementById('start-button');
const loadingScreen = document.getElementById('loadingScreen');
const videosContainer = document.getElementById('videosContainer');
const loadingCamera = document.getElementById('videoCamera');
const videoCamera = document.getElementById('videoCamera');
const cursor = document.getElementById('cursor');

for (let i = 0, total = entities.length; i < total; i++) {
  const entity = entities[i];
  const video = document.getElementById(`${entity.id}Video`);

  button.addEventListener('click', () => {
    video.play().then(() => {
      video.pause();
    });
    loadingScreen.classList.add('hidden');
    changeCamera();
  });

  entity.addEventListener('mouseenter', () => {
    video.play();
  });

  entity.addEventListener('mouseleave', () => {
    video.pause();
  });
}


function changeCamera(){
  loadingCamera.setAttribute('camera', 'active', false);
  videoCamera.setAttribute('camera', 'active', true);
  loadingCamera.setAttribute('animation', 'property:position; from:-20 80 120; to:0 0 0; dur:2000;');
  loadingCamera.setAttribute('animation__2', 'property:rotation; from:-10 0 0; to:0 0 0; dur:2000;');
  videosContainer.setAttribute('animation', 'property:rotation; to:0 -10 0; dur:2000; loop: false;');
  setTimeout(function(){
    cursor.setAttribute('cursor','fuse: true;'); }, 2000);
}
