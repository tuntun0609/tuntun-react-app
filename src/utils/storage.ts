import { isArray, isObject, isUndefined, toString } from 'lodash';

type StorageValue = string | number | object | StorageValue[];

interface SetLocalStorage {
	key: string,
	value: StorageValue,
}

type StorageType = 'localStorage' | 'sessionStorage';

const deserialize = (value: null | string) => {
	if (typeof value !== 'string') {
		return undefined;
	}
	try {
		return JSON.parse(value);
	} catch (e) {
		return value;
	}
};

const storageType = (type: StorageType = 'localStorage'): Storage => type === 'localStorage' ? window.localStorage : window.sessionStorage;

const get = (key?: string | string[], type: StorageType = 'localStorage') => {
	const s = storageType(type);
	if (isUndefined(key)) {
		const len = s.length;
		const res: { [key: string]: string | object } = {};
		for (let i = 0; i < len; i++) {
			const storageKey: string = s.key(i);
			res[storageKey] = get(storageKey);
		}
		return res;
	} else if (isArray(key)) {
		const res: { [key: string]: string | object | number } = {};
		key.forEach((item) => {
			res[item] = get(item);
		});
		return res;
	}
	return deserialize(localStorage.getItem(key as string));
};

const set = (data: SetLocalStorage | SetLocalStorage[], type: StorageType = 'localStorage') => {
	const s = storageType(type);
	if (isArray(data)) {
		data.forEach((item) => {
			set(item);
		});
	} else {
		const { key, value } = data as SetLocalStorage;
		if (isObject(value)) {
			s.setItem(key, JSON.stringify(value));
		} else {
			s.setItem(key, toString(value));
		}
	}
};

const clear = (type: StorageType = 'localStorage') => {
	const s = storageType(type);
	s.clear();
};

const remove = (key: string, type: StorageType = 'localStorage') => {
	const s = storageType(type);
	const val = get(key);
	s.removeItem(key);
	return val;
};

const getStorageSize = (type: StorageType = 'localStorage') => {
	const s = storageType(type);
	if(!s) {
		console.log('浏览器不支持localStorage');
	}
	let size = 0;
	Object.keys(s).forEach((key) => {
		size += s.getItem(key).length;
	});
	console.log(size);
	return (size / 1024).toFixed(2);
};

export const storage = {
	get,
	set,
	clear,
	remove,
	getStorageSize,
};
