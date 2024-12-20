import {it, expect, describe} from 'vitest';
import {factorial, findLongestWord, countVowels, isSubset, findCommonObjects} from './functions';

describe ('factorial', () => {
    it ('if number is positive', () => {
        expect(factorial(5)).toEqual(120);
        expect(factorial(3)).toEqual(6);
    })

    it ('if number is zero', () => {
        expect(factorial(0)).toEqual(1);
    })

    it ('should handle error', () => {
        expect(() => {factorial(-3)}).toThrowError('Factorial is not defined for negative numbers');
    })
    
})

describe ('findlongestWord', () => {
    it ('normal sentence', () => {
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe("quick");
    })

    it ('one word', () => {
        expect(findLongestWord("Hello")).toBe("Hello");
    })

    it ('empty sentence', () => {
        expect(findLongestWord("")).toBe("");
    })

    it ('extra gaps', () => {
        expect(findLongestWord(" A quick test ")).toBe("quick");
    })
})

describe ('countVowels', () => {
    it ('normal sentence', () => {
        expect(countVowels("Hello world")).toEqual(3);
    })

    it ('only consonants', () => {
        expect(countVowels("bcdfg")).toEqual(0);
    })

    it ('uppercase and lowercase', () => {
        expect(countVowels("AeIoU")).toEqual(5);
    })

    it ('empty string', () => {
        expect(countVowels("")).toEqual(0);
    })
})

describe ('isSubset', () => {
    it ('is subset', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1, b: 2 };
        expect(isSubset(obj1, obj2)).toBe(true);
    })

    it ('isnnt subset', () => {
        const obj1 = { a: 3 };
        const obj2 = { a: 1, b: 2 };
        expect(isSubset(obj1, obj2)).toBe(false);
    })
})

describe ('findCommonObjects', () => {
    it ('have common objects', () => {
        const arr1 = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
        const arr2 = [{ id: 2, name: "Bob" }, { id: 3, name: "Charlie" }]
        expect(findCommonObjects(arr1, arr2)).toEqual([{ id: 2, name: "Bob" }])
    })

    it ('havent common objects', () => {
        const arr1 = [{ id: 1, name: "Alice" }]
        const arr2 = [{ id: 3, name: "Charlie" }]
        expect(findCommonObjects(arr1, arr2)).toEqual([])
    })

    it ('empty arrays', () => {
        const arr1 = [{}]
        const arr2 = [{}]
        expect(findCommonObjects(arr1, arr2)).toEqual([{}])
    })

    it ('arr2 is empty', () => {
        const arr1 = [{ id: 1, name: "Alice" }]
        const arr2 = [{}]
        expect(findCommonObjects(arr1, arr2)).toEqual([])
    })
})