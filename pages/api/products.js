
export default function handler(req, res) {
    if (req.method === 'GET') {
        setTimeout(() => res.status(200).json({ auth: false }), 3000)
    } else {
        // Handle any other HTTP method
    }
}
const json = [
    {
        id: 1,
        Label: 'Laptop',
        title: 'Apple MacBook Pro 15" Touch Bar MPTU2LL/A 256GB (Silver)',
        category: 'Laptops & Tablets',
        subcategory: 'Laptop',
        image: {
            url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/1/1-medium.jpg'
        },
        price: 1599
    },
    {
        id: 2,
        Label: 'Laptop',
        title: 'Apple MacBook 12" MNYN2LL/A 512GB (Rose Gold)',
        image: {
            url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/2/2-medium.jpg'
        },
        price: 1549
    },
    {
        id: 3,
        Label: 'Laptop',
        title: 'Lenovo IdeaPad YOGA 920-13IKB 80Y7001RRK (Copper)',
        image: {
            url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/3/3-medium.jpg'
        },
        price: 1199
    },
    {
        id: 4,
        Label: 'Laptop',
        title: 'ASUS Zenbook UX330UA-FC020T (Rose Gold)',
        image: {
            url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/4/4-medium.jpg'
        },
        price: 749
    },
    {
        id: 5,
        Label: 'Laptop',
        title: 'Dell XPS 15 9560-8968 (Silver)',
        image: {
            url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/5/5-medium.jpg'
        },
        price: 949
    },
    {
        id: 6,
        Label: 'Laptop',
        title: 'Apple MacBook Air 13" MQD32LL/A 128GB (Silver)',
        image: {
            url: 'https://chekromul.github.io/uikit-ecommerce-template/images/products/6/6-medium.jpg'
        },
        price: 849
    },
]