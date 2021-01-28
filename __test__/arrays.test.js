import { arrayColors, arrayFruits } from '../arrays';

describe('Array validations', () => {
  test('contain test', () => {
    expect(arrayFruits()).toContain('banana');
  });

  test('contain test', () => {
    expect(arrayFruits()).not.toContain('banadna');
  });

  test('length test', () => {
      expect(arrayFruits()).toHaveLength(4)
  });
});
