var numberOfDrum = document.querySelectorAll(".drum").length;

for( var i = 0; i<numberOfDrum; i++){

//Click action
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
       
       var innerhtml = this.innerHTML;
       makesound(innerhtml);    
        highlighter(innerhtml);
    });
    
}
// Key Press
document.addEventListener("keydown", function(event){
    makesound(event.key);
    highlighter(event.key);

});
// highlighter of keypress
function highlighter(high){
    var action = document.querySelector("."+ high);
    action.classList.add("pressed");

    setTimeout(function() {
        action.classList.remove("pressed");
    }, 100);
}
function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio('tom-1.mp3');
            audio.play(); 

            break;

        case "a":
            var audio = new Audio('tom-2.mp3');
            audio.play(); 

            break;

        case "s":
            var audio = new Audio('tom-3.mp3');
            audio.play(); 

            break;
        case "d":
            var audio = new Audio('tom-4.mp3');
            audio.play(); 
    
            break;
                    
        case "j":
            var audio = new Audio('snare.mp3');
            audio.play(); 
    
            break;

        case "k":
            var audio = new Audio('crash.mp3');
            audio.play(); 
        
            break;  

        case "l":
            var audio = new Audio('kick-bass.mp3');
            audio.play(); 
        
            break;  
                      
        default:
            alert("Not supported: "+ innerhtml);
            
       }
       
       
       
        var audio = new Audio('tom-1.mp3');
        audio.play();
}