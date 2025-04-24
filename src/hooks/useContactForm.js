import { useState } from 'react';

export default function useContactForm() {
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

  return {
    formData,
    handleInputChange,
    handleSubmit
  };
}