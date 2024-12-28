const score = document.querySelector("#score")
const gameCount = document.querySelector("#gameCount")
const playe1 = document.querySelector("#playe1")
const playe2 = document.querySelector("#playe2")
const reset = document.querySelector("#playe2")
let p1,p2
setNewGame = ()=>{
    p1=0
    p2=0
    score.innerHTML=`${p1} to ${p2}`
}

setNewGame()

gameCount.addEventListener('change',(e)=>{
    console.log( e.target.value); // Tanlangan qiymatni olish
})
