import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const [ref, isInView] = useInView();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

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
      className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-x-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4">Entre em Contato</h2>
        <p className="text-white text-center text-base sm:text-xl mb-8">
          Vamos transformar suas ideias em realidade! Entre em contato comigo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Motion.div
            className="bg-white p-4 rounded-lg text-center shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <FaEnvelope className="text-3xl text-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-sm text-gray-600">erick.jonathan@ufrpe.br</p>
          </Motion.div>

          <Motion.div
            className="bg-white p-4 rounded-lg text-center shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <FaPhone className="text-3xl text-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefone</h3>
            <p className="text-sm text-gray-600">(81) 98997-9429</p>
          </Motion.div>

          <Motion.div
            className="bg-white p-4 rounded-lg text-center shadow-md"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
          >
            <FaMapMarkerAlt className="text-3xl text-blue-500 mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Localização</h3>
            <p className="text-sm text-gray-600">São Bento do Una, Pernambuco</p>
          </Motion.div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 w-full">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-500 transition duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Enviar Mensagem
            </Motion.button>
          </form>
        </div>
      </div>
    </Motion.section>
  );
}