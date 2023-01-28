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

const space = document.querySelector(".space")    
const johnson = document.querySelector(".johnson");

johnson.addEventListener("moseover", () => {
    const i = math.floor(Math.random() * space.width - johnson.width)+1;
    const j = Math.floor(Math.random() * space.height - johnson.height)+1;
    johnson.style.left= i + 'px';
    joshnson.style.top= j + 'px';
})    