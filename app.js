// ***************** NAVBAR ***********************
const toggleBarBtn = document.getElementById('toggleBar');
const containerNavItems = document.querySelector('.containerNavItems');
const toggleBar = document.querySelector('.toggleBar');
//********* NAVBAR TOGGLE *********
toggleBarBtn.onclick = () => {
    containerNavItems.classList.toggle('active');
    toggleBar.classList.toggle('active')
}


// ********** PRELOADER ***********
const preloader = document.querySelector('.preloader');
// ON LOAD ADD REMOVE PRELOADER CLASS TO REMOVE PRELOADER
// window.onload = () => preloader.classList.add('remove-preloader'); 


// **************** FOOTER YEAR AUTO UPDATE *****************
const copyRightYear = document.getElementById('copyRightYear');
// ***** GET THE CURRENT YEAR OF THE USER AND UPDATE AUTOMATICALLY *******
copyRightYear.innerHTML = new Date().getUTCFullYear();



// **************** SCROLL TOP BTN *****************
const scrollToTopBtn = document.getElementById('scrollToTopBtn');
// *************** HIDE SCROLLTOP BTN UNTIL USER SCROLL 100 ***************
window.onscroll = () => {
    if(document.documentElement.scrollTop > 100){
        scrollToTopBtn.style.display = 'block';
    }else{
        scrollToTopBtn.style.display = 'none';
    }
}
// *************** ONCLICK - SCROLL TO TOP ***************
scrollToTopBtn.onclick = () => {
    document.documentElement.scrollTop = 0;
};


// *************** HERO COUNTER ***************
function StartCounter(){
let counterValues = [50, 35, 80];
let count = 0;
let timerSpeed = 150;

const counterEl = document.querySelectorAll('.counterEl');
// GET EACH COUNTER HTML ELEMENT FROM THE DOM - BY LOOPING THEOUGH ALL AND GETTING ALL BY THEIR INDEX
let counter1 = counterEl[0];
let counter2 = counterEl[1];
let counter3 = counterEl[2];

// GET THE COUNTER VALUES FROM THE ARRAY OF COUNTERVALUES
let counterVaule1 = counterValues[0];
let counterVaule2 = counterValues[1];
let counterVaule3 = counterValues[2];

// COUNTER 1
setInterval(() => {
    if(count < counterVaule1) {
        count++;
        counter1.innerHTML = `${count}k+`;
    }
}, timerSpeed)
// COUNTER 2
setInterval(() => {
    if(count < counterVaule2){
        count++;
        counter2.innerHTML = `${count}k+`;
    }
}, timerSpeed)
// COUNTER 3
setInterval(() => {
    if(count < counterVaule3){
        count++;
        counter3.innerHTML = `${count}k+`;
    }
}, timerSpeed)
}
StartCounter();


// **************** FUTURE DATE COUNT ****************
const NFTClosingDate = document.querySelectorAll('.NFTClosingDate');

function getRemainingTime(){
    // ***** FUTURE DATE WE'RE COUNTING TO *****
    const exprYear = 2023 + 1;
    const exprMonth = 1;
    // ALWAYS ADD ONE DAY TO THE FUTURE DATE SO THE CODE NEVER ENDS till 2024
    const exprWeekDay = 1;
    const exprTime = 12;
    // GET THE DATE DETAILS FROM THE VARIABLE ABOVE.
    const futureDate = new Date(exprYear, exprMonth, exprWeekDay, exprTime);
    // ***** GET THE SECONDS IF THE PRESENT AND FUTURE DATE *****
    const futureTime = futureDate.getTime();
    const today = new Date().getTime();

    let t = futureTime - today;
    // ********* GET TIME DETAILS [DAY, HOUR, MINUTE, AND SECONDS] *********
    // 1 seconds = 1000 milliseconds
    // 1 minute = 60 seconds
    // 1 hour = 60 minutes
    // 1 day = 24 hours
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // 
    const days = Math.floor(t / oneDay);
    const hours = Math.floor((t % oneDay) / oneHour);
    const minutes = Math.floor((t % oneHour) / oneMinute);
    const seconds = Math.floor((t % oneMinute) / 1000);

    // CREATE AN ARRAY TO STORE THE VALUES AND LOOP THROUGH IT LATER WITH FOR EACH AND PLACE THE VALUES IN THE DOM ELEMENTS
    const values = [days, hours, minutes, seconds];
    // CHANGE THE TEXT CONTENT OF THE DOM ELEMENT AND 
    NFTClosingDate.forEach((closeTime, index) => {
        // IF THE VALUE IS LESS THAN 10, ADD 0 TO THE FRONT OF THE VALUE 
        if(values[index] < 10){
            values[index] = `0${values[index]}`
        }
        // DISPLAY TEXT
        closeTime.textContent = `${values[index]}`;
    });
}

// SETINTERVAL TO KEEP DISPLAYING EACH AND EVERY, MINUTES AND SECTION THAT GOES OUT 
setInterval(getRemainingTime, 1000);
getRemainingTime();