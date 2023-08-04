/**
 * @jest-environment jsdom
 */

const { countComments } = require('../counters/comments');

describe('Counter Comments Testing', () => {
  test('Passing an Empty Collection', () => {
    const collection = [];
    const element = document.createElement('p');
    element.setAttribute('id', 'text-comment');
    document.body.appendChild(element);
    // Log the innerHTML before calling the function
    console.log('Before countComments:', element.innerHTML);
    countComments(collection); // Call the function to update innerHTML
    // Log the innerHTML after calling the function
    console.log('After countComments:', element.innerHTML);
    expect(element.innerHTML).toBe('Comments(0)');
  });
});
