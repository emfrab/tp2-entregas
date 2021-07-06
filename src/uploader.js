import multer from 'multer';
import util from 'util';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './files')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({
    storage: storage  
}).single('archivo')

let uploader = util.promisify(upload)

export default uploader;