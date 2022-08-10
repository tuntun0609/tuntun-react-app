import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Button } from 'antd';

import style from './App.scss';
import { About, Home } from '@/js/pages';
import { decrement, increment } from './store/slices/counterSlice';
import favicon from 'public/favicon.ico';

const App = () => {
	const count = useSelector(state => state.counter.value);
	const [type, setType] = useState('type');
	const dispatch = useDispatch();
	return (
		<div
			className={style.textColor}
		>
			<Button
				type="primary"
				onClick={() => {
					dispatch(increment());
					setType('increment');
				}}
			>
				increment
			</Button>
			<Button
				type="primary"
				onClick={() => {
					dispatch(decrement());
					setType('decrement');
				}}
			>
				decrement
			</Button>
			tun-react-app js {count}
			<img alt='tun-favicon' src={favicon}></img>
			<br></br>
			button type: {type}
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
		</div>
	);
};

export default App;
