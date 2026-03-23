import React from 'react';
import { ArrowRight, Layout, Smartphone, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-28 md:pt-40 pb-12 overflow-hidden bg-primary px-4 sm:px-6">
            {/* Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/20 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-secondary/20 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute top-[20%] right-[10%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[80px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6 mx-auto lg:mx-0">
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-xs md:text-sm font-medium text-accent">Especialistas em Teresina & Região</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight mb-6">
                        Sites profissionais que colocam seu negócio no <span className="text-gradient-accent">mapa digital</span>.
                    </h1>

                    <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                        Na FlowAI, criamos sites rápidos, bonitos e pensados para gerar clientes – não só visitas. Transforme sua presença online hoje mesmo.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
                        <a
                            href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20para%20meu%20site.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold py-4 px-8 rounded-lg transition-all shadow-glow hover:-translate-y-1 w-full sm:w-auto"
                        >
                            Pedir orçamento agora
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-4 px-8 rounded-lg transition-all backdrop-blur-sm hover:-translate-y-1"
                        >
                            Ver portfólio
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4 sm:gap-8 text-sm font-medium text-gray-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-accent" />
                            <span>Entrega rápida</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-accent" />
                            <span>100% Responsivo</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle size={16} className="text-accent" />
                            <span>Foco em vendas</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual/Image Area - Abstract Representation of Growth/Tech */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-gradient-to-br from-white/10 to-transparent p-1 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl skew-y-3 transform hover:skew-y-0 transition-transform duration-700 ease-out">
                        <div className="bg-primary/80 rounded-xl overflow-hidden aspect-[4/3] relative group">
                            {/* Simulated UI Content */}
                            <div className="absolute top-0 w-full h-8 bg-black/20 flex items-center px-4 gap-2 border-b border-white/5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="p-8 pt-12 flex flex-col items-center justify-center h-full text-center space-y-4">
                                <div className="w-16 h-16 rounded-2xl bg-accent mb-2 shadow-glow flex items-center justify-center">
                                    <Layout size={32} className="text-primary" />
                                </div>
                                <div className="h-4 w-3/4 bg-white/10 rounded-full"></div>
                                <div className="h-4 w-1/2 bg-white/10 rounded-full"></div>
                                <div className="flex gap-4 mt-6">
                                    <div className="h-20 w-32 bg-white/5 rounded-lg border border-white/5"></div>
                                    <div className="h-20 w-32 bg-white/5 rounded-lg border border-white/5"></div>
                                </div>
                                {/* Floating Stats */}
                                <div className="absolute top-1/2 right-4 bg-white text-primary p-3 rounded-lg shadow-xl translate-x-1/2 -translate-y-1/2 animate-bounce-slow">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={16} className="text-green-600" />
                                        <span className="font-bold">+40% Leads</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-8 left-8 bg-white text-primary p-3 rounded-lg shadow-xl -translate-x-1/4 animate-bounce-delayed">
                                    <div className="flex items-center gap-2">
                                        <Smartphone size={16} className="text-accent" />
                                        <span className="font-bold">Mobile First</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
