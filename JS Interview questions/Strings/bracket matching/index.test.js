import { expect } from 'chai';
import isValid from './index.js';
describe("Testing valid paranthesis", () => {

    it("should return true for []", () => {
        expect(isValid('[]')).to.be.true
    });
});
