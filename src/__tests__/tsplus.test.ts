import { print } from '../index';
import { random } from '../index';
import { get } from '../index'

test('Hi!', () => {
    expect(print('Hi!')).toBe('Hi!');
    console.log(random(10))
    // expect(get('https://kiran.at/w')).toBe('Cannot GET /w')
    console.log(get('https://kiran.at/w'))
})