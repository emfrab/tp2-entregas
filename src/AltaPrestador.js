import Prestador from './Prestador.js'

class AltaPrestador {
    constructor(dao) {
        this.dao = dao
    }

    async registrar(datos, certificado) {
        // crear prestador
        const prestador = new Prestador(datos)
        // persistir prestador
        await this.dao.guardar(prestador, certificado)
    }
}

export default AltaPrestador