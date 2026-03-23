import React from 'react';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: 'Start',
        description: 'Essencial para começar com o pé direito.',
        originalPrice: 'R$ 890,00',
        price: 'R$ 578,50',
        installments: 'ou 3x de R$ 192,80',
        features: [
            'Site Institucional (One Page)',
            'Design Responsivo (Mobile)',
            'Botão WhatsApp Integração',
            'Hospedagem inclusa (1 ano)',
            'Entrega em 7 dias'
        ],
        highlight: false
    },
    {
        name: 'Pro',
        description: 'O favorito das empresas que querem crescer.',
        originalPrice: 'R$ 1.890,00',
        price: 'R$ 1.228,50',
        installments: 'ou 4x de R$ 307,10',
        features: [
            'Até 5 páginas internas',
            'Design Premium Exclusivo',
            'Blog / Notícias',
            'Otimização SEO (Google)',
            'Formulário de Contato Avançado',
            'Painel para editar textos'
        ],
        highlight: true
    },
    {
        name: 'Performance',
        description: 'E-commerce ou sistemas complexos.',
        originalPrice: 'R$ 3.490,00',
        price: 'A partir de R$ 2.268,50',
        installments: 'Valor final depende da complexidade',
        features: [
            'Loja Virtual Completa',
            'Meios de Pagamento',
            'Área de Membros (se precisar)',
            'Integrações Avançadas (CRM)',
            'Consultoria de Marketing Digital',
            'Suporte Prioritário'
        ],
        highlight: false
    }
];

const Pricing = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    return (
        <section id="planos" className="section-padding bg-gray-50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm">Investimento</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary">
                        Quanto custa um site profissional?
                    </h2>
                    <p className="text-accent font-bold text-lg mb-2">🔥 Promoção de Final de Ano: 35% OFF até Janeiro!</p>
                    <p className="text-gray-600">
                        Trabalhamos com projetos personalizados, mas temos faixas de investimento para cada momento do seu negócio.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-2xl p-8 border ${plan.highlight
                                ? 'bg-white border-accent shadow-2xl scale-105 z-10'
                                : 'bg-white border-gray-100 shadow-md'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold shadow-md flex items-center gap-1 whitespace-nowrap">
                                    <img src="/fire-icon.png" alt="Popular" className="w-4 h-4 object-contain" />
                                    Mais Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-6 h-10">{plan.description}</p>

                            <div className="mb-8">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-gray-400 text-sm line-through">{plan.originalPrice}</span>
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">35% OFF</span>
                                </div>
                                <span className="text-3xl font-bold text-primary block">{plan.price}</span>
                                <div className="text-sm text-gray-500 mt-1 font-medium">
                                    {plan.installments}
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                        <Check size={16} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-accent' : 'text-gray-300'}`} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20tenho%20interesse%20no%20plano%20${plan.name}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full text-center py-3 rounded-lg font-bold transition-all ${plan.highlight
                                    ? 'bg-primary text-white hover:bg-primary-light shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Solicitar Orçamento
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
