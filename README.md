# tuntun-react-app
自建react脚手架，开箱即用

## 计划

- [x] js、jsx
- [x] ts、tsx
- [x] less
- [x] scss
- [ ] redux
  - [x] js
  - [ ] ts
- [ ] react-router
- [ ] eslint
- [x] antd
- [ ] mock
- [ ] webpack打包优化
- [ ] 增加测试
- [x] githook（使用husky）
- [x] moment.js
- [x] lodash

## 一些特性

- 使用css module，并且支持短横线命名转驼峰命名

```scss
.text-color {
	color: purple;
}
```

```jsx
import style from './App.scss';

<div className={style.textColor}></div>
```

