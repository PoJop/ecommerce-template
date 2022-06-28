export const productJSON = (data) => {
    const { id, date_added, Label, title, quantity, image = { url }, price } = data
    return {
        id: id,
        date_added: date_added,
        Label: Label,
        title: title,
        quantity: quantity,
        image: {
            url: url
        },
        price: price,
    }
}

export const cartJSON = () => {
    return {
        customer: {
            auth: false,
            customer_id: null,
        },
        cart_items: [],
        cart_history: {
            items: [
            ]
        },
        thrown_basket: {
            show_through: null,
            show: false,
            shows: []
        },
        creation_date: new Date().getTime(),
        first_addition: null,
        last_addition: null,
        last_interaction: null,
    }
}
export const cartItemJSON = (data) => {

    const { id, route, product_id, Label, title, quantity, image_url, price } = data
    
    return {
        id: id,
        app_product_route: route,
        product_id: product_id,
        date_added: new Date().getTime(),
        Label: Label,
        title: title,
        quantity: quantity,
        image: {
            url: image_url
        },
        price: price,
    }
}