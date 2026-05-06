// Problem 1: Filter Even Numbers
const filterEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 === 0);
};

// Example
const numbers = [1, 2, 3, 4, 5, 6];
console.log("Even Numbers:", filterEvenNumbers(numbers)); // [2,4,6]

// Problem 2: Reverse String
const reverseString = (str: string): string => {
  return str.split("").reverse().join("");
};

// Example
console.log("Reversed:", reverseString("typescript")); // tpircsepyt

// Problem 3: Check Type
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  return typeof value === "string" ? "String" : "Number";
};

// Example
console.log("Type:", checkType("23")); // String
console.log("Type:", checkType(23)); // Number

// Problem 4: Get Object Property
type User = {
  id: number;
  name: string;
  age: number;
};

const user: User = {
  id: 1,
  name: "John Doe",
  age: 21,
};

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

// Example
console.log("User Name:", getProperty(user, "name")); // John Doe

// Problem 5: Toggle Read Status
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isRead?: boolean;
}

const toggleReadStatus = (book: Book): Book => {
  return {
    ...book,
    isRead: !book.isRead,
  };
};

// Example
const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log("Updated Book:", toggleReadStatus(myBook));

// Problem 6: Class & Method
class Student {
  name: string;
  age: number;
  grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Example
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());

// Problem 7: Array Intersection
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
};

// Example
console.log("Intersection:", getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // [3,4,5]
