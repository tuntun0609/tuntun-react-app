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
- [x] react-router
- [x] eslint(未完全完成tsx部分)
- [x] antd
- [ ] mock
- [ ] webpack打包优化
- [ ] 增加测试
- [x] githook（使用husky）
- [x] moment.js
- [x] lodash
- [x] axios
  - [x] axios本体
  - [x] axios封装（封装了拦截器、get、post方法）


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

- 路径别名

| 别名   | 指向           |
| ------ | -------------- |
| @      | 指向src目录    |
| public | 指向public目录 |

```jsx
import favicon from 'public/favicon.ico';
```

