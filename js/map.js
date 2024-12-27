const numbers = [1,2,3,4,5,6]
let mapArray = numbers.map(num=>num*num)

const movies2 = [
    {name: "Avatar", year: 2008, rating:9},
    {name: "Titanic 4d", year: 1997, rating:7},
    {name: "Forsaj 9 4d", year: 2020, rating:4},
    {name: "Avengers", year: 2012, rating:12},
]

// let rating = movies2.map(movie=>{
//     return {name:movie.name,year:movie.year,raiting:movie.rating+1}})
// console.log(rating)
// const ism = ['olimjon', 'ahror','bobur','kamron','nozim']
// const sortIsm = ism.sort()
// console.log(sortIsm)

// const son = [12,2,123,11,223,2321,12,5]
// const sorSon = son.sort((a,b)=>a-b)
// console.log(sorSon)

const sortMovie = movies2.sort((a,b)=>a.rating-b.rating)
console.log(sortMovie)