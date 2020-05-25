$(document).ready(function () {
	let innerCode = ``;
	for (let i = 0; i < 12; i++) {
		innerCode += `<img src="img/cats/${i + 101}.jpg" class="mini" alt="undefined">`
	}

	let main_box = $("#main_box");

	main_box.slideUp(10);
	main_box.html(innerCode);
	main_box.slideDown(3000);

	$(".mini").hover(
		function () {
			let item = $(this);
			item.css({"cursor": "pointer"});
			item.animate({"border-color": "red", "opacity": .5}, 600);
		},
		function () {
			let item = $(this);
			item.css({"cursor": "default"});
			item.animate({"border-color": "white", "opacity": 1}, 400);
		});


	$(".mini").click(function () {
		
		let path = $(this).attr("src");
		let insert = `<img src="${path}" class="maxi">`;
		let view_box = $("#view_box");
		view_box.html(insert);
		view_box.fadeIn(1000);
		$(".maxi").show(1000);
		$(".arrow").show(1500);
	});

	$("#view_box").click(function() {
		$(".maxi").hide(1000);
		$(this).fadeOut(1000);
		$(".arrow").hide(500);
	})
	$("#leftArrow").click(function() {
		let num = 100;
		$(".maxi").attr("src", `img/cats/${num += 1}.jpg`);



	})
});