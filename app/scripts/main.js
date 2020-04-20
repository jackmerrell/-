document.querySelector('a-entity').addEventListener('mouseenter', function (evt) {
  var currentVideo = evt.detail.intersection.object.el;
  var currentVideoID = currentVideo.id+'Video';
  document.getElementById(currentVideoID).play();
  console.log(currentVideoID+' is playing');

  this.addEventListener('mouseleave', function (evt) {
    document.getElementById(currentVideoID).pause();
    console.log(currentVideoID+' is paused');
    });
});
