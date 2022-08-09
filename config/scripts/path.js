const path = require('path');

// 根据相对路径获取绝对路径
const resolvePath = relativePath => path.resolve(__dirname, relativePath);

module.exports = {
	resolvePath,
};
