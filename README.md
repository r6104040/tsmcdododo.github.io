# slider

## Build Setup

```bash
以GOOGLE雲端硬碟為例：
使用axios抓取HTML資料，cheerio篩選欲抓取目標
因網站為靜態式，且使用GitHub.io架設，無後端伺服器，欲跨網欲抓取，會出現CORS問題
憤而使用cors-anywhere組件，與申請heroku代理跨域問題。

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
