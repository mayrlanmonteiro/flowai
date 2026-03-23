import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShoppingBag, Layout, Gauge, Smartphone, Search } from 'lucide-react';

const services = [
    {
        title: 'Sites Institucionais',
        description: 'A vitrine digital perfeita para sua empresa. Design exclusivo e focado em apresentar seu negócio com profissionalismo.',
        icon: <Globe size={28} />,
        tag: 'Essencial'
    },
    {
        title: 'E-commerce (Lojas)',
        description: 'Venda seus produtos 24h por dia. Sistema completo de e-commerce, seguro e otimizado para conversão.',
        icon: <ShoppingBag size={28} />,
        tag: 'Vendas'
    },
    {
        title: 'Landing Pages',
        description: 'Páginas de alta conversão para seus anúncios. Criamos o caminho perfeito para transformar cliques em clientes.',
        icon: <Layout size={28} />,
        tag: 'Performance'
    },
    {
        title: 'Sistemas Web',
        description: 'Dashboards e aplicações personalizadas sob medida para otimizar os processos internos da sua empresa.',
        icon: <Gauge size={28} />,
        tag: 'Inovação'
    },
    {
        title: 'Web Apps Responsivos',
        description: 'Sites que funcionam perfeitamente em qualquer dispositivo, oferecendo a melhor experiência para o usuário.',
        icon: <Smartphone size={28} />,
        tag: 'Mobile'
    },
    {
        title: 'SEO & Performance',
        description: 'Otimizamos seu site para que ele carregue instantaneamente e seja encontrado facilmente no Google.',
        icon: <Search size={28} />,
        tag: 'Visibilidade'
    }
];

const Services = () => {
    return (
        <section id="servicos" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4"
                    >
                        Nossos Serviços
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-3xl md:text-5xl font-black mb-6"
                    >
                        Soluções que impulsionam o seu <span className="bg-gradient-primary bg-clip-text text-transparent">crescimento digital</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-2 border border-dark-3 p-8 rounded-2xl transition-all duration-300 hover:border-primary/50 group hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary-light mb-6 group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <span className="text-[0.65rem] font-bold text-gray uppercase bg-dark-3 py-1 px-2.5 rounded-full mb-4 inline-block tracking-wider">
                                {service.tag}
                            </span>
                            <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>
                            <div className="w-10 h-1 bg-dark-4 group-hover:w-full group-hover:bg-gradient-primary transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
