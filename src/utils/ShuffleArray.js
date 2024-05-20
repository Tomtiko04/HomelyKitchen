export function shuffleArray(array, seed) {
	let rng = seededRandom(seed);
	let shuffledArray = array.slice();
	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = Math.floor(rng() * (i + 1));
		[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
	}
	return shuffledArray;
}

function seededRandom(seed) {
	let x = Math.sin(seed) * 10000;
	return function () {
		x = Math.sin(x) * 10000;
		return x - Math.floor(x);
	};
}
