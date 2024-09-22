const { remainder, flipSign } = require('../src/p2');

describe('Problem 02', () => {
    describe('remainder', () => {
        it('should return 2 for remainder(5, 3)', () => {
            expect(remainder(5, 3)).toEqual(2);
        });

        it('should return 0 for remainder(3, 3)', () => {
            expect(remainder(3, 3)).toEqual(0);
        });

        it('should return 1 for remainder(1, 2)', () => {
            expect(remainder(1, 2)).toEqual(1);
        });
    });

    describe('flipSign', () => {
        it('should return 5 for flipSign(-5)', () => {
            expect(flipSign(-5)).toEqual(5);
        });

        it('should return -2 for flipSign(2)', () => {
            expect(flipSign(2)).toEqual(-2);
        });
    });
});