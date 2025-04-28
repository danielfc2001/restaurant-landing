import { useState, useEffect } from "react";

const Appointments = () => {
  // Estados para el formulario
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [tables, setTables] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [price, setPrice] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  // Precios base y horarios disponibles
  const basePrice = 10; // Precio base por mesa
  const availableTimes = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
  ];

  // Calcular precio basado en día de la semana, hora y número de mesas
  useEffect(() => {
    if (date && time && tables) {
      const selectedDate = new Date(date);
      const dayOfWeek = selectedDate.getDay(); // 0 (domingo) a 6 (sábado)
      const hour = parseInt(time.split(":")[0]);

      // Factor de precio según día de la semana (fin de semana más caro)
      const dayFactor = dayOfWeek === 5 || dayOfWeek === 6 ? 1.5 : 1;

      // Factor de precio según hora (horas punta más caras)
      const hourFactor = hour >= 20 ? 1.3 : 1;

      // Cálculo final del precio
      const calculatedPrice = basePrice * tables * dayFactor * hourFactor;
      setPrice(calculatedPrice.toFixed(2));
    } else {
      setPrice(0);
    }
  }, [date, time, tables]);

  // Validar formulario
  useEffect(() => {
    if (date && time && tables && name && email && phone) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [date, time, tables, name, email, phone]);

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      // Aquí se enviaría la información a un servidor
      alert(
        `Reserva realizada con éxito para ${name} el día ${date} a las ${time} para ${tables} mesa(s). Precio total: $${price}`
      );
      // Resetear formulario
      setDate("");
      setTime("");
      setTables(1);
      setName("");
      setEmail("");
      setPhone("");
      setSpecialRequests("");
    }
  };

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split("T")[0];

  // Obtener fecha máxima (3 meses desde hoy)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateString = maxDate.toISOString().split("T")[0];

  return (
    <div className="pt-16">
      {" "}
      {/* Padding top para compensar la navbar fija */}
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="max-w-screen-xl px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Reserva tu Mesa
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Completa el formulario para reservar tu experiencia gastronómica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Información de reserva */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Información de Reserva
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Fecha
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    min={today}
                    max={maxDateString}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Hora
                  </label>
                  <select
                    id="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  >
                    <option value="">Selecciona una hora</option>
                    {availableTimes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="tables"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Número de Mesas
                  </label>
                  <input
                    type="number"
                    id="tables"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    min="1"
                    max="10"
                    value={tables}
                    onChange={(e) => setTables(parseInt(e.target.value))}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="123-456-7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="special-requests"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Peticiones Especiales
                  </label>
                  <textarea
                    id="special-requests"
                    rows="3"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Alergias, preferencias, celebraciones especiales..."
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                    isFormValid
                      ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      : "bg-blue-400 cursor-not-allowed dark:bg-blue-500"
                  }`}
                  disabled={!isFormValid}
                >
                  Confirmar Reserva
                </button>
              </form>
            </div>

            {/* Resumen y detalles */}
            <div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Resumen de Reserva
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Fecha:</span>{" "}
                    {date
                      ? new Date(date).toLocaleDateString("es-ES", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "No seleccionada"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Hora:</span>{" "}
                    {time || "No seleccionada"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-medium">Mesas:</span> {tables}
                  </p>
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-xl font-bold text-gray-900 dark:text-white">
                      Precio Total:{" "}
                      <span className="text-blue-600 dark:text-blue-400">
                        ${price}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Información Adicional
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Política de Cancelación
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Puedes cancelar tu reserva hasta 24 horas antes sin cargo.
                      Cancelaciones posteriores tendrán un cargo del 50% del
                      precio total.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Horario del Restaurante
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lunes a Domingo: 12:00 - 15:30 y 19:00 - 23:30
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      Contacto
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Para cualquier consulta, llámanos al +123 456 7890 o
                      escríbenos a reservas@restaurantland.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointments;
