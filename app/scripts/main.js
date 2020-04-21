const entities = document.querySelectorAll('a-video');

for (let i = 0, total = entities.length; i < total; i++) {
  const entity = entities[i];
  const video = document.getElementById(`${entity.id}Video`);
  
  if (i === 0) {
    const button = document.getElementById('test-button');

    /*
     * We want to play the video (line #17) first by reacting to a click/touch
     * event, but at the same time we don't want to triggr the playback
     * at this point, so we are immediately pausing the video (line #18).
     * 
     * Now, the browser knows that we are fine with playing the video, which
     * solves the promise error you were seeing on desktop.
     */

    button.onclick = () => {
      video.play().then(() => {
        video.pause();
      });
    };
  }

  entity.addEventListener('mouseenter', () => {
    video.play();
  });

  entity.addEventListener('mouseleave', () => {
    video.pause();
  });
}
