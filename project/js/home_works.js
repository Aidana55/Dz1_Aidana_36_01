const input = document.querySelector('#gmail_input')
const button = document.querySelector('#gmail_button')
const result = document.querySelector('#gmail_result')

const regExp =/^\w[a-z][a-zA-Z0-9._]+@gmail.com$/i
button.onclick = () => {
  if (regExp.test(input.value)) {
      result.innerHTML = 'ok'
      result.style.color ='green'

  }
  else {
      result.innerHTML = 'not ok'
      result.style.color = 'red'
  }
}


//
// function animate (childBlock, parentBlock, position){
//     position++
//     childBlock.style.left = position +'px'
//     if (position < parentBlock){
//         requestAnimationFrame(function (){
//             moveRight
//         })
//     }
// }
const parentBlock = document.querySelector('#parent_block')
const childBlock = document.querySelector('.child_block')
let position = 0

const width = 448
const animate = function (){
    if (position !== width){
        position++
        childBlock.style.left = `${position}px`
        requestAnimationFrame(animate)

    }

}
animate()