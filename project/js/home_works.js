const input = document.querySelector('#gmail_input')
const button = document.querySelector('#gmail_button')
const result = document.querySelector('#gmail_result')

const regExp =/^\w[a-z][a-zA-Z0-9._]+@gmail.com$/i
button.onclick = () => {
  if (regExp.test(input.value)) {
      result.innerHTML = 'ok'
      result.style.color ='yellow'

  }
  else {
      result.innerHTML = 'not ok'
      result.style.color = 'red'
  }
}



const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
let positionX = 0
let positionY = 0
// const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
// const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight
const maxParentWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxParentHeight = parentBlock.offsetHeight - childBlock.offsetHeight

const animate = function (){
    if (positionX < maxParentWidth &&positionY === 0 ){
        positionX += 2
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(animate)
    }else if (positionX === maxParentWidth && positionY < maxParentHeight ){
        positionY += 2
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(animate)
    }else if (positionY === maxParentHeight && positionX > 0){
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(animate)

    }else if (positionX === 0 && positionY > 0 ){
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(animate)

    }


}
animate()
//
let interval ;
const number = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')
let counter = 0
let flag = false

const time = () => {
    counter++
    number.textContent = counter
}
const buttonStart = () => {
    if (flag !== true){
        interval = setInterval(time, 1000)
        flag = true
    }
}
start.addEventListener('click', buttonStart)
const buttonStop = () => {
    clearInterval(interval)
    flag = false


}
stop.addEventListener('click', buttonStop)

 const buttonReset = () => {
    clearInterval(interval)
     counter = 0
     number.textContent = counter
     flag = false
 }
reset.addEventListener('click', buttonReset)

