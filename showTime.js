function showTime() {
    var date = new Date(); // 현재 날짜와 시간을 가져옵니다.
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours < 12 ? "AM" : "PM"; // 오전/오후 구분
    hours = hours % 12; // 12시간 형식으로 변경
    hours = hours ? hours : 12; // 0시를 12시로 변경
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    var time = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById("clock").innerHTML = time; // 시계에 현재 시간을 표시합니다.
    setTimeout(showTime, 1000); // 1초마다 시간을 업데이트합니다.
  }