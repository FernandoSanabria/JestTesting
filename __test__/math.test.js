import {
  sum, multiplicar, rest, division,
} from '../math';

describe('Calculos', () => {
  test('sum test', () => {
    expect(sum(2, 3)).toBe(6);
  });
  test('multiplicar test', () => {
    expect(multiplicar(2, 3)).toBe(6);
  });
  test('rest test', () => {
    expect(rest(2, 3)).toBe(-1);
  });
  test('division test', () => {
    expect(division(2, 2)).toBe(1);
  });
});
