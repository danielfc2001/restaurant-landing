import { useState } from "react";

const Products = () => {
  // Estado para la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Datos de ejemplo para las categorías del menú
  const menuCategories = [
    {
      id: "entrantes",
      name: "Entrantes",
      description: "Deliciosos aperitivos para abrir el apetito",
      image:
        "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: "platos-principales",
      name: "Platos Principales",
      description: "Nuestras especialidades más destacadas",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    },
    {
      id: "postres",
      name: "Postres",
      description: "El dulce final para tu experiencia gastronómica",
      image:
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
    },
    {
      id: "bebidas",
      name: "Bebidas",
      description: "Refrescantes opciones para acompañar tu comida",
      image:
        "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80",
    },
  ];

  // Datos de ejemplo para los productos de cada categoría
  const menuProducts = {
    entrantes: [
      {
        id: 1,
        name: "Tabla de Quesos",
        description:
          "Selección de quesos artesanales con mermelada casera y frutos secos",
        price: "$14.99",
        image:
          "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 2,
        name: "Croquetas Caseras",
        description:
          "Croquetas cremosas de jamón ibérico con alioli de ajo negro",
        price: "$10.99",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1013&q=80",
      },
      {
        id: 3,
        name: "Ensalada Mediterránea",
        description:
          "Mezcla de lechugas, tomate, pepino, aceitunas, queso feta y vinagreta de limón",
        price: "$12.99",
        image:
          "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1384&q=80",
      },
      {
        id: 4,
        name: "Carpaccio de Pulpo",
        description:
          "Finas láminas de pulpo con aceite de oliva, pimentón y sal marina",
        price: "$16.99",
        image:
          "https://images.unsplash.com/photo-1599084993091-1cb5c9d0b123?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
    "platos-principales": [
      {
        id: 5,
        name: "Paella Valenciana",
        description:
          "Auténtica paella con mariscos frescos, pollo y verduras de temporada",
        price: "$24.99",
        image:
          "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 6,
        name: "Risotto de Setas",
        description:
          "Cremoso risotto con variedad de setas silvestres y parmesano",
        price: "$19.99",
        image:
          "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 7,
        name: "Solomillo al Vino Tinto",
        description:
          "Tierno solomillo de ternera con reducción de vino tinto y puré de patatas trufado",
        price: "$28.99",
        image:
          "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 8,
        name: "Lubina a la Sal",
        description:
          "Lubina fresca cocinada en costra de sal con verduras salteadas",
        price: "$26.99",
        image:
          "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
    postres: [
      {
        id: 9,
        name: "Tiramisú Casero",
        description: "Auténtico postre italiano con café, mascarpone y cacao",
        price: "$8.99",
        image:
          "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 10,
        name: "Crema Catalana",
        description:
          "Tradicional postre español con crema suave y costra de azúcar caramelizada",
        price: "$7.99",
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1557&q=80",
      },
      {
        id: 11,
        name: "Coulant de Chocolate",
        description:
          "Bizcocho de chocolate con interior fundente y helado de vainilla",
        price: "$9.99",
        image:
          "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: 12,
        name: "Surtido de Frutas",
        description:
          "Selección de frutas frescas de temporada con sorbete de limón",
        price: "$6.99",
        image:
          "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
    ],
    bebidas: [
      {
        id: 13,
        name: "Sangría Especial",
        description:
          "Refrescante sangría con vino tinto, frutas frescas y un toque de canela",
        price: "$12.99",
        image:
          "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: 14,
        name: "Selección de Vinos",
        description: "Amplia carta de vinos nacionales e internacionales",
        price: "Desde $18.99",
        image:
          "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      },
      {
        id: 15,
        name: "Cócteles Artesanales",
        description:
          "Cócteles elaborados con ingredientes premium y técnicas modernas",
        price: "Desde $10.99",
        image:
          "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        id: 16,
        name: "Agua y Refrescos",
        description: "Variedad de aguas minerales y refrescos",
        price: "Desde $2.99",
        image:
          "https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
      },
    ],
  };

  // Función para mostrar los productos de una categoría
  const showCategoryProducts = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // Función para volver a la vista de categorías
  const backToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="pt-16">
      {" "}
      {/* Padding top para compensar la navbar fija */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Nuestro Menú
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Descubre nuestra selección de platos elaborados con ingredientes
              frescos y de temporada
            </p>
          </div>

          {selectedCategory ? (
            // Vista de productos de la categoría seleccionada
            <div>
              <button
                onClick={backToCategories}
                className="mb-6 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-lg hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
              >
                <svg
                  className="w-3.5 h-3.5 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5H1m0 0 4 4M1 5l4-4"
                  />
                </svg>
                Volver a Categorías
              </button>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {
                  menuCategories.find((cat) => cat.id === selectedCategory)
                    ?.name
                }
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuProducts[selectedCategory]?.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                  >
                    <img
                      className="w-full h-48 object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {product.name}
                        </h4>
                        <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {product.price}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Vista de categorías
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => showCategoryProducts(category.id)}
                >
                  <div className="relative">
                    <img
                      className="w-full h-64 object-cover"
                      src={category.image}
                      alt={category.name}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {category.name}
                        </h3>
                        <p className="text-gray-200">{category.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
