//Ассинхронный код
setTimeout(() =>{
    console.log(1)
},2000)


console.log(2)
let seconds = 1
setInterval(() => {
    document.write(seconds++)
    console.log('hello')
}, 1000)

const interval = setInterval(() =>{
    console.log('hello')

}, 1000)

setTimeout(() =>{
    clearInterval(interval)
}, 5000)

//EVENT LOOP-цикл событий
console.log(1)

const persons = [
    {
        name: 'tangle',
        age:'14',

    }
]
const wrapper = document.querySelector('.wrapper')



//JSON- java script object notation


