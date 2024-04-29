// // PHONE BLOCK
const  phoneInput = document.querySelector('#phone_input')
const  phoneButton = document.querySelector('#phone_button')
const  phoneSpan = document.querySelector('#phone_result')


const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/
phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)){
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'yellow'
    }else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
}

//recursion - рекурсия
// let count = 0
// const increment = () => {
//     count++
//     console.log(count)
//     increment()
// }
// increment(count)
// requestAnimationFrame()

// tab
// TAB SLIDER

const tabContentItems = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabContentParents = document.querySelector('.tab_content_items')

let currentTab = 0
// const
const hideTabContent = () => {
    tabContentItems.forEach((item) => {
        item.style.display = 'none'
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentItems[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab + 1) % tabItems.length
    showTabContent(currentTab)
}

hideTabContent()
showTabContent()
setInterval(switchTab, 3000)

tabContentParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabItems.forEach((tabItems, tabindex) => {
            if (event.target === tabItems) {
                hideTabContent()
                currentTab = tabindex
                showTabContent(currentTab)
            }
        })
    }
}
//current

const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const eurInput = document.querySelector('#eur');

const converter = (element, target1, target2, current) => {
    element.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json');
            const data = await response.json();
            switch (current) {
                case 'som':
                    target1.value = (element.value / data.usd).toFixed(2);
                    target2.value = (element.value / data.eur).toFixed(2);
                    break;
                case 'usd':
                    target1.value = (element.value * data.usd).toFixed(2);
                    target2.value = (element.value * data.usd / data.eur).toFixed(2);
                    break;
                case 'eur':
                    target1.value = (element.value * data.eur).toFixed(2);
                    target2.value = (element.value * data.eur / data.usd).toFixed(2);
                    break;
                default:
                    break;
            }
            element.value === '' && (target1.value = '');
        } catch (error) {
            console.error('Error fetching conversion data:', error);
        }
    };
};

converter(somInput, usdInput, eurInput, 'som');
converter(usdInput, somInput, eurInput, 'usd');
converter(eurInput, somInput, usdInput, 'eur');


// eurInput. addEventListener('input',() =>{
//     const request = new XMLHttpRequest()
//     request.open('GET', '../data/converter.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', () =>{
//         const data = JSON.parse(request.response)
//         ( usdInput.value = somInput.value / data.usd).toFixed(2)
//         ( usdInput.value = eurInput.value / data.usd).toFixed(2)
//         ( somInput.value = eurInput.value / data.usd).toFixed(2)
//     })
//
//     })
// card SWITCHER
const card = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');
let count = 1;


const prev = async (num) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count}`);
        const data = await response.json();

        card.innerHTML =   `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
            <span>${data.id}</span>
        `;
    } catch (error) {
        console.error('Error fetching todo:', error);
    }
};

prev(count);

btnPrev.onclick = () => {
    count--;
    if (count < 1) {
        count = 200;
    }
    prev(count);
};

btnNext.onclick = () => {
    count++;
    if (count > 200) {
        count = 1;
    }
    prev(count);
};


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


