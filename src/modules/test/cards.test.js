/**
 * @jest-environment jsdom
 */

const { countCards } = require('../counters/cards');

describe('Counter Cards (Items) Testing', () => {
  test('Passing an Empty Collection', () => {
    const collection = [];
    const element = document.createElement('p');
    element.setAttribute('id', 'page-title');
    document.body.appendChild(element);
    countCards(collection); // Call the function to update innerHTML
    expect(element.innerHTML).toBe('Cards (0)');
  });
});
