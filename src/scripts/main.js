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
  if (element === null) {
    throw new Error(`First argument must not be null or undefined`);
  }

  if (data === undefined) {
    throw new Error(`Second argument must not be null or undefined`);
  }

  if (Object.entries(data).length === 0) {
    return;
  }

  const ul = document.createElement('ul');

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    li.textContent = key;

    if (Object.entries(value).length > 0) {
      createTree(li, value);
    }
    ul.appendChild(li);
  }

  element.appendChild(ul);
}

createTree(tree, food);
