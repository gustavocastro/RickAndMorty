import axios from 'axios'

/**
 * The API is blocking axios requests at localhost:3000
 * Using a proxy URL helps making sure we pass through CORS blocks
 */
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const URL = 'https://rickandmortyapi.com/api/'

const instance = axios.create({
    baseURL: PROXY_URL + URL
})

export default instance