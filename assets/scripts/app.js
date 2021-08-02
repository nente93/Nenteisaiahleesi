const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "photopea",
				weight: 12.3
			}, {
				text: "css3",
				weight: 3
			}, {
				text: "photoshop",
				weight: 14
			}, {
				text: "illustrator",
				weight: 8
			}, {
				text: "graphic design",
				weight: 7
			}, {
				text: "pixellab",
				weight: 10
			}, {
				text: "canva",
				weight: 9
			}, {
				text: "coreldraw",
				weight: 15
			},
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Front-End Web Developer / Graphic Designer.", "love everything about code and design.", "also teach graphic design to people.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#262A53", "background-color": "#FFA0A0"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
