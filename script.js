var jumborton = document.querySelector(".jumborton");
var lead = document.querySelector(".lead");

var currentDay = document.querySelector("#currentDay");

var containerDiv = document.getElementsByClassName("container");
var timeBockTable = document.querySelector(".time-block");

var inputContent = document.querySelectorAll(".content-input");
var timeRecorder = document.querySelectorAll("#time");

var isOutput = document.getElementsByClassName("isOutput")

var saveButton = document.querySelectorAll(".svBtn");
for (var i = 0; i < saveButton.length; i++) {

  saveButton[i].addEventListener("click", function() {

    var inputContent = document.getElementById("content-input1").value;
    localStorage.setItem("content-input1", inputContent);
    

    var inputContent = document.getElementById("content-input2").value;
    localStorage.setItem("content-input2", inputContent);

    var inputContent = document.getElementById("content-input3").value;
    localStorage.setItem("content-input3", inputContent);

    var inputContent = document.getElementById("content-input4").value;
    localStorage.setItem("content-input4", inputContent);

    var inputContent = document.getElementById("content-input5").value;
    localStorage.setItem("content-input5", inputContent);

    var inputContent = document.getElementById("content-input6").value;
    localStorage.setItem("content-input6", inputContent);

    var inputContent = document.getElementById("content-input7").value;
    localStorage.setItem("content-input7", inputContent);

    var inputContent = document.getElementById("content-input8").value;
    localStorage.setItem("content-input8", inputContent);

  });

  var todat = moment().format();
  console.log(todat);
  $("#currentDay").prepend(todat);
  
}