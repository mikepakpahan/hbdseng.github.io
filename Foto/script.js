document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioPlayer');
    audio.volume = 0; // Mulai dengan volume 0

    audio.play().then(() => {
        let fadeDuration = 3000; // Durasi fade-in dalam milidetik
        let interval = 100; // Interval waktu untuk peningkatan volume
        let fadeSteps = fadeDuration / interval;
        let volumeStep = 1 / fadeSteps;

        let fadeIn = setInterval(() => {
            if (audio.volume < 1) {
                audio.volume = Math.min(audio.volume + volumeStep, 1);
            } else {
                clearInterval(fadeIn);
            }
        }, interval);
    }).catch((error) => {
        console.error('Error playing audio:', error);
    });
});
