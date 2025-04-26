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

// function toggleDarkMode() {
//     document.querySelector('body').classList.toggle("dark-theme")
// }

//** 2nd Set Of Notes */


// //First way of accessing an element
// console.log(document.querySelector('.title'));

// //Second way of accessing an element 
// //which only works for an Id
// console.log(document.getElementById('title'));

// //Change HTML
// document.querySelector('.title').innerHTML += ' Frontend Simplified'

// // Change CSS
// document.querySelector('.title').style.fontSize = "16px"

// function chickenStrap() {
//     document.querySelector('.title').style.color = 'red'
// }

function toggleDarkMode() {
    document.querySelector('body').classList.toggle("dark-theme")
}
