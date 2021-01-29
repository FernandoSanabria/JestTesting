// Los comparadores comunes nos permiten probar nuevas cosas dentro de nuestro codigo. En esta clase, Pasaremos las pruebas directamente en nuestro archivo de jest.

// Las pruebas dan a entender la información de lo que estamos creando en nuestro proyecto, así que siempre recuerda documentarlas muy bien y siempre guardar los cambios en tu repositorio ya sea localmente o de forma remota.

// Los comparadores pueden ser:

// toEqual()
// not.toEqual()

describe('commun compare', () => {
  const user = {
    name: 'Mande',
    lastname: 'Rey',
  };

  const user2 = {
    name: 'Mande',
    lastname: 'Rey',
  };

  test('are equal?', () => {
    expect(user).toEqual(user2);
  });

  test('are no equal?', () => {
    expect(user).toEqual(user2);
  });
});
