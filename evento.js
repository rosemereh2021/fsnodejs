const EventEmitter = require('events')

class Evento extends EventEmitter {}
const meuEvento = new Evento()

meuEvento.on('seguranca',(x,y)=>{
    console.log(` Executando o evento 'securanca': ${x} ${y} `)
})
meuEvento.emit('seguranca', 'userAdimn', 'Alterou  Salário')
