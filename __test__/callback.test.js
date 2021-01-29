import { callbackHell } from '../callback';

describe('callbacks', () => {
  test('callback test', (done) => {
    function otherCallback(data) {
      expect(data).toBe('Hola bebé ');
      done();
    }
    callbackHell(otherCallback);
  });
});
