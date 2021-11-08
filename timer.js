var dayss = document.getElementById('days');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var dest = new Date("Jan 1,2022 00:00:00").getTime();
var now = new Date().getTime();
var diff = dest - now ;
console.log(diff);

 var day = Math.floor(diff/(1000*60*60*24));
dayss.innerHTML = day;
var hour = Math.floor(diff%(1000*60*60*24)/(1000*60*60));
hours.innerHTML = hour;
var minute = Math.floor(diff%(1000*60*60)/(1000*60));
minutes.innerHTML = minute;
var second = Math.floor(diff%(1000*60)/1000);
seconds.innerHTML = second;
