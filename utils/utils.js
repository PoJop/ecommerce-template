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


let lastId = 0;
export const newId = (prefix = 'id') => {
    lastId++;
    return `${prefix}${lastId}`;
}

export const getLocalStorage = (name) => {
    if (typeof window === 'object')
        return JSON.parse(window.localStorage.getItem(name))
}
export const setLocalStorage = (name, data) => {
    if (typeof window === 'object') {
        window.localStorage.setItem(name, JSON.stringify(data))
    }
}

export const hiddenPageScrolling = (hidden) => {
    if (typeof window === 'object') {
        document.querySelector('html').style.cssText = `overflow: ${hidden ? "hidden" : "auto"};`;
    }
}