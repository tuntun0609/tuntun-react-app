import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import style from './App.scss';
import { About, Home, NotFind } from '@/js/pages';
import { decrement, increment } from './store/slices/counterSlice';
import logo from '@public/tuntun.jpg';

const App = () => {
	const count = useSelector(state => state.counter.value);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<div
			className={style.app}
		>
			<img className={style.logo} alt='tun-logo' src={logo}></img>
			<span className={style.title}>Tun-react-app</span>
			<div className={style.reduxContext}>
				<div className={style.buttonGroup}>
					<Button
						className={style.buttonIncrement}
						type="primary"
						onClick={() => {
							dispatch(increment());
						}}
					>
						increment
					</Button>
					<Button
						type="primary"
						onClick={() => {
							dispatch(decrement());
						}}
					>
						decrement
					</Button>
				</div>
				<span>count: {count}</span>
			</div>
			<div className={style.buttonGroup}>
				<Button
					className={style.buttonIncrement}
					type="primary"
					onClick={() => {
						navigate('/home');
					}}
				>
					home
				</Button>
				<Button
					type="primary"
					onClick={() => {
						navigate('/about');
					}}
				>
					about
				</Button>
			</div>
			<Routes>
				<Route index element={<div>click router button</div>}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="*" element={<NotFind />}></Route>
			</Routes>
		</div>
	);
};

export default App;
