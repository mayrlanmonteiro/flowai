import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Landing Page',
        description: 'Ideal para campanhas de tráfego pago e vendas rápidas.',
        price: '597',
        features: [
            'Design de Alta Conversão',
            'Otimização de Velocidade',
            'Integração com WhatsApp',
            'Copywriting Persuasivo',
            'Configuração de Pixel/Google Ads'
        ],
        highlight: false
    },
    {
        name: 'Site Institucional',
        description: 'A solução completa para médicos, advogados e prestadores de serviço.',
        price: '1.297',
        features: [
            'Até 5 Páginas Exclusivas',
            'SEO Local (Google Meu Negócio)',
            'Blog Integrado',
            'Painel Administrativo',
            'Hospedagem + Domínio Grátis'
        ],
        highlight: true
    },
    {
        name: 'Loja Virtual',
        description: 'Sua loja aberta 24h por dia para vender em todo o Brasil.',
        price: '2.497',
        features: [
            'Pagamentos Online (Pix/Cartão)',
            'Gestão de Estoque',
            'Cálculo de Frete (Correios/Melhor Envio)',
            'Treinamento de uso',
            'Suporte Prioritário'
        ],
        highlight: false
    }
];

const Pricing = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    return (
        <section id="planos" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4">Investimento</span>
                    <h2 className="text-white text-3xl md:text-5xl font-black mb-6">Planos que cabem no <span className="bg-gradient-primary bg-clip-text text-transparent">seu bolso</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-8 rounded-[40px] bg-dark-2 border border-dark-3 hover:border-primary/50 transition-all duration-500 group relative ${plan.highlight ? 'md:scale-105 border-primary/50' : ''}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg">
                                    Mais Recomendado
                                </div>
                            )}

                            <h3 className="text-white text-2xl font-black mb-2">{plan.name}</h3>
                            <p className="text-gray text-sm mb-8">{plan.description}</p>
                            
                            <div className="flex items-end gap-1 mb-8">
                                <span className="text-gray text-xl font-bold">R$</span>
                                <span className="text-white text-5xl font-black">{plan.price}</span>
                                <span className="text-gray text-sm mb-2">/único</span>
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex gap-3 text-gray-400 text-sm">
                                        <Check size={18} className="text-accent shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a 
                                href={`https://wa.me/${whatsappNumber}?text=Olá! Me interessei pelo plano ${plan.name} da FlowAI.`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full block text-center py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${plan.highlight ? 'bg-gradient-primary text-white shadow-[0_10px_30px_rgba(108,58,237,0.3)] hover:scale-105' : 'bg-dark border border-dark-3 text-white hover:bg-dark-3'}`}
                            >
                                Começar Agora
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        </section>
    );
};

export default Pricing;
