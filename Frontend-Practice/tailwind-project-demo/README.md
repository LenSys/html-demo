# Tailwind Project Demo

```
npm init -y 
npm install tailwind-css postcss-cli autoprefixer
npx tailwind init
touch postcss.config.js
```

Edit postcss.config.js:
```javascript
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
    ]
}
```

```
mkdir css
touch css/tailwind.css
```

Edit css/tailwind.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Edit tailwind.config.js:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Edit package.json:
```javascript
"scripts": {
    "build": "postcss css/tailwind.css -o public/build/tailwind.css"
},
```

```
npm run build
touch public/index.html
```

Edit public/index.html:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="build/tailwind.css">
</head>
<body>
    <h1 class="text-4xl font-bold text-center text-blue-500">Hello world!</h1>
</body>
</html>
```

```
npm run build
```

In development use to automatically rebuild tailwind.css file:
```
npx tailwindcss -i ./css/tailwind.css -o ./public/build/tailwind.css --watch
```

-------------------------------------------------------------------------------

# Tailwind Breakpoints:
```
sm ->  640px
md ->  768px
lg -> 1024px 
xl -> 1280px
```