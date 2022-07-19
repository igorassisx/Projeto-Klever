const tokenform = document.getElementById('token-form')
const removebtn = document.querySelector('#remove')


tokenform.addEventListener('submit', (e) => {
    e.preventDefault()

    const tokeninput = document.querySelector('#token')
    localStorage.setItem('token', tokeninput.value)

    const balanceinput = document.querySelector('#balance1')
    localStorage.setItem('balance', balanceinput.value)

    tokeninput.value = ''
    balanceinput.value = ''
})

removebtn.addEventListener('click', () => {
   var x;
   var r = confirm('Desaja remover o dado?')
   if(r == true) {
    localStorage.removeItem('token')
    localStorage.removeItem('balance')
    
   } else {
    x = 'Você cancelou'
   }
    
})


