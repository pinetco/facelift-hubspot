let mix = require('laravel-mix');

const tailwindcss = require('tailwindcss');

mix.js('src/js/vendors.js', 'facelift-hubspot/assets/js')
    .js('src/js/app.js', 'facelift-hubspot/assets/js')
    .sass('src/scss/vendors.scss', 'facelift-hubspot/assets/css')
    .sass('src/scss/app.scss', 'facelift-hubspot/assets/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    });
