//problem 1
const arr = [1, 2, 3, 4, 5, 6]
const filterEvenNumbers = (arr: number[]): number[] => {
    const evenNumber = arr.filter(n => n % 2 === 0);
    return evenNumber;
}


//problem 2
const stringInput = "typescript"
const reverseString = (str: string): string => {
    const revString = str.split("").reverse().join("");
    return revString;
}


//problem 3
type StringOrNumber = string | number;
const checkType = (user: StringOrNumber) => {
    if (typeof user === "string") {
        return ("String");
    }
    else {
        return ("Number");
    }
}


//problem 4
const user = { id: 1, name: "John Doe", age: 21 };
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
}

//problem 5
interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};
const toggleReadStatus = (obj: Book) => {
    return { ...obj, isRead : true };
}


//problem 6
class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name=name;
        this.age = age;

    }
}
class Student extends Person{
    grade: string;
    constructor(name: string, age: number, grade:string){
        super(name, age);
        this.grade = grade
    }

    getDetails(){
        return (`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`)
    }
}
const student = new Student("Alice", 20, "A");


// problem 7
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const getIntersection = (arr1  : number[], arr2 : number[] ): number[] => {
    const set2 = new Set(arr2);
    const existingElement = arr1.filter(e => set2.has(e))
    return existingElement;   
}






