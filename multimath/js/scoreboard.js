"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
var Scoreboard = (function () {
    function Scoreboard() {
        this.result = [];
    }
    Scoreboard.prototype.addResult = function (newResult) {
        this.result.push(newResult);
    };
    Scoreboard.prototype.updateScoreboard = function () {
        var output = '<h2>Scoreboard<h2>';
        for (var index = 0; index < this.result.length; index++) {
            var result = this.result[index];
            output += '<h4>';
            output += result.playerName + ':' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }
        var scoreElements = document.getElementById('scores');
        scoreElements.innerHTML = output;
    };
    return Scoreboard;
}());
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map