function setTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    
    var goodHour = hour;
    var goodMin = min;
    var goodSec = sec;
    
    if (hour > 12) {
        goodHour = '0' + hour - 12;
    }
    
    if (min < 10) {
        goodMin = '0' + min;
    }
    if (sec < 10) {
        goodSec = '0' + sec;
    }

    document.getElementById('displayTime').innerHTML = goodHour + ':' + goodMin + ':' + goodSec;
}

function setDate() {
    var date = new Date();
    var weekday = date.getDay();
    var year = date.getFullYear();
    var day = date.getDate();
    var month = date.getMonth();
    
    var goodWeekday = weekday;
    var goodMonth = month;
    var goodDay = day;
    
    if (weekday === 0) {
        goodWeekday = 'Sunday';
    }
    else if (weekday == 1) {
        goodWeekday = 'Monday';
    }
    else if (weekday == 2) {
        goodWeekday = 'Tuesday';
    }
    else if (weekday == 3) {
        goodWeekday = 'Wednesday';
    }
    else if (weekday == 4) {
        goodWeekday = 'Thursday';
    }
    else if (weekday == 5) {
        goodWeekday = 'Friday';
    }
    else if (weekday == 6) {
        goodWeekday = 'Saturday';
    }
    
    if (month === 0) {
        goodMonth = 'January';
    }
    else if (month == 1) {
        goodMonth = 'February';
    }
    else if (month == 2) {
        goodMonth = 'March';
    }
    else if (month == 3) {
        goodMonth = 'April';
    }
    else if (month == 4) {
        goodMonth = 'May';
    }
    else if (month == 5) {
        goodMonth = 'June';
    }
    else if (month == 6) {
        goodMonth = 'July';
    }
    else if (month == 7) {
        goodMonth = 'August';
    }
    else if (month == 8) {
        goodMonth = 'September';
    }
    else if (month == 9) {
        goodMonth = 'October';
    }
    else if (month == 10) {
        goodMonth = 'November';
    }
    else if (month == 11) {
        goodMonth = 'December';
    }
    
    if (day == 1) {
        goodDay = '1st';
    } 
    else if (day == 2) {
        goodDay = '2nd';
    }
    else if (day == 3) {
        goodDay = '3rd';
    }
    else if (day == 4) {
        goodDay = '4th';
    }
    else if (day == 5) {
        goodDay = '5th';
    }
    else if (day == 6) {
        goodDay = '6th';
    }
    else if (day == 7) {
        goodDay = '7th';
    }
    else if (day == 8) {
        goodDay = '8th';
    }
    else if (day == 9) {
        goodDay = '9th';
    }
    else if (day == 10) {
        goodDay = '10th';
    }
    else if (day == 11) {
        goodDay = '11th';
    }
    else if (day == 12) {
        goodDay = '12th';
    }
    else if (day == 13) {
        goodDay = '13th';
    }
    else if (day == 14) {
        goodDay = '14th';
    }
    else if (day == 15) {
        goodDay = '15th';
    }
    else if (day == 16) {
        goodDay = '2nd';
    }
    else if (day == 17) {
        goodDay = '17th';
    }
    else if (day == 18) {
        goodDay = '18th';
    }
    else if (day == 19) {
        goodDay = '19th';
    }
    else if (day == 20) {
        goodDay = '20th';
    }
    else if (day == 21) {
        goodDay = '2nd';
    }
    else if (day == 22) {
        goodDay = '22nd';
    }
    else if (day == 23) {
        goodDay = '23rd';
    }
    else if (day == 24) {
        goodDay = '24th';
    }
    else if (day == 25) {
        goodDay = '25th';
    }
    else if (day == 26) {
        goodDay = '26th';
    }
    else if (day == 27) {
        goodDay = '27th';
    }
    else if (day == 28) {
        goodDay = '28th';
    }
    else if (day == 29) {
        goodDay = '29th';
    }
    else if (day == 30) {
        goodDay = '30th';
    }
    else if (day == 31) {
        goodDay = '31st';
    }
    
    document.getElementById('displayDate').innerHTML = goodWeekday + ', ' + goodMonth + ' ' + goodDay + ' ' + year;
}

setInterval(setTime, 50);
setInterval(setDate, 50);


var colours = ['#3895D3', '#8B008B', '#4B0082', '#2E8B57', '#FF7F50', '#6C5B7B'];

var randNum = Math.floor(Math.random() * 6 + 1);
var randColour = colours[randNum];

function bg() {
    document.body.style.backgroundColor = randColour;
}

bg();


function weather() {
  fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=07da98634f59a9887727b9d10e6b4861')  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
  })
  .catch(function() {
    // catch any errors
  });
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
}

weather();