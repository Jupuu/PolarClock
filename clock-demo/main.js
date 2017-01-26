var container= document.getElementById('container');

function Car(){
    return{
      name:'',
      make:'',
      model:'',
      year:1908,
      color: '',
      engineSize:'',
      numberOfTires:4,
      drive: function(){
        console.log("is driving");
      }

    };

}

var luigi = new Car();

luigi.name = 'Mofo';
luigi.make = 'toyota';
luigi.model = 'Corolla S';
luigi.year = 2010;
luigi.color = 'Silver';
luigi.engineSize = 'L4';
/*
container.innerHTML += luigi.year +" ";
container.innerHTML += luigi.color +" ";
container.innerHTML += luigi.make +" ";
container.innerHTML += luigi.model +" named: ";
container.innerHTML += luigi.name +" ";
*/


//var year = today.getFullYear();
//container.innerHTML = year;

var hoursContainer = document.getElementById('hours');
var minsContainer = document.getElementById('minutes');
var secsContainer = document.getElementById('seconds');
var meridiemContainer = document.getElementById('meridiem');
var weekdayContainer = document.getElementById('weekday');
var monthContainer = document.getElementById('month');
var dateContainer = document.getElementById('date');
var yearContainer = document.getElementById('year');
var isTwelveHour = false;


function startTime(){

  var today = new Date();
  var hours = today.getHours();
  var mins = today.getMinutes();
  var seconds = today.getSeconds();
  var weekday = today.getDay();
  var daysOfTheWeek= ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];
  var month = today.getMonth();
  var calendar= ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var date= today.getDate();
  var year= today.getFullYear();
  if (hours == 12){
    hoursContainer.innerHTML = hours;
  }else{
    hoursContainer.innerHTML = hours%12;
  }
  if(mins<10){
    minsContainer.innerHTML = "0"+ mins;
  }else{
    minsContainer.innerHTML = mins;
  }

  if(seconds<10){
    secsContainer.innerHTML = "0" + seconds;
  }else {
    secsContainer.innerHTML = seconds;
  }


  weekdayContainer.innerHTML= daysOfTheWeek[weekday];
  monthContainer.innerHTML= calendar[month];
  dateContainer.innerHTML= date + ',';
  yearContainer.innerHTML= " "+year;
}


var secondbar= new ProgressBar.Circle('#polar', {
duration: 200,
strokeWidth: 4,
color: '#FCB03C',
trailColor: '#ddd'
});

var minbar = new ProgressBar.Circle('#polars',{
  duration: 200,
  strokeWidth: 4,
  color: 'darkred',
  trailColor: '#ddd'
});

var hourbar = new ProgressBar.Circle('#polarss',{
  duration: 200,
  strokeWidth: 4,
  color: 'darkblue',
  trailColor: '#ddd'
});
var weekdaybar=new ProgressBar.Circle('#polarsss',{
  duration: 200,
  strokeWidth: 4,
  color: 'purple',
  trailColor: '#ddd'
});

var text = document.getElementById('clockseconds');
function polartime(){
  var second = new Date().getSeconds();
  secondbar.animate(second/60);

  var minute = new Date().getMinutes();
  minbar.animate(minute/60);
  var hour = new Date().getHours();
  hourbar.animate(hour/24);
  var wkday = new Date().getDay();
  weekdaybar.animate(wkday/7);
}



startTime();
polartime();
setInterval(startTime, 1000);
setInterval(polartime, 1000);



// var ProgressBar = require('progressbar.js');
/*
var bar = new ProgressBar.Circle('#polar', {
  strokeWidth: 4,
  easing: 'easeInOut',
  //duration: 1400,
  color: 'darkred',
  trailColor: 'transparent',
  trailWidth: 1,
  svgStyle: null
});
bar.animate(1.0);*/
//var spercentage = seconds / 60;
//bar.set(spercentage);
/**
var bar = new ProgressBar.Circle('#polar', {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#FFEA82',
  trailColor: red,
  trailWidth: 1,
  svgStyle: null
});*/

  // Number from 0.0 to 1.0
