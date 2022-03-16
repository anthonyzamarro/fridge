import { dateFormat } from './dateFormat';

test('dateFormat returns string value', () => {
  const date = dateFormat(`01-01-2022`);
  expect(typeof date).toBe('string');
});
