const socket = io()
const display = document.getElementById('data')

var alertDanger = `<div class="alert alert-danger">
<strong>Apagado</strong>
</div>`
var alertSuccess = `<div class="alert alert-success">
<strong>Encendido</strong>
</div>`

var state = 1
function changeState() {
  if(state) {
    display.innerHTML = alertDanger
  } else {
    display.innerHTML = alertSuccess
  }
}

socket.on('hi', data => {
  console.log(data)
  if (data == 0) {
    changeState()
  }
})

