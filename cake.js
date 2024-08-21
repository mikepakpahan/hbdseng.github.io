$(document).ready(function() {
  $(".candles").one("click", function() {
      // Memutar audio
      var audio = document.getElementById("blow-sound");
      audio.play();

      var audio = document.getElementById('music');
      audio.volume = 0; // Mulai dengan volume 0

      audio.play().then(() => {
          let fadeDuration = 3000; // Durasi fade-in dalam milidetik
          let interval = 100; // Interval waktu untuk peningkatan volume
          let fadeSteps = fadeDuration / interval;
          let volumeStep = 0.7 / fadeSteps;

          let fadeIn = setInterval(() => {
              if (audio.volume < 0.7) {
                  audio.volume = Math.min(audio.volume + volumeStep, 0.7);
              } else {
                  clearInterval(fadeIn);
              }
          }, interval);
      }).catch((error) => {
          console.error('Error playing audio:', error);
      });

      $(".flame").animate({"opacity": 0}, "fast");
      $(".flame2").animate({"opacity": 0}, "fast");
      $(".flame3").animate({"opacity": 0}, "fast");
      $(".text").animate({"top": -150, "opacity": 1}, "fast");
  });
});