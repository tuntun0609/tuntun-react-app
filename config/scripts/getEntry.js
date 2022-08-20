const { resolvePath } = require('./path');

// 选择编译js项目还是ts
const getEntry = () => {
	// console.log(process.env.language);
	const lng = (process.env.language).toLowerCase() ?? 'js';
	if (lng === 'ts' || lng === 'typescript') {
		return resolvePath('../../src/ts/index.tsx');
	}
	return resolvePath('../../src/js/index.jsx');
};

module.exports = {
	getEntry,
};