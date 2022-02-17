import axios from 'axios';

export async function getVideo(urlImage) {
    let urlVideo = ""
    const url = "https://api.trace.moe/search?url=" + urlImage
    await axios.get(url)
            .then(response => {

                // console.log(response.data['result'][0]['video'])
                // this.setState({urlVideo: response.data['result'][0]['video']})
                urlVideo = response.data['result'][0]['video']
                // // console.log(urlVideo)
                // return urlVideo
            })
            .catch(error => {
                console.log(error)
            })
    // console.log(urlVideo)
    return urlVideo
}