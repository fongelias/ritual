
const getParameter = (() => {
	let memo = {};
	return (name, url = window.location.href) => {
		if(!memo[url]) {
			memo[url] = getAllParameters(url);
		}
		return memo[url][name];
	}
})();

const getAllParameters = (url = window.location.href) => {
	const paramStrings = url.match(/[^&?]*?=[^&?]*/g);
	return !paramStrings ? null : paramStrings.reduce((p, c) => {
		const key = c.split("=")[0];
		const val = c.split("=")[1];
		p[key] = val;
		return p;
	}, {})
}


export const url = {
	getParameter,
	getAllParameters,
}

