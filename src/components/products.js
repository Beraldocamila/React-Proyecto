const products = [
    {
        id: 1,
        title: "Escritorio",
        description: "Lorem.",
        price: "$100",
        stock: 5,
        picture: ["https://http2.mlstatic.com/D_NQ_NP_853614-MCO47328993526_092021-V.jpg"],
    },
    {
        id: 2,
        title: "Escritorio 2",
        description: "Lorem.",
        price: "$200",
        stock: 2,
        picture: ["https://www.ohcielos.com/images/escritorio-moderno-blanco-cajonera--estudio-021005.jpg"],
    },
    {
        id: 3,
        title: "Escritorio 3",
        description: "Lorem.",
        price: "$300",
        stock: 6,
        picture: ["https://www.muebledemelamina.com/wp-content/uploads/2020/06/escritorio-grande-1-900x737.jpg"],
    },
    {
        id: 4,
        title: "Escritorio 4",
        description: "Lorem.",
        price: "$400",
        stock: 1,
        picture: ["https://dimusa.mx/wp-content/uploads/2020/07/Escritorios-Modernos-de-Oficina.jpg"],
    }
];



export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(products);
        }, 2000)
    })
}