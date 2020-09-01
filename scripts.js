const errorMessages = document.querySelectorAll('.error-msg')
const emailInput = document.querySelector('input')
const button = document.querySelector('button')

const validateForm = (event) => {
    event.preventDefault()
    let regex = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/
    let isMatched = regex.test(emailInput.value)

    if (!emailInput.value) {
        errorMessages[0].style.display = 'block'
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)'
    } else if (emailInput.value && !isMatched) {
        errorMessages[1].style.display = 'block'
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)'
    }else{
        emailInput.value = ''
    }
}

button.addEventListener('click', validateForm)


// Remove error styles when input element has focus
emailInput.addEventListener('focus', function removeErrorStyles() {
    errorMessages[0].style.display = 'none'
    errorMessages[1].style.display = 'none'
    emailInput.style.borderColor = 'hsl(223, 87%, 63%)'
})