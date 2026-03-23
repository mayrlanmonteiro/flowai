import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const Comparison = () => {
    return (
        <section className="py-24 bg-dark-2 relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4">Diferencial</span>
                    <h2 className="text-white text-3xl md:text-5xl font-black">Por que a <span className="text-primary-light">FlowAI</span> é diferente?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Outras Agências */}
                    <div className="p-8 md:p-12 rounded-[40px] bg-dark border border-dark-3 opacity-60">
                        <h3 className="text-gray-400 text-xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                                <X size={20} />
                            </div>
                            Outras Opções
                        </h3>
                        <ul className="space-y-6">
                            <li className="text-gray-500 flex gap-4">
                                <X size={18} className="text-red-500/50 shrink-0 mt-1" />
                                Sites lentos que fazem o cliente desistir.
                            </li>
                            <li className="text-gray-500 flex gap-4">
                                <X size={18} className="text-red-500/50 shrink-0 mt-1" />
                                Design genérico que não transmite confiança.
                            </li>
                            <li className="text-gray-500 flex gap-4">
                                <X size={18} className="text-red-500/50 shrink-0 mt-1" />
                                Suporte demorado quando você mais precisa.
                            </li>
                            <li className="text-gray-500 flex gap-4">
                                <X size={18} className="text-red-500/50 shrink-0 mt-1" />
                                Estrutura que não aparece no Google.
                            </li>
                        </ul>
                    </div>

                    {/* FlowAI */}
                    <div className="p-8 md:p-12 rounded-[40px] bg-dark border-2 border-primary shadow-[0_0_50px_rgba(108,58,237,0.2)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <Check size={120} className="text-primary" />
                        </div>
                        
                        <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                                <Check size={20} />
                            </div>
                            Padrão FlowAI
                        </h3>
                        <ul className="space-y-6">
                            <li className="text-gray-200 flex gap-4 font-medium">
                                <Check size={18} className="text-accent shrink-0 mt-1" />
                                Velocidade máxima em qualquer dispositivo.
                            </li>
                            <li className="text-gray-200 flex gap-4 font-medium">
                                <Check size={18} className="text-accent shrink-0 mt-1" />
                                Design premium focado em vendas reais.
                            </li>
                            <li className="text-gray-200 flex gap-4 font-medium">
                                <Check size={18} className="text-accent shrink-0 mt-1" />
                                Suporte humanizado e direto via WhatsApp.
                            </li>
                            <li className="text-gray-200 flex gap-4 font-medium">
                                <Check size={18} className="text-accent shrink-0 mt-1" />
                                SEO otimizado para você ser encontrado.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparison;
