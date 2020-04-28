import axios from "axios";

interface ShutcutUrlProps {
  url?: string;
  hash?: string;
  orgUrl?: string;
  message?: string;
  code: string;
  errorMessage?: string;
}
function getShutCutUrl(
  beforeUrl: string,
  clientId: string,
  clientSecret: string
): Promise<ShutcutUrlProps> {
  return new Promise((resolve) => {
    const URL = "https://openapi.naver.com/v1/util/shorturl.json";
    const headers = {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    };
    const params = {
      url: beforeUrl,
    };

    axios
      .get(URL, { params, headers })
      .then((res) => {
        const {
          data: {
            result: { url, hash, orgUrl },
            message,
            code,
          },
        } = res;
        return resolve({ url, hash, orgUrl, message, code });
      })
      .catch((error) => {
        const {
          data: { errorCode, errorMessage },
        } = error.response;
        return resolve({
          code: errorCode,
          errorMessage,
        });
      });
  });
}
// (async function () {
//   const url = "https://github.com/antnf3/getshutcuturl-naverapi";
//   const test = await getShutCutUrl(url);
//   console.log(test.code);
// })();

export { getShutCutUrl };
