// Get the modal
var modal_popup = document.getElementById("myModal_popup");

// Get the button that opens the modal
var btn_popup = document.getElementById("myBtn_popup");

// Get the <span> element that closes the modal
var span_popup = document.getElementsByClassName("close_popup")[0];

// When the user clicks the button, open the modal 
btn_popup.onclick = function() {
  modal_popup.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_popup.onclick = function() {
  modal_popup.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal_popup) {
    modal_popup.style.display = "none";
  }
}