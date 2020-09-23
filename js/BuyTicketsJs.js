
var currentDate = new Date();

var date = currentDate.getDate();

var month1 =  getMonths(currentDate.getMonth());

console.log("hhhhhhhhhhhh"+month1);

var day1 = getDays(currentDate.getDay());

var is =document.getElementsByClassName("firstMonth");

//set Month to Classes

var i;
for(i=0;i<=6;i++){

    document.getElementsByClassName("firstMonth")[i].innerHTML = month1;

}


document.getElementById("firstDay").innerHTML = date;
document.getElementById("firstWeekDay").innerHTML = day1;

if(day1==="Monday"){

    document.getElementById("secondDay").innerHTML = +date + +1;
    document.getElementById("secondWeekDay").innerHTML = "Tuesday";

    document.getElementById("thirdDay").innerHTML = +date + +2;
    document.getElementById("thirdWeekDay").innerHTML = "WednesDay";

    document.getElementById("fourthDay").innerHTML = +date + +3;
    document.getElementById("fourthWeekDay").innerHTML = "Thursday";

    document.getElementById("fifthDay").innerHTML = +date + +4;
    document.getElementById("fifthWeekDay").innerHTML = "Friday";

    document.getElementById("sixthDay").innerHTML = +date + +5;
    document.getElementById("sixthWeekDay").innerHTML = "Saturday";

    document.getElementById("seventhDay").innerHTML = +date + +6;
    document.getElementById("seventhWeekDay").innerHTML = "Sunday";

}

if(day1==="Tuesday"){

    document.getElementById("secondDay").innerHTML = +date + +1;
    document.getElementById("secondWeekDay").innerHTML = "Wednesday";

    document.getElementById("thirdDay").innerHTML = +date + +2;
    document.getElementById("thirdWeekDay").innerHTML = "Thursday";

    document.getElementById("fourthDay").innerHTML = +date + +3;
    document.getElementById("fourthWeekDay").innerHTML = "Friday";

    document.getElementById("fifthDay").innerHTML = +date + +4;
    document.getElementById("fifthWeekDay").innerHTML = "Saturday";

    document.getElementById("sixthDay").innerHTML = +date + +5;
    document.getElementById("sixthWeekDay").innerHTML = "Sunday";

    document.getElementById("seventhDay").innerHTML = +date + +6;
    document.getElementById("seventhWeekDay").innerHTML = "Monday";

}

if(day1==="Wednesday"){

    document.getElementById("secondDay").innerHTML = +date + +1;

    document.getElementById("secondWeekDay").innerHTML = "Thursday";

    document.getElementById("thirdDay").innerHTML = +date + +2;
    document.getElementById("thirdWeekDay").innerHTML = "Friday";

    document.getElementById("fourthDay").innerHTML = +date + +3;
    document.getElementById("fourthWeekDay").innerHTML = "Saturday";

    document.getElementById("fifthDay").innerHTML = +date + +4;
    document.getElementById("fifthWeekDay").innerHTML = "Sunday";

    document.getElementById("sixthDay").innerHTML = +date + +5;
    document.getElementById("sixthWeekDay").innerHTML = "Monday";

    document.getElementById("seventhDay").innerHTML = +date + +6;
    document.getElementById("seventhWeekDay").innerHTML = "Tuesday";
    

}

if(day1==="Thursday"){

    document.getElementById("secondDay").innerHTML = +date + +1;
    document.getElementById("secondWeekDay").innerHTML = "Friday";

    document.getElementById("thirdDay").innerHTML = +date + +2;
    document.getElementById("thirdWeekDay").innerHTML = "Saturday";

    document.getElementById("fourthDay").innerHTML = +date + +3;
    document.getElementById("fourthWeekDay").innerHTML = "Sunday";

    document.getElementById("fifthDay").innerHTML = +date + +4;
    document.getElementById("fifthWeekDay").innerHTML = "Monday";

    document.getElementById("sixthDay").innerHTML = +date + +5;
    document.getElementById("sixthWeekDay").innerHTML = "Tuesday";

    document.getElementById("seventhDay").innerHTML = +date + +6;
    document.getElementById("seventhWeekDay").innerHTML = "Wednesday";

}
if(day1==="Friday"){

    document.getElementById("secondDay").innerHTML = +date + +1;
    document.getElementById("secondWeekDay").innerHTML = "Saturday";

    document.getElementById("thirdDay").innerHTML = +date + +2;
    document.getElementById("thirdWeekDay").innerHTML = "Sunday";

    document.getElementById("fourthDay").innerHTML = +date + +3;
    document.getElementById("fourthWeekDay").innerHTML = "Monday";

    document.getElementById("fifthDay").innerHTML = +date + +4;
    document.getElementById("fifthWeekDay").innerHTML = "Tuesday";

    document.getElementById("sixthDay").innerHTML = +date + +5;
    document.getElementById("sixthWeekDay").innerHTML = "Wednesday";

    document.getElementById("seventhDay").innerHTML = +date + +6;
    document.getElementById("seventhWeekDay").innerHTML = "Thursday";

}
if(day1==="Saturday"){

    document.getElementById("secondDay").innerHTML = +date + +1;
    document.getElementById("secondWeekDay").innerHTML = "Sunday";

    document.getElementById("thirdDay").innerHTML = +date + +2;
    document.getElementById("thirdWeekDay").innerHTML = "Monday";

    document.getElementById("fourthDay").innerHTML = +date + +3;
    document.getElementById("fourthWeekDay").innerHTML = "Tuesday";

    document.getElementById("fifthDay").innerHTML = +date + +4;
    document.getElementById("fifthWeekDay").innerHTML = "Wednesday";

    document.getElementById("sixthDay").innerHTML = +date + +5;
    document.getElementById("sixthWeekDay").innerHTML = "thursday";

    document.getElementById("seventhDay").innerHTML = +date + +6;
    document.getElementById("seventhWeekDay").innerHTML = "Friday";

}

if(day1==="Sunday"){

    document.getElementById("secondDay").innerHTML = +date + +1;
    document.getElementById("secondWeekDay").innerHTML = "Monday";

    document.getElementById("thirdDay").innerHTML = +date + +2;
    document.getElementById("thirdWeekDay").innerHTML = "Tuesday";

    document.getElementById("fourthDay").innerHTML = +date + +3;
    document.getElementById("fourthWeekDay").innerHTML = "Wednesday";

    document.getElementById("fifthDay").innerHTML = +date + +4;
    document.getElementById("fifthWeekDay").innerHTML = "Thursday";

    document.getElementById("sixthDay").innerHTML = +date + +5;
    document.getElementById("sixthWeekDay").innerHTML = "Friday";

    document.getElementById("seventhDay").innerHTML = +date + +6;
    document.getElementById("seventhWeekDay").innerHTML = "Saturday";

}

function getMonths(monthA){
    
    var month;

    switch(monthA){

        case 0: month="January";break;
        case 1: month="February";break;
        case 2: month= "March";break;
        case 3: month= "April";break;
        case 4: month= "May";break;
        case 5: month = "June";break;
        case 6: month="July";break;
        case 7: month ="August";break;
        case 8: month = "September";break;
        case 9: month = "Octomber";break;
        case 10: month = "November";break;
        case 11: month = "December";break;

    }
    return month;
}

function getDays(dayA){

    var day;

    switch(dayA){
        case 0: day="Sunday";

                        break;
        case 1: day="Monday";break;
        case 2: day= "Tuesday";break;
        case 3: day= "Wednesday";break;
        case 4: day= "Thursday";break;
        case 5: day = "Friday";break;
        case 6: day="Saturday";break;
       
    }
    return day;
}