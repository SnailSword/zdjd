
# 尊嘟假嘟（zdjd）

人类语言与尊嘟语的转换器。~~可以用来直播彩虹六号。~~

在线演示：[https://zdjd.vercel.app/](https://zdjd.vercel.app/)

## 安装

```bash
npm install zdjd
```

## 使用方法

```ts
import Zdjd from 'zdjd'

let human_msg = '尊嘟假嘟'
let zdjd_msg = Zdjd.encode(human_msg)

console.log(zdjd_msg) // ov0 o.Ö OvO O_O ov0 Ö_0 0wO o_Ö ov0 Ö_o O.O O.Ö ov0 Ö_0 0wO o_Ö

let msg2 = Zdjd.decode(zdjd_msg)

console.log(msg2) // 尊嘟假嘟
console.log(msg2 === human_msg) // true
```

## API

 - `Zdjd.encode(t: string, options?: Human2zdjdOptions): string` 将人话转为尊嘟语
 - `Zdjd.decode(t: string): string` 将尊嘟语转为人语
 - `Zdjd.isZdjd(t: string): string` 判断是尊嘟语还是假嘟语

## Thanks

- [js-base64](https://github.com/dankogai/js-base64)
- [miao-lang](https://github.com/miao-lang/miao-lang)

## Others
[ov0 o.Ö OvO O_O ov0 Ö_0 0wO o_Ö ov0 Ö_o O.O O.Ö ov0 Ö_0 0wO o_Ö](./README-zdjd.md)