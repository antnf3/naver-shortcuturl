import axios from "axios";
import "dotenv/config";

function getShutCutUrl() {
    return new Promise((resolve, reject) => {
        const URL = 'https://openapi.naver.com/v1/util/shorturl.json';
        const headers = {
            "X-Naver-Client-Id": process.env.CLIENT_ID,
            "X-Naver-Client-Secret": process.env.CLIENT_SECRET
        };
        const params = {
            url: "https://github.com/axios/axios/issues/1744"
        }
        
        axios.get(URL, {params, headers })
        .then(res=> {
            const {data: {
                result:{url,hash,orgUrl},message,code
            }} = res;
            return resolve({url,hash,orgUrl,message,code});
        })
        .catch(error => {
            console.log(error.data);
            const {data: {errorCode , errorMessage}} = error.response;
            return reject({
                code: errorCode,
                errorMessage
            })
        });
    });
}
(async function() {
    const test = await getShutCutUrl();
    console.log(test);
})();

