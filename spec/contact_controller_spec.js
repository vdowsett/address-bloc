const ContactController = require("../controllers/ContactController");
const sequelize = require("../db/models/index").sequelize;

describe("ContactController", () => {

    beforeEach((done) => {
        this.book = new ContactController();

        // #1
       sequelize.sync({force: true}).then((res) => {
        done();
      })
      .catch((err) => {
        done();
      });
   });

   describe("#addContact()", () => {

    it("should add a single contact into the book", () => {

        this.book.addContact("Alice", "001-101-1010", "email@test.com")
        .then( (contact) => {
            expect(contact.name).toBe("Alice");
            expect(contact.phone).toBe("001-101-1010");
            expect(contact.phone).toBe("email@test.com");
            done();
        })
        .catch( (err) => {
            done();
        });
    });

  });
});

