import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        question: 'Você também registra o domínio e contrata hospedagem?',
        answer: 'Sim, nós cuidamos da configuração técnica para você. Orientamos a compra do domínio (seu nome na internet) e configuramos a hospedagem mais adequada.'
    },
    {
        question: 'O site vai funcionar bem no celular?',
        answer: 'Com certeza! Adotamos a metodologia "Mobile First". Seu site será desenhado primeiro para ficar perfeito em celulares e depois adaptado para computadores.'
    },
    {
        question: 'Como funciona o pagamento?',
        answer: 'Trabalhamos com entrada + parcelamento no cartão ou boleto. O projeto só inicia após a aprovação do orçamento e pagamento da entrada.'
    },
    {
        question: 'Vocês atendem apenas Teresina?',
        answer: 'Nossa base é em Teresina-PI, mas atendemos clientes de todo o Brasil e do mundo de forma 100% remota com a mesma qualidade.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section id="faq" className="section-padding bg-white">
            <div className="container max-w-3xl">
                <div className="text-center mb-12">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm">Dúvidas Frequentes</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">
                        Ainda tem alguma pergunta?
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'border-accent bg-blue-50/30' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                            >
                                <span className={`font-semibold text-lg ${openIndex === index ? 'text-primary' : 'text-gray-700'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-1 rounded-full ${openIndex === index ? 'bg-accent text-primary' : 'bg-gray-100 text-gray-500'}`}>
                                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-transparent">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
