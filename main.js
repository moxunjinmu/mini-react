
const text = {
  type: 'text',
  props: {
    nodeValue: 'Hello World',
    children: []
  },
}
const app = {
  type: 'div',
  props: {
    id: 'app',
    children: [
      text
    ]
  },
}

const dom = document.createElement(app.type);
dom.id = app.props.id;
const textDom = document.createTextNode('');

textDom.nodeValue = text.props.nodeValue;

dom.append(textDom);

document.querySelector('#root').append(dom);