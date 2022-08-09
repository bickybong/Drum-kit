var arrayDrums = document.querySelectorAll(".drum");

//detect button press
for (i=0; i< arrayDrums.length; i++){
    arrayDrums[i].addEventListener("click", function (){
        var buttonTextContent = this.textContent;
        makeSound(buttonTextContent);
        buttonAnimation(buttonTextContent);
    });
}

//detect key press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

})

function makeSound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default: 
        console.log(this);
            break;
    }
}

function buttonAnimation(key){
    var activeButton =document.querySelector(`.${key}`);
    activeButton.classList.toggle("pressed");
    setTimeout(function (){
        activeButton.classList.toggle("pressed");
    }, 100)
}