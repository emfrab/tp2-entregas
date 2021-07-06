import AltaPrestador from './AltaPrestador.js'
import daoPrestador from './daoPrestador.js'
import createUploader from './testMulter.js'


const dao = new daoPrestador()
const ruta = "G:/Users/Ema/Documentos/CV -Emanuel Abitante.pdf"
const uploader = new createUploader(ruta)


function crearCU_AltaPrestador() {
    const CU_Alta = new AltaPrestador(
        dao,
        uploader
    )
    return CU_Alta
}

export {
    crearCU_AltaPrestador
}