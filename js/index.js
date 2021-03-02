function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

window.ready(function() {
  var audio = document.getElementById('audio');
  var playBtn = document.getElementById('playBtn');
  var train = document.getElementById('trainWrap');
  var plane = document.getElementById('plane-frame');
  var isPlaying = false;

  function playScene() {
      isPlaying ? audio.pause() : audio.play();
      audio.volume = 0.2;
      train.style.setProperty('--start-train-pos', 0);
      playBtn.style.display = 'none';

      plane.classList.add('plane-frame--go');
  }

  playBtn.addEventListener('click', function() {
    playScene();
  });

  document.body.onkeyup = function(e) {
    if (e.keyCode == 32 || e.keyCode == 13) {
      playScene();
    }
  }

  audio.onplaying = function() {
    isPlaying = true;
  };
  audio.onpause = function() {
    isPlaying = false;
  }
  audio.onended = function() {
    isPlaying = false;
    train.style.setProperty('--start-train-pos', '100%');
    playBtn.style.display = 'flex';

    plane.classList.remove('plane-frame--go');
  }
});

