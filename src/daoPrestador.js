

class crearDaoPrestador {
    constructor() {
        this.prestadores = []
        this.archivos = []
    }

    async guardar(prestador, archivo) {
        if (this.exists(prestador)) {
            throw new Error('Ya existe trabajador registrado con ese CUIL')
        }
        this.prestadores.push(prestador)
        this.archivos.push(this.crearArchivo(archivo, prestador))        
    }
    exists(prestador) {
        let i;
        for (i = 0; i < this.prestadores.length; i++) {
            if (prestador.cuil == this.prestadores[i].cuil) {
                return true
            }
        }
        return false
    }

    crearArchivo(archivo, prestador) {
        return {
            id: prestador.cuil,
            content: archivo
        }
    }
}


export default crearDaoPrestador