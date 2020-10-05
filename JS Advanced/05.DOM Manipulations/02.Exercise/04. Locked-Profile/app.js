function lockedProfile() {

    let profileButtons = document.querySelectorAll('div.profile > button');

    Array.from(profileButtons)
        .forEach(button => {
            button.addEventListener('click', showMoreProfile);
        });


    
    function showMoreProfile(e) {
        let profileElement = e.target.parentElement;
        let isProfileLocked = checkIfProfileIsLocked(profileElement);
        if (isProfileLocked) {
            return;
        }
        profileElement.querySelector('div').style.display = 'block';
        e.target.removeEventListener('click', showMoreProfile);
        e.target.textContent = 'Hide it';
        e.target.addEventListener('click', hideProfileDetails);
    }


    function checkIfProfileIsLocked(profileElement) {
        let lockResult = profileElement.querySelector('input:checked').value;
        return lockResult === 'lock'? true : false;
    }

    function hideProfileDetails(e) {
        
        let profileElement = e.target.parentElement;
        let isProfileLocked = checkIfProfileIsLocked(profileElement);
        if (isProfileLocked) {
            return;
        }
        profileElement.querySelector('div').style.display = 'none';
        e.target.removeEventListener('click', hideProfileDetails);
        e.target.textContent = 'Show more';
        e.target.addEventListener('click', showMoreProfile);
    }
}