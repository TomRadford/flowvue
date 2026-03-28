# flowvue 💰

A simple personal income statement generator site and embedable web component 🤓

![Screenshot 2025-03-30 at 11 09 39](https://github.com/user-attachments/assets/ae160144-96d9-40cd-974a-18e317cb4352)

## [Live Demo](https://flowvue.rad.gdn/)

Check out the live demo deployed at [flowvue.rad.gdn](https://flowvue.rad.gdn/) 🚀

Checkout out the web component at: [flowvue.rad.gdn/demo/example.html](https://flowvue.rad.gdn/demo/example.html)

## Local Development

- cd your terminal into this directory
- Install Node 20 (if you use nvm/fnm, you can do `nvm install` / `nvm use`)
- Install pnpm `corepack enable pnpm` or check out [this](https://pnpm.io/installation) for help
- run `pnpm dev`
- the app should be up at `http://localhost:3000/`
- have fun! 🧑‍🍳

## Deployment

I have the demo app deployed on a VPS using [Nixpacks](https://nixpacks.com/docs/getting-started) with [Coolify](https://coolify.io/) 👏 - nice and old-school 🤓

## How I use `FlowVue`

- The marketing site uses the `FlowVue` component directly (since we know we're already in a vue app with mostly the same deps)
- The web component bundles the `FlowVue` component into a `flow-vue` web component - which works as a mini-app and nicely seperates itself from the rest of the user's website.

## Installing the web component

In an html file, add the following to your `<head>`:

```html
<script type="module" src="https://flowvue.rad.gdn/dist/flow-vue.js"></script>
```

then somewhere in your `<body>`, add the following:

```html
<div id="my-flow-vue"></div>
```

this will append the `flow-vue` web component to this div as soon as the page loads 🔥

See an example in `demo/example.html`

## Tech Stack

I used:

- Vue ✨
- TypeScript (essential)
- Nuxt 3 - for the marketing site (also for the syncing backend/sharing statements in the future 👀)
- Pinia (for sharing state between components)
- Vite - for building the `flow-vue` web component with code splitting ⚡
- Tailwind (scoped to the shadow root in the web component 🤯)
- Reka UI - headless tooltip/select components

## Todo list 📝

Some nice to haves that could extend the application (and its usefulness) in the future:

- Supports for mobile viewports (the table doesnt scale well on mobile viewports)
- Placeholder css for the web component to prevent CLS before it loads and mounts
- Automatic category detectection by syncing transactions to the backend and using existing user's transcations to determine the category from the description. (Will mostly likely just use a nuxt api route to achieve this with SQLite and Drizzle for the orm)
- Sharing of breakdowns (which ties nicely into the transactions being stored in the backend for the feature above)
- Some UI consistency cleanup (typography usage could be better contrained)

Thanks for having a look 👏
