import Prestador from './Prestador.js'

class AltaPrestador {
    constructor(dao, uploader) {
        this.dao = dao
        this.uploader = uploader
    }

    async subirCertificado() {
        await this.uploader.subir()
        var cert = await this.uploader.getArchivo()
        return cert
    }

    async registrar(datos) {
        // crear prestador
        const prestador = new Prestador(datos)
        //crear archivo
        const certificado = await this.subirCertificado()
        // persistir prestador
        await this.dao.guardar(prestador, certificado)
    }
}

export default AltaPrestador