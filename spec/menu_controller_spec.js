const MenuController = require("../controllers/MenuController");

// #1
describe("MenuController", () => {

    beforeEach(() => {
        this.menu = new MenuController();
    });

    describe("#getContactCount()", () => {
 
 // #2
      it("should return 0 when no contacts are in the book", () => {
          expect(this.menu.getContactCount()).toBe(0);
      });

      it("should return 1 when there is exactly one contact in the book", () => {
          this.menu.book.push("Bob", "555-555-5555");
          expect(this.menu.getContactCount()).toBe(1);
      });
    });

    describe("#RemindMe()", () => {
        it("shoud return 'Learning is a lifelong persuit' text string", () => {
            expect(this.menu.remindMe()).toBe("Learning is a life-long persuit");
        });
    });
  });