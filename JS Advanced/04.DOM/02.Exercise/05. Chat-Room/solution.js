function solve() {
    let buttonSendElement = document.getElementById('send');
    let chatInputElement = document.getElementById('chat_input');

    buttonSendElement.addEventListener('click', function () {
        let message = chatInputElement.value;
        chatInputElement.value = '';
        if (!message.trim()) {
            return;
        }

        let newMessageElement = document.createElement('div');
        newMessageElement.classList.add('message', 'my-message');
        newMessageElement.textContent = message;

        document.getElementById('chat_messages').appendChild(newMessageElement);
    })
}
