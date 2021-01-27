import { TestScheduler } from "jest"
import {sum,multiplicar, rest, division} from "../math"



describe('Calculos',()=>{
    test('sum test', ()=>{
        expect(sum(2,3)).toBe(5);

    });
});