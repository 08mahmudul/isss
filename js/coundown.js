$(function(){

// ==================================================
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "09/25/",
birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

const now = new Date().getTime(),
      distance = countDown - now;

document.getElementById("days").innerText = Math.floor(distance / (day)),
  document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//do something later when date is reached
if (distance < 0) {
  document.getElementById("headline").innerText = "It's my birthday!";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("content").style.display = "block";
  clearInterval(x);
}
//seconds
}, 0)
}());
$(document).ready(function () {
$(".counter").each(function () {
var count = $(this);
var countTo = count.attr('data-count');
// console.log(countTo);
$({countNum:count.text()}).animate({
        countNum:countTo,
    },
    {

        duration:3000,
        easing:'linear',
        step:function(){
            count.text(Math.floor(this.countNum));
        },
        complete:function(){
            count.text(this.countNum);
        }
    });
});
// ==================================================
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "01/25/",
birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

const now = new Date().getTime(),
      distance = countDown - now;

document.getElementById("dayss").innerText = Math.floor(distance / (day)),
  document.getElementById("hourss").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutess").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("secondss").innerText = Math.floor((distance % (minute)) / second);

//do something later when date is reached
if (distance < 0) {
  document.getElementById("headline").innerText = "It's my birthday!";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("content").style.display = "block";
  clearInterval(x);
}
//seconds
}, 0)
}());
$(document).ready(function () {
$(".counter").each(function () {
var count = $(this);
var countTo = count.attr('data-count');
// console.log(countTo);
$({countNum:count.text()}).animate({
        countNum:countTo,
    },
    {

        duration:3000,
        easing:'linear',
        step:function(){
            count.text(Math.floor(this.countNum));
        },
        complete:function(){
            count.text(this.countNum);
        }
    });
});


// ================================
// ==================================================
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "11/22/",
birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

const now = new Date().getTime(),
      distance = countDown - now;

document.getElementById("days_two").innerText = Math.floor(distance / (day)),
  document.getElementById("hours_two").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes_two").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds_two").innerText = Math.floor((distance % (minute)) / second);

//do something later when date is reached
if (distance < 0) {
  document.getElementById("headline").innerText = "It's my birthday!";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("content").style.display = "block";
  clearInterval(x);
}
//seconds
}, 0)
}());
$(document).ready(function () {
$(".counter").each(function () {
var count = $(this);
var countTo = count.attr('data-count');
// console.log(countTo);
$({countNum:count.text()}).animate({
        countNum:countTo,
    },
    {

        duration:3000,
        easing:'linear',
        step:function(){
            count.text(Math.floor(this.countNum));
        },
        complete:function(){
            count.text(this.countNum);
        }
    });
});
// ================================


// ==================================================
const second = 1000,
minute = second * 60,
hour = minute * 60,
day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
dd = String(today.getDate()).padStart(2, "0"),
mm = String(today.getMonth() + 1).padStart(2, "0"),
yyyy = today.getFullYear(),
nextYear = yyyy + 1,
dayMonth = "12/25/",
birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
x = setInterval(function() {    

const now = new Date().getTime(),
      distance = countDown - now;

document.getElementById("days_three").innerText = Math.floor(distance / (day)),
  document.getElementById("hours_three").innerText = Math.floor((distance % (day)) / (hour)),
  document.getElementById("minutes_three").innerText = Math.floor((distance % (hour)) / (minute)),
  document.getElementById("seconds_three").innerText = Math.floor((distance % (minute)) / second);

//do something later when date is reached
if (distance < 0) {
  document.getElementById("headline").innerText = "It's my birthday!";
  document.getElementById("countdown").style.display = "none";
  document.getElementById("content").style.display = "block";
  clearInterval(x);
}
//seconds
}, 0)
}());
$(document).ready(function () {
$(".counter").each(function () {
var count = $(this);
var countTo = count.attr('data-count');
// console.log(countTo);
$({countNum:count.text()}).animate({
        countNum:countTo,
    },
    {

        duration:3000,
        easing:'linear',
        step:function(){
            count.text(Math.floor(this.countNum));
        },
        complete:function(){
            count.text(this.countNum);
        }
    });
});


});