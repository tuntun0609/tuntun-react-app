import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Button, Select } from 'antd';
import { useTranslation } from 'react-i18next';

import style from './App.scss';
import { decrement, increment } from './store/slices/counterSlice';
import { I18N_STORAGE_NAME, DEFAULT_LANGUAGE } from './locales/config';
import { resources, lngOption } from './locales';
import { About, Home, NotFind } from './pages';
import { storage } from './utils';

import logo from '@public/tuntun.jpg';

const { Option } = Select;

const App: React.FC = () => {
	const [lng, setLng] = useState(DEFAULT_LANGUAGE);
	const count = useSelector((state: { counter: { value: number } }) => state.counter.value);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { t, i18n } = useTranslation();

	const changeLanguage = (e: string) => {
		i18n.changeLanguage(e);
		setLng(e);
	};

	useEffect(() => {
		try {
			const name = storage.get(I18N_STORAGE_NAME);
			if (name && name in resources) {
				setLng(name);
			}
		} catch (error) {
			console.error(error);
		}
	}, []);

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
						{t('increment')}
					</Button>
					<Button
						type="primary"
						onClick={() => {
							dispatch(decrement());
						}}
					>
						{t('decrement')}
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
					{t('home')}
				</Button>
				<Button
					type="primary"
					onClick={() => {
						navigate('/about');
					}}
				>
					{t('about')}
				</Button>
			</div>
			<div className={style.showRouter}>
				<Routes>
					<Route index element={<div>{t('defaultRouterMsg')}</div>}></Route>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="*" element={<NotFind />}></Route>
				</Routes>
			</div>
			<Select defaultValue={DEFAULT_LANGUAGE} value={lng} style={{ width: 120 }} onChange={changeLanguage}>
				{
					lngOption.map(item => (<Option key={item.lng} value={item.lng}>{item.name}</Option>))
				}
			</Select>
		</div>
	);
};

export default App;
