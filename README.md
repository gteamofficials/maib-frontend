This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Penjelasan Struktur Folder

### Komponen

- Setiap komponen baru, buat folder dengan nama komponen yang diinginkan
- Buat file bernama index.tsx didalam folder komponen tersebut
- Untuk styling tiap komponen, buat file (nama_komponen).module.scss

### Page

- Setiap halaman baru, buat folder dengan nama halaman(url) yang diinginkan
- Buat file bernama index.tsx didalam folder pages tersebut untuk halaman utama
- Jika halaman baru memiliki prefix url yang sama, buat file pada folder yang sama dengan nama file yang diinginkan
- Untuk styling belum

## Development Tips

If you use vscode (and you should) download [Preview JS](https://marketplace.visualstudio.com/items?itemName=zenclabs.previewjs) and [CSS Var Autocomplete](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar) to make your development day easier.
You can read more about the extension on their page. But if you don't here some summary.

- [cssvar](https://marketplace.visualstudio.com/items?itemName=phoenisx.cssvar) : intelisense for our global css var
![cssvar](https://user-images.githubusercontent.com/73181490/169938438-66f91b5f-9420-4dfb-80f3-eccdb59cacbc.png)
- [previewjs](https://marketplace.visualstudio.com/items?itemName=zenclabs.previewjs) : render component in an isolation page
![preview js](https://user-images.githubusercontent.com/73181490/169938269-30c5fede-7fed-4feb-9f37-2129aa1ac2b2.png)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
