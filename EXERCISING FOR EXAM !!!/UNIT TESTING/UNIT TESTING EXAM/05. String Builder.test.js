const StringBuilder = require('./05. String Builder');
const expect = require('chai').expect;

describe('StringBuilder', function() {
    it('Can be instantiated with a passed in string argument or without anything', function() {
        let expected = new StringBuilder();
        expect(expected).to.be.a('object');
    });
    it('Can be instantiated with a passed in string argument', function() {
        let expected = new StringBuilder('Test');
        expect(expected._stringArray).to.have.lengthOf(4)
    });
    it('append(string) - length', function() {
        let expected = new StringBuilder('Test');

        expected.append('Demo')
        expect(expected._stringArray).to.have.lengthOf(8)
    });
    it('append(string) - append to the end of the string', function() {
        let expected = new StringBuilder('Te');
        expected.append('Demo')
        expect(expected._stringArray[0]).to.be.equal('T');
    });
    it('prepend(string) - append to the end of the string', function() {
        let expected = new StringBuilder('Te');
        expected.prepend('Demo')
        expect(expected._stringArray[0]).to.be.equal('D');
    });
    it('insertAt(string, index) ', function() {
        let expected = new StringBuilder('Te');
        expected.insertAt('D', 1)
        expect(expected._stringArray[1]).to.be.equal('D');
    });
    it('remove(startIndex, length) ', function() {
        let expected = new StringBuilder('Test');
        expected.remove(1, 1)
        expect(expected._stringArray[1]).to.be.equal('s');
    });
    it('toString()', function() {
        let expected = new StringBuilder('Test');
        expect(expected.toString()).to.be.equal('Test');
    });
    it('Test for different type of arguments as input', function() {
        //let expected = new StringBuilder(21);
        expect(() => new StringBuilder(21)).to.Throw('Argument must be string')
    });
});