import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Share2 } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="py-24 bg-dark-2 relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-[80px] items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-[30px] overflow-hidden border-8 border-dark-3 shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                                alt="Equipe FlowAI" 
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 bg-gradient-primary p-8 rounded-3xl shadow-xl z-20 hidden md:block">
                            <div className="text-white text-center">
                                <span className="block text-4xl font-black mb-1">05+</span>
                                <span className="text-xs font-bold uppercase tracking-widest opacity-80">Anos de Mercado</span>
                            </div>
                        </div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px]"></div>
                    </motion.div>

                    <div>
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4"
                        >
                            Sobre a FlowAI
                        </motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white text-3xl md:text-5xl font-black mb-8 leading-tight"
                        >
                            Tecnologia com toque humano em <span className="bg-gradient-primary bg-clip-text text-transparent">Teresina</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray text-lg leading-relaxed mb-10"
                        >
                            Nascemos com o propósito de modernizar a presença digital dos negócios no Piauí. Não somos apenas uma agência de tecnologia, somos parceiros estratégicos que utilizam IA e Design de ponta para criar experiências memoráveis.
                        </motion.p>

                        <div className="grid gap-6">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex gap-5 p-5 bg-dark border border-dark-3 rounded-2xl transition-all hover:border-primary/30"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light shrink-0">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Nossa Missão</h4>
                                    <p className="text-gray text-sm">Colocar cada negócio local no mapa digital com sites de alta performance.</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="flex gap-5 p-5 bg-dark border border-dark-3 rounded-2xl transition-all hover:border-primary/30"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Nossos Valores</h4>
                                    <p className="text-gray text-sm">Transparência, inovação constante e foco total no resultado do cliente.</p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-5 p-5 bg-dark border border-dark-3 rounded-2xl transition-all hover:border-primary/30"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light shrink-0">
                                    <Share2 size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1">Atendimento Próximo</h4>
                                    <p className="text-gray text-sm">Suporte humanizado e ágil, entendendo a realidade da sua empresa.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
