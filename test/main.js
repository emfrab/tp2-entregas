import crearDaoPrestador from '../src/daoPrestador.js'
import AltaPrestador from '../src/AltaPrestador.js'


const dao = new crearDaoPrestador()
const CU = new AltaPrestador(dao)
const datos = { cuil: '20-42884455-0', nombre: 'Emanuel', mail: 'ema@gmail.com', rubro: 1 }
const archivo = 'ejemplo'

await CU.registrar(datos, archivo)
console.log(dao.prestadores)
console.log(dao.archivos)

const datos2 = { cuil: '20-42884455-0', nombre: 'Pepe', mail: 'pepe@gmail.com', rubro: 1 }
await CU.registrar(datos, archivo)
