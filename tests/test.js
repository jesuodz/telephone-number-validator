const assert = require('assert');
const val = require('../index.js');

describe('Telephone Checker', () => {
    it('should return a boolean', () => {
        assert.equal(typeof(true), typeof(val.telephoneChecker("555-555-5555")))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("1 555-555-5555"))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("1 (555) 555-5555"))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("5555555555"))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("555-555-5555"))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("(555)555-5555"))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("1(555)555-5555"))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("1 555 555 5555"))
    })
    it('should return true', () => {
        assert.equal(true, val.telephoneChecker("1 456 789 4444"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("555-5555"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("5555555"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("1 555)555-5555"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("123**&!!asdf#"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("55555555"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("(6054756961)"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("2 (757) 622-7382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("0 (757) 622-7382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("-1 (757) 622-7382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("2 757 622-7382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("10 (757) 622-7382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("27576227382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("(275)76227382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("2(757)6227382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("2(757)622-7382"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("555)-555-5555"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("(555-555-5555"))
    })
    it('should return false', () => {
        assert.equal(false, val.telephoneChecker("(555)5(55?)-5555"))
    })
})