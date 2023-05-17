// Function to initialize a popup
function initPopup(popupId, btnId, closeClass) {
  // Get the popup
  var popup = document.getElementById(popupId);

  // Get the button that opens the popup
  var btn = document.getElementById(btnId);

  // Get the <span> element that closes the popup
  var span = document.getElementsByClassName(closeClass)[0];

  // When the user clicks the button, open the popup 
  btn.onclick = function() {
    popup.style.display = "block";
  }

  // When the user clicks on <span> (x), close the popup
  span.onclick = function() {
    popup.style.display = "none";
  }

  // When the user clicks anywhere outside of the popup, close it
  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  }

  // Make the popup content draggable
  dragElement(popup, popup.getElementsByClassName('popup-header')[0]);
}

// Initialize the popups
initPopup('myPopup1', 'myBtn1', 'close1');
initPopup('myPopup2', 'myBtn2', 'close2');
// And so on for Popup 3 and Popup 4...

// Function to make an element draggable
function dragElement(popup, header) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  // move the DIV from header:
  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
   
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    popup.style.top = (popup.offsetTop - pos2) + "px";
    popup.style.left = (popup.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
