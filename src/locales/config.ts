import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//https://github.com/i18next/i18next-browser-languageDetector
import LanguageDetector from 'i18next-browser-languagedetector';

import { resources } from '@/locales';

// 在storage中的key名
export const I18N_STORAGE_NAME = 'i18nextLng';
// 默认语言
export const DEFAULT_LANGUAGE = 'zh-CN';

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: DEFAULT_LANGUAGE,
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
			lookupLocalStorage: I18N_STORAGE_NAME,
		},
	});

export default i18n;
