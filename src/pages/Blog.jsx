import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  // Estado para la búsqueda y filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // Datos de ejemplo para artículos destacados
  const featuredArticles = [
    {
      id: 1,
      title: "Los secretos de nuestra cocina mediterránea",
      excerpt:
        "Descubre los ingredientes y técnicas que hacen única nuestra cocina mediterránea. Desde el aceite de oliva virgen extra hasta las hierbas aromáticas frescas, cada elemento juega un papel fundamental en nuestros platos.",
      date: "15 de abril, 2025",
      image:
        "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Chef Antonio",
      category: "Cocina",
    },
    {
      id: 2,
      title: "Vinos perfectos para acompañar tus comidas",
      excerpt:
        "Guía completa para maridar nuestros platos con los mejores vinos. Aprende a seleccionar el vino ideal para cada ocasión y descubre cómo realzar los sabores de tus comidas favoritas.",
      date: "2 de abril, 2025",
      image:
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Sommelier María",
      category: "Bebidas",
    },
    {
      id: 3,
      title: "Eventos especiales: cómo organizamos tu celebración",
      excerpt:
        "Todo lo que necesitas saber para celebrar tu evento especial con nosotros. Desde bodas hasta reuniones corporativas, te ofrecemos un servicio personalizado para hacer de tu evento un momento inolvidable.",
      date: "25 de marzo, 2025",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Equipo de Eventos",
      category: "Eventos",
    },
    {
      id: 4,
      title: "Recetas tradicionales con un toque moderno",
      excerpt:
        "Exploramos cómo nuestros chefs reinventan platos clásicos con técnicas contemporáneas. Descubre la fusión perfecta entre tradición e innovación en nuestra cocina.",
      date: "18 de marzo, 2025",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Chef Antonio",
      category: "Recetas",
    },
    {
      id: 5,
      title: "Sostenibilidad en la cocina: nuestro compromiso",
      excerpt:
        "Conoce nuestras iniciativas para reducir el impacto ambiental y promover prácticas sostenibles en nuestra cocina. Desde la selección de proveedores locales hasta la gestión de residuos.",
      date: "10 de marzo, 2025",
      image:
        "https://images.unsplash.com/photo-1470549638415-0a0755be0619?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Equipo de Sostenibilidad",
      category: "Sostenibilidad",
    },
  ];

  // Datos de ejemplo para todos los artículos del blog
  const allArticles = [
    ...featuredArticles,
    {
      id: 6,
      title: "La importancia del desayuno mediterráneo",
      excerpt:
        "Descubre por qué el desayuno mediterráneo es considerado uno de los más saludables del mundo y cómo incorporarlo a tu rutina diaria.",
      date: "5 de marzo, 2025",
      image:
        "https://images.unsplash.com/photo-1533089860892-a9b969df67a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Nutricionista Laura",
      category: "Nutrición",
    },
    {
      id: 7,
      title: "Cócteles de temporada: refrescantes y originales",
      excerpt:
        "Presentamos nuestra nueva carta de cócteles de temporada, elaborados con ingredientes frescos y técnicas innovadoras.",
      date: "28 de febrero, 2025",
      image:
        "https://images.unsplash.com/photo-1536935338788-846bb9981813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      author: "Bartender Carlos",
      category: "Bebidas",
    },
    {
      id: 8,
      title: "Entrevista con nuestro chef ejecutivo",
      excerpt:
        "Conoce la trayectoria y filosofía culinaria de nuestro chef ejecutivo en esta entrevista exclusiva.",
      date: "20 de febrero, 2025",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1477&q=80",
      author: "Equipo Editorial",
      category: "Entrevistas",
    },
    {
      id: 9,
      title: "Postres tradicionales con un toque especial",
      excerpt:
        "Exploramos la reinterpretación de postres clásicos con ingredientes sorprendentes y presentaciones innovadoras.",
      date: "15 de febrero, 2025",
      image:
        "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Pastelero Javier",
      category: "Recetas",
    },
    {
      id: 10,
      title: "Celebrando nuestro aniversario: 10 años de excelencia",
      excerpt:
        "Repasamos los momentos más destacados de nuestra primera década y compartimos nuestros planes para el futuro.",
      date: "5 de febrero, 2025",
      image:
        "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      author: "Dirección",
      category: "Eventos",
    },
  ];

  // Obtener categorías únicas para el filtro
  const categories = [
    "all",
    ...new Set(allArticles.map((article) => article.category)),
  ];

  // Filtrar artículos según búsqueda y categoría
  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || article.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {" "}
      {/* Padding top para compensar la navbar fija */}
      {/* Sección de Artículos Destacados */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Artículos Destacados
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Descubre nuestros artículos más populares
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.slice(0, 3).map((article) => (
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
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.excerpt.substring(0, 100)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.author}
                    </span>
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección de Todos los Artículos con Búsqueda y Filtros */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Todos los Artículos
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Explora nuestro contenido
            </p>
          </div>

          {/* Barra de búsqueda y filtros */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Buscar
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Buscar artículos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="md:w-64">
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Categoría
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "Todas las categorías" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Lista de artículos filtrados */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
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
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {article.excerpt.substring(0, 100)}...
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {article.author}
                      </span>
                      <Link
                        to={`/blog/${article.id}`}
                        className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                No se encontraron artículos que coincidan con tu búsqueda.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
