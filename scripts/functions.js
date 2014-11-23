// Gets current year.
var year = new Date().getFullYear();

// Controls buttons.
$(document).ready(function() {
	if (mascots.length > 30 ) {
		$('#elite-button').css('display', 'none');
	}
});
