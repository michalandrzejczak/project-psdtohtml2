const navigationModule = (function() {

	const $ = require("jquery");
	const hamburger = $(".hamburger");
	const navigation = $(".navigation");
	const navigationList = $(".nav_ul");
	const navigationLink = $(".navigation a");
	
	// Hamburger toggle    
	hamburger.on("click", hamburgerToggle)
	function hamburgerToggle() {
		hamburger.toggleClass("is-active");
		navigationList.toggleClass("show_navigation");
		navigation.toggleClass("col");
	}
	
	// Navigation links - scroll    
	navigationLink.on("click", navigationLinkScrollTo)
	function navigationLinkScrollTo(event) {
		const target = $(this.getAttribute("href"));
		if (!target.length) {
			event.preventDefault();
			$("html, body").stop().animate({ 
				scrollTop: 0 }, 1000);
		} else {
			event.preventDefault();
			$("html, body").stop().animate({
				scrollTop: target.offset().top
			}, 1500);
		} 
	}
	
	// scroll down button
	const scrollDownButton = $(".scroll a");
	scrollDownButton.on("click", scrollDown)
	function scrollDown(event) {
		const target = $(this.getAttribute("href"));
		event.preventDefault();
		$("html, body").stop().animate({
			scrollTop: target.offset().top
		}, 1000);
	}
	
})();