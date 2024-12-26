
// const user = {
//     name: "Olimjon",
//     age: 24,
//     email: "namdujamolov@gmail.com",
//     location: "Namangan",
//     movies: [
//         {name: "Qashqilar makoni",likes: 300},
//         {name: "Osmondagi bolalar",likes: 500},
//         {name: "Tundan tongacha",likes: 300},
//         {name: "Shaxsiy raqam",likes: 1000},
//         {name: "Vatan",likes: 300},
//     ],
//     moviesWatch: function(){
//         this.movies.forEach((movie) => {
//             console.log(`siz ko'rgan kino nomi ${movie.name}🎬, U kino yiqqan layklar ${movie.likes}ta`)
//         })
//     }
// }

// const data = [
//     [1,2,3],
//     "qizil",
//     [4,5,6],
//     true,
//     false
// ]
// const newData = []

// data.forEach((item) => {
//     if(Array.isArray(item))
//         item.forEach((number) => {
//             newData.push(number)
//         })
// })

// const matn = prompt('matn kiriting').trim().split(' ')
// const newMatn =[]
// matn.forEach((text)=>{
//     let res = text.charAt().toLowerCase()+text.slice(1).toUpperCase()
//     newMatn.push(res)
// })

// console.log(newMatn.join(' '))
// let summ = 0
// const matn = prompt('sonni kiriting').trim().split('')
// matn.forEach((letter)=>{
//     if(letter.toString() == 'a') summ++;
// })

// console.log(summ)

// const array = [2,21,"Olimjon", 12.1, ["i am array"], null, true, 214]
// let newArray = []
// array.forEach((item) =>{
//   newArray.push(typeof item)  
// })

// console.log(newArray)
// const array = [1,2,3,4,5,6]
// let newArray = []
// array.forEach((item,i)=>{
//     newArray.push(item+i)
// })
// console.log(newArray)
// let newArray = []
// const n = 100

// for(let i=1;i<=n;i++)
// {   let str = ''
//     if(i%3==0) str="fizz"; else
//     if(i%5==0) str+="buzz"; 
    
// }
// function getOptionSelected (){
//     let select = document.querySelectorAll("select");
//     let nodes = select[0].childNodes
//     nodes.forEach((option)=>{
//     if(option.selected) select[1].append(option)
// })
// }
// const setStyle = () =>{
// let p = document.querySelectorAll('p')
// p.forEach((item)=>{
//     if(item.textContent.includes("success")) item.classList.add("success")
//     if(item.textContent.includes("error")) item.classList.add("error")
// })}
   function setLiClick(){
   let items = document.querySelectorAll('li')
   items.forEach((item)=>{
    item.addEventListener('click',()=>{
         if(item.style.textDecoration!='line-through'){
         item.style.textDecoration = "line-through"
         item.style.opacity = 0.8}
         else {
            item.style.textDecoration = "none"
            item.style.opacity = 1
         }
    })
   })
   }
   let btnRemove = document.querySelector('#btn-remove')
   btnRemove.onclick = () =>{
      let items = document.querySelectorAll('li')
      items.forEach((item)=>{
      if(item.style.textDecoration=="line-through") item.remove()
   })}

   let btnAdd = document.querySelector('#btn-add')
   btnAdd.onclick = () =>{
      let text = prompt("list matnini kiriting")
      if(text!="" || text.length>0){
         let newLi = document.createElement('li')
         newLi.textContent = text
         let lists = document.querySelector('ul')    
         lists.appendChild(newLi)
         setLiClick();
      }
   }

