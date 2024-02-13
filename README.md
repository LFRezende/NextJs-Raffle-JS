## Getting Started

Create a next-js application as a base. All of the packages will be installed.

```bash
mkdir next-js-project

cd next-js-project

yarn create next-app .

```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Installing Web3 packages

Add moralis packages for working with web3 fullstack.

```bash
yarn add react react-dom react-moralis react-dom-moralis

```

# Components and Wrapping Application

For each component built, import the moralis hook:

```javascript
import { useMoralis } from "react-moralis";
```

And use it unpacking it from the import:

```javascript
const { enableWeb3 } = useMoralis();
```

Then, on your main file for the app, wrap it all in the Moralis Provider, with initializeOnMount feature.

```javascript
function MyApp({ component, pageProps }) {
  return <MoralisProvider initializeOnMount={false}>// ...</MoralisProvider>;
}
```
