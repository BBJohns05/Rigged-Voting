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