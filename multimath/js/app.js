"use strict";
function startGame() {
    var messagesElement = document.getElementById('messages');
    //By asdding ! at the end of the variable name we assert that it is not null since the compiler
    //is checking if it is null.
    messagesElement.innerText = 'Welcome to MultiMath! Starting one game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map