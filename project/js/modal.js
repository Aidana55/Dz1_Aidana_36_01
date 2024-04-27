const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = ()=>{
    modal.style.display = 'block'
    document.body.overflow = 'hidden'
}

const closeModal = () =>{
    modal.style.display = 'none'
    document.body.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal){
        closeModal()
    }
}
const theEnd = () => {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight
}
const modalScroll = () => {
    if (theEnd()){
        openModal()
        window.removeEventListener('scroll',modalScroll)
    }
}
window.addEventListener('scroll', modalScroll)
 setTimeout(openModal,10000)


const form = document.querySelector('form')


const TOKEN = '6905655593:AAE8ge0RKg49qjnL6MKze0PAAy0j8tdeTLQ'
const CHAT_ID ='@aidana_project'
const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

form.onsubmit = async (event) => {
    event.preventDefault()
    const result = event.target
    const {name, phone} = Object.fromEntries(new FormData(result).entries())
    const text = `ОТ: ${name}\n Номер: ${phone}`

        await fetch(API_URL, {
            method: 'POST',
            headers: {'Content-type': 'application/json'},

            body:JSON.stringify({
                chat_id: CHAT_ID,
                text
            })
        })



}

