let isDone: boolean = false;
let age: number = 32;
let myName: string = "foobar";
let list: number[] = [1, 2, 3];

function add(a: number, b: number): number {
    return a + b;
}

interface Person {
    firstName: string;
    lastName: string;
    sayHelo(hello: string): string
}

class Japanese implements Person {
    firstName: string;
    lastName: string;

    constructor (firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHelo(yourName: string): string {
        return `hello! ${yourName}. My name is ${this.firstName} ${this.lastName}.`
    }    
}


function useAdd() {
    const result = add(1, 3);
    console.log(result); 
}

function useJapanese() {
    const j: Japanese = new Japanese("foo", "bar");
    const hello: String = j.sayHelo("kusu");
    console.log(hello);
}

function main() {
    // useAdd();
    useJapanese();
}

main();
