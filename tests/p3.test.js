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
        it('should return "hello-world" for "Hello World"', () => {
            expect(snakecase('Hello World')).toEqual('hello-world');
        });

        it('should return "cs140-javascript" for "CS140 JavaScript"', () => {
            expect(snakecase('CS140 JavaScript')).toEqual('cs140-javascript');
        });
    });
});