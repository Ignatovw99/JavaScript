function focus() {

    let focusedClass = 'focused';
    let selectionInputElements = document.querySelectorAll('input[type="text"]');

    Array.from(selectionInputElements)
        .forEach(selectionInputElement => {
            selectionInputElement.addEventListener('focus', onFocusSection);
            selectionInputElement.addEventListener('blur', onBlurSection);
        });

    function onFocusSection(e) {
        let focusedSection = e.target;
        let parentSectionElement = focusedSection.parentElement;
        parentSectionElement.classList.add(focusedClass);
    }

    function onBlurSection(e) {
        let blurredSection = e.target;
        let parentSectionElement = blurredSection.parentElement;
        parentSectionElement.classList.remove(focusedClass);
    }
}