# 네이버 단축URL open api

```javascript
const naverapi = require("@antnf3/shurtcuturl");

async function get() {
  const result = await naverapi.getShutCutUrl(
    "https://github.com/antnf3/getshutcuturl-naverapi",
    "Dq_Sb85IEJay_eXkcEZO",
    "LKfq3PsQHG"
  );
  console.log(result);
}
```

```typescript
import { getShutCutUrl } from "@antnf3/shurtcuturl";

async function get() {
  const result = await getShutCutUrl(
    "https://github.com/antnf3/getshutcuturl-naverapi",
    "Dq_Sb85IEJay_eXkcEZO",
    "LKfq3PsQHG"
  );
  console.log(result);
}
```
