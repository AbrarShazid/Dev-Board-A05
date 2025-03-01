// color changer
function rgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById("color-changer").addEventListener("click", function () {
  document.body.style.backgroundColor = rgbColor();
});

// date part
// days function
function getDay() {
  const date = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[date.getDay()];
  return dayName + " ,";
}

// date function
function getDate() {
  const date = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = months[date.getMonth()];
  return monthName + " " + date.getDate() + " " + date.getFullYear();
}
const datePart = document.createElement("div");
datePart.innerHTML = `<p>${getDay()} </p> <p class='font-bold'>${getDate()} </p>`;
document.getElementById("date").appendChild(datePart);

// button  part

let buttons = document.querySelectorAll(".complete");

//directly convert to number using function from another js file
let totalTask = stringToNumber(document.getElementById("total-task").innerText);
let completedTask = stringToNumber(
  document.getElementById("completed-task").innerText
);

// activity  log er kaj
const activity = document.getElementById("activity");

const taskHead = document.querySelectorAll(".task-name");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    alert("Board Updated Successfully");
    // button disable er kaj
    buttons[i].disabled = true;
    buttons[i].style.opacity = 0.2;
    // count update
    totalTask--;
    completedTask++;
    if (totalTask === 0) {
      alert("Congrats!!! You have completed all the current task");
    }
    document.getElementById("total-task").innerText = "0" + totalTask;
    document.getElementById("completed-task").innerText = completedTask;

    // activity log update

    const newDiv = document.createElement("div");

    newDiv.innerHTML = `<p class=' bg-[#F4F7FF] rounded-lg p-[10px]  text-[#000] opacity-70 '>You have Complete The Task ${
      taskHead[i].innerText
    } at ${time()}  </p>`;

    activity.appendChild(newDiv);
  });
}

// history clear
document.getElementById("clear-history").addEventListener("click", function () {
  activity.innerText = "";
});

// redirect to blog page
document.getElementById("redirect-blog").addEventListener("click", function () {
  window.location.href = "Other Html/blog.html";
});
