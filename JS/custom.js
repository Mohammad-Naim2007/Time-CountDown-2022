//get elements form HTML;

var year = document.getElementById('year');
var day = document.getElementById('day');
var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var secound = document.getElementById('secound');

//get current year and next year;
var currentYear = new Date().getFullYear();
var nextYear = new Date(`january 01 ${currentYear + 1} 00:00:00`);

//create a  function to  manipulate date;
function countDowntimer(){
    var currentTime = new Date();
    var diff = nextYear - currentTime;
    
    var d = Math.floor(diff / 1000 /60 / 60 / 24);
    var h = Math.floor(diff / 1000 /60 / 60 ) % 24;
    var m = Math.floor(diff / 1000 /60 ) % 60;
    var s = Math.floor(diff / 1000 ) % 60;
    
    //print in htnl;
    secound.innerHTML = s < 10 ? '0' + s : s;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    hours.innerHTML = h < 10 ? '0' + h : h;
    day.innerHTML = d < 10 ? '0' + d : d;
}
//js timing / BOM;
setInterval(countDowntimer,1000);


//to print next year in year;
year.innerHTML = nextYear.getFullYear();