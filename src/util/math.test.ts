import { describe, expect, it } from 'vitest'
import { gcd, pick, pour } from './math'

describe('gcd', () => {
    it('should return the other number if one of them is 0', () => {
        expect(gcd(0, 1)).toBe(1);
        expect(gcd(2, 0)).toBe(2);
    })

    it('should return the correct output', () => {
        expect(gcd(35, 50)).toBe(5);
    })
})

describe('pour', () => {
    it('should return the shortest amount of steps', () => {
        expect(pour(222, 4, 10)).toHaveLength(106);
        expect(pour(5, 3, 4)).toHaveLength(6);
        expect(pour(10, 1, 10)).toHaveLength(1);
        expect(pour(44, 22, 44)).toHaveLength(1);
        expect(pour(999, 4, 10)).toHaveLength(996);
    })
    
})

describe('pick', () => {
    it('should return empty if any number is negative', () => {
        expect(pick(-1, 2, 2)).toHaveLength(0);
        expect(pick(2, -2, 2)).toHaveLength(0);
        expect(pick(1, 1, -1)).toHaveLength(0);
    })

    it('should return empty if the biggest jug is not bigger or equal to the given amount', () => {
        expect(pick(1, 2, 3)).toHaveLength(0);
        expect(pick(2, 4, 6)).toHaveLength(0);
    })

    it('should return empty if the gcd of the two jugs does not cleanly divide the target amount', () => {
        expect(pick(2, 6, 1)).toHaveLength(0);
        expect(pick(3, 3, 2)).toHaveLength(0);
        expect(pick(5, 10, 9)).toHaveLength(0);
    })

    it('should return the shortest output regardless of the order of the jugs', () => {
        expect(pick(222, 4, 10)).toStrictEqual(pick(4, 222, 10));
        expect(pick(5, 3, 4)).toStrictEqual(pick(3, 5, 4));
        expect(pick(10, 1, 10)).toStrictEqual(pick(1, 10, 10));
        expect(pick(22, 44, 44)).toStrictEqual(pick(44, 22, 44));
        expect(pick(999, 4, 10)).toStrictEqual(pick(4, 999, 10));
    }) 
})