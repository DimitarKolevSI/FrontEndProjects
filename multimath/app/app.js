function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting one game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
