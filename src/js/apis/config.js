export const URLS = {
	DEV: '',
	PROD: 'xxx.xxx.xxx',
};

//对外提供的服务地址，根据业务配置
export const BASE_URL = process.env.NODE_ENV === 'development' ? URLS.DEV : URLS.PROD;

// 可自行配置
export const HTTP_CODE = {
	400: '请求参数错误',
	401: '权限不足, 请重新登录',
	403: '服务器拒绝本次访问',
	404: '请求资源未找到',
	500: '内部服务器错误',
	501: '服务器不支持该请求中使用的方法',
	502: '网关错误',
	504: '网关超时',
};
