import axios from 'axios'
import { build } from './app.js';
import fs from 'fs'
import FormData from 'form-data'


async function main() {
    let sv = build({port: 3000})
    const formData = new FormData();

    formData.append("archivo", fs.createReadStream("G:\\Users\\Ema\\Imagenes\\timon.jpg"));

    const res = await axios.get('http://localhost:3000/download'
            ).then(response => {
                  if (response.status === 200) {
                      console.log("Success")
                  } else {
                      console.log("Error occurred")
                  }
              })
          .catch(e => {
              console.log(e)
          })

    const res2 = await axios.post('http://localhost:3000/upload', formData, {
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
    // console.log(res2.data);
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
