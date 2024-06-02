// // let id: number = 5;
// // let company: string = "Acme Corp";
// // let isPublished: boolean = true;

// // let ids: number[] = [1, 2, 3, 4, 5];
// // let x: any = "Justin";
// // let xArr: any[] = ["justin", 0, false];

// // const concatValues = (a: string, b: string) => {
// //   return a + b;
// // };

// // console.log(concatValues("hello", "world"));
// // console.log(concatValues("5", "10"));

// interface UserInterFace {
//   id: number;
//   name: string;
//   age?: number;
//   greet(message: string): void;
// }

// const User: UserInterFace = {
//   id: 2,
//   name: "Pedro",
//   greet(message) {
//     console.log(message);
//   },
// };

// if (!User.age) {
//   console.log("No Age of User");
// } else {
//   console.log(User.age);
// }

// User.greet("Hello!");

// const printID = (id: string | number) => {
//   console.log(`ID:${id}`);
// };

// printID("justin");

// enum LoginError {
//   Unauthorized = "Unauthorized",
//   NoUser = "No User",
//   Internal = "Internal",
// }

// const printErrorMsg = (error: LoginError) => {
//   if (error == LoginError.Unauthorized) {
//     console.log("User not authed");
//   }
// };

// printErrorMsg(LoginError.Unauthorized);

class StorageContainer<T> {
  private contents: T[];

  constructor() {
    this.contents = [];
  }

  addItem(item: T): void {
    this.contents.push(item);
  }

  getItem(idx: number): T | undefined {
    return this.contents[idx];
  }
}

const usernames = new StorageContainer<string>();
usernames.addItem("justin");
usernames.addItem("developer");

console.log(usernames.getItem(0));
