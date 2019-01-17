const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
    this.mainMenuQuestions = [
        {
         type: "list",
          name: "mainMenuChoice",
          message: "Please choose from an option below: ",
          choices: [
            "Add new contact",
            "Get Date",
            "Exit"
          ]
        }
      ];
      this.contacts = [];
   }

   main() {
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Get Date":
          this.date();
          break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
   }

   clear() {
    console.log("\x1Bc");
   }

   addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  date() {
      this.clear();
      
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      
      if (dd < 10) {
          dd = '0' + dd;
        }
      
      if (mm < 10) {
          mm = '0' + mm;
        }
        
        today = mm + '/' + dd + '/' + yyyy;
        console.log(today);
        
        this.main();
  }

 }