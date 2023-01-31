var should_play=true
    window.onclick = () => {
        if (should_play){
            should_play=!should_play
            let soundSource = "eagle-scream.mp3";
            let sound = new Audio(soundSource);
            sound.play();
            sound.onended = () => {
                should_play=true
            }
        }

    }

//randomize johnson button when hovered over

johnson.onmouseover=function(event){
    
    console.log('works')//window-realative field coordinates
    let fieldCoords= this.getBoundingClientRect();

    //the johnson has position: absoulte, the field poistion: relative
    //so johnson coordinates are realtive to the field inner left-upper corner
    let johnsonCoords={
        top: Math.random()*1000,
        // event.clientY - fieldCoords.top - field.clientTop - johnson.clientHeight / 2 - 10, 
        left: Math.random()*1000,
        // event.clientX - fieldCoords.left - field.clientTop - johnson.clientWidth / 2 - 7, 
    }

//prevent crossing the top field boundary
if(johnsonCoords.top < 0){johnsonCoords.top=0}
//prevent corssing the left field boundry
if(johnsonCoords.left <0){johnsonCoords.left=0}
//prevent corssing the left field boundry
if(johnsonCoords.top + johnson.clientHeight > field.clientHeight){
    johnsonCoords.top = field.clientHeight - johnson.clientHeight;
}
//prevent corssing the left field boundryS
if(johnsonCoords.left + johnson.clientWidth > field.clientWidth){
    johnsonCoords.left = field.clientWidth - johnson.clientWidth;
}
johnson.style.left = johnsonCoords.left + 'px'
johnson.style.top = johnsonCoords.top + 'px'
}

//disable context menu

window.addEventListener("contextmenu", e => e.preventDefault());

//onload event

document.getElementById().addEventListener("load", myFunction);

function myFunction() {
    alert("secure voting website")
  }