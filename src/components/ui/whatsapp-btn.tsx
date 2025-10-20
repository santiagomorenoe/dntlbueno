"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export const WhatsAppBtn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sucursal, setSucursal] = useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (name.trim() && message.trim() && sucursal.trim()) {
      const whatsappMessage = `Hola! Soy ${name}. Mi cita será en: ${sucursal}. Motivo de la cita: ${message}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=5585073745&text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, "_blank");
      setIsOpen(true);
      setName("");
      setMessage("");
      setSucursal("");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Botón flotante principal */}
      <div className="fixed bottom-6 right-8 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.7 }}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center group animate-bounce hover:cursor-pointer"
        >
          <img src="/images/w.svg" alt="WhatsApp" className="w-18 h-18 hover:animate-pulse invert object-contain" />
        </motion.button>

        {/* Modal del formulario */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-22 md:bottom-26 -right-5 w-80 max-w-[calc(100vw-3rem)] bg-white/80 backdrop-blur-xl rounded-lg shadow-2xl border border-gray-200 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-green-500 p-2 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle size={24} />
                  <h3 className="font-semibold text-xs">Agendar una cita <br/>Envia un mensaje a Santi de prueba </h3>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-green-600 p-1 rounded-full transition-colors hover:cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Formulario */}
              <div className="p-4 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre:
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>

                <label htmlFor="sucursal" className="block text-sm font-medium text-gray-700 mb-1">
                    Sucursal:
                  </label>
                  <select
                    id="sucursal"
                    value={sucursal}
                    onChange={(e) => setSucursal(e.target.value)}
                    required
                    autoComplete="sucursal"
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                  <option value="Polanco">Polanco</option>
                  <option value="Coacalco">Coacalco</option>
                  <option value="Cuautitlan Izcalli">Cuautitlan Izcalli</option>
                  <option value="Pirules">Pirules</option>
                  <option value="Valle Dorado">Valle Dorado</option>
                  <option value="Bosques">Bosques</option>
                </select>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Motivo de la cita:
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder="Motivo de la cita aquí..."
                    className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md font-medium flex items-center justify-center gap-2 transition-colors duration-200 hover:cursor-pointer"
                >
                  <Send size={18} />
                  Enviar mensaje
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};