import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
	HashRouter,
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
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* 推荐使用BrowserRouter，因为演示页部署到了vercel，所以这里使用HashRouter解决404问题 */}
			<HashRouter>
				<App />
			</HashRouter>
		</Provider>
	</React.StrictMode>,
);
