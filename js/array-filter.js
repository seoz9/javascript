const movies = [
    {name: "Avatar", year: 2008, rating:9},
    {name: "Titanic 4d", year: 1997, rating:7},
    {name: "Forsaj 9 4d", year: 2020, rating:4},
    {name: "Avengers", year: 2012, rating:12},
]

let newArray = movies.filter(e=> e.year > 2010)


console.log(newArray)