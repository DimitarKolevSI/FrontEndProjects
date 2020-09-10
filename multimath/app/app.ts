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


function startGame(){
    let playerName: string | undefined= getInputValue('playername');
    logPlayer(playerName);

    postScore(100,playerName)
    
    postScore(-5);  
}

function logPlayer(name:string = 'MultiMath Player'):void{
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID:string):string|undefined{
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    if(inputElement.value === ''){
        return undefined;
    }
    else{
        return inputElement.value;
    }
}

function postScore(score:number, playerName:string = 'MultiMath Player'):void{
    let logger: (value:string) => void;
    if (score < 0 ){
        logger = logError;
    }
    else{
        logger = logMessage;
    }
    const scoreElement: HTMLElement|null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
    logger(`Score: ${score}`);
} 

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message:string) =>  console.log(message);

function logError(err: string): void{
    console.error(err);
}