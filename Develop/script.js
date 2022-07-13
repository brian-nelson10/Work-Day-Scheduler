// create buttons
// add modal
// add modal forms
// create time slots
// have data or values go into time slot card
// make time slots editable when you click on time card
// make shit stay when refreshed and into local storage
// make it look cool with bootstrap and font
// maybe add icons to time slot for past due present future and icons for time?
// add colors to times that are past present future
// figure out timer so everything is live

//const colorCode = document.getElementsByClassName(".colorCode");



var today = moment().format("dddd, MMMM Do YYYY"); 
console.log(today);
document.getElementById("today").innerHTML= today;


var currentHour = moment().hours();
console.log(currentHour);


$('.colorCode')
  .each(function(){
    
    var val = parseInt($(this).prop('id'));

    if(val > currentHour && val < currentHour + 6){ 
      $(this).css("background-color",'red');

    }else if(val < currentHour && val > currentHour-6){
      $(this).css('background-color','antiquewhite');

    }else if(val === currentHour){
      $(this).css('background-color','green');
      
    }else{
      $(this).css('background-color','white');
    }
  });






