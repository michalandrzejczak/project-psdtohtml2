const galleryModule = (function() {

	const $ = require("jquery");
	const gallery = $(".work-gallery");
	const photo = $(".work-gallery img");
	const button = $(".btn-group button");
	
	button.on("click", function() {
		let target = this.getAttribute("filter");
		photo.each(function() {
			$(this).removeClass();
			let type = this.getAttribute("type") 
			if (target === type) {
				$(this).addClass("photo-show");
			}
			else {
				$(this).addClass("photo-hide")
			}
		});
	});
	
	/*removing all img classes when all button is clicked*/
	$(".all-btn").on("click", function() {
		photo.each(function() {
			$(this).removeClass();
		});
	})

})();