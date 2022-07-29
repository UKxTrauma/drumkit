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
    event.preventDefault()
    // function animate () {document.getElementById('w').addClass('grow')};
    if(event.keyCode==87){
        // document.getElementById('w').style.animation="grow 0.5s linear";
        w.style.animation="grow 0.1s";
        w.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            w.style.animation = ``;  
            w.style.color = ``;  
        }         
        , 100);
        clap.pause()
        clap.currentTime = 0
        clap.play();
    } else if(event.keyCode==65){
        a.style.animation="grow 0.1s";
        a.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            a.style.animation = ``;  
            a.style.color = ``;  
        }         
        , 100);
        kick.pause()
        kick.currentTime = 0
        kick.play();
    } else if(event.keyCode==83){
        s.style.animation="grow 0.1s";
        s.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            s.style.animation = ``;  
            s.style.color = ``;  
        }         
        , 100);
        tink.pause()
        tink.currentTime = 0
        tink.play();
    } else if(event.keyCode==68){
        d.style.animation="grow 0.1s";
        d.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            d.style.animation = ``;  
            d.style.color = ``;  
        }         
        , 100);
        tom.pause()
        tom.currentTime = 0
        tom.play();
    } else if(event.keyCode==32){
        space.style.animation="grow 0.1s";
        space.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            space.style.animation = ``;  
            space.style.color = ``;  
        }         
        , 100);
        boom.pause()
        boom.currentTime = 0
        boom.play();
    } else if(event.keyCode==38){
        up.style.animation="grow 0.1s";
        up.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            up.style.animation = ``;  
            up.style.color = ``;  
        }         
        , 100);
        hihat.pause()
        hihat.currentTime = 0
        hihat.play();
    } else if(event.keyCode==37){
        left.style.animation="grow 0.1s";
        left.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            left.style.animation = ``;  
            left.style.color = ``;  
        }         
        , 100);
        openhat.pause()
        openhat.currentTime = 0
        openhat.play();
    } else if(event.keyCode==40){
        down.style.animation="grow 0.1s";
        down.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            down.style.animation = ``;  
            down.style.color = ``;  
        }         
        , 100);
        snare.pause()
        snare.currentTime = 0
        snare.play();
    } else if(event.keyCode==39){
        right.style.animation="grow 0.1s";
        right.style.color=" rgb(79, 1, 79)"
        setTimeout(() => {
            right.style.animation = ``;  
            right.style.color = ``;  
        }         
        , 100);
        ride.pause()
        ride.currentTime = 0
        ride.play();
    }
});

document.getElementById('boxForButt').addEventListener("mousedown", function(event){
    event.preventDefault()
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