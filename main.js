

/**
 * 创建文本节点
 * @param {*} textValue 
*/
const createTextNode = (textValue) => {
  return {
    type: 'TEXT',
    props: {
      nodeValue: textValue,
      children: []
    },
  }
}

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
      children
    }
  }
}

const textVDom = createTextNode('Hello World');
const App = createElement('div', {id: 'app'}, textVDom)

const dom = document.createElement(App.type);

const textDom = document.createTextNode('');

textDom.nodeValue = textVDom.props.nodeValue;

dom.append(textDom);

document.querySelector('#root').append(dom);
