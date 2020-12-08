
<!DOCTYPE html>
<html lang="en">
  <head>


  </head>


<body>
function timeBlockEl() {
    let hourEl = luxon.DateTime.local().toLocaleString({ hour: "2-digit" });
    let formattedHour = parseInt(hourEl[0] + hourEl[1]);
    if (hourEl.indexOf("PM")) {
      formattedHour += 12;
      // console.log(formattedHour);
    }
    // console.log(formattedHour);
    // console.log(hourEl);
    $(".time-block").each(function () {
      let currentHour = parseInt($(this).attr("id"));
      // console.log(currentHour);
      if (formattedHour > currentHour) {
        $(this).addClass("past");
      } else if (currentHour === formattedHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }




  function storeEl() {
    $(".hour").each(function () {
      let currentHour = $(this).text();
      let storedTxt = localStorage.getItem(currentHour);
      if (storedTxt !== null) {
        $(this).siblings(".usrTxt").val(storedTxt);
      }
      // console.log(storedTxt);
    });
  }



<script src="luxon.js"></script>
<script>luxon.DateTime.local();</script>

  </body>