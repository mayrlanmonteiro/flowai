import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
    });

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;
    const whatsappDisplay = import.meta.env.VITE_WHATSAPP_DISPLAY;

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Olá, me chamo ${formState.name}. ${formState.message} Meu WhatsApp é ${formState.whatsapp} e meu email é ${formState.email}.`;
        window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <section id="contato" className="py-24 bg-dark-2 relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4">
                            Contato
                        </span>
                        <h2 className="text-white text-3xl md:text-5xl font-black mb-8">
                            Vamos transformar sua <span className="bg-gradient-primary bg-clip-text text-transparent">ideia em realidade</span>
                        </h2>
                        <p className="text-gray text-lg mb-12">
                            Não perca mais tempo. Entre em contato agora e receba um orçamento personalizado para o seu projeto digital.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-6 items-center group">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-light group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <span className="text-gray text-xs font-bold uppercase tracking-widest block mb-1">WhatsApp</span>
                                    <span className="text-white text-xl font-bold">{whatsappDisplay}</span>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center group">
                                <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <span className="text-gray text-xs font-bold uppercase tracking-widest block mb-1">E-mail</span>
                                    <span className="text-white text-xl font-bold">{emailAddress}</span>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center group">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary-light group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <span className="text-gray text-xs font-bold uppercase tracking-widest block mb-1">Localização</span>
                                    <span className="text-white text-xl font-bold">Teresina, Piauí</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-dark p-8 md:p-12 rounded-[40px] border border-dark-3 shadow-2xl"
                    >
                        <h3 className="text-white text-2xl font-black mb-8">Envie uma mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-3">Seu Nome</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-dark-2 border border-dark-3 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors" 
                                        placeholder="Nome Completo"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-3">WhatsApp</label>
                                    <input 
                                        type="tel" 
                                        name="whatsapp"
                                        value={formState.whatsapp}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-dark-2 border border-dark-3 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors" 
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-3">E-mail Corporativo</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-2 border border-dark-3 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors" 
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label className="text-gray-400 text-xs font-bold uppercase tracking-widest block mb-3">Sobre o seu projeto</label>
                                <textarea 
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="4" 
                                    className="w-full bg-dark-2 border border-dark-3 rounded-xl px-4 py-4 text-white outline-none focus:border-primary transition-colors resize-none" 
                                    placeholder="Conte um pouco sobre o que você precisa..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full bg-gradient-primary text-white font-black py-5 rounded-2xl shadow-[0_10px_30px_rgba(108,58,237,0.3)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
                            >
                                Enviar Orçamento <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
