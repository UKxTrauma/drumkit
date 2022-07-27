let clap = new Audio("sounds/clap.wav");
    kick = new Audio("sounds/kick.wav");
    tink = new Audio("sounds/tink.wav");
    tom = new Audio("sounds/tom.wav");
    boom = new Audio("sounds/boom.wav");
    hihat = new Audio("sounds/hihat.wav");
    openhat = new Audio("sounds/openhat.wav");
    snare = new Audio("sounds/snare.wav");
    ride = new Audio("sounds/ride.wav");

document.addEventListener("keydown", function(event){
    if(event.keyCode==87){
        w.style.backgroundColor = "yellow";
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if(event.keyCode==65){
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if(event.keyCode==83){
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if(event.keyCode==68){
        tom.pause()
        tom.currentTime = 0
        tom.play();
    } else if(event.keyCode==32){
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if(event.keyCode==38){
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if(event.keyCode==37){
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if(event.keyCode==40){
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if(event.keyCode==39){
        ride.pause()
        ride.currentTime = 0
        ride.play();
    }
});

document.addEventListener("mousedown", function(event){
    if(event.target==w){
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if(event.target==a){
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if(event.target==s){
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if(event.target==d){
        tom.pause()
        tom.currentTime = 0
        tom.play();
    } else if(event.target==space){
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if(event.target==up){
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if(event.target==left){
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if(event.target==down){
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if(event.target==right){
        ride.pause()
        ride.currentTime = 0
        ride.play();
    }
});