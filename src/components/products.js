const products = [
    {
        id: 1,
        categoryId: 1,
        title: "Escritorio",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$100",
        stock: 5,
        picture: ["https://http2.mlstatic.com/D_NQ_NP_853614-MCO47328993526_092021-V.jpg"],
    },
    {
        id: 2,
        categoryId: 1,
        title: "Escritorio 2",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$200",
        stock: 2,
        picture: ["https://www.ohcielos.com/images/escritorio-moderno-blanco-cajonera--estudio-021005.jpg"],
    },
    {
        id: 3,
        categoryId: 1,
        title: "Escritorio 3",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$300",
        stock: 6,
        picture: ["https://www.muebledemelamina.com/wp-content/uploads/2020/06/escritorio-grande-1-900x737.jpg"],
    },
    {
        id: 4,
        categoryId: 1,
        title: "Escritorio 4",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$400",
        stock: 1,
        picture: ["https://dimusa.mx/wp-content/uploads/2020/07/Escritorios-Modernos-de-Oficina.jpg"],
    },
    {
        id: 5,
        categoryId: 2,
        title: "Sillas",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$300",
        stock: 4,
        picture: ["https://desillas.com/img/productos/IKWQFZ_4.jpg"],
    },
    {
        id: 6,
        categoryId: 2,
        title: "Sillas 2",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$250",
        stock: 5,
        picture: ["https://www.sillasoficina.com/306-home_default/silla-de-escritorio-pictor-blanca-patas-de-madera-y-mono-carcasa.jpg"],
    },
    {
        id: 7,
        categoryId: 2,
        title: "Sillas 3",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$350",
        stock: 2,
        picture: ["https://www.tecnobreak.com/wp-content/uploads/2022/03/mejores-sillas-de-escritorio-modernas-sin.jpg"],
    },
    {
        id: 8,
        categoryId: 3,
        title: "Biblioteca",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$650",
        stock: 1,
        picture: ["https://http2.mlstatic.com/D_NQ_NP_697338-MLA44179783139_112020-O.webp"],
    },
    {
        id: 9,
        categoryId: 3,
        title: "Biblioteca 2",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$750",
        stock: 2,
        picture: ["https://www.miliboo.es/biblioteca-separador-acabado-roble-a147-cm-como-50041-principale_400_291_0.jpg"],
    },
    {
        id: 10,
        categoryId: 4,
        title: "Sillon",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean urna tortor, facilisis a iaculis in, euismod vitae urna. Proin quis rutrum nulla. Nulla pellentesque auctor fermentum. Nullam ac ex vel eros auctor aliquet. Duis vel blandit metus. Cras id consectetur nunc, ut accumsan nisl. Nunc facilisis pharetra semper. Quisque bibendum nunc et orci vehicula gravida. Donec vehicula augue vel tellus accumsan, nec blandit ipsum blandit. Fusce mattis erat ut dui lacinia, quis vulputate quam blandit.",
        price: "$1.050",
        stock: 1,
        picture: ["https://http2.mlstatic.com/D_NQ_NP_750151-MLA31086882358_062019-W.jpg"],
    }
];



//  export const getProducts = () => {
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//              return resolve(products);
//          }, 2000)
//      })
//  }

module.exports ={
products,

}
