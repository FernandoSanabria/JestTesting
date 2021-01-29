import { getDataFromApi } from '../promise';

describe('Promises', () => {
  test('request to API', (done) => {
    const api = 'https://rickandmortyapi.com/api/character';

    getDataFromApi(api).then(
      (data) => {
        expect(data.results.length).toBeGreaterThan(0);
        done();
      },
    );
  });

  test('promise with resolve', () => expect(Promise.resolve('Hi baby')).resolves.toBe('Hi baby'));

  test('promise with resolve', () => expect(Promise.reject('Error')).rejects.toBe('Error'));

  test('Rechaza con un error', () => expect(Promise.reject(new Error('Error'))).rejects.toThrow('Error'));
});
