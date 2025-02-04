//OOP_Task 
//part 1) You are creating a website for your colllege. Create a class 'User' with 2 properties- name & email. It also has a method called viewData() that allows user to view website data.

let DATA = "secret information";
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`Data: ${DATA}`);
    }
}

// let user1 = new User("Dipita Tasnim", "dipi06@gmail.com"); // niche ekbare call diyechi puro ta complete korar por. 
// user1.viewData(); //output: secret information

//part 2) Create a new class called "Admin" which inherits from "User". Add a new method called editData to Admin that allows it to edit website data.

//Note: 'Admin' inherits from 'User' means - Admin is child class and User is Parent class..

// continuing after the code written above-

class Admin extends User {
    constructor(name, email){ //child e constructor create korle-->
        super(name, email); // parent er constructor call dite hoy(super diye).
    }
    editData(){
        DATA = "some new value";
    }
}

//parent part call
let student1 = new User("Dipita Tasnim", "dipi06@gmail.com");
let student2 = new User("Tazrian Tabassum", "taz06@gmail.com");
// student1.viewData();  //output: secret information
// student1.editData();  //output: error [editData hocche only child er part, parent er na. child er kache parent er shob kichu ache but parent er kache parent er tai ache.]

//child part call
let admin1 = new Admin("Farhan", "farhan06@gmail.com");
let admin2 = new Admin("Syed", "syed06@gmail.com");
// admin1.viewData(); //output: secret information
// admin1.editData(); //output: some new value

