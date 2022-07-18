
export const HEADERS = ['name', 'n', 'e', 'h'];
const VALID_NUMBER = new RegExp(/^-?\d+\.?\d*$/);

// ToDo: those messages really should be functions that return template literals messages
const HEADER_ERROR = "Something wrong with the file headers, expect blah blah";
const GCP_ERROR = "Something wrong with a GCP value, expect blah blah";
const VALUE_NUM_ERROR = "Number of values does not match, expect blah blah";


const addToList = fileStr => {
	const errors = [];
	const csvHeaders = fileStr.slice(0, fileStr.indexOf("\n")).split(",");
	const csvRows = fileStr.slice(fileStr.indexOf("\n") + 1).split("\n");
	
	if (!validateHeaders(csvHeaders)) {
		errors.push(HEADER_ERROR);
		// if the headers are messed up, data probably can't be trusted
		return {errors, newRows: null};
	}
	
	const newRows = {};
	for (const row of csvRows) {
		let noErrorInRow = true;
		const values = row.split(",");
		if (values.length !== HEADERS.length) {
			errors.push (VALUE_NUM_ERROR);
			// skip a row with wrong number of values
			continue;
		}
		const obj = csvHeaders.reduce((object, header, index) => {
			object[header] = values[index];
			if (header !== "name") {
				if (!validateGCPValue(values[index])) {
					errors.push (GCP_ERROR);
					noErrorInRow = false;
				}
			}
			return object;
		}, {});
		// skip a line with error in one value or more
		if (noErrorInRow) newRows[obj.name] = obj;
	}
	
	return {errors, newRows}
}

const validateHeaders = csvHeaders => {
	if (csvHeaders.length !== HEADERS.length) return false;
	for (const header of HEADERS) {
		if (!csvHeaders.includes(header)) return false;
	}
	return true;
}

const validateGCPValue = value => {
	if (isNaN(value) || !VALID_NUMBER.test(value)) return false;
	return true;
}



export {addToList}