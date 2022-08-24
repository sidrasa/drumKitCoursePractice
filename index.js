var drumButtonSize=document.querySelectorAll(".drum").length;

function playsound(val){
    switch (val) {
        case "w":
            var crash=new Audio('../sounds/crash.mp3');
            crash.play();
            break;
            case "a":
            var kickBass=new Audio('../sounds/kick-bass.mp3');
            kickBass.play();
            break;
            case "s":
                var snare=new Audio('../sounds/snare.mp3');
                snare.play();
                break;
                case "d":
                    var tom1=new Audio('../sounds/tom-1.mp3');
                    tom1.play();
                    break;
                    case "j":
                        var tom2=new Audio('../sounds/tom-2.mp3');
                        tom2.play();
                        break;
        default:
            break;
    }
}

document.addEventListener("keydown",function(e){
    playsound(e.key);
    buttonAnime(e.key);
});

for(var i=0;i<drumButtonSize;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var val=this.innerHTML;
        playsound(val);
        buttonAnime(val);
    });
}

function buttonAnime(curKey){
    var active=document.querySelector("."+curKey);
    active.classList.add("pressed");
    setTimeout(() => {
        active.classList.remove("pressed");
    }, 100);
}