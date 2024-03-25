/**
 * 创建文本节点
 * @param {*} textValue
 */
const createTextNode = (textValue) => {
  return {
    type: "TEXT",
    props: {
      nodeValue: textValue,
      children: [],
    },
  };
};

/**
 * 创建元素节点
 * @param {*} type 节点类型
 * @param {*} props 元素参数
 * @param  {...any} children 子元素
 *
 */
const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === "string" ? createTextNode(child) : child;
      })
    },
  };
};


const App = createElement("div", { id: "app" }, 'Hello', 'react');

const render = (el, container) => {
  // 创建元素节点
  const dom =
    el.type === "TEXT"
      ? document.createTextNode("")
      : document.createElement(el.type);

  // 添加属性
  Object.keys(el.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = el.props[key];
    }
  });

  // 递归渲染子元素
  el.props.children.forEach((child) => {
    render(child, dom);
  });

  container.append(dom);
};

render(App, document.querySelector("#root"));
