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
var hours = today.getHours();
var minutes = today.getMinutes();
var picker =  hours >= 12 ? 'pm' : 'am';
hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
var time = hours + ':' + minutes + ' ' + picker;
var timing = document.getElementById("timing").innerHTML= time;


    var hrs = today.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good evening';

    document.getElementById('time-of-day').innerHTML =
        '<b>' + greet + '</b> ';

//todo app settings

$("document").ready(function(){

		$('.add').click(function(){
			var acceptInput = $('.input').val();
			
			if (acceptInput == ''){
				alert('you need to input something');
			} else {
			$('ul').append('<li> <span style="float:right"> &times; </span> ' + acceptInput + '</li>' )

			}});

			$(document).on('dblclick','li', function(){
        $(this).toggleClass('strike').fadeOut('1000');    
      });


		});

		
	
