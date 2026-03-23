import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Briefing Inicial',
        description: 'Entendemos a fundo seu negócio, objetivos e público-alvo para criar uma estratégia vencedora.'
    },
    {
        title: 'Design Criativo',
        description: 'Desenvolvemos o layout exclusivo focado na experiência do usuário e na identidade da sua marca.'
    },
    {
        title: 'Desenvolvimento',
        description: 'Transformamos o design em código de alta performance, utilizando as tecnologias mais modernas.'
    },
    {
        title: 'Lançamento',
        description: 'Realizamos todos os testes finais e colocamos seu novo site no ar com total segurança.'
    }
];

const Process = () => {
    return (
        <section id="processo" className="py-24 bg-dark-2 relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4"
                    >
                        Como Trabalhamos
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-3xl md:text-5xl font-black mb-6"
                    >
                        Do zero ao <span className="bg-gradient-primary bg-clip-text text-transparent">site no ar</span> em 4 passos
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connection Line */}
                    <div className="hidden md:block absolute top-[40px] left-[50px] right-[50px] h-[2px] bg-dark-4 z-0"></div>
                    
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative z-10 text-center"
                        >
                            <div className="w-20 h-20 bg-dark border-4 border-dark-3 rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-8 transition-all hover:scale-110 hover:border-primary">
                                {index + 1}
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
