<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="jquery-3.5.1.min.js"></script>
    <title>Day Planner</title>
</head>




<body>

$("#currentDay").text(luxon.DateTime.local());

let currentTime = luxon.DateTime.local({
  hour: "2-digit",
});


$("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));






<script src="luxon.js"></script>
<script>luxon.DateTime.local();</script>
<script src="https://cdn.jsdelivr.net/npm/luxon@1.25.0/build/global/luxon.min.js"></script>
</body>






