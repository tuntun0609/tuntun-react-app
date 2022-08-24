# tuntun-react-app
自建react脚手架，开箱即用

## 计划

- [x] js、jsx
- [x] ts、tsx
- [x] less
- [x] scss
- [x] redux（封装了redux数据自动同步到`localStorage`功能）
- [x] react-router
- [x] eslint
- [x] antd
  - [x] antd自定义主题
- [x] 国际化i18n
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

- 使用`css module`，并且支持短横线命名转驼峰命名

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

| 别名    | 指向           |
| ------- | -------------- |
| @       | 指向src目录    |
| @public | 指向public目录 |

```jsx
import favicon from '@public/favicon.ico';
```

- antd自定义主题

在项目`src`下有`theme.js`文件，可以在其中设置主题色，会直接改变`antd`的主题色

具体如何设置参考[antd定制主题](https://ant.design/docs/react/customize-theme-cn#Ant-Design-%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%8F%98%E9%87%8F)

```js
// theme.js
module.exports = {
  'primary-color': '#8b4dff',
};
```

- 国际化

在`src`路径下的`locales`编写对应语言翻译并导出。

之后在`locales`目录下的`index.ts`中导入并在`resources`中添加，这个对象会被传给`i18n`的`resources`配置项，参考[Basic sample](https://www.i18next.com/overview/getting-started#basic-sample)。

> 同文件中导出的`lngOption`是为了方便其他组件渲染而导出的，如不需要删除即可

**config.js**

使用了[i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)中间件，使用了`localStorage`作为语言缓存（如果没有对应缓存选择浏览器的语言为默认语言，如果没有配置对应浏览器语言的翻译，则选择配置文件中的`DEFAULT_LANGUAGE`属性为默认语言）
