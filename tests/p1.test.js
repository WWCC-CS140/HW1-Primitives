const { not, and, or } = require('../src/p1');

describe('Problem 01', () => {
    describe('not', () => {
        it('should return true when given false', () => {
            expect(not(true)).toEqual(false);
        });

        it('should return false when given true', () => {
            expect(not(false)).toEqual(true);
        });
    });

    describe('and', () => {
        it('should return false when given and(false, false)', () => {
            expect(and(false, false)).toEqual(false);
        });

        it('should return false when given and(false, true)', () => {
            expect(and(false, true)).toEqual(false);
        });

        it('should return false when given and(true, false)', () => {
            expect(and(true, false)).toEqual(false);
        });

        it('should return true when given and(true, true)', () => {
            expect(and(true, true)).toEqual(true);
        });
    });

    describe('or', () => {
        it('should return false when given or(false, false)', () => {
            expect(or(false, false)).toEqual(false);
        });

        it('should return true when given or(false, true)', () => {
            expect(or(false, true)).toEqual(true);
        });

        it('should return true when given or(true, false)', () => {
            expect(or(true, false)).toEqual(true);
        });

        it('should return true when given or(true, true)', () => {
            expect(or(true, true)).toEqual(true);
        });
    });
});