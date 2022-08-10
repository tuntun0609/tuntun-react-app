import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';

import style from './App.scss';
import { decrement, increment } from './store/slices/counterSlice';
import favicon from 'public/favicon.ico';

const App = () => {
	const count = useSelector(state => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div
			className={style.textColor}
		>
			<Button
				type="primary"
				onClick={() => dispatch(increment())}
			>
				increment
			</Button>
			<Button
				type="primary"
				onClick={() => dispatch(decrement())}
			>
				decrement
			</Button>
			tun-react-app js {count}
			<img alt='tun-favicon' src={favicon}></img>
		</div>
	);
};

export default App;
