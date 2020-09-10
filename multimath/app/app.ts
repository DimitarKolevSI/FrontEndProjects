/// <reference path="./player.ts" />
/// <reference path="./game.ts" />


/**
    * let someValue: number|string;
    * someValue = 42; -> OK
    * someValue="Hello world"->OK
    * someValue=true; -> Not OK
    * 
    * Using the --strictNotNullChecks Comliper Option
    * let basicString:string;
    * basicString = null; -> X
    * basicString = undefined; -> X
    * 
    * let nullableString: string | null;
    * nullableString = null; -> OK
    * nullableString = undefined; -> X
    * 
    * let mysteryString: string | null | undefined;
    * let mysteryString = null; -> OK;
    * let mysteryString = undefined; -> OK;
    * 
    * Type Assertions
    * let value:any = 5;
    * let fixedString: string = (<number>value).toFixed(4);
    * console.log(fixedString); //5.0000
    * 
    * let fixedString: string = (value as number).toFixed(4);
    * console.log(fixedString); //5.0000
    * 
    * Adding type annotation to functions
    * message? -> the parameter is optional. All optional parameters should be put at the end
    * 
    * function funFunc(score:number, message?: string): string{
    *                                                                                       ^
    *                                                                                       | |
    *                                                                                 return type 
    * }
    * 
    * Default parameter
    * function sendGreeting(greeting:string = 'Good morning!' ):void{
    *       console.log(greeting)
    * }
    * sendGreeting() //Good morning!
    * sendGreeting('Hello!') //Hello!
*/
//By asdding ! at the end of the variable name we assert that it is not null since the compiler
    //is checking if it is null.

let newGame:Game;

document.getElementById('startGame')!.addEventListener('click', ()=>{
    const player:Player = new Player();
    player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

document.getElementById('calculate')!.addEventListener('click', ()=>{
    newGame.calculateScore()
});
