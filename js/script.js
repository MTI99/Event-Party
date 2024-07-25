

// Side Bar 

$(".openNav").on("click", function(){
  $(".sidenav").animate(  {width: "400px"}    ,  500  )
})

$(".closebtn").on("click", function(){
  $(".sidenav").animate(  {width: "0"}    ,  500  )
})



// Acordion section

$(".toggle").on("click" , function(){
  $(this).next().slideToggle(500);
  $(".inner").not( $(this).next() ).slideUp(500)
})




/*counter*/


// window.onload = function() {
   
//   countDownToTime("10 october 2021 9:56:00");
// }

// function countDownToTime(countTo) {

//       let futureDate = new Date(countTo);
//   futureDate = (futureDate.getTime()/1000);

//   let now = new Date();
//   now = (now.getTime()/1000);

//  let  timeDifference = (futureDate - now);
      
//  let days = Math.floor( timeDifference / (24*60*60));
//  let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
//  let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
//  let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


//   $(".days").html(`${days} D`);
//   $(".hours").html(`${hours} h`);
//   $(".minutes").html(`${ mins } m`);
//   $('.seconds').html(`${ secs} s`)


//   setInterval(function() {  countDownToTime(countTo); }, 1000);
// }





$(document).ready(function() {
  function countDownToTime(countTo) {
      let futureDate = new Date(countTo).getTime();

      setInterval(function() {
          let now = new Date().getTime();
          let timeDifference = (futureDate - now) / 1000;
          
          let days = Math.floor(timeDifference / (24 * 60 * 60));
          let hours = Math.floor((timeDifference % (24 * 60 * 60)) / 3600);
          let mins = Math.floor((timeDifference % 3600) / 60);
          let secs = Math.floor(timeDifference % 60);

          $(".days").html(`${days} D`);
          $(".hours").html(`${hours} h`);
          $(".minutes").html(`${mins} m`);
          $(".seconds").html(`${secs} s`);
      }, 1000);
  }

  countDownToTime("25 July 2025 9:56:00");
});




// Text Area

$("textarea").keyup( function(){
  let charLength = $("textarea").val().length
  
  $("#chars").text(  100 - charLength  <= 0 ? "No More" :  100 - charLength  )
} )