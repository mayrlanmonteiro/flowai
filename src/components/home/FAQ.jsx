import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'Quanto tempo leva para meu site ficar pronto?',
        answer: 'Depende da complexidade. Um site institucional básico leva em média de 7 a 10 dias úteis após o recebimento do material. Projetos mais complexos, como lojas virtuais, podem levar de 20 a 30 dias.'
    },
    {
        question: 'Eu preciso já ter o texto e as fotos?',
        answer: 'É ideal que sim, mas se não tiver, nós podemos ajudar! Utilizamos Inteligência Artificial para criar textos persuasivos e bancos de imagem premium para ilustrar seu negócio.'
    },
    {
        question: 'Vocês cuidam da hospedagem e domínio?',
        answer: 'Sim, cuidamos de toda a configuração técnica para você. Orientamos a compra do domínio e configuramos a melhor hospedagem para o seu projeto.'
    },
    {
        question: 'O site vai funcionar bem no celular?',
        answer: 'Com certeza! Todos os nossos projetos são desenvolvidos com a metodologia Mobile First, garantindo uma experiência perfeita em qualquer dispositivo.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-[800px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4"
                    >
                        FAQ
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-3xl md:text-5xl font-black mb-6"
                    >
                        Dúvidas <span className="bg-gradient-primary bg-clip-text text-transparent">Frequentes</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-2 border border-dark-3 rounded-2xl overflow-hidden"
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-primary-light' : 'text-white'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-dark-3 text-gray'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </div>
                            </button>
                            
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-gray leading-relaxed border-t border-dark-3/50 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
