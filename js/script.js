// Javascript Code

// Jquery Code
$(document).ready(function(){
    // counterup

    $('.counter').counterUp({
    delay: 10,
    time: 5000
});
    // counterup2
    // $(selector).countMe(delay,speed)
     window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $("#num1").countMe(40,65);
        $("#num2").countMe(30, 30);
        $("#num3").countMe(40, 50);
        $("#num4").countMe(100,200);
     }
     // counterup3
     $(".incremental-counter").incrementalCounter({
  "digits": 4
});
});