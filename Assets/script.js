

$("#currentDay").text(moment().format('MMMM Do YYYY'));

// class .
// id # 
// tag - element name
$('.saveBtn').on( "click", saveData)

function saveData(){


var saveKey = $(this).siblings('textarea').attr('id');
var saveVal = $(this).siblings('textarea').val();

localStorage.setItem(saveKey, saveVal);
}








