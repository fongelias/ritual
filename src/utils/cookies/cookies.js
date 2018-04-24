

function createVariable(name, value) {
	const date = new Date();
	date.setFullYear(date.getFullYear() + 1);
	const expires = ";expires="+date.toGMTString();
	document.cookie = name+"="+value+expires+";path=/";
}


function readVariable(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(";");
	let c;

	for (let i = 0;i < ca.length; i += 1) {
		c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1,c.length);
		}
		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}

	return null;
}


function deleteVariable(name) {
	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}