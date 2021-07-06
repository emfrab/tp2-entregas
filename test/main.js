import crearDaoPrestador from '../src/daoPrestador.js'
import AltaPrestador from '../src/AltaPrestador.js'
import createUploader from '../src/testMulter.js'
import { build } from '../src/app.js'
import { crearCU_AltaPrestador } from '../src/CUFactory.js'

////////////////////////// test CU
await build({ port: 3000 })

const dao = new crearDaoPrestador()
const uploader = new createUploader()
const CU = new AltaPrestador(dao, uploader)

const datos = { cuil: '20-42884455-0', nombre: 'Emanuel', mail: 'ema@gmail.com', rubro: 1 }
const ruta = "G:/Users/Ema/Documentos/CV -Emanuel Abitante.pdf"

await CU.registrar(datos, ruta)

// const datos2 = { cuil: '20-42884455-0', nombre: 'Pepe', mail: 'pepe@gmail.com', rubro: 2 }
// const ruta2 = "G:/Users/Ema/Documentos/CV - Emanuel Abitante.pdf"

// await CU.registrar(datos2, ruta2)


/////////////////////// test factory

// const CU2 = crearCU_AltaPrestador()
// CU2.registrar(datos, ruta)

