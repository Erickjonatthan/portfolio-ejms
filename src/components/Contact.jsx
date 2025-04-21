import React, { useRef, useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const mensagemWhatsApp = `Olá! Me chamo ${formData.nome}.\nEmail: ${formData.email}\nAssunto: ${formData.assunto}\n\nMensagem: ${formData.mensagem}`;
    
    const whatsappUrl = `https://wa.me/5581989979429?text=${encodeURIComponent(mensagemWhatsApp)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Motion.section
      ref={ref}
      id="contact"
      className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4">Entre em Contato</h2>
        <p className="text-white text-center text-base sm:text-xl mb-12">
          Vamos transformar suas ideias em realidade! Entre em contato comigo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Motion.div
            className="bg-white p-6 rounded-lg text-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600">erick.jonathan@ufrpe.br</p>
          </Motion.div>

          <Motion.div
            className="bg-white p-6 rounded-lg text-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaPhone className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Telefone</h3>
            <p className="text-gray-600">(81) 99999-9999</p>
          </Motion.div>

          <Motion.div
            className="bg-white p-6 rounded-lg text-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaMapMarkerAlt className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Localização</h3>
            <p className="text-gray-600">Recife, Pernambuco</p>
          </Motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  placeholder="Nome Completo"
                  className="bg-gray-50 text-gray-800 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
                  required
                />
              </Motion.div>

              <Motion.div
                className="flex flex-col"
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="bg-gray-50 text-gray-800 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
                  required
                />
              </Motion.div>
            </div>

            <Motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input
                type="text"
                name="assunto"
                value={formData.assunto}
                onChange={handleInputChange}
                placeholder="Assunto"
                className="bg-gray-50 text-gray-800 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
                required
              />
            </Motion.div>

            <Motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleInputChange}
                placeholder="Mensagem"
                rows="5"
                className="bg-gray-50 text-gray-800 border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
                required
              ></textarea>
            </Motion.div>

            <Motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-500 transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Enviar Mensagem
            </Motion.button>
          </form>
        </div>
      </div>
    </Motion.section>
  );
}