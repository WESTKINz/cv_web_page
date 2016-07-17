$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
    	    // Prevent default anchor click behavior
      		event.preventDefault();
     		// Store hash
     		var hash = this.hash;
      		// Using jQuery's animate() method to add smooth page scroll
    		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      		$('html, body').animate({
      	    scrollTop: $(hash).offset().top
      		}, 800, function(){  
      	    // Add hash (#) to URL when done scrolling (default click behavior)
       		window.location.hash = hash;
    	    });
			} // End if
		});
});

function maths() {
  var a = document.forms["login"]["Initial"].value;
  var b = document.forms["login"]["fname"].value;
  var c = document.forms["login"]["lname"].value;
  var d = document.forms["login"]["email"].value;
  var e = document.forms["login"]["pnumber"].value;
  var f = document.forms["login"]["subject"].value;
  var g = document.forms["login"]["msg"].value;
    if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "" || g == "") {
      error = "All fields must be entered.";
      document.getElementById("show_msg").innerHTML = error;
      return false;
      }else {
        window.alert("you have completed the process and we will contact you with 2 hours");
        location.reload();
        return false;
    }
  return true;
}