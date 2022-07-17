// Selector
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");
// shift+alt+Down Arrow to duplicate code

//Event Listener

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Functions
function showtime() {
  let today = new Date();
  let hour = today.getHours(); // 8
  let min = today.getMinutes(); // 32
  let sec = today.getSeconds(); // 23
  let todaydate = today.toDateString(); // fri nov 6 2020

  //am Pm Format
  const amPm = hour > 12 ? "PM" : "AM";

  //12hr Format
  hour = hour % 12 || 12; // hour=12%12=0

  // output time
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)} ${amPm}`;

  date.innerHTML = `${todaydate}`;

  //   hh:mm:ss AM (Required Time Format)
  setTimeout(showtime, 1000);
}
// adding zero to a Number lessthan 10
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
function setGreeting() {
  let today = new Date();
  let hour = today.getHours(); //17

  if (hour < 12) {
    document.body.style.backgroundImage =
      'url("https://wallpaperboat.com/wp-content/uploads/2020/04/morning-wallpaper-download-full-2.jpg")';
    greeting.innerHTML = "Good Morning";
  } else if (hour < 18) {
    document.body.style.backgroundImage =
      'url("https://i.pinimg.com/originals/09/ca/ac/09caac162f1a75b02d231e7cec5877db.jpg")';
    greeting.innerHTML = "Good Afternoon";
  } else {
    document.body.style.backgroundImage =
      'url("https://getwallpapers.com/wallpaper/full/a/d/8/370100.jpg")';
    greeting.innerHTML = "Good Evening";
    document.body.style.color = "white";
  }
}

function getName() {
  if (localStorage.getItem("myData") === null) {
    name.innerHTML = "[Enter Name]";
  } else {
    name.innerHTML = localStorage.getItem("myData");
  }
}

function setName(e) {
  if (e.type === "keypress") {
    if (e.keyCode == 13) {
      localStorage.setItem("myData", e.target.innerHTML);
      name.blur();
    }
  } else {
    localStorage.setItem("myData", e.target.innerHTML);
  }
}

getName();
showtime();
setGreeting();