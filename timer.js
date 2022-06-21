var time = 599;
var min = 0;
var sec = 0;


function TimerFnc(){
  min = parseInt(time / 60);
  sec = time % 60;

  

  document.getElementById("timer10").innerHTML = min + ":" + sec;
  time--;

  if (time == 0) {
    clearInterval(timer10);
    document.getElementById("timer10").innerHTML = "다시 인증요청해주세요";
  }
  
}