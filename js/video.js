const   lcd = document.getElementById('lcd'),
        video = document.getElementById('video');

function start() {
    const standby = lcd.classList.value.search('animation') > 0 ? true : false;
    
    if(standby) {
        lcd.classList.add('on');
        lcd.classList.remove('animation');

        video.classList.add('active');
        // delay
        const action = function() {
            video.volume = 0.25;
            video.play();
        };
        setTimeout(action, 300);
    } else {
        lcd.classList.remove('on');
        lcd.classList.add('animation');

        video.classList.remove('active');
        // delay
        const action = function() {
            video.pause();
        };
        setTimeout(action, 300);
    }
}

function volume(value) {
    if(video.volume < 0.95 && video.volume > 0.05 && value < 0.05)
        video.volume += value;
}

function seek(value) {
    video.currentTime += value;
}