const selectElement = (selector) => {
    let element = document.querySelector(selector);
    if (element){
        return element;
    }
    return 'An error occoured! Check if the selector is correct'
}

const selectElements = (selector) => {
    let elements = document.querySelector(selector);
    if (elements){
        return elements;
    }
    return 'An error occurred! Check if the selector is correct'
}

const header = selectElement('header');

const toggleMenuBtnContainer = selectElement('.toggle-menu')
toggleMenuBtnContainer.addEventListener('click', () => {
    toggleMenuBtnContainer.classList.toggle('toggle');
    header.classList.toggle('show-nav')
})


console.log(toggleMenuBtnContainer)