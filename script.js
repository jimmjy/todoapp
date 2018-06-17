/* This is a simple todo list which has initial items on list but typically that would not be the case.  I add an IIFE to add delete button in case there was a list already and that would be useful in cases where you are pulling a list saved somewhere */

//variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName('li');

//onload to add delete button to existing items on list IIFE and crossing off item on list
(function addDeleteButton() {
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener('click', crossOff);
		li[i].appendChild(document.createTextNode(' '));
		li[i].appendChild(delButton());
	}
})();

//delete button creation and action
function delButton() {
	var delButton = document.createElement('button');
	delButton.appendChild(document.createTextNode('delete'));
	
	//add event to remove li from list
	delButton.addEventListener('click', function(event) {
		var li = event.target.parentNode;
		li.parentNode.removeChild(li);
	});

	return delButton;
};


//determines length of input
function inputLength() {
	var inLength = input.value.length;
	return inLength;
}

//creates list item and adds delete button to it as well as adds it to list
function createListElement() {
	var listItem = document.createElement('li');
		listItem.appendChild(document.createTextNode(input.value + ' '));

		//add class toggle to li
		listItem.addEventListener('click', crossOff);
		listItem.appendChild(delButton());
		ul.appendChild(listItem);
		input.value = '';
};

//cross items off
function crossOff(event) {
	event.target.classList.toggle('done');
}

//add item to list through mouse clicking enter button
button.addEventListener('click', function() {
	if (inputLength() > 0) {
		createListElement();
	};
});

//add item to list through clicking enter on keyboard
input.addEventListener('keypress', function(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	};
});





