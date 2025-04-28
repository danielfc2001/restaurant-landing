import { Link } from "react-router-dom";

const Home = () => {
  // Datos de ejemplo para productos destacados
  const featuredProducts = [
    {
      id: 1,
      name: "Paella Valenciana",
      description: "Auténtica paella con mariscos frescos y arroz azafrán",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Plato Principal",
    },
    {
      id: 2,
      name: "Risotto de Setas",
      description:
        "Cremoso risotto con variedad de setas silvestres y parmesano",
      price: "$19.99",
      image:
        "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Plato Principal",
    },
    {
      id: 3,
      name: "Tiramisú Casero",
      description: "Auténtico postre italiano con café, mascarpone y cacao",
      price: "$8.99",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Postre",
    },
    {
      id: 4,
      name: "Sangría Especial",
      description:
        "Refrescante sangría con vino tinto, frutas frescas y un toque de canela",
      price: "$12.99",
      image:
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Bebida",
    },
  ];

  // Datos de ejemplo para artículos recientes del blog
  const recentArticles = [
    {
      id: 1,
      title: "Los secretos de nuestra cocina mediterránea",
      excerpt:
        "Descubre los ingredientes y técnicas que hacen única nuestra cocina...",
      date: "15 de abril, 2025",
      image:
        "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Chef Antonio",
    },
    {
      id: 2,
      title: "Vinos perfectos para acompañar tus comidas",
      excerpt:
        "Guía completa para maridar nuestros platos con los mejores vinos...",
      date: "2 de abril, 2025",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Sommelier María",
    },
    {
      id: 3,
      title: "Eventos especiales: cómo organizamos tu celebración",
      excerpt:
        "Todo lo que necesitas saber para celebrar tu evento especial con nosotros...",
      date: "25 de marzo, 2025",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      author: "Equipo de Eventos",
    },
  ];

  return (
    <div className="pt-16">
      {" "}
      {/* Padding top para compensar la navbar fija */}
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              RestaurantLand: Una experiencia culinaria única
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Descubre nuestra pasión por la gastronomía mediterránea con
              ingredientes frescos y recetas tradicionales en un ambiente
              acogedor y elegante.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                to="/productos"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              >
                Ver Menú
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                to="/citas"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Reservar Mesa
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Plato de comida"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* Productos Destacados */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Productos Destacados
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Descubre nuestras especialidades más populares
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {product.price}
                    </span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {product.category}
                  </span>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/productos"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ver Todos los Productos
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      {/* Artículos Recientes del Blog */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Artículos Recientes
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Mantente al día con nuestras últimas noticias y consejos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentArticles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={article.image}
                  alt={article.title}
                />
                <div className="p-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.date}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.author}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/blog/${article.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    Leer más →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ver Todos los Artículos
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
