export const testLengthofTextBoxValue = function (
	valueFromTextbox,
	numberOfCharactersValueShouldBe
) {
	if (valueFromTextbox.length < numberOfCharactersValueShouldBe) {
		return false;
	} else {
		return true;
	}
};
