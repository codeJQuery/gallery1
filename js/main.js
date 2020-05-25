$(document).ready(function () {
	
	$("header h2").hoverIntent(
		function() {
			$(this).animate({"color": "yellow"}, 1000);
		},
		function() {
			$(this).css({"color": "lightgray"})
		});

	$("footer h4").hoverIntent(
		function() {
			$(this).animate({"color": "lime"}, 1000);
		},
		function() {
			$(this).css({"color": "lightgray"})
		});

	$("nav a").hoverIntent(
		function () {
			let item = $(this);
			item.animate({"opacity":.2}, 200);
			item.animate({"color": "lime"}, 10);
			item.animate({"opacity":1}, 200);
		},
		function () {
			item.css({"color": "bisque"});
		});
});