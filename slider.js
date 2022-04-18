var sliderBox = document.getElementById("sliderBox");

  var i = 0;
setInterval(function(){
    if(i == 5){
        i = 0;
        sliderBox.style.transition = "0.1s";
    }else {
        sliderBox.style.transition = "0.3s"; 
    }
    sliderBox.style.transform =  `translateX(${-20*i}%)`;
    i++;
    

} , 2000)