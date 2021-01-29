describe('String validations', () => {
  const text = 'Este es un ejemplo';
  test('match test', () => {
    expect(text).toMatch(/es/);
  });
  test('!match test', () => {
    expect(text).not.toMatch(/oes/);
  });

  test('length test', () => {
    expect(text).toHaveLength(18);
  });
});
