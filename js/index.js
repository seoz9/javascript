
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

console.log(user.moviesWatch())