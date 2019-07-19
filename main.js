//Toggle settings button
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
  hours = hours ? hours : 12; 
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
        '<b>' + greet + '</b>';


//todo app settings using jQuery

var nextTask = [];

		$("document").ready(function(){

				$('.add').click(function(){
					var acceptInput = $('.input').val();
					
						nextTask.push(acceptInput);
						localStorage.setItem("tasks", JSON.stringify(nextTask));
					
					
					if (acceptInput == '') {
						alert('you need to input something');
					} 
					else {
						$('ul').append('<li> <i class="fa fa-edit"></i> ' + acceptInput + '<i class="fa fa-trash" aria-hidden="true"></i>' + '' + '</li>');
						$('.input').val('');

					}
				});
					$(document).on('dblclick','li', function(){
		      		$(this).toggleClass('strike').fadeOut('1000'); 

		      });


		});

		

// Retieve data from localStorage and parse the data to normal string

$(function(){

	for (var i = 0; i < localStorage.length; i++) {
		var a = localStorage.key(i);
		var b = localStorage.getItem(a);
		var c = '';
		c += '<li>'  + JSON.parse(b) +  '</li>';
	
		$('ul').append(c); // Change output from localStorage to list tag

		

		
	}

	
});

var array = ['slide 1', 'slide 2', 'slide 9', 'i don tire', 2019];



    array.forEach(function(item){
	
    	$('ol').append('<li>' + item + '</li>');
    	
    })





// Allow tasks to be sorted
	$( function() {
	    $( "ul.droptrue" ).sortable({
	      connectWith: "ul"
	    });
	 
	    $('.droppable').droppable({ 

	  // default options
	  accept: '*',
	  activeClass: '',
	  disabled: false,
	  hoverClass: '',
	  initialized: false,
	  scope: 'default',
	  receiveHandler: null
	  
	});
	 
	    $( "#sortable1" ).disableSelection();
	  } );




