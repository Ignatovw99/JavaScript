function encodeAndDecodeMessages() {

    let encodeButton = document.querySelectorAll('button')[0];
    let decodeButton = document.querySelectorAll('button')[1];

    let encodeMessageInputElement = document.querySelectorAll('textarea')[0];
    let decodeMessageOutputElement = document.querySelectorAll('textarea')[1];

    encodeButton.addEventListener('click', encodeMessage);
    decodeButton.addEventListener('click', decodeMessage);

    function encodeMessage() {   
        let textToEncode = encodeMessageInputElement.value;
        let encodedText = '';
        for (let index = 0; index < textToEncode.length; index++) {
            encodedText += String.fromCharCode(textToEncode.charCodeAt(index) + 1);
        }
        encodeMessageInputElement.value = '';
        decodeMessageOutputElement.value = encodedText;
    }

    function decodeMessage() {
        let textToDecode = decodeMessageOutputElement.value;
        let decodedText = '';
        for (let index = 0; index < textToDecode.length; index++) {
            decodedText += String.fromCharCode(textToDecode.charCodeAt(index) - 1);
        }
        decodeMessageOutputElement.value = decodedText;
    }

}