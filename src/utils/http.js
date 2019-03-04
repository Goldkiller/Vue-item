import axios from 'axios'

export default ({ method, url, params }) => {
    return axios({
            method,
            url,
            params
        }).then(res => res.data)
        .catch(err => err)
}