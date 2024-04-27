const cardNew = document.querySelector('.card')
const card = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        console.log(data)
        data.forEach(user => {
            const men = document.createElement('div')

            men.innerHTML = `
            <img src ='https://picsum.photos/200/300' alt="img">
            <p>${user.title}</p>
            <span>${user.body}</span>
    `
            cardNew.append(men)
        })

    }catch (e) {
        console.error(e)
    }

}
card()