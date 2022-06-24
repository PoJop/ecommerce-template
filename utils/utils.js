export const appOverflowHidden = (boolean) => {
    if (typeof document === 'object') {
        document.querySelector('html').style.overflow = boolean ? 'hidden' : 'auto'
    }
}