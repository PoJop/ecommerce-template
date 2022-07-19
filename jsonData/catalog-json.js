const { CatalogCategorLaptopsTabletsIcon, CatalogCategoryPhonesGadgetsIcon, CatalogCategoryTVVideoIcon, CatalogCategoryGamesEntertainmentIcon, CatalogCategoryPhotoIcon } = require("../asset/icon");

export const catalo_json = [
    {
        icon: <CatalogCategorLaptopsTabletsIcon />,
        category: "Laptops & Tablets",
        category_path: '#',
        subcategory: ['Laptops', 'Tablets', 'Peripherals', 'Keyboards', 'Accessories']
    },
    {
        icon: <CatalogCategoryPhonesGadgetsIcon />,
        category: "Phones & Gadgets",
        category_path: '#',
        subcategory: ['Smartphones', 'Mobile Phones', 'Smart watches', 'Charging and batteries', 'Accessories']
    },
    {
        icon: <CatalogCategoryTVVideoIcon />,
        category: "TV & Video",
        category_path: '#',
        subcategory: ['TV', 'Home Cinema', 'Satellite & Cable TV', 'Projectors', 'DVD & Blu - ray', 'Accessories',]
    },
    {
        icon: <CatalogCategoryGamesEntertainmentIcon />,
        category: "Games & Entertainment",
        category_path: '#',
        subcategory: ['Gaming consoles', 'Games', 'Software', 'Joysticks & gamepads', 'Accessories']
    },
    {
        icon: <CatalogCategoryPhotoIcon />,
        category: "Photo",
        category_path: '#',
        subcategory: ['Cameras', 'Lenses', 'Accessories']
    },
]