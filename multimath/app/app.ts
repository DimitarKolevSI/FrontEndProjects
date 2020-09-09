/**
    * let someValue: number|string;
    * someValue = 42; -> OK
    * someValue="Hello world"->OK
    * someValue=true; -> Not OK
*/
/**
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
*/

function startGame(){
    let playerName: string = 'Dimitar';
    logPlayer(playerName);

    var messagesElement = document.getElementById('messages');
    //By asdding ! at the end of the variable name we assert that it is not null since the compiler
    //is checking if it is null.
    messagesElement!.innerText = 'Welcome to MultiMath! Starting one game...'; 
}

function logPlayer(name){
    console.log(`New game starting for player: ${name}`);
}

document.getElementById('startGame')!.addEventListener('click', startGame);