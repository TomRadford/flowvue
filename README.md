# flowvue 💰

A simple personal income statement generator web component 🤓

## [Live Demo](https://flowvue.rad.gdn/)

Check out the live demo deployed at [awesomeoffices.rad.gdn](https://flowvue.rad.gdn/) 🚀

## Local Development

- cd your terminal into this directory
- Install Node 20 (if you use nvm/fnm, you can do `nvm install` / `nvm use`)
- Install pnpm `corepack enable pnpm` or check out [this](https://pnpm.io/installation) for help
- run `pnpm dev`
- the app should be up at `http://localhost:3000/`
- have fun! 🧑‍🍳

## Deployment

I have the demo app deployed on a VPS using [Nixpacks](https://nixpacks.com/docs/getting-started) 👏 - nice and old-school 🤓

## Installing the web component 

TODO

## Tech Stack

I used:

- Vue ✨
- TypeScript (essential)
- Nuxt 3 - for the marketing site (also for the syncing backend in the future 👀)
- Vite - for building the `flow-vue` web component 
- Tailwind (scoped to the shadow root in the web component 🤯)
- RekaUI - headless tooltip/select components 

## Todo list 📝

Some nice to haves that could extend the application (and its usefulness) in the future:

- Automatic category detectection by syncing transactions to the backend and using existing user's transcations to determine the category from the description. (Will mostly likely just use a nuxt api route to achieve this with SQLite and Drizzle for the orm)
- Sharing of breakdowns (which ties nicely into the transactions being stored in the backend for the feature above)
- Some UI consistency cleanup (typography options could be more strict)

Thanks for having a look 👏
