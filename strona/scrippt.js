// Pierwszy dźwięk
var audio = document.getElementById("muzyka");
var obrazek = document.getElementById("obrazek");
var obrazekp = document.getElementById("obrazekp");


obrazek.addEventListener("click", playaudio);

function playaudio() {
    muzyka.play();
}

obrazekp.addEventListener("click", pauseaudio);
function pauseaudio() {
    muzyka.pause();
}



// Drugi dźwięk
var audio1 = document.getElementById("muzyka1");
var obrazek1 = document.getElementById("obrazek1");
var obrazekp1 = document.getElementById("obrazekp1");

obrazek1.addEventListener("click", playaudio1);

function playaudio1() {
    muzyka1.play();
}

obrazekp1.addEventListener("click", pauseaudio1);
function pauseaudio1() {
    muzyka1.pause();
}

// Trzeci dźwięk
var audio2 = document.getElementById("muzyka2");
var obrazek2 = document.getElementById("obrazek2");
var obrazekp2 = document.getElementById("obrazekp2");

obrazek2.addEventListener("click", playaudio2);

function playaudio2() {
    muzyka2.play();
}

obrazekp2.addEventListener("click", pauseaudio2);
function pauseaudio2() {
    muzyka2.pause();
}



// Czwarty dźwięk
var audio3 = document.getElementById("muzyka3");
var obrazek3 = document.getElementById("obrazek3");

obrazek3.addEventListener("click", playaudio3);

function playaudio3() {
    muzyka3.play();
}

obrazekp3.addEventListener("click", pauseaudio3);
function pauseaudio3() {
    muzyka3.pause();
}





