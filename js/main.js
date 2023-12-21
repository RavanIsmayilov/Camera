var button  = document.querySelector(".button");
var intCircle = document.querySelector(".int_circle");

button.addEventListener("click", function(){

    intCircle.style.backgroundColor = "yellow";


    setInterval(function() {

        intCircle.style.backgroundColor = "black";
    
    }, 1450)
    
    
});


button.addEventListener("click", function(){

button.style.top = "-8px";


setInterval(function() {

    button.style.top = "-20px";

}, 1450)
    
});

const audio = new Audio("./audio/cameravoice.wav");

button.addEventListener("click", () => {

    audio.play();

    setTimeout(function() {

        audio.pause();
    
    }, 1450)
    
  });

