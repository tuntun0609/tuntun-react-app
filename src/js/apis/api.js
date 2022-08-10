/* eslint-disable arrow-body-style */
import axios from 'axios';
import { message } from 'antd';

import { BASE_URL, HTTP_CODE } from './config';

export const instance = axios.create({
	timeout: 5000,
	baseURL: BASE_URL,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
// req_cofig: https://www.axios-http.cn/docs/req_config
export const reqInterceptors = instance.interceptors.request.use(
	(config) => {
		// 根据业务不同添加不同拦截器，比如在请求头添加token
		// code here
		return config;
	},
	(error) => {
		// 对请求错误做些什么
		// code here
		return Promise.reject(error);
	},
);

// 响应拦截器
// response: https://www.axios-http.cn/docs/res_schema
export const resInterceptors = instance.interceptors.response.use((response) => {
	// 2xx 范围内的状态码都会触发该函数。
	// 处理响应数据
	// code here
	return response;
}, (error) => {
	if (error.response) {
		// 根据请求失败的http状态码去给用户相应的提示
		const tips = error.response.status in HTTP_CODE ? HTTP_CODE[error.response.status] : error.response.data.message;
		message.error(tips);
		// 可以根据业务不同编写不同的对应处理方法，比如登录失效的时候跳转登录页
		// code here
		return Promise.reject(error);
	}
	message.error('请求超时, 请刷新重试');
	return Promise.reject('请求超时, 请刷新重试');
});

// 统一封装get请求
export const get = (url, params, config = {}) => new Promise((resolve, reject) => {
	instance({
		method: 'get',
		url,
		params,
		...config,
	}).then((response) => {
		resolve(response);
	}).catch((error) => {
		reject(error);
	});
});

// 统一封装post请求
export const post = (url, data, config = {}) => new Promise((resolve, reject) => {
	instance({
		method: 'post',
		url,
		data,
		...config,
	}).then((response) => {
		resolve(response);
	}).catch((error) => {
		reject(error);
	});
});
