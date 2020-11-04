function attachEvents() {

    const messengerApiUrl = 'https://rest-messanger.firebaseio.com/messanger.json';

    const messagesTextareaElement = document.querySelector('#messages');

    const authorInputElement = document.querySelector('#author');
    const contentInputElement = document.querySelector("#content");
    const submitButton = document.querySelector('#submit');
    const refreshButton = document.querySelector('#refresh');

    submitButton.addEventListener('click', sendMessage);
    refreshButton.addEventListener('click', refresh);

    function refresh() {
        fetch(messengerApiUrl)
            .then(response => response.json())
            .then(messages => {
                const result = [];
                Object.keys(messages).forEach(key => {
                    const currentMessage = messages[key];
                    result.push(`${currentMessage.author}: ${currentMessage.content}`);
                })
                messagesTextareaElement.textContent = result.join('\n');
            });
    }

    function sendMessage() {
        fetch(messengerApiUrl, {
            'method': 'POST',
            'body': JSON.stringify({
                author: authorInputElement.value,
                content: contentInputElement.value
            })
        })
        .then(() => {
            authorInputElement.value = '';
            contentInputElement.value = '';
            refresh();
        });
    }
}

attachEvents();