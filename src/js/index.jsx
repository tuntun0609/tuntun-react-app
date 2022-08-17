import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
	BrowserRouter,
} from 'react-router-dom';
import 'antd/dist/antd.less';
import moment from 'moment';
import 'moment/locale/zh-cn';

import store from './store';
import App from './App';
import { setStateToStorage } from './utils';

moment.locale('zh-cn');

store.subscribe(() => {
	setStateToStorage(store.getState());
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);
