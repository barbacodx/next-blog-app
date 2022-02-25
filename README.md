
## Next.js Blog + Sanity

This is a [Next.js](https://nextjs.org/) Blog project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- NodeJS 8, Next.js 12, Typescript
- styles: Tailwindcss, postcss
- backend: [Sanity](https://www.sanity.io/)
- articles, category, comments

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="page-blog-sample.jpg" width="960" alt="Sample Blog NextJs" /></a>
</p>


## Getting Started

If you're running your own [Sanity Docs](https://www.sanity.io/docs/getting-started) project with the example movie dataset, go to `lib/sanity.js` and change the following lines:

```
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'NAME_OF_YOUR_DATASET',
```

Setup .env.local file setup for production

```
 NEXT_PUBLIC_SANITY_DATASET=
 NEXT_PUBLIC_SANITY_PROJECT_ID=
 SANITY_API_TOKEN=
```
Run Sanity local app, go into directory /blogappdemo:

```bash
sanity start
```
Open http://localhost:3333 with your browser to see the result.

First, run the development server Blog:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
