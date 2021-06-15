import axios from 'axios'
import { build } from './app.js';
import fs from 'fs'
import FormData from 'form-data'


async function main() {
    let sv = build({port: 3000})
    const formData = new FormData();

    formData.append("archivo", fs.createReadStream("G:\\Users\\Ema\\Documentos\\repos\\tp2-entregas\\uploads\\cat.gif"));

    const res = await axios.post('http://localhost:3000/upload', formData, {
  // You need to use `getHeaders()` in Node.js because Axios doesn't
  // automatically set the multipart form boundary in Node.
        headers: formData.getHeaders()
    }).then(response => {
            if (response.status === 200) {
                console.log("Success")
            } else {
                console.log("Error occurred")
            }
        })
    .catch(e => {
        console.log(e)
    })
    // console.log(res.data);
}

    // await axios({
    //     method: "POST",
    //     url: url + ruta,
    //     data: formData,
    //     headers: {
    //     }
    // })
    //     .then(response => {
    //         if (response.status === 200) {
    //             console.log("Success")
    //         } else {
    //             console.log("Error occurred")
    //         }
    //     }
    //     ).catch(e => {
    //         console.log(e)
    //     })


main()
