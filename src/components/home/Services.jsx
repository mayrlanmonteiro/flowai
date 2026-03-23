import React from 'react';
import { Layout, ShoppingCart, Rocket, Settings, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        id: 1,
        icon: <Layout size={40} />,
        title: 'Sites Institucionais',
        description: 'A vitrine digital perfeita para sua empresa. Design exclusivo, páginas essenciais (Home, Sobre, Serviços) e foco em apresentar seu negócio com profissionalismo.',
        highlight: 'Ideal para: Clínicas, Escritórios, Consultorias'
    },
    {
        id: 2,
        icon: <ShoppingCart size={40} />,
        title: 'Lojas Virtuais',
        description: 'Venda seus produtos 24h por dia. Sistema completo de e-commerce, seguro, com cálculo de frete e pagamentos integrados.',
        highlight: 'Ideal para: Varejo, Moda, Artesanato'
    },
    {
        id: 3,
        icon: <Rocket size={40} />,
        title: 'Landing Pages',
        description: 'Páginas focadas em uma única ação: converter. Perfeitas para lançamentos, promoções ou captura de leads com alto desempenho em anúncios.',
        highlight: 'Ideal para: Promoções, Infoprodutos, Captura de Leads'
    },
    {
        id: 4,
        icon: <Settings size={40} />,
        title: 'Otimização & Suporte',
        description: 'Seu site sempre atualizado e rápido. Cuidamos da manutenção técnica, velocidade de carregamento e melhorias contínuas.',
        highlight: 'Ideal para: Quem já tem site e quer melhorar'
    }
];

const Services = () => {
    return (
        <section id="servicos" className="section-padding bg-white relative">
            <div className="absolute inset-0 bg-pattern opacity-[0.4] pointer-events-none"></div>
            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm">O que fazemos</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-primary">
                        Soluções completas para sua presença digital
                    </h2>
                    <p className="text-gray-600">
                        Cada projeto é único. Entendemos sua necessidade para entregar exatamente o que você precisa.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-accent transition-all duration-300">
                                    {service.icon}
                                </div>
                                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded">0{service.id}</span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="border-t border-gray-100 pt-4 mb-6">
                                <p className="text-sm text-secondary font-medium">
                                    {service.highlight}
                                </p>
                            </div>

                            <Link to="/servicos" className="inline-flex items-center text-primary font-bold hover:text-accent transition-colors">
                                Saiba mais <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
