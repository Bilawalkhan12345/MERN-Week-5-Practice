// Advanced types
// . Union type
// . Literal type
// . type Alias 

// . Union type

// let id: string | number;
// id = 101;
// id = "EMP101";
// // id = true // it will generate error 



// . Literal type

// let direction: "left" | "right" | "up" | "down";
// direction = "left";

// direction = "forward"; // Error


// . type Alias 

// type UserID = string | number;

// type User = {name: string; age: number; id:UserID};
// const users: User = {name: "Ali", age: 23, id: 1001};
// const user: User = {name: "Ali", age: 23, id: "EMP1001"};