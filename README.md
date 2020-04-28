# 네이버 단축URL open api

```javascript
const naverapi = require("@antnf3/shurtcuturl");

async function get() {
  const result = await naverapi.getShutCutUrl(
    "https://github.com/antnf3/getshutcuturl-naverapi",
    "rg4tffretertreter", // 네이버 CLIENT_ID
    "cvbsghdgdg" // 네이버 CLIENT_SECRET
  );
  console.log(result);
}
```

```typescript
import { getShutCutUrl } from "@antnf3/shurtcuturl";

async function get() {
  const result = await getShutCutUrl(
    "https://github.com/antnf3/getshutcuturl-naverapi",
    "rg4tffretertreter", // 네이버 CLIENT_ID
    "cvbsghdgdg" // 네이버 CLIENT_SECRET
  );
  console.log(result);
}
```
