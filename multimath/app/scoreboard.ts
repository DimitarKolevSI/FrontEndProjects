import {Result} from './result'
import * as _ from "lodash";

export class Scoreboard{
    private result:Result[] = [];

    addResult(newResult: Result):void{
        this.result.push(newResult);
        let allCapsName: string = _.upperCase(newResult.playerName);
        console.log(`${allCapsName}: ${newResult.score}`);
    }

    updateScoreboard():void{
        let output: string = '<h2>Scoreboard<h2>'

        for(let index = 0 ; index<this.result.length ; index++){
            const result: Result = this.result[index];
            output += '<h4>'
            output += result.playerName + ':' + result.score + '/' + result.problemCount + ' for factor ' + result.factor; 
            output += '</h4>';
        }

        const scoreElements:HTMLElement = document.getElementById('scores')!;
        scoreElements.innerHTML = output;
    }
}
