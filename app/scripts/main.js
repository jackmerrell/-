
document.querySelector('a-entity').addEventListener('click', function (evt) {
  var currentVideo = evt.detail.intersection.object.el;
  var currentVideoID = currentVideo.id+'Video';
  playVideo(currentVideoID)
});


function playVideo(currentVideoID) {

  var video = document.getElementById(currentVideoID);
  console.log(video);
  video.play();
  video.muted = !video.muted;

}
