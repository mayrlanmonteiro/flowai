import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Laptop, Smartphone, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemplatePreview = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const features = [
        "Design Premium & Moderno",
        "100% Responsivo (Mobile First)",
        "Otimizado para SEO e Google",
        "Carregamento Ultra-rápido",
        "Botões de Conversão (WhatsApp)",
        "Painel de Controle Fácil"
    ];

    return (
        <div className="pt-24 min-h-screen bg-gray-50 flex flex-col">
            <Helmet>
                <title>Template Premium FlowAI - Demonstração</title>
                <meta name="description" content="Veja o modelo de site de alta conversão que a FlowAI cria para o seu negócio." />
            </Helmet>

            <div className="container py-12 flex-grow">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-accent/10 text-accent font-bold px-4 py-2 rounded-full mb-4 text-sm uppercase tracking-wide"
                        >
                            Modelo Exclusivo FlowAI
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-5xl font-bold font-heading text-primary mb-6"
                        >
                            O Site Perfeito para o Seu Negócio
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-600 max-w-2xl mx-auto"
                        >
                            Este é o padrão de qualidade que entregamos. Um site focado em transformar visitantes em clientes, com design impecável e tecnologia de ponta.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-2 rounded-2xl shadow-xl border border-gray-100"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                                alt="Template Preview"
                                className="rounded-xl w-full h-auto"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-bold text-primary mb-6">Tudo o que você precisa incluso:</h3>
                            <div className="grid gap-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                                        <div className="bg-green-100 text-green-600 p-1 rounded-full">
                                            <CheckCircle size={18} />
                                        </div>
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Features Grid - Movido para cima */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <Laptop size={32} className="text-accent mx-auto mb-4" />
                            <h4 className="font-bold text-lg mb-2">Desktop Perfeito</h4>
                            <p className="text-gray-500 text-sm">Visual incrível em computadores e notebooks.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <Smartphone size={32} className="text-accent mx-auto mb-4" />
                            <h4 className="font-bold text-lg mb-2">100% Mobile</h4>
                            <p className="text-gray-500 text-sm">Navegação fluida e rápida em qualquer celular.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                            <Rocket size={32} className="text-accent mx-auto mb-4" />
                            <h4 className="font-bold text-lg mb-2">Alta Performance</h4>
                            <p className="text-gray-500 text-sm">Carregamento instantâneo para não perder clientes.</p>
                        </div>
                    </div>

                    {/* Buttons - Movidos para baixo e centralizados */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostei%20do%20modelo%20e%20quero%20um%20site%20assim!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent hover:bg-accent-hover text-primary font-bold py-4 px-8 rounded-lg shadow-glow hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            <Rocket size={20} />
                            Quero um site assim
                        </a>
                        <Link
                            to="/"
                            className="bg-white border border-gray-200 text-gray-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                        >
                            Voltar para o início
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TemplatePreview;
