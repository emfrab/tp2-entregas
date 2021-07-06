import crearDaoPrestador from '../src/daoPrestador.js'
import AltaPrestador from '../src/AltaPrestador.js'
import uploader from '../src/testMulter.js'
import { build } from '../src/app.js'


const dao = new crearDaoPrestador()
await build({ port: 3000 })
const ruta = "G:/Users/Ema/Documentos/CV -Emanuel Abitante.pdf"
const uplder = new uploader(ruta)
const CU = new AltaPrestador(dao, uplder)
const datos = { cuil: '20-42884455-0', nombre: 'Emanuel', mail: 'ema@gmail.com', rubro: 1 }

await CU.registrar(datos)

