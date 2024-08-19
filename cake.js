$(document).ready(function() {
  $(".candles").one("click", function() {
      // Memutar audio
      var audio = document.getElementById("blow-sound");
      audio.play();

      // Menghilangkan flame dan menampilkan teks "Happy Birthday!"
      $(".flame").animate({"opacity": 0}, "fast");
      $(".flame2").animate({"opacity": 0}, "fast");
      $(".flame3").animate({"opacity": 0}, "fast");
      $(".text").animate({"top": -150, "opacity": 1}, "fast");
  });
});
