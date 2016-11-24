
export class Person {
    id: number;
    name: string;
    surname: string;
    age: number; 
    position: string

     constructor(/*id, name, surname, age, position*/ obj){
        this.id = obj.id;
        this.name = obj.name;
        this.surname = obj.surname;
        this.age = obj.age;
        this.position = obj.position;
    }
}