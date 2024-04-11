// PHONE BLOCK
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')
const regExp = /^\+996 [2579][0-9]-[0-9]-[0-9]$/
//const regExp = /\+996 [2579]\d{2}-[0-9]-[0-9]/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'

    }else {
        phoneSpan.innerHTML ='NOT OK'
        phoneSpan.style.color = 'red'
    }
}

//recursion - рекурсия
let count = 0
const increment = () => {
    count++
    console.log(count)
    increment()
}
increment(count)
requestAnimationFrame()

// tab
const tabContentBlock = document.querySelectorAll('tab')

const hideTabContent = () => {
     
}