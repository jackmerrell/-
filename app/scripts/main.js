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

  loadingCamera.setAttribute('animation', 'property:position; from:0 100 250; to:0 0 0; duration:2000;');
  videosContainer.removeAttribute('animation');
  videosContainer.setAttribute('rotation','0 0 0');
  cursor.setAttribute('cursor','fuse: true;');
}
