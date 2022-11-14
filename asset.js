export const asset = (path) => {
    // default to VITE_ASSET_URL
    let prefix = import.meta.env.VITE_ASSET_URL

    if (!prefix) {
        // fallback to determining ASSET_URL from meta tag
        prefix = document.head.querySelector('meta[name="asset-url"]').content
    }

    return prefix.replace(/\/+$/, '') + '/' + path.replace(/^\/+/, '')
}
