// date
var today = moment().format("dddd, MMMM Do YYYY"); 
console.log(today);
document.getElementById("today").innerHTML= today;

// hour
var currentHour = moment().hours();
console.log(currentHour);


// saveBtn 
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var comment = $(this).siblings(".comment").val();
        var key = $(this).parent().attr("id");

        // save comment in local
        localStorage.setItem(key, comment);
    })
});


// change colors based on hour
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

  // get localStorage 
    $("#9 .comment").val(localStorage.getItem("9"));
    $("#10 .comment").val(localStorage.getItem("10"));
    $("#11 .comment").val(localStorage.getItem("11"));
    $("#12 .comment").val(localStorage.getItem("12"));
    $("#13 .comment").val(localStorage.getItem("13"));
    $("#14 .comment").val(localStorage.getItem("14"));
    $("#15 .comment").val(localStorage.getItem("15"));
    $("#16 .comment").val(localStorage.getItem("16"));
    $("#17 .comment").val(localStorage.getItem("17"));
    $("#18 .comment").val(localStorage.getItem("18"));
    $("#19 .comment").val(localStorage.getItem("19"));
    $("#20 .comment").val(localStorage.getItem("20"));
    $("#21 .comment").val(localStorage.getItem("21"));
  


