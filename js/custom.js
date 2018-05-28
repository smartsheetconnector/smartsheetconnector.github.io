$(document).ready(function() {

	"use strict";

	// NAVBAR //

	$('#mainNav').affix({
	    offset: {
			top: 100
		}
	});

	// SMOOTH SCROLLING //

	$("a").not(".external").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (1000) specifies the number of milliseconds it takes to scroll to the specified area.
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){

				// Add hash (#) to end of the URL when done scrolling
				window.location.hash = hash;

		    });
		}

	});
});

// contact form
(function () {
	$(function() {
		var $contactForm = $('#contact-form'),
			$contactFeedback = $('#contact-feedback');

		$contactForm.submit(function(e) {
			e.preventDefault();
			$.ajax({
				url: 'https://formspree.io/info@smartsheetconnector.com',
				method: 'POST',
				data: $(this).serialize(),
				dataType: 'json',
				beforeSend: function() {
					$contactFeedback.html('<i class="fa fa-cog fa-spin" aria-hidden="true"></i> Sending message…');
				},
				success: function(data) {
					$contactForm.find('.alert--loading').hide();
					$contactFeedback.html('<i class="fa fa-check" aria-hidden="true"></i> Message sent!');
				},
				error: function(err) {
					$contactForm.find('.alert--loading').hide();
					$contactFeedback.html('<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Oops, there was an error, please try again.');
				}
			});
		});
	});
})();