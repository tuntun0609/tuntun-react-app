import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.css';
import moment from 'moment';
import 'moment/locale/zh-cn';

import App from './App';

moment.locale('zh-cn');

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
