function HanseiMain() {
    window.location.href = 'https://www.hansei.ac.kr/kor/index.do'
}
function HanseiPortal() {
    window.location.href = 'https://portal.hansei.ac.kr/'
}
function JoinHansei() {
    window.location.href = 'http://127.0.0.1:5500/join.html'
}
function BackMain() {
    window.location.href = 'http://127.0.0.1:5500/main.html'
}
function GoHome() {
  if(inputID.value == "parkjonghyeok" && inputPassword.value == 202010102){
    window.location.href = 'http://127.0.0.1:5500/home.html'
  } else { 
    alert("틀렸습니다.\n다시 입력해주세요.(HINT: 이름과 학번)")
  }
}
    

function exit(){
    if(confirm("메인화면으로 나가시겠습니까?")){
      BackMain();
    } else{
      
    }
  }

  function StartTimer(){
    clearInterval(timer10);
    time = 599;
    min = 0;
    sec = 0;
    timer10 = setInterval("TimerFnc()", 1000); 
    
  }

const inputNum = document.querySelector("#inputCertipynum");

function Num1234(){
    const passNum = Number(inputNum.value)

    if(passNum == 1234){
        alert("확인되었습니다.");
        clearInterval(timer10);
        document.getElementById("timer10").innerHTML = "인증완료";
    } else{
        alert("틀렸습니다.\n 다시 입력해주세요.")
    }
}


