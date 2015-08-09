var poc = {
	init: function() {
		// Initialise 
		poc.burgerListener();
	},
	burgerListener: function() {
		document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
			this.classList.toggle( "active" );
			document.getElementById("menu").classList.toggle("toggle");
		});
	},
}