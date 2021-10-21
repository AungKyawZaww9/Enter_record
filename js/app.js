// UI 
const screen = document.querySelector('.screen');
const display = document.querySelector('.display');
const out = document.getElementById('out');
const show = document.getElementById('show');



let [milliseconds, seconds,minutes,hours] = [0,0,0,0];

let time;

screen.addEventListener('click',()=>{


    if(time !== null){
        clearInterval(time);
    }
    
    
   time = setInterval(increase,10);

});


out.addEventListener('click',()=>{
    clearInterval(time);

    [milliseconds,seconds,minutes,hours] = [0,0,0,0];

    display.innerText= " 00 : 00 : 00 : 000";

    // screen.innerHTML = `<img src="./img/about.png" alt="about">`;


});



show.addEventListener('click',()=>{
    // display.style.opacity = "1";
    // display.style.visibility = "visible";

    clearInterval(time);
    display.style.opacity = "0";

    screen.innerHTML = `<div class="display active"> ${hours} : ${minutes} : ${seconds} : ${milliseconds} </div>`;
    display.style.transition = `all 0.5s`;



});




function increase(){
    // console.log('I am working');

    milliseconds += 10;
    // console.log(milliseconds);

    if(milliseconds === 1000){
        milliseconds = 0;

        seconds ++;

        // console.log(seconds,"seconds");


        if(seconds === 60){
            seconds = 0;
    
            minutes ++;

            // console.log(minutes, 'minutes');

            if(minutes === 60){
                minutes = 0;
    
                hours ++;

                if(hours === 60){
                    hours = 0;

                }
            }

        }

    }


    // console.log(milliseconds);


    h = hours < 10 ? "0"+hours: hours;
    m = minutes < 10 ? "0"+minutes: minutes;
    s = seconds < 10 ? "0"+seconds: seconds;
    ms = milliseconds < 10 ? "00"+ milliseconds : milliseconds < 100 ? "0"+milliseconds: milliseconds;

    display.innerHTML = `${h} : ${m} : ${s} : ${ms}`;



}

