import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        whatsapp: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending to WhatsApp
        const text = `Ol%C3%A1%2C%20me%20chamo%20${formState.name}.%20${formState.message}%20Meu%20email%20%C3%A9%20${formState.email}.`;
        window.open(`https://wa.me/5586999527416?text=${text}`, '_blank');
    };

    return (
        <section id="contato" className="section-padding bg-primary text-white relative">
            <div className="absolute inset-0 bg-pattern opacity-[0.05] pointer-events-none"></div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* CTA Final */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="mb-10">
                            <span className="text-accent font-semibold tracking-wide uppercase text-sm">Vamos Conversar?</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
                                Pronto para ter um site profissional?
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                Não perca mais clientes para a concorrência. Clique no botão ao lado ou preencha o formulário para receber um orçamento sem compromisso.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">WhatsApp / Telefone</p>
                                        <p className="text-xl font-bold">(86) 9 9952-7416</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">E-mail</p>
                                        <p className="text-lg">mayrlan.alves22@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-accent">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400 uppercase">Localização</p>
                                        <p className="text-lg">Teresina – Piauí (Atendimento Global)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-8 text-gray-800 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-primary">Solicite um Orçamento</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    value={formState.whatsapp}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="(86) 9 9999-9999"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Como podemos ajudar?</label>
                                <textarea
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
                                    placeholder="Gostaria de um orçamento para..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-4 rounded-lg shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                            >
                                Enviar Solicitação <Send size={18} />
                            </button>

                            <p className="text-xs text-center text-gray-400 mt-4">
                                Ao enviar, você concorda em ser contatado via WhatsApp ou E-mail.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
