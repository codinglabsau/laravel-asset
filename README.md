# Laravel Asset Helper
This package provides a helper to generate paths to assets on the client-side the same as in Laravel with `asset('foo.jpg')`.

Notices: 
- This package works best with Laravel Mix; if you are using Vite, you should [bundle assets](https://laravel.com/docs/9.x/vite#blade-processing-static-assets) in the `resources` directory instead
- There is also an official asset helper for [Laravel Vapor](https://docs.vapor.build/1.0/projects/deployments.html#asset)

## Install
``` bash
npm install @codinglabs/laravel-asset --save
```

Vue 3 global mixin: 
``` javascript
import { asset } from '@codinglabs/laravel-asset'

return createApp({ render: () => h(app, props) })
    // ...
    .mixin({
        methods: {
            asset,
        },
    })
```

Vue 3 component example: 
``` vue
<script setup>
    import { asset } from '@codinglabs/laravel-asset'
</script>

<template>
    <img :src="asset('path/to/foo.jpg')">
</template>
```

## Usage
The asset prefix can be configured with an environment variable, or by setting an asset path on the server side in the document metadata. 

If the asset url is unknown when building the app (ie. Laravel Vapor, where the asset URL is not generated until the deploy step), the metadata option can be used.

To configure with an `.env` variable: 

```
ASSET_URL=https://foo.cloudfront.net
MIX_ASSET_URL="${ASSET_URL}"
```

To configure with a meta tag in Laravel Blade:

```html
<meta name="asset-url" content="{{ config('app.asset_url') }}">
```

Once configured, simply call the `asset()` helper like you would when using the Laravel helper:

```html
<img :src="asset('path/to/foo.jpg')">
```

## About Coding Labs
Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.com.au).

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.
