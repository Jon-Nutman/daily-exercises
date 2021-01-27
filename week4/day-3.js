// Q1:
// prevent myForm from refreshing the page on submit
// if the value of the input is "multiply"
// grab the value of #num1 and #num2
// and show the answer in the alert

const form = document.querySelector('#myForm')
const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const input = document.querySelector('#answer')

form.addEventListener("submit",function(e){
    e.preventDefault()
    if ( input.value == 'multiply' ){
        return alert((num1.innerHTML)*(num2.innerHTML))
    }

})

// Q2:
// update #box to the background color green when
//myBtn is clicked


const box = document.querySelector('#box')

const btn = document.querySelector('#myBtn')

box.addEventListener('click', function(e){
    e.preventDefault()
  return (box.style.backgroundColor = 'green')
})