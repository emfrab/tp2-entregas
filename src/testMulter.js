import axios from 'axios'
import fs from 'fs'
import FormData from 'form-data'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


class createUploader {

    async subir(rutaArchivo) {
    
        const formData = new FormData();
        formData.append("archivo", fs.createReadStream(rutaArchivo));

        await axios.post('http://localhost:3000/upload', formData, {
            headers: formData.getHeaders()
        }).then(response => {
            if (response.status === 200) {
                console.log("Archivo subido")
                this.nombreArchivo = response.data.filename
            } else {
                console.log("Error occurred")
            }
        })
        .catch(e => {
                console.log(e)
        })
    }

    async getArchivo() {
        var content = fs.readFileSync(`${__dirname}/../files/${this.nombreArchivo}`, 'utf8')
        return content
    }

}

export default createUploader