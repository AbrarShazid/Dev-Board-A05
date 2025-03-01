function stringToNumber(s) {
  return parseFloat(s);
}

function time() {
  let d = new Date();
  let hours = d.getHours();
  let amPm;

  if (hours >= 12) {
    amPm = "PM";
    if(hours>12){
      hours-=12;
    }
  } else {
    amPm = "AM";
  }

  if (hours === 0) {
    hours = 12; 
  } 
  

  return hours + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + amPm;
}

