"use strict";
// let id: number = 5;
// let company: string = "Acme Corp";
// let isPublished: boolean = true;
const User = {
    id: 2,
    name: "Pedro",
    greet(message) {
        console.log(message);
    },
};
if (!User.age) {
    console.log("No Age of User");
}
else {
    console.log(User.age);
}
User.greet("Hello!");
