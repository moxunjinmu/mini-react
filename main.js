

const dom = document.createElement('div');

const text = document.createTextNode('');

text.nodeValue = 'Hello World';

dom.append(text);

document.querySelector('#root').append(dom);

