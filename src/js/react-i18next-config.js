import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
//https://github.com/i18next/i18next-browser-languageDetector
import LanguageDetector from 'i18next-browser-languagedetector';

import { resources } from '@public/locales';

export const I18N_STORAGE_NAME = 'i18nextLng';
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
			lookupFromSubdomainIndex: 0,
		},
	});

export default i18n;
