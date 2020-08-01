
// create a method to deep clone all the arrays inside the array
function arrayClone(arr) {
	return JSON.parse(JSON.stringify(arr));
}

export default arrayClone;