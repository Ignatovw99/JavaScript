function notify(message) {

    let notificationElement = document.getElementById('notification');
    notificationElement.style.display = 'block';
    notificationElement.textContent = message;

    setTimeout(() => {
        notificationElement.style.display = 'none';
        notificationElement.textContent = '';
    }, 2000);
}