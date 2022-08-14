# tuntun-react-app
自建react脚手架，开箱即用

> 目前支持ts，但暂时未完成src目录下ts完整的模板

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
  - [x] antd自定义主题

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

- antd自定义主题

在项目src下有theme.js（ts下为theme.ts）文件，可以在其中设置主题色，会直接改变antd的主题色

具体如何设置参考[antd定制主题](https://ant.design/docs/react/customize-theme-cn#Ant-Design-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F)

```js
// theme.js
module.exports = {
  'primary-color': '#8b4dff',
};
```

