
var Pattern = require('../pattern'),
	pattern = new Pattern();

describe('Pattern', function() {

	beforeEach(function() {
		pattern = new Pattern();
	});

	it('should detect patterns', function() {
		expect(pattern.detect('abc', 'xbc')).toEqual(['bc']);
		pattern = new Pattern();
		expect(pattern.detect('abcde', 'xbcdef')).toEqual(['bcde']);
		pattern = new Pattern();
		expect(pattern.detect('I am the first string','I am the second string') ).toEqual(['I am the ', 'st',' string']);
	});

	it('should give the same result for the same strings passed in different order', function(){
		expect(pattern.detect('<a href="http://www.google.com">Go to Google</a>', 'http://www.google.com')).toEqual(['http://www.google.com']);
		pattern = new Pattern();
		expect(pattern.detect('http://www.google.com', '<a href="http://www.google.com">Go to Google</a>')).toEqual(['http://www.google.com']);
	});

	it('should detect mulitple patterns', function(){
		expect(pattern.detect('<a href="http://www.google.com">Google</a><a href="http://www.twitter.com">Twitter</a>', 'google twitter')).toEqual(['google', 'twitter']);
	});

});