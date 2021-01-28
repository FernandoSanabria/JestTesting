import {
  isFalse,
  isNulleable,
  isTrue,
  isUndefined,
} from '../true';

describe('isFalse', () => {
  test('false test', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('isNull', () => {
  test('null test', () => {
    expect(isNulleable()).toBeNull();
  });
});

describe('isTruthy', () => {
  test('true test', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('isIndefined', () => {
  test('undefined test', () => {
    expect(isUndefined()).toBeUndefined();
  });
});
