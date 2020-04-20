
document.querySelector('a-entity').addEventListener('click', function (evt) {
  var currentVideo = evt.detail.intersection.object.el;
  var currentVideoName = currentVideo.id+'Video';
  playVideo(currentVideoName)
});


function playVideo(currentVideoName) {


  var vid = document.getElementById(currentVideoName);

  console.log(vid);
  vid.play();

}
