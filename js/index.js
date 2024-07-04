document.addEventListener("DOMContentLoaded",()=>{
    const button = document.querySelector("#acesso1")
    const btn = document.querySelector("#acesso2")
    const svg = document.querySelector("svg")
    button.addEventListener("click",()=>{
        const sobre = document.querySelector("#juliaBayer")
        sobre.scrollIntoView({
            behavior:"smooth",
            block:"start"

        })
    })
    btn.addEventListener("click",()=>{
        const contato = document.querySelector("#contato")
        contato.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
    svg.addEventListener("click",()=>{
        const topo = document.querySelector("#acesso1")
        topo.scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
})