//loader

$("header").css("visibility","hidden");
$("main").css("visibility","hidden");
$("footer").css("visibility","hidden"); 
$("hr").css("visibility","hidden");


window.addEventListener("load",function(){
    loader = document.getElementById("loader");
    loader.style.display = "none";

    $("header").css("visibility","visible");
    $("main").css("visibility","visible");
    $("footer").css("visibility","visible"); 
    $("hr").css("visibility","visible");

})
//CONSTATNTS
const currentDate = new Date().getTime();
const dayOfWeek = new Date().getDay();
const day = new Date().getUTCDate();
const month = new Date().getMonth();
const year = new Date().getFullYear();

//current date
function date(){
    document.getElementById("day").innerText = day;
    document.getElementById("month").innerText = month+1;
    document.getElementById("year").innerText = year;

}
date();
setInterval(date,1000);

//function for calculating remaining time
function countdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const admissionDay = new Date(`August 22, ${currentYear} 00:00:00`);

    
    const timeDifference = admissionDay - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('remDays').textContent = days;
    document.getElementById('remHours').textContent = hours;
    document.getElementById('remMinutes').textContent = minutes;
    document.getElementById('remSeconds').textContent = seconds;

    
}

// Initial call
countdown();

// Update countdown every second
setInterval(countdown, 1000);



//Progress Bar

document.addEventListener('DOMContentLoaded', () => {
    const percentageElement = document.getElementById('percentage');
    const progressCircle = document.querySelector('.progress-circle');

    function updateProgress() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const admission = new Date(`August 22, ${currentYear} `);
        const start = new Date(`June 1, ${currentYear}`);
        const totalDays = (admission - start) / (1000 * 60 * 60 * 24);
        const daysPassed = (today - start) / (1000 * 60 * 60 * 24);
        const percentage = Math.min(100, Math.max(0, (daysPassed / totalDays) * 100));
        
        if(percentage<=100){
            percentageElement.textContent = `${Math.round(percentage)}%`;

            const angle = (360 * percentage) / 100;
            progressCircle.style.background = `conic-gradient(#00C1A3 ${angle}deg, #E9E0E1 ${angle}deg)`;
        }
        else{
            percentageElement.textContent = `completed`;
        }
    }

    updateProgress();
    setInterval(updateProgress, 1000); // Update every second
});
