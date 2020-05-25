$(document).ready(function() {

	$("#logo").hoverIntent(
		function () {
			$(this).css({"transform": "rotate(360deg)"});
		},
		function () {
			$(this).css({"transform": "rotate(0deg)"})
		});


});