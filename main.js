function getPresentDay() {
  let presentDate = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  console.log(presentDate.getDay());
  document.getElementById("day").innerHTML = days[presentDate.getDay()] + ", " +
    months[presentDate.getMonth()] + " " + presentDate.getDate() + " " + presentDate.getFullYear();
}

function getPresentTime() {
  let presentDate = new Date();
  let presentHr = presentDate.getHours();
  let presentMin = presentDate.getMinutes();
  let presentSec = presentDate.getSeconds();

  function getFormated(num) {
    if (num <= 9) {
      num = "0" + num;
    }
    return num;
  }

  presentMin = getFormated(presentMin);
  presentSec = getFormated(presentSec);

  if (presentHr > 12) {
    presentHr -= 12;
    document.getElementById('time').innerHTML = presentHr + ":" + presentMin + ":" + presentSec;
    document.getElementById('meridiem').innerHTML = "PM";
  } else if (presentHr == 0) {
    presentHr = 12;
    document.getElementById('time').innerHTML = presentHr + ":" + presentMin + ":" + presentSec;
    document.getElementById('meridiem').innerHTML = "AM";
  } else if (presentHr == 12) {
    presentHr = 12;
    document.getElementById('time').innerHTML = presentHr + ":" + presentMin + ":" + presentSec;
    document.getElementById('meridiem').innerHTML = "PM";
  }
  else {
    document.getElementById('time').innerHTML = presentHr + ":" + presentMin + ":" + presentSec;
    document.getElementById('meridiem').innerHTML = "AM";
  }

}

function myClock() {
  setInterval(getPresentTime, 1000);
  setInterval(getPresentDay, 1000);
}

//Calling myClock function
myClock();