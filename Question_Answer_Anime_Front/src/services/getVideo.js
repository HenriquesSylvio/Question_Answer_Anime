import axios from 'axios';

export async function getVideo(urlImage) {
    const url = "https://api.trace.moe/search?url=" + urlImage
        await axios.get(url)
            .then(response => {
                console.log(response.data['result'][0]['video'])
                return response.data['result'][0]['video']
            })
            .catch(error => {
                console.log(error)
            })
}