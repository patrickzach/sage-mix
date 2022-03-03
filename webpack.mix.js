let mix = require('laravel-mix');

mix.js('resources/scripts/app.js', 'dist').setPublicPath('public')
.postCss("resources/styles/app.css", "public/css", [
  require("tailwindcss"),
]);

mix.browserSync('http://localhost:10044');
