# Laravel Asset Helper

This package provides a helper to generate paths to assets on the client-side like you would in Laravel with `asset('foo.jpg')`.

The package can be configured with a mix `.env` variable: 

```
ASSET_URL=https://mycdn.net
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
