const MenuController = require("../controllers/MenuController");

// #1
describe("MenuController", () => {

    beforeEach(() => {
        this.menu = new MenuController();
    });

    describe("#RemindMe()", () => {
        it("shoud return 'Learning is a lifelong persuit' text string", () => {
            expect(this.menu.remindMe()).toBe("Learning is a life-long persuit");
        });
    });
  });