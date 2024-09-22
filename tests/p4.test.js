const { isNull, isUndefined, isNil } = require('../src/p4');

describe('Problem 04', () => {
    describe('isNull', () => {
        it('should return true for null', () => {
            expect(isNull(null)).toEqual(true);
        });

        it('should return false for undefined', () => {
            expect(isNull(undefined)).toEqual(false);
        });

        it('should return false for 0', () => {
            expect(isNull(0)).toEqual(false);
        });
    });

    describe('isUndefined', () => {
        it('should return false for null', () => {
            expect(isUndefined(null)).toEqual(false);
        });

        it('should return true for undefined', () => {
            expect(isUndefined(undefined)).toEqual(true);
        });

        it('should return false for 0', () => {
            expect(isUndefined(0)).toEqual(false);
        });
    });

    describe('isNil', () => {
        it('should return true for null', () => {
            expect(isNil(null)).toEqual(true);
        });

        it('should return true for undefined', () => {
            expect(isNil(undefined)).toEqual(true);
        });

        it('should return false for 0', () => {
            expect(isNil(0)).toEqual(false);
        });
    });
});