# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Bug

Example in `components/MyImages.vue`

Images with non-url friendly characters in filename can't be found during `npm run build`.

Example of filename with `+` in name is escaped but not found.

```sh
Errors prerendering:
  ├─ /_ipx/** (6ms)                                                       nitro 7:31:20 PM
  │ └── Error: [400] IPX_MISSING_ID
  ├─ /_ipx/w_400/example/f2-a%2Bmber-kipp-75715CVEJhI-unsplash.jpg (8ms)  nitro 7:31:20 PM
  │ ├── Error: [404] IPX_FILE_NOT_FOUND
  │ └── Linked from /
  ├─ /_ipx/w_800/example/f2-a%2Bmber-kipp-75715CVEJhI-unsplash.jpg (8ms)  nitro 7:31:20 PM
  │ ├── Error: [404] IPX_FILE_NOT_FOUND
  │ └── Linked from /
```


## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
