import React from 'react';
import { MessageCircle, FileText, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        icon: <MessageCircle size={24} />,
        title: '1. Conversa Inicial',
        description: 'Entendemos seu negócio, público e objetivos em uma reunião rápida.'
    },
    {
        id: 2,
        icon: <FileText size={24} />,
        title: '2. Proposta Clara',
        description: 'Você recebe um orçamento detalhado, sem surpresas ou letras miúdas.'
    },
    {
        id: 3,
        icon: <PenTool size={24} />,
        title: '3. Design e Layout',
        description: 'Criamos o visual do site e ajustamos até ficar como você sonhou.'
    },
    {
        id: 4,
        icon: <Code size={24} />,
        title: '4. Desenvolvimento',
        description: 'Programamos tudo para ser rápido, seguro e funcional no celular.'
    },
    {
        id: 5,
        icon: <Rocket size={24} />,
        title: '5. Entrega e Suporte',
        description: 'Seu site vai ao ar e damos todo o suporte inicial necessário.'
    }
];

const Process = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    return (
        <section id="processo" className="section-padding bg-primary text-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform origin-top-right"></div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-semibold tracking-wide uppercase text-sm">Como funciona</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                            Do zero ao site no ar em 5 passos simples
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Na FlowAI, nós cuidamos da parte técnica chata. Você só precisa nos contar sobre seu negócio e aprovar o resultado. É simples assim.
                        </p>

                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            className="inline-block bg-accent text-primary font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors"
                        >
                            Começar meu projeto
                        </a>
                    </motion.div>

                    {/* Timeline Steps */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 group"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full border-2 border-accent/30 bg-primary flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-colors z-10 relative">
                                        {step.icon}
                                    </div>
                                    {index !== steps.length - 1 && (
                                        <div className="w-0.5 h-full bg-accent/20 my-2 group-hover:bg-accent/50 transition-colors"></div>
                                    )}
                                </div>
                                <div className="pb-8">
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{step.title}</h3>
                                    <p className="text-gray-400">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
