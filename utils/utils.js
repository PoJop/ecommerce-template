export const appOverflowHidden = (boolean) => {
    if (typeof document === 'object') {
        document.querySelector('html').style.overflow = boolean ? 'hidden' : 'auto'
    }
}

export const formatPrice = (price) => {
    let p = Math.floor(price * 100) / 100
    if (!p.toString().includes('.')) return `${p}.00`
    else return `${p}`
}