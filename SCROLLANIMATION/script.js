// Save third-page and fourth-page buttons as variables
let thirdButton = document.getElementById('third-page');
let fourthButton = document.getElementById('fourth-page');

// Add click event to both elements and set scrollPage function as callback function
thirdButton.addEventListener('click', scrollPage);
fourthButton.addEventListener('click', scrollPage);

function scrollPage(){
	// this keyword returns the HTML element that triggered the event (in this case, click event)
	// Check id of this HTML element
	// If id name is 'third-page'
	if(this.id === 'third-page'){
		window.scrollTo({
			// Scroll twice the height of window height
  			top: window.innerHeight * 2,
  			left: 0,
  			// Setting behavior to 'smooth' will animate the scroll
  			behavior: 'smooth'
		});
	}

	// If id name is 'fourth-page'
	if(this.id === 'fourth-page'){
		window.scrollTo({
			// Scroll three times the height of window height
  			top: window.innerHeight * 3,
  			left: 0,
  			behavior: 'smooth'
		});
	}
}

// An array of stories as strings
let stories = [
	'Hello!',
	'I am a Aero, your storyteller.',
	'I am here to help you understand this fresh world',
	'This is how I see future!'
];

let catDiv = document.getElementById('cat-div');
let catText = document.getElementById('cat-text');
let navButtons = document.getElementsByClassName('nav-btn');

// Add scroll event for the whole HTLM document and set changeText function as callback
document.addEventListener('scroll', changeText);

// changeText function runs whenever scroll happens on the web page
function changeText(){
	// Uncomment line below to see scrollY position change
	console.log(window.scrollY);

	// pos saves current scrollY position
	let pos = window.scrollY;
	// width saves current web page width
	let width = window.innerWidth;
	// height saves current web page height
	let height = window.innerHeight;
	// Calculate which section the user has scrolled to
	// parseInt() function used to ignore decimals
	let sectionNum = parseInt(pos / height);

	// Set the text of cat-text element depending on which section the user has currently scrolled to
	catText.innerHTML = stories[sectionNum];
	// Map vertical scroll position to the horizontal position of the cat
	catDiv.style.left = pos / (height * 4) * width + 'px';

	// Fix color of navigation button
	// Set all button color to white
	for(let i = 0; i < navButtons.length; i++){
		navButtons[i].style.backgroundColor = 'white';
	}

	// Set color of current section button to black
	navButtons[sectionNum].style.backgroundColor = 'black';

	AOS.init();
}