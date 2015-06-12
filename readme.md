## Install

```sh
npm install
```

## Watch & compile CSS:

```sh
node tasks/watch
```

This will allow you to make changes to the `scss` files and it will auto compile into CSS.

## Syncing to Tumblr theme.

The build process creates a `main.css` file within the `public/css` folder - This is the file yo would upload
back to Tumblr following any changes you make.

**Files to be synced to Tumblr theme**

1. `public/css/main.css`
2. `public/assets/script.js`
3. `public/assets/custom.js`