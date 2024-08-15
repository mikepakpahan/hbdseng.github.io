// Timer Calculation for both timers
function startTimer() {
    const startTime1 = new Date("August 20, 2022 14:30:00").getTime();
    const startTime2 = new Date("August 25, 2005 00:00:00").getTime();

    setInterval(function () {
        const now = new Date().getTime();

        // Timer 1 calculations
        const elapsedTime1 = now - startTime1;
        const years1 = Math.floor(elapsedTime1 / (1000 * 60 * 60 * 24 * 365));
        const days1 = Math.floor((elapsedTime1 % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours1 = Math.floor((elapsedTime1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes1 = Math.floor((elapsedTime1 % (1000 * 60 * 60)) / (1000 * 60));
        const seconds1 = Math.floor((elapsedTime1 % (1000 * 60)) / 1000);

        // Timer 2 calculations
        const elapsedTime2 = now - startTime2;
        const years2 = Math.floor(elapsedTime2 / (1000 * 60 * 60 * 24 * 365));
        const days2 = Math.floor((elapsedTime2 % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours2 = Math.floor((elapsedTime2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes2 = Math.floor((elapsedTime2 % (1000 * 60 * 60)) / (1000 * 60));
        const seconds2 = Math.floor((elapsedTime2 % (1000 * 60)) / 1000);

        // Update HTML for both timers
        document.getElementById("timer1").innerHTML = 
            `${years1} Tahun ${days1} Hari ${hours1} Jam ${minutes1} Menit ${seconds1} Detik`;

        document.getElementById("timer2").innerHTML = 
            `${years2} Tahun ${days2} Hari ${hours2} Jam ${minutes2} Menit ${seconds2} Detik`;
    }, 1000);
}

// Start the timers when the page loads
window.onload = startTimer;
