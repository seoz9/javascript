const score = document.querySelector("#score")
const gameCount = document.querySelector("#gameCount")
const playe1 = document.querySelector("#playe1")
const playe2 = document.querySelector("#playe2")
const reset = document.querySelector("#reset")
let p1,p2,endGame=2
setNewGame = ()=>{
    p1=0
    p2=0
    setScore()
}

setScore = ()=>{
    score.innerHTML=`${p1} to ${p2}`
}

setNewGame()


gameCount.addEventListener('change',(e)=>{
    endGame = e.target.value
})

playe1.addEventListener('click', ()=>{
    if(p1<endGame) ++p1
    setScore()
})
playe2.addEventListener('click', ()=>{
    if(p2<endGame) ++p2
    setScore()
})

reset.addEventListener('click',()=>{
    setNewGame()
})
