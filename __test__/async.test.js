import { async } from 'regenerator-runtime';
import { getDataFromApi } from '../promise';

describe('async/await group', () => {
  test('async request', async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    await getDataFromApi(api).then(
      (data) => {
        expect(data.results.length).toBeGreaterThan(0);
      },
    );
  });

  test('async request for name', async () => {
    const { gender } = await getDataFromApi('https://rickandmortyapi.com/api/character/1');
    expect(gender).toEqual('Male');
  });

  test('should', async () => {
    const apiError = 'http://httpstat.us/500';
    const request = getDataFromApi(apiError);
    await expect(request).rejects.toEqual(Error('Request failed with status code 500'));
  });

  test('async promise with resolve', async () => await expect(Promise.resolve('Hi baby')).resolves.toBe('Hi baby'));

  test('async promise with resolve', async () => await expect(Promise.reject('Error')).rejects.toBe('Error'));
});
