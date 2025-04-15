// //FIrst way of accessing an element 🌟
// console.log(document.querySelector('.title'))

// //Second way of accessing an element 

// console.log(document.getElementBy('title'))

// // Change HTML
// document.querySelector('.title').innerHTML += 'Frontend Simplified'

// // Change CSS
// document.querySelector('.title').style.fontSize = '10px'

// function changeTitleToRed() {
//     document.querySelector('.title').style.color = 'red'
// }

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}

