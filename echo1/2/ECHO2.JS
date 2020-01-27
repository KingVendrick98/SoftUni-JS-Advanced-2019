let SkiResort = require('../2/solution.js');
let expect = require("chai").expect;
let assert = require("chai").assert;

describe("Test", function () {
    let ski;
    this.beforeEach(function () {
        ski = new SkiResort("ski");
    })

    it(`Should create instance ---!---`, function () {
        expect(ski.name).to.equal(`ski`);
        expect(ski.voters).to.equal(0);
        expect(ski.hotels).to.deep.equal([]);
        expect(ski.bestHotel).to.equal(`No votes yet`);
    })
})

describe(`Functions in solution.js ---!---`, function () {
    it(`Build hotel ---!--- Invalid name`, function () {
        let res = new SkiResort("Some");

        expect(() => res.build('', 55)).to.throw(Error, "Invalid input");
    })

    it(`Build hotel ---!--- Invalid beds`, function () {
        let res = new SkiResort("Some");

        expect(() => res.build('asd', -5)).to.throw(Error, "Invalid input");
    })

    it(`Build hotel ---!--- Successes !`, function () {
        let res = new SkiResort("Some");

        let output = res.build('asd', 10);

        expect(output).to.be.equal(`Successfully built new hotel - asd`)
        expect(res.hotels).to.be.deep.equal([{
            name: 'asd',
            beds: 10,
            points: 0
        }])
        expect(res.hotels).to.have.length(1);
    })

    it(`Book hotel ---!--- Invalid name`, function () {
        let res = new SkiResort("Some");

        expect(() => res.book('', 2)).to.throw(Error, "Invalid input");
    })

    it(`Book hotel ---!--- Invalid beds`, function () {
        let res = new SkiResort("Some");

        expect(() => res.book('asd', -5)).to.throw(Error, "Invalid input");
    })

    it(`Book hotel ---!--- Hotel not found`, function () {
        let res = new SkiResort("Some");

        expect(() => res.book('asd', 5)).to.throw(Error, "There is no such hotel");
    })

    it(`Book hotel ---!--- Invalid space`, function () {
        let res = new SkiResort("Some");
        res.build('aaa', 1);

        expect(() => res.book('aaa', 5)).to.throw(Error, "There is no free space");
    })

    it(`Book hotel ---!--- Successes !`, function () {
        let res = new SkiResort("Some");
        res.build('aaa', 5);

        let output = res.book('aaa', 2);
        expect(output).to.be.equal("Successfully booked");
        expect(res.hotels).to.be.deep.equal([{
            name: "aaa",
            beds: 3,
            points: 0
        }]);
        expect(res.hotels[0].beds).to.be.equal(3)
    })

    it(`Leave hotel ---!--- Invalid name`, function () {
        let res = new SkiResort("Some");

        expect(() => res.leave("", 2)).to.throw(Error, "Invalid input");
    })

    it(`Leave hotel ---!--- Invalid beds`, function () {
        let res = new SkiResort("Some");

        expect(() => res.leave("asd", -5)).to.throw(Error, "Invalid input");
    })

    it(`Leave hotel ---!--- Hotel not found`, function () {
        let res = new SkiResort("Some");

        expect(() => res.leave("asd", 5)).to.throw(Error, "There is no such hotel");
    })

    it(`Leave hotel ---!--- Successes !`, function () {
        let res = new SkiResort("Some");
        res.build('aaa', 5);

        let output = res.leave('aaa', 3, 5);
        expect(output).to.be.equal("3 people left aaa hotel");

        expect(res.hotels).to.be.deep.equal([{
            name: 'aaa',
            beds: 8,
            points: 15
        }])
    })

    it(`Average Grade Check ---!---`, function () {
        let res = new SkiResort("Some");
        res.build('aaa', 5);
        res.leave('aaa', 3, 5);
        res.leave('aaa', 3, 10);
        res.leave('aaa', 3, 3.50);

        let output = res.averageGrade();
        expect(output).to.be.equal(`Average grade: 6.17`);
    })

    it(`Average Grade No Votes ---!---`, function () {
        let res = new SkiResort("Some");
        res.build('aaa', 5);

        let output = res.averageGrade();
        expect(output).to.be.equal("No votes yet");
    })

    it(`Get Best Hotel ---!---`, function () {
        let res = new SkiResort("Some");
        res.build('hotel1', 5);
        res.build('hotel2', 5);
        res.build('hotel3', 5);
        res.leave('hotel1', 3, 10);
        res.leave('hotel2', 3, 5);
        res.leave('hotel3', 3, 1);

        let output = res.bestHotel;
        expect(output).to.be.equal("Best hotel is hotel1 with grade 30. Available beds: 8");
    })

})