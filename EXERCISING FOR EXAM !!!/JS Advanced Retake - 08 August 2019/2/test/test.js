const BookStore = require("../02. Book Store_Ресурси");
const expect = require("chai").expect;

describe("Tests …", () => {
  let inst;
  beforeEach(`Restarting describer important!!!`, () => {
    inst = new BookStore("store");
    return inst;
  });
  describe("constructor TESTS", () => {
    it("should be created with single parameter 'name' and have props default values", function() {
      expect(inst.name).equal("store");
      expect(inst.books).eql([]);
      expect(inst.workers).eql([]);
    });
  });
  describe("stockBooks() TESTS", () => {
    it("should receive single parameter '[edno, dve, tri]'", () => {
      let actual = inst.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
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
      let actual = inst.hire("Pesho", "seller");
      let expected = `Pesho started work at store as seller`;
      expect(actual).equal(expected);
    });
    it("should add employee to workers", () => {
      inst.hire("Pesho", "seller");
      let expected = {
        name: "Pesho",
        position: "seller",
        booksSold: 0
      };
      expect(inst.workers[0]).eql(expected);
      expect(inst.workers.length).equal(1);
    });
    it("should throw error if already employee", () => {
      inst.hire("Pesho", "seller");
      expect(() => inst.hire("Pesho", "seller")).to.throw(
        Error,
        "This person is our employee"
      );
    });
  });
  describe("fire() TESTS", () => {
    it("should receive one parameter name and return string msg", () => {
      inst.hire("Pesho", "seller");
      let actual = inst.fire("Pesho");
      let expected = `Pesho is fired`;
      expect(actual).equal(expected);
    });
    it("should remove employee to workers", () => {
      inst.hire("Pesho", "seller");
      inst.fire("Pesho");
      expect(inst.workers.length).equal(0);
    });
    it("should throw error if employee not found", () => {
      let actual = () => inst.fire("Pesho");
      expect(actual).to.throw(Error, `Pesho doesn't work here`);
    });
  });
  describe("sellBooks() TESTS", () => {
    it("should receive two params title and workerName and return undefined", () => {
      inst.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
      inst.hire("Pesho", "seller");
      let actual = inst.sellBook("edno", "Pesho");
      expect(actual).equal(undefined);
      expect(inst.workers[0].booksSold).equal(1);
      expect(inst.books.length).equal(2);
    });
    it("should throw error when no valid seller", () => {
      inst.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
      inst.hire("Pesho", "seller");
      let actual = () => inst.sellBook("edno", "ivan");
      expect(actual).throw(Error, "ivan is not working here");
    });
    it("should throw error when no valid book", () => {
      inst.stockBooks(["edno-edno", "dve-dve", "tri-tri"]);
      inst.hire("Pesho", "seller");
      let actual = () => inst.sellBook("blabla", "Pesho");
      expect(actual).throw(Error, "This book is out of stock");
    });
  });
  describe("printWorkers() TESTS", () => {
    it("should return string with all workers => name:position", () => {
      inst.hire("Pesho", "waiter");
      let actual = inst.printWorkers();
      expect(actual).equal("Name:Pesho Position:waiter BooksSold:0");
    });
  });
});