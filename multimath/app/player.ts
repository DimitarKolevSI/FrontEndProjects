import { Person } from 'person';

export class Player implements Person{
    name:string;
    age: number;
    highScore: number;

    formatName() {
        return this.name.toUpperCase();
    }
}
// If we set a property with readonly it can only be modified in the constructor