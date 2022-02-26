let     lcd = document.getElementById('lcd'),
        video = document.getElementById('video'),
        powerSwitch = document.getElementById('powerSwitch'),
        battery = document.getElementById('battery'),
        on = false;

function powerOn() {
    on = !on;
    if(on) { // If the console is ON, we'll play a cute animation
        // Change Gameboy' switch status
        powerSwitch.classList.add('powerOn');
        battery.classList.add('powerOn');

        setTimeout(function() {
            if(lcd.classList.value.search('animation') == -1)
            lcd.classList.add('animation');
            console.log(`Added 'animation' class (or already added)`);
        }, 150); // 150ms: almost in perfect sync with 500ms 'animation-timing' (CSS Variable)
    } else { // If OFF, only a reflection is presented
        if(lcd.classList.value.search('animation'))
            lcd.classList.remove('animation');
        console.log(`Removed 'animation' class (or already added)`);

        // Pause and dissapear the video! 😁
        video.pause();
        video.classList.remove('active');

        // Change Gameboy' switch status
        powerSwitch.classList.remove('powerOn');
        battery.classList.remove('powerOn');
    }
    console.log(on ? `Console is powered ON` : `Console is powered OFF`);
}

function videoControl() {
    const standby = lcd.classList.value.search('animation') > 0 ? true : false;
    
    if(standby && on) {
        // lcd.classList.add('on');
        lcd.classList.remove('animation');

        video.classList.add('active');
        // delay
        const action = function() {
            video.volume = 0.2;
            video.play();
        };
        setTimeout(action, 300);
    } else if(on) {
        // lcd.classList.remove('on');
        lcd.classList.add('animation');

        video.classList.remove('active');
        // delay
        const action = function() {
            video.pause();
        };
        setTimeout(action, 300);
    } else {
        lcd.classList.remove('animation');
        video.classList.remove('active');
    }
}

function volume(value) {
    if(value > 0 && video.volume < 0.9) {
        console.log(`Volume: ${video.volume}`);
        video.volume += value;
    } 
    else if(value < 0 && video.volume > 0.1) {
        console.log(`Volume: ${video.volume}`);
        video.volume += value;
    }
    else {
        console.warn(`No se puede cambiar el volúmen, valor aplicado: ${video.volume}.`);
    }
        
}

function seek(value) {
    video.currentTime += value;
}