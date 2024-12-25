
const user = {
    name: "Olimjon",
    age: 24,
    email: "namdujamolov@gmail.com",
    location: "Namangan",
    movies: [
        {name: "Qashqilar makoni",likes: 300},
        {name: "Osmondagi bolalar",likes: 500},
        {name: "Tundan tongacha",likes: 300},
        {name: "Shaxsiy raqam",likes: 1000},
        {name: "Vatan",likes: 300},
    ],
    moviesWatch: function(){
        this.movies.forEach((movie) => {
            console.log(`siz ko'rgan kino nomi ${movie.name}🎬, U kino yiqqan layklar ${movie.likes}ta`)
        })
    }
}

const data = [
    [1,2,3],
    "qizil",
    [4,5,6],
    true,
    false
]
const newData = []

data.forEach((item) => {
    if(Array.isArray(item))
        item.forEach((number) => {
            newData.push(number)
        })
})

// const matn = prompt('matn kiriting').trim().split(' ');
// const newMatn =[]
// matn.forEach((text)=>{
//     let res = text.charAt().toLowerCase()+text.slice(1).toUpperCase()
//     newMatn.push(res)
// })

// console.log(newMatn.join(' '))
let summ = 0
const matn = prompt('sonni kiriting').trim().split('')
matn.forEach((letter)=>{
    if(letter.toString() == 'a') summ++;
})

console.log(summ)