import { Food } from "../../frontend/src/app/shared/models/Food";
import { Tag } from "../../frontend/src/app/shared/models/Tag";

export const sample_dishes: Food[] = [
    {
        id: '1',
        name: 'Pizza Margherita',
        cookTime: '15-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/pizza-margherita.jpg',
        tags: ['Pizza', 'Lunch', 'Dinner']
    },
    {
        id: '2',
        name: 'Pasta Carbonara',
        cookTime: '20-25',
        price: 12,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/pasta-carbonara.jpg',
        tags: ['Pasta', 'Lunch', 'Dinner']
    },
    {
        id: '4',
        name: 'Risotto Milanese',
        cookTime: '30-35',
        price: 15,
        favorite: false,
        origins: ['Italy'],
        stars: 4.2,
        imageUrl: 'assets/risotto-milanese.jpg',
        tags: ['Rice', 'Lunch', 'Dinner']
    },
    {
        id: '3',
        name: 'Lasagna',
        cookTime: '40-45',
        price: 14,
        favorite: true,
        origins: ['Italy'],
        stars: 4.9,
        imageUrl: 'assets/lasagna.jpg',
        tags: ['Pasta', 'Lunch', 'Dinner']
    },

    {
        id: '5',
        name: 'Bruschetta',
        cookTime: '10-15',
        price: 8,
        favorite: true,
        origins: ['Italy'],
        stars: 4.6,
        imageUrl: 'assets/bruschetta.jpg',
        tags: ['Appetizer', 'Lunch', 'Dinner']
    },
    {
        id: '6',
        name: 'Caprese Salad',
        cookTime: '10-15',
        price: 9,
        favorite: false,
        origins: ['Italy'],
        stars: 4.4,
        imageUrl: 'assets/caprese-salad.jpg',
        tags: ['Salad', 'Lunch', 'Dinner']
    },
    {
        id: '7',
        name: 'Eggplant Parmesan',
        cookTime: '35-40',
        price: 13,
        favorite: true,
        origins: ['Italy'],
        stars: 4.8,
        imageUrl: 'assets/eggplant-parmesan.png',
        tags: ['Vegetarian', 'Lunch', 'Dinner']
    },
    {
        id: '8',
        name: 'Chicken Marsala',
        cookTime: '25-30',
        price: 16,
        favorite: false,
        origins: ['Italy'],
        stars: 4.3,
        imageUrl: 'assets/chicken-marsala.jpg',
        tags: ['Chicken', 'Lunch', 'Dinner']
    },
    {
        id: '9',
        name: 'Fettuccine Alfredo',
        cookTime: '20-25',
        price: 14,
        favorite: true,
        origins: ['Italy'],
        stars: 4.7,
        imageUrl: 'assets/fettuccine-alfredo.webp',
        tags: ['Pasta', 'Lunch', 'Dinner']
    },
    {
        id: '10',
        name: 'Mushroom Risotto',
        cookTime: '30-35',
        price: 15,
        favorite: false,
        origins: ['Italy'],
        stars: 4.4,
        imageUrl: 'assets/mushroom-risotto.jpg',
        tags: ['Rice', 'Vegetarian', 'Lunch', 'Dinner']
    },
    {
        id: '11',
        name: 'Tiramisu',
        cookTime: '20-25',
        price: 8,
        favorite: true,
        origins: ['Italy'],
        stars: 4.8,
        imageUrl: 'assets/tiramisu.jpg',
        tags: ['Dessert']
    },
    {
        id: '12',
        name: 'Cannoli',
        cookTime: '15-20',
        price: 6,
        favorite: false,
        origins: ['Italy'],
        stars: 4.5,
        imageUrl: 'assets/cannoli.jpg',
        tags: ['Dessert']
    }
    // {
    //     id: '13',
    //     name: 'Minestrone Soup',
    //     cookTime: '30-35',
    //     price: 9,
    //     favorite: true,
    //     origins: ['Italy'],
    //     stars: 4.6,
    //     imageUrl: 'assets/minestrone-soup.jpg',
    //     tags: ['Soup', 'Lunch', 'Dinner']
    // },
    // {
    //     id: '14',
    //     name: 'Gnocchi',
    //     cookTime: '25-30',
    //     price: 11,
    //     favorite: false,
    //     origins: ['Italy'],
    //     stars: 4.3,
    //     imageUrl: 'assets/gnocchi.jpg',
    //     tags: ['Pasta', 'Lunch', 'Dinner']
    // },
    // {
    //     id: '15',
    //     name: 'Panna Cotta',
    //     cookTime: '20-25',
    //     price: 7,
    //     favorite: true,
    //     origins: ['Italy'],
    //     stars: 4.8,
    //     imageUrl: 'assets/panna-cotta.jpg',
    //     tags: ['Dessert']
    // },
    // {
    //     id: '16',
    //     name: 'Bolognese Sauce',
    //     cookTime: '40-45',
    //     price: 12,
    //     favorite: false,
    //     origins: ['Italy'],
    //     stars: 4.2,
    //     imageUrl: 'assets/bolognese-sauce.jpg',
    //     tags: ['Sauce', 'Lunch', 'Dinner']
    // },
    // {
    //     id: '17',
    //     name: 'Calzone',
    //     cookTime: '15-20',
    //     price: 9,
    //     favorite: true,
    //     origins: ['Italy'],
    //     stars: 4.6,
    //     imageUrl: 'assets/calzone.jpg',
    //     tags: ['Pizza', 'Lunch', 'Dinner']
    // },
    // {
    //     id: '18',
    //     name: 'Panettone',
    //     cookTime: '30-35',
    //     price: 10,
    //     favorite: false,
    //     origins: ['Italy'],
    //     stars: 4.4,
    //     imageUrl: 'assets/panettone.jpg',
    //     tags: ['Dessert', 'Sweet']
    // },
    // {
    //     id: '19',
    //     name: 'Aglio e Olio',
    //     cookTime: '20-25',
    //     price: 8,
    //     favorite: true,
    //     origins: ['Italy'],
    //     stars: 4.7,
    //     imageUrl: 'assets/aglio-e-olio.jpg',
    //     tags: ['Pasta', 'Lunch', 'Dinner']
    // },
    // {
    //     id: '20',
    //     name: 'Prosciutto e Melone',
    //     cookTime: '10-15',
    //     price: 11,
    //     favorite: false,
    //     origins: ['Italy'],
    //     stars: 4.5,
    //     imageUrl: 'assets/prosciutto-e-melone.jpg',
    //     tags: ['Appetizer', 'Lunch', 'Dinner']
    // }
]


export const sample_tags: Tag[] = [
    { name: 'All', count: 6 },
    { name: 'Vegetarian', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'Dessert', count: 2 },

]




export const sample_users: any[] = [
    {
        name: "Mostafa Sameer",
        email: "mostafa@gmail.com",
        password: "12345",
        address: "Asyut",
        isAdmin: true,
    },
    {
        name: "Farid Sameer",
        email: "farid@gmail.com",
        password: "12345",
        address: "Asyut",
        isAdmin: false,
    },
];