# Laravel Asset Helper
This package provides a helper to generate paths to assets on the client-side the same as in Laravel with `asset('foo.jpg')`.

## Install
``` bash
npm install @codinglabs/laravel-asset --save
```

Vue.js example: 
``` javascript
import {asset} from '@codinglabs/laravel-asset'

window.Vue = require('vue')

Vue.mixin({
    methods: {
        asset: asset
    }
})
```

## Usage
The package can be configured with a mix `.env` variable: 

```
ASSET_URL=https://foo.cloudfront.net
MIX_ASSET_URL="${ASSET_URL}"
```

Or by adding a meta tag, which is handy if the `ASSET_URL` is determined at deployment time (like with Laravel Vapor):

```html
<meta name="asset-url" content="{{ config('app.asset_url') }}">
```


To inject an asset into a Vuejs component, use a [dynamic prop](https://vuejs.org/v2/guide/components-props.html#Passing-Static-or-Dynamic-Props):

```html
<img :src="asset('path/to/foo.jpg')">
```

This will be prefixed with the asset URL the same as how the Laravel `asset()` helper works.

If you need to conditionally build against a specific environment file, take a look at [mix-env-file](https://github.com/johnwilhite/mix-env-file). 

## About Coding Labs
Coding Labs is a web app development agency based on the Gold Coast, Australia. See our open source projects [on our website](https://codinglabs.io).

## License
The MIT License (MIT). Please see [License File](LICENSE) for more information.