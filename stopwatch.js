var hour = 0;
var minute = 0;
var second = 0;
var millisecond = 0;
var timer;

function startTimer() 
{
    millisecond++;
    if (millisecond == 100)
    {
        millisecond = 0;
        second++;
    }
    if (second == 60)
    {
        second = 0;
        minute++;
    }
    if (minute == 60)
    {
    minute = 0;
    hour++;
    }
    document.getElementById("timer").innerHTML = (hour < 10 ? "0" + hour : hour) + ":" +
                                                 (minute < 10 ? "0" + minute : minute) + ":" +
                                                 (second < 10 ? "0" + second : second);
    document.getElementById("startBtn").disabled = true;
    timer = setTimeout(startTimer, 10);
}

function stopTimer()
{
    clearTimeout(timer);
    document.getElementById("startBtn").disabled = false;
}

function resetTimer()
{
    stopTimer();
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("startBtn").disabled = false;
}

document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);