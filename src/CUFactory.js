import AltaPrestador from './AltaPrestador.js'
import daoPrestador from './daoPrestador.js'


const dao = new daoPrestador()
const ruta = "G:/Users/Ema/Documentos/CV -Emanuel Abitante.pdf"
const uplder = new uploader(ruta)


function crearCU_AltaPrestador() {
    const CU_Alta = new AltaPrestador(
        dao,
        uplder
    )
    return CU_Alta
}

export default {
    crearCU_AltaPrestador
}