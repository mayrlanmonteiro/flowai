import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Clock, Layers, Smartphone, Share2 } from 'lucide-react';

const benefits = [
    {
        icon: <Search size={28} />,
        title: 'SEO Otimizado',
        description: 'Seu site será construído para aparecer nas primeiras buscas do Google em Teresina e região.'
    },
    {
        icon: <ShieldCheck size={28} />,
        title: 'Mais Credibilidade',
        description: 'Transmita confiança e profissionalismo para seus clientes com um site premium sob medida.'
    },
    {
        icon: <Clock size={28} />,
        title: 'Ativo 24h por dia',
        description: 'Seu negócio nunca fecha. Clientes podem encontrar informações e contatos a qualquer momento.'
    },
    {
        icon: <Layers size={28} />,
        title: 'Escalabilidade',
        description: 'Soluções que crescem junto com seu negócio, permitindo adições de novas funcionalidades facilmente.'
    },
    {
        icon: <Smartphone size={28} />,
        title: 'Totalmente Responsivo',
        description: 'Experiência perfeita garantida em todos os dispositivos: celulares, tablets e computadores.'
    },
    {
        icon: <Share2 size={28} />,
        title: 'Independência Digital',
        description: 'Tenha o controle total da sua presença online, sem ficar refém apenas de redes sociais.'
    }
];

const Benefits = () => {
    return (
        <section id="beneficios" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4"
                    >
                        Por que ter um site?
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-3xl md:text-5xl font-black mb-6"
                    >
                        Aumente suas vendas e autoridade em <span className="bg-gradient-primary bg-clip-text text-transparent">Teresina</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-dark-2 border border-dark-3 hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light mb-6 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-400">
                                {item.icon}
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
