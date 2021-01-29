import {getCharacter} from '../snapshot';
import rick from '../rick.json'

describe('Snapshot', () => {
    test('rick object snapshot test', () => {
        expect(getCharacter(rick)).toMatchSnapshot();
    });

    test('faill snapthot test', () => {
        const user =  {
            id: Math.floor(Math.random()*30)
        }
        expect(user).toMatchSnapshot();
    });


    test('snapshot exception test', () => {
        const user =  {
            name: 'Pepito',
            id: Math.floor(Math.random()*30)
        }
        expect(user).toMatchSnapshot({
            id: expect.any(Number)
        })
    });

});

