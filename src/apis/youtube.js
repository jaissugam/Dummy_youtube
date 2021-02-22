import axios from 'axios';

const KEY='AIzaSyAkJudEq7wAjBhTB1MUOR7bXVcOx3Ya25A';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})