'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const treeDiv = document.createElement('div');

treeDiv.id = 'tree';
document.body.appendChild(treeDiv);

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (element === null || data === undefined) {
    throw new Error('arguments must not be null or undefined');
  }

  const ul = document.createElement('ul');

  for (const key in data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.entries(data[key]).length > 0) {
      createTree(li, data[key]);
    }
    ul.appendChild(li);
  }

  if (ul.childNodes.length > 0) {
    element.appendChild(ul);
  }
}

createTree(tree, food);
