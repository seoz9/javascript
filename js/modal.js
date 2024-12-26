const showBtn = document.querySelector('#show-btn')
const modal = document.querySelector('#modal')
const closeBtn = document.querySelector('#close-btn')
const overlay = document.querySelector('#overlay')

showBtn.addEventListener('click',()=>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

const addHidden = ()=>{
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

closeBtn.addEventListener('click',()=>{
    addHidden();
})
overlay.addEventListener('click',()=>{
    addHidden();
})
document.addEventListener('keydown', (e)=>{
    if(e.key=="Escape") addHidden();
})

