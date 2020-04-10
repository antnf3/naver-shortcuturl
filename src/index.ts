import axios from "axios";
import "dotenv/config";

function getShutCutUrl(beforeUrl: string) {
    return new Promise((resolve) => {
        const URL = 'https://openapi.naver.com/v1/util/shorturl.json';
        const headers = {
            "X-Naver-Client-Id": process.env.CLIENT_ID,
            "X-Naver-Client-Secret": process.env.CLIENT_SECRET
        };
        const params = {
            url: beforeUrl
        }
        
        axios.get(URL, {params, headers })
        .then(res=> {
            const {data: {
                result:{url,hash,orgUrl},message,code
            }} = res;
            return resolve({url,hash,orgUrl,message,code});
        })
        .catch(error => {
            const {data: {errorCode , errorMessage}} = error.response;
            return resolve({
                code: errorCode,
                errorMessage
            })
        });
    });
}
(async function() {
    const url = "https://github.com/antnf3/getshutcuturl-naverapi";
    const test = await getShutCutUrl(url);
    console.log(test);
})();

