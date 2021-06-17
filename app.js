import upload from './uploader.js'
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const uploader = async (req, res) => {
    try {
        await upload(req, res)

        if (req.file == undefined) {
            return res.status(400).send({message: 'Por favor elija un archivo'})
        }

        res.status(200).send({message: `Archivo subido: ${req.file.originalname}`})
        console.log('Archivo subido')
    }catch(err) {
        console.log(err)
    }
};

function build({port}) {
    console.log('Creating server')
    const app = express();
    
    app.post('/upload', uploader)
    app.get("/download", (req, res) => {
        res.sendFile(__dirname + "/files/cat.gif")
    })

    return new Promise((resolve, reject) => {
        const server = app
        .listen(port)
        .once('error', () => {
            reject(new Error('Error al conectarse'))
        })
        .once('listening', () => {
            console.log('Running...')
            server.port = server.address().port
            resolve(server)
        });
    });
};

export {build}