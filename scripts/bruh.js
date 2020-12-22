window.onload = function() {
//
//
var clicker = document.getElementById('toggle');
var train = new Audio('./scripts/audio/train.mp3');
var fish = new Audio('./scripts/audio/fish.mp3');
var tge;
var n=5;
clicker.onclick = function () {
    if(clicker.classList == 'disabled') {
        clicker.classList == 'stableButton';
        clicker.innerText = 'Stop interval';
        train.play();
        tge = [window.setInterval(() => {
            console.log(n)
            if(n!==0) {
                if(n % 30 == 0) return;
                train.play();
                n+=5;
                if(n == 30) return n = 0;
            } else n+=5;
        }, 5000),
        window.setInterval(() => {
                fish.play()
        }, 30000)
        ];
    } else {
        clicker.classList == 'disabled';
        clicker.innerText = 'Start interval';
        for(var int of tge) {
            window.clearInterval(int)
        }
        tge = null;
    }
}
//
//
}