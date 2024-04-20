// // PHONE BLOCK
// const phoneInput = document.querySelector('#phone_input')
// const phoneButton = document.querySelector('#phone_button')
// const phoneSpan = document.querySelector('#phone_result')
// const regExp = /^\+996 [2579][0-9]-[0-9]-[0-9]$/
// //const regExp = /\+996 [2579]\d{2}-[0-9]-[0-9]/
// phoneButton.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneSpan.innerHTML = 'OK'
//         phoneSpan.style.color = 'green'
//
//     }else {
//         phoneSpan.innerHTML ='NOT OK'
//         phoneSpan.style.color = 'red'
//     }
// }
//
// //recursion - рекурсия
// let count = 0
// const increment = () => {
//     count++
//     console.log(count)
//     increment()
// }
// increment(count)
// requestAnimationFrame()

// tab
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')


const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'

    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
     
}
const showTabContent = (index = 0 ) => {

    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')

}
hideTabContent()
showTabContent(0)
tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabContentItems.forEach((item,index) => {
            if (event.target === item){
                hideTabContent()
                showTabContent(index)

            }

        })
    }
}
const tabfun = (i =0) => {
    setInterval(() =>{
        i++
        if (i>tabContentBlocks.length-1){i=0}
        hideTabContent()
        showTabContent(i)
    }, 3000)


}
tabfun()
//current

const usdInput = document. querySelector('#usd')
const somInput = document. querySelector('#som')
const eurInput = document.querySelector('#eur')


somInput. addEventListener('input',() =>{
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request. addEventListener('load', () =>{
        const data = JSON.parse(request.response)
        usdInput.value = (somInput.value / data.usd).toFixed(2)
    })


} )
//DRY - dont repeat yourself
const convert = (element, target, current) =>{
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '..data/converter/json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()
        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (current){
                case'som':
                    target.value= (element.value / data.usd).toFixed(2)
                    break
                case 'usd':
                    target.value= (element.value * data.usd).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' && (target.value = '')
        }

    }


}
convert(somInput,usdInput,'som')
convert(usdInput, somInput, 'usd')

eurInput. addEventListener('input',() =>{
    const request = new XMLHttpRequest()
    request.open('GET', '../data/converter.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () =>{
        const data = JSON.parse(request.response)
        ( usdInput.value = somInput.value / data.usd).toFixed(2)
        ( usdInput.value = eurInput.value / data.usd).toFixed(2)
        ( somInput.value = eurInput.value / data.usd).toFixed(2)
    })

    })


