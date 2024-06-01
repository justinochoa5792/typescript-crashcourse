// let id: number = 5;
// let company: string = "Acme Corp";
// let isPublished: boolean = true;

// let ids: number[] = [1, 2, 3, 4, 5];
// let x: any = "Justin";
// let xArr: any[] = ["justin", 0, false];

// const concatValues = (a: string, b: string) => {
//   return a + b;
// };

// console.log(concatValues("hello", "world"));
// console.log(concatValues("5", "10"));

interface UserInterFace {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterFace = {
  id: 2,
  name: "Pedro",
  greet(message) {
    console.log(message);
  },
};

if (!User.age) {
  console.log("No Age of User");
} else {
  console.log(User.age);
}

User.greet("Hello!");
