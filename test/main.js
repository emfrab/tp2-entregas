import crearDaoPrestador from '../src/daoPrestador.js'
import AltaPrestador from '../src/AltaPrestador.js'


const dao = new crearDaoPrestador()
const CU = new AltaPrestador(dao)
const datos = { cuil: '20-42884455-0', nombre: 'Emanuel', mail: 'ema@gmail.com', rubro: 1 }
const archivo = 'ejemplo'

await CU.registrar(datos, archivo)
