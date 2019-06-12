function openSettings() {
   document.getElementById("settings").classList.toggle("settings-opened");
}


document.getElementById("btn-settings").addEventListener('click', openSettings);

var userName = localStorage.getItem('receivedName');

if (userName == null) {
   userName = "friend";
}


function saveName() {
    localStorage.setItem('receivedName', userName);
}

function changeName() {
   userName = document.getElementById("name-input").value;
   saveName();
   getGreeting();

}

document.getElementById("name-form").addEventListener('submit', function(e) {
   e.preventDefault()
   changeName();
});

function getGreeting() {
   document.getElementById("greeting").innerHTML  = `&nbsp;${userName}, Enjoy your day!`;
}

getGreeting();

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
var timing = document.getElementById("timing").innerHTML= time;

var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good evening';

    document.getElementById('time-of-day').innerHTML =
        '<b>' + greet + '</b> ';

