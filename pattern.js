'use strict';

class Pattern {
	
	constructor(){
		this.pattern = [];
	}

	detect(first, second) {

		let index = 0, 
			secondIndex = 0,
			fragmentLength = 2,
			patterns = [];

		// make sure the first is the shorter string
		if(first.length > second.length) {
			let temp = first;
			first = second;
			second = temp;
		}

		while(index <= first.length - 1 ) {

			// get 2 chars relative to the index
			let lookahead = first.substring(index, index + fragmentLength),
				patternIndex = second.substring(secondIndex).indexOf(lookahead),
				pattern = '',
				length = fragmentLength;

			// keep adding chars to the comparator till we reach the end of the pattern
			while(patternIndex != -1 && ((patternIndex + length - 1) <=	 second.length - 1 )) {
				length++;
				pattern = lookahead;
				lookahead = first.substring(index, index + length);
				patternIndex = second.substring(secondIndex).indexOf(lookahead);
			}

			// if we found a pattern
			if(pattern.length > 0) {

				// save it
				patterns.push(pattern);

				// move the index ahead accordingly
				index += patternIndex + pattern.length;

				secondIndex = patternIndex;

			} else {
				index++;
			}

		}

		return patterns;
	}

}

module.exports = Pattern;