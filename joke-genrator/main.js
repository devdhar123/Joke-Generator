// https://v2.jokeapi.dev/joke/Any?safe-mode

let btn = document.querySelector(".btn")
let h1 =document.querySelector("h1")
let h2 =document.querySelector("h2")

btn.addEventListener("click",joke)

async function joke() {
    const res = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    const data =  await res.json()

    const {setup, delivery}=data    
    h1.innerText=setup
    h2.innerText=delivery
    console.log(data)

}
joke()