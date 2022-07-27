var clap = new Audio("sounds/clap.wav");
var kick = new Audio("sounds/kick.wav");
var tink = new Audio("sounds/tink.wav");
var tom = new Audio("sounds/tom.wav");
var boom = new Audio("sounds/boom.wav");
var hihat = new Audio("sounds/hihat.wav");
var openhat = new Audio("sounds/openhat.wav");
var snare = new Audio("sounds/snare.wav");
var ride = new Audio("sounds/ride.wav");

document.addEventListener("keydown", function(event){
    if(event.keyCode==87){
        clap.play();
    } else if(event.keyCode==65){
        kick.play();
    } else if(event.keyCode==83){
        tink.play();
    } else if(event.keyCode==68){
        tom.play();
    } else if(event.keyCode==32){
        boom.play();
    } else if(event.keyCode==38){
        hihat.play();
    } else if(event.keyCode==37){
        openhat.play();
    } else if(event.keyCode==40){
        snare.play();
    } else if(event.keyCode==39){
        ride.play();
    }
});

document.addEventListener("click", function(event){
    if(event.target==w){
        clap.play();
    } else if(event.target==a){
        kick.play();
    } else if(event.target==s){
        tink.play();
    } else if(event.target==d){
        tom.play();
    } else if(event.target==space){
        boom.play();
    } else if(event.target==up){
        hihat.play();
    } else if(event.target==left){
        openhat.play();
    } else if(event.target==down){
        snare.play();
    } else if(event.target==right){
        ride.play();
    }
});