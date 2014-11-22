var mascots = new Array('car', 'duck', 'florist', 'bunny-2', 'flower', 'groom', 'plumber', 'house', 'monkey', 'bag', 'book', 'boy', 'bride', 'bunny', 'business-man', 'business-woman', 'character-man', 'character-woman', 'chef', 'cupcake', 'cute-animals', 'doctor', 'dragon', 'fitness', 'fruits', 'girl', 'heart', 'kitten', 'monsters', 'office-man', 'office-woman', 'owl', 'panda', 'penguin', 'phone', 'puppy', 'super-hero', 'super-sentai', 'turtle', 'lion', 'plane', 'sheep', 'reindeer', 'santa', 'elf' );

// Gets current year.
var year = new Date().getFullYear();

// Controls buttons.
$(document).ready(function() {
	if (mascots.length > 30 ) {
		$('#elite-button').css('display', 'none');
	}
});
