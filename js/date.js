const date = document.querySelector('#date')
let clock = document.querySelector('#clock')

getDate = ()=>{
    let now = new Date()
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let sek = now.getSeconds()<10 ? "0"+now.getSeconds():now.getSeconds()
    let min = now.getMinutes()<10 ? "0"+now.getMinutes():now.getMinutes()
    let soat = now.getHours()<10 ? "0"+now.getHours():now.getHours()
    clock.innerHTML = `${soat}:${min}:${sek}`
    date.innerHTML = `${now.getDay()} ${months[now.getMonth()]}, ${now.getFullYear()}`
}

setInterval(getDate,1000)