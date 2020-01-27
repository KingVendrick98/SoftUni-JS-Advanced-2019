const BookStore = require("../02. Book Store_Ресурси");
const expect = require("chai").expect;

describe("Tests …", () => {
  let intentions;
  beforeEach(`Restarting describer important!!!`, () => {
    intentions = new BookStore("store");
    return intentions;
  });
  describe("constructor TESTS", () => {
    it("should be created with single parameter 'name' and have props default values", function() {
      expect(intentions.name).equal("store");
      expect(intentions.books).eql([]);
      expect(intentions.workers).eql([]);
    });
  });
  describe("stockBooks() TESTS", () => {
    it("should receive single parameter '[edno, dve, tri]'", () => {
      let actual = intentions.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
      let expected = [
        { title: "edno", author: "edno" },
        { title: "dve", author: "dve" },
        { title: "tri", author: "tri" }
      ];
      expect(actual).eql(expected);
    });
  });
  describe("hire() TESTS", () => {
    it("should receive two parameter name and position", () => {
      let actual = intentions.hire("Pesho", "seller");
      let expected = `Pesho started work at store as seller`;
      expect(actual).equal(expected);
    });
    it("should add employee to workers", () => {
      intentions.hire("Pesho", "seller");
      let expected = {
        name: "Pesho",
        position: "seller",
        booksSold: 0
      };
      expect(intentions.workers[0]).eql(expected);
      expect(intentions.workers.length).equal(1);
    });
    it("should throw error if already employee", () => {
      intentions.hire("Pesho", "seller");
      expect(() => intentions.hire("Pesho", "seller")).to.throw(
        Error,
        "This person is our employee"
      );
    });
  });
  describe("fire() TESTS", () => {
    it("should receive one parameter name and return string msg", () => {
      intentions.hire("Pesho", "seller");
      let actual = intentions.fire("Pesho");
      let expected = `Pesho is fired`;
      expect(actual).equal(expected);
    });
    it("should remove employee to workers", () => {
      intentions.hire("Pesho", "seller");
      intentions.fire("Pesho");
      expect(intentions.workers.length).equal(0);
    });
    it("should throw error if employee not found", () => {
      let actual = () => intentions.fire("Pesho");
      expect(actual).to.throw(Error, `Pesho doesn't work here`);
    });
  });
  describe("sellBooks() TESTS", () => {
    it("should receive two params title and workerName and return undefined", () => {
      intentions.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
      intentions.hire("Pesho", "seller");
      let actual = intentions.sellBook("edno", "Pesho");
      expect(actual).equal(undefined);
      expect(intentions.workers[0].booksSold).equal(1);
      expect(intentions.books.length).equal(2);
    });
    it("should throw error when no valid seller", () => {
      intentions.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
      intentions.hire("Pesho", "seller");
      let actual = () => intentions.sellBook("edno", "ivan");
      expect(actual).throw(Error, "ivan is not working here");
    });
    it("should throw error when no valid book", () => {
      intentions.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
      intentions.hire("Pesho", "seller");
      let actual = () => intentions.sellBook("blabla", "Pesho");
      expect(actual).throw(Error, "This book is out of stock");
    });
  });
  describe("printWorkers() TESTS", () => {
    it("should return string with all workers => name:position", () => {
      intentions.hire("Pesho", "waiter");
      let actual = intentions.printWorkers();
      expect(actual).equal("Name:Pesho Position:waiter BooksSold:0");
    });
  });
});