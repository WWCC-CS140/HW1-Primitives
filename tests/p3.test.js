const { firstAndLastCharacter, snakecase } = require('../src/p3');

describe('Problem 03', () => {
    describe('firstAndLastCharacter', () => {
        it('should return "Jt" for "JavaScript"', () => {
            expect(firstAndLastCharacter('JavaScript')).toEqual('Jt');
        });

        it('should return "aa" for "a"', () => {
            expect(firstAndLastCharacter('a')).toEqual('aa');
        });

        it('should return "az" for "abcdwxyz"', () => {
            expect(firstAndLastCharacter('abcdwxyz')).toEqual('az');
        });
    });

    describe('snakecase', () => {
        it('should return "hello_world" for "Hello World"', () => {
            expect(snakecase('Hello World')).toEqual('hello_world');
        });

        it('should return "cs140_javascript" for "CS140 JavaScript"', () => {
            expect(snakecase('CS140 JavaScript')).toEqual('cs140_javascript');
        });
    });
});
