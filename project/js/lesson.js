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
const convert = (element, target, target2, current) =>{
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
                    target2.value= (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    target.value= (element.value * data.usd).toFixed(2)
                    target2.value= (element.value * data.usd / data.usd).toFixed(2)
                    break
                default:
                    break
                case'eur':
                    target2.value= (element.value * data.usd).toFixed(2)
                    target.value= (element.value * data.usd) / data/usd.toFixed(2)

            }
            element.value === '' && (target.value = '')
        }

    }


}
convert(somInput,usdInput, eurInput,'som')
convert(usdInput, somInput, eurInput ,'usd')
convert(eurInput, somInput, usdInput,'usd')

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
// card SWITCHER

const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let count  = 1


const prev = (num) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then (response => response.json())
        .then (data =>{
            card.innerHTML =   `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
`
        })

}

prev(count)

btnPrev.onclick = () => {0
    count--
    if (count<1){
        count=200
    }
    prev(count)
}
btnNext.onclick = () =>{
    count++
    if (count>200){
        count = 1
    }
    prev(count)
}

const asyncData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const responseData = await response.json()
        console.log(responseData)
    }catch (error){
        console.error(error)
    }
}
asyncData()

//weather
const searchInput = document.querySelector(".cityName")
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")


const apiKey = 'e417df62e04d3b1b111abeab19cea714'
const URL = 'http://api.openweathermap.org/data/2.5/weather'
const citySearch = () => {
    searchInput.oninput = async (event) => {
        try {
            const response = await fetch(`${URL}?q=${event.target.value}&appid=${apiKey}`)
            const  data = await response.json()
            city.innerHTML = data.name ? data.name: 'Not found &iquest;'
            temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '...'


        }catch (error){
            console.log('error')
        }

    }
}

citySearch()

//optional chaining -.?

// const address = {
//     street: {
//         home_number:103,
//         street_name:'ibraimova'
//     }
// }
// console.log(address.street?.street_name)


