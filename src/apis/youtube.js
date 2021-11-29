import axios from 'axios';

const KEY='{Youtube API Identification token}';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})
