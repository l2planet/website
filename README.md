This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, clone the repo:

```bash
git clone https://github.com/l2planet/website
```


Second, install the dependencies
```bash
yarn install
```



Thirs, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authentication Parts
Go to `src/pages/members/index.tsx` file.

Modify onSubmit event handler, to make it work.

```jsx
<LoginForm onSubmit={(e) => {
    // Authentication comes here!!!!
    e.password
    e.username
}}/>
```