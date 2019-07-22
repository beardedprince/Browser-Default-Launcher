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

    document.getElementById('time-of-day').innerHTML = '<b>' + greet + '</b>'; 


//todo app settings using jQuery

		$(document).ready(function(){

				$('.add').click(function(){
					var acceptInput = $('.input').val();
					/* Load current tasks or init to empty array if none in localStorage */
					const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

					tasks.unshift(acceptInput);

					/* Persist updated tasks list to localStoarge */
					localStorage.setItem("tasks", JSON.stringify(tasks));

					
					if (acceptInput == '') {
						alert('you need to input something');
					} 
					else {
						$('ul').append('<li> ' + acceptInput + '</li>');
						$('.input').val('');

					}
				});
					// $(document).on('dblclick','li', function(){
		   //    		$(this).toggleClass('strike').fadeOut('1000'); 

		   //    });


		});

		

// Retieve data from localStorage and parse the data to normal string

$(function(){

	/* Load current tasks or init to empty array if none in localStorage */
	const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');

	tasks.forEach(function (task) {
		/* For each task in loaded task list, append an item to the ul element */
		$('ul').append('<li>' +  task + ' <i class="fa fa-edit"></i> ' +'<i class="fa fa-trash" aria-hidden="true"></i>' + '' + '</li>');
	})
	
});



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

// Allow editing Task
$(document).on('click','i.fa-edit', function() {
	alert('trash works');
	$('.editTask').show();
})



// Allow Deleting Task
$(document).on('click','i.fa-trash', function() {
	alert('Delete works');
	$('.editTask').hide();
})



