import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

test('button contains text', () => {
  const component = renderer.create(<Button text="click me test" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
