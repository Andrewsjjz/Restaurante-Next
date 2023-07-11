const productos = [

    //CAFES
    {
        nombre: "Americano",
        precio: 59.9,
        imagen: "cafe_01",
        categoriaId: 1
      },
      {
        nombre: "Capuccino",
        precio: 49.9,
        imagen: "cafe_02",
        categoriaId: 1
      },
      {
        nombre: "Latte",
        precio: 54.9,
        imagen: "cafe_03",
        categoriaId: 1
      },
      {
        nombre: "Expresso",
        precio: 54.9,
        imagen: "cafe_04",
        categoriaId: 1
      },
      {
        nombre: "Cafe Turco",
        precio: 54.9,
        imagen: "cafe_05",
        categoriaId: 1
      },
      {
        nombre: "Irish Coffe",
        precio: 39.9,
        imagen: "cafe_06",
        categoriaId: 1
      },

        //Hamburguesas
      {
        nombre: "Hamburguesa Carne (Punta Trasera)",
        precio: 59.9,
        imagen: "hamburguesas_01",
        categoriaId: 2
      },
      {
        nombre: "Hamburguesa de Pollo",
        precio: 59.9,
        imagen: "hamburguesas_02",
        categoriaId: 2
      },
      {
        nombre: "Hamburguesa de Pollo Crispy",
        precio: 59.9,
        imagen: "hamburguesas_03",
        categoriaId: 2
      },
      {
        nombre: "Hamburguesa Queso Cheddar, Pepinos y Cebolla",
        precio: 59.9,
        imagen: "hamburguesas_04",
        categoriaId: 2
      },
      {
        nombre: "Hamburguesa Doble Queso",
        precio: 69.9,
        imagen: "hamburguesas_06",
        categoriaId: 2
      },
      {
        nombre: "Hamburguesa de Cerdo",
        precio: 59.9,
        imagen: "hamburguesas_07",
        categoriaId: 2
      },
 

      //Pizza
     
      {
        nombre: "Pizza con Doble Queso",
        precio: 69.9,
        imagen: "pizzas_01",
        categoriaId: 3
      },
      {
        nombre: "Pizza Jamón y Queso",
        precio: 69.9,
        imagen: "pizzas_02",
        categoriaId: 3
      },
      {
        nombre: "Pizza Cuatro Queso",
        precio: 69.9,
        imagen: "pizzas_03",
        categoriaId: 3
      },
      {
        nombre: "Pizza Chorizo y Salami",
        precio: 69.9,
        imagen: "pizzas_05",
        categoriaId: 3
      },
      {
        nombre: "Pizza Hawaiana",
        precio: 69.9,
        imagen: "pizzas_06",
        categoriaId: 3
      },
      {
        nombre: "Pizza Tocino",
        precio: 69.9,
        imagen: "pizzas_07",
        categoriaId: 3
      },
      {
        nombre: "Pizza Vegetales y Queso",
        precio: 69.9,
        imagen: "pizzas_08",
        categoriaId: 3
      },
      {
        nombre: "Pizza Pepperoni y Queso",
        precio: 69.9,
        imagen: "pizzas_09",
        categoriaId: 3
      },
      {
        nombre: "Pizza Aceitunas y Queso",
        precio: 69.9,
        imagen: "pizzas_10",
        categoriaId: 3
      },
      {
        nombre: "Pizza Queso, Jamón y Champiñones",
        precio: 69.9,
        imagen: "pizzas_11",
        categoriaId: 3
      },

      //Bebidas

      {
        nombre: "Cerveza Zulia",
        precio: 1.2,
        imagen: "cerveza_zulia",
        categoriaId: 4
      },
      {
        nombre: "Cerveza Morena",
        precio: 1.2,
        imagen: "cerveza_Morena",
        categoriaId: 4
      },
      {
        nombre: "Cerveza Polar Negra",
        precio: 1.2,
        imagen: "cerveza_Polar_Negra",
        categoriaId: 4
      },
      {
        nombre: "Cerveza Polar Blanca",
        precio: 1.2,
        imagen: "cerveza_Polar_Blanca",
        categoriaId: 4
      },
      {
        nombre: "Cerveza Solera Verde",
        precio: 1.5,
        imagen: "cerveza_Solera_Verde",
        categoriaId: 4
      },
      {
        nombre: "Cerveza Solera Azul",
        precio: 1.4,
        imagen: "cerveza_Solera_Azul",
        categoriaId: 4
      },
      {
        nombre: "Cerveza Solera Variadas",
        precio: 1.5,
        imagen: "cerveza_Solera_Variadas",
        categoriaId: 4
      },
      {
        nombre: "Cerveza Internacionales",
        precio: 1.6,
        imagen: "cerveza_Internacionales",
        categoriaId: 4
      },
      {
        nombre: "Balde Zulia 10 Unidades",
        precio: 10,
        imagen: "cerveza_Zulia_10",
        categoriaId: 4
      },
      {
        nombre: "Balde Polar Negra 10 Unidades",
        precio: 10,
        imagen: "cerveza_Polar_Negra_10",
        categoriaId: 4
      },
      {
        nombre: "Balde Solera Azul 10 Unidades",
        precio: 13,
        imagen: "cerveza_Solera_Azul_10",
        categoriaId: 4
      },
      {
        nombre: "Balde Solera Verde 10 Unidades",
        precio: 14,
        imagen: "cerveza_Solera_Verde_10",
        categoriaId: 4
      },

      //Bebidas

      {
        nombre: "Coca Cola 355ml",
        precio: 0.8,
        imagen: "coca_cola_355",
        categoriaId: 5
      },
      {
        nombre: "Coca Cola 1.5lt",
        precio: 1.3,
        imagen: "coca_cola_1.5",
        categoriaId: 5
      },
      {
        nombre: "Coca Cola 2lt",
        precio: 2.1,
        imagen: "coca_cola_2",
        categoriaId: 5
      },
      {
        nombre: "Agua mineral 355ml",
        precio: 0.5,
        imagen: "agua_355",
        categoriaId: 5
      },

      //Postres
      
      {
        nombre: "Porcion de torta de chocolate",
        precio: 1.3,
        imagen: "torta_chocolate",
        categoriaId: 6
      },
      {
        nombre: "Porcion de torta de fresa",
        precio: 1.3,
        imagen: "torta_fresa",
        categoriaId: 6
      },
      {
        nombre: "Porcion de torta de arequipe",
        precio: 1.3,
        imagen: "torta_arequipe",
        categoriaId: 6
      },
      {
        nombre: "Porcion de torta de 3 leches",
        precio: 1.6,
        imagen: "torta_3_leches",
        categoriaId: 6
      },
      {
        nombre: "Porcion de quesillo",
        precio: 1.3,
        imagen: "quesillo",
        categoriaId: 6
      },
      
      //Guarniciones

      {
        nombre: "Servicio de papas fritas pequeñas 170gr",
        precio: 1,
        imagen: "papas_pequeñas",
        categoriaId: 7
      },      
      {
        nombre: "Servicio de papas fritas grandes 350gr",
        precio: 2.2,
        imagen: "papas_grandes",
        categoriaId: 7
      },
      {
        nombre: "Servicio de 10 nuggets",
        precio: 1.8,
        imagen: "nuggets",
        categoriaId: 7
      },
      {
        nombre: "Servicio de tartara pequeña 100gr",
        precio: 1,
        imagen: "tartara_pequeña",
        categoriaId: 7
      },
      {
        nombre: "Servicio de tartara grande 300gr",
        precio: 2.6,
        imagen: "tartara_grande",
        categoriaId: 7
      },
]

export {
    productos 
}