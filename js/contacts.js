$(document).ready(function() {

	$("#logo2").hoverIntent(
		function () {
			$(this).animate({
				"opacity": .5,
				"width": "15%"
			}, 1000);
		},
		function () {
			$(this).animate({
				"opacity": 1,
				"width": "30%"
			}, 1000)
		});


});