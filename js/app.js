$(document).foundation();
$(document).ready(function(){
	$.getScript("js/spectragram.js", function () {
	var winWidth = $(window).width();
	var instaMax;
	if (winWidth >= 1600) {
		instaMax = 17
	} else if (winWidth >= 1024) {
		instaMax = 11
	} else if (winWidth >= 640) {
		instaMax = 8
	} else {
		instaMax = 6
	}
	console.log(instaMax)
//	var Spectra = {

//		instaToken: '5545214567.3efc90b.ac0b5eebc2f6481a9ad924b66c006024',
//		instaID: '3efc90bc730e4266b6654cd861c88955',
//instaID: '532d737c963943ac84a297872c118639',
//instaToken: '1658355059.532d737.8473d39cf8fb4f07a444091ed76def28',
//		init: function () {
//			$.fn.spectragram.accessData = {
//				accessToken: this.instaToken,
//				clientID: this.instaID
//			};
//
//			$('.feed').spectragram('getUserFeed', {
//				max: instaMax,
//
//
//				query: 'camila.life.now',
//				
//			});
//		}
//	}
//	Spectra.init();
		
//$.fn.spectragram.accessData = {
//	accessToken: '1658355059.532d737.8473d39cf8fb4f07a444091ed76def28',
//	clientID: '532d737c963943ac84a297872c118639'
//};
//		
jQuery.fn.spectragram.accessData = { 		
//	accessToken:'2136707.4dd19c1.d077b227b0474d80a5665236d2e90fcf', 
//	clientID:'4dd19c1f5c7745a2bca7b4b3524124d0',
	//old hue
//accessToken: '1658355059.532d737.8473d39cf8fb4f07a444091ed76def28',
//clientID: '532d737c963943ac84a297872c118639'
	//agency
//	accessToken: '3414272623.f17d4d9.b374658324114158b17ce91f4cd2e765',
//		clientID: 'f17d4d98199a4bf599bd714928557263',
	
	//new hue
//	accessToken: '1658355059.4e493d2.187d9c579e5c437a9915882e27af509e',
//	clientID: '	4e493d216f3b48a8b4425c2bd5ba19c6',
	
	// new camila.life
	accessToken: '5545214567.3efc90b.ac0b5eebc2f6481a9ad924b66c006024',
	clientID: '3efc90bc730e4266b6654cd861c88955'
};


	$('.feed').spectragram('getUserFeed', {
		query: 'camila.life.now', 
		wrapEachWith: '<div class="photo cell small-6 medium-4 large-3 xxlarge-2">',
		max: instaMax
	});

	});
});