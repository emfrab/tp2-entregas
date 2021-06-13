import upload from './uploader.js'
import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();


const uploader = async (req, res) => {
    try {
        await upload(req, res)

        if (req.fil == undefined) {
            return res.status(400).send({message: 'Por favor elija un archivo'})
        }

        res.status(200).send({message: `Archivo subido: ${req.file.originalname}`})
    }catch(err) {
        console.log(err)
    }
}; 

app.listen(3000, () => {
    console.log("Running");
});

app.get("/", (req, res) => {
    res.json("Running");
});

app.get("/download", (req, res) => {
    res.sendFile(__dirname + "/files/cat.gif")
})