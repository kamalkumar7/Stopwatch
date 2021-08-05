// define vars to hold time values

let second =0;
let minute =0;
let hrs=0;
// Define vars to hold "time " value 
let displaySecond=0;
let displayMinute=0;
let displayHours=0;

let status ="stopped";


// Stopwatch function to determine when to increment next value
function reset()
{

    window.clearInterval(interval);
    second=0;
    minute=0;
    hrs=0;
    document.getElementById("time").innerHTML="00:00:00";
    document.getElementById("startStop").innerHTML="Start.";
    document.getElementById("reset").innerHTML="Reset.";
    document.getElementById("reset").innerHTML="Reset";

}



function startStop()
{

    if(status=="stopped")
    {
        interval =window.setInterval(Stopwatch,1000);
        document.getElementById("startStop").innerHTML="Stop";
        status="started";
    }
    else
    {
        interval =window.clearInterval(interval);
        document.getElementById("startStop").innerHTML="Start";
        status="stopped";
    }
    

}
 


function Stopwatch()
{


    
    second++;
    
    if (second/60 ==1)
    {
        second =0;
        minute++;
    }

    if (minute/60 ==1)
    {
        minute =0;
        hrs++;
    }




if(second<10)
{
    displaySecond="0"+second.toString();
}
else
{
    displaySecond =second.toString();
}

if(minute<10)
{
    displayMinute="0"+minute.toString();
}
else
{
    displayMinute =minute.toString();
}


if(hrs<10)
{
    displayHours="0"+hrs.toString();
}
else
{
    displayHours =hrs.toString();
}




    document.getElementById("time").innerHTML =displayHours+":"+displayMinute+":"+displaySecond;
    



}





// if second minute or hour is one digit then add leading zero









