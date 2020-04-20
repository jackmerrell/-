document.querySelector('a-entity').addEventListener('mouseenter', function (evt) {
  var currentVideoFrame = evt.detail.intersection.object.el;
  var currentVideoID = currentVideoFrame.id+'Video';
  var video = document.getElementById(currentVideoID);
  video.play();

  this.addEventListener('mouseleave', function (evt) {
    video.pause();
    });
});
