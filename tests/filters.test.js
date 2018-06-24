import { exposedNumeral } from '../src/filters.js';

describe('Filter Tests', () => {
    it('should expose default numeral', () => {
        expect(exposedNumeral).toBe(Function);
    });
});