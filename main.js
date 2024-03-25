

const dom = document.createElement('div');

const text = document.createTextNode('');

text.nodeValue = 'Hello World';

dom.appendChild(text);

document.body.appendChild(dom);

