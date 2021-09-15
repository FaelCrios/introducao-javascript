var pacientes = document.querySelectorAll('.paciente')

var tabela = document.querySelector('table')

pacientes.forEach(function (paciente) {
  paciente.addEventListener('dblclick', function () {
    console.log('fui clicado dblclick')
    this.remove()
  })
})
