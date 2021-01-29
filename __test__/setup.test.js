afterEach(() => console.log('Despues de cada test'));
afterAll(() => console.log('Despues de Todo test'));

beforeAll(() => console.log('Antes de todos los test'));
beforeEach(() => console.log('antes de de cada test'));

describe('veamos', () => {
  test('Si es o no', () => {
    expect(true).toBeTruthy();
  });
});
