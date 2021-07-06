import Prestador from './Prestador.js'

class AltaPrestador {
    constructor(dao, uploader) {
        this.dao = dao
        this.uploader = uploader
    }

    async subirCertificado(rutaArchivo) {
        await this.uploader.subir(rutaArchivo)
        var cert = await this.uploader.getArchivo()
        return cert
    }

    async registrar(datos, rutaArchivo) {
        // crear prestador
        const prestador = new Prestador(datos)
        //crear archivo
        const certificado = await this.subirCertificado(rutaArchivo)
        // persistir prestador
        await this.dao.guardar(prestador, certificado)
        console.log('Trabajador agregado')
    }
}

export default AltaPrestador