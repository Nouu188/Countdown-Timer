function countdown() {
    const targetDate = new Date("Aug 25, 2024 18:40:00").getTime(); 

    const timerInterval = setInterval(function() {
        const currentTime = new Date().getTime();
        const timeRemaining = targetDate - currentTime;
       
        // Check if countdown is over
        if (timeRemaining < 0) {
            clearInterval(timerInterval); 
            displayMessage("timer", "EXPIRED"); 
        }
        else {
            // Calculate time components
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Update the display
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
    }, 1000); 

    function displayMessage(elementId, message) {
        const elementToUpdate = document.getElementById(elementId);
        elementToUpdate.textContent = message;
        elementToUpdate.classList.toggle("expired"); 
    }
}

countdown();