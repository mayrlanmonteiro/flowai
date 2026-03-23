import React from 'react';
import { Search, Globe, Clock, MessageSquare, MonitorSmartphone, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    {
        icon: <Search size={32} />,
        title: 'Apareça no Google',
        description: 'Seu negócio será encontrado por quem procura seus serviços.'
    },
    {
        icon: <Globe size={32} />,
        title: 'Mais Credibilidade',
        description: 'Transmita profissionalismo e autoridade com um site de alto nível.'
    },
    {
        icon: <Clock size={32} />,
        title: 'Aberto 24h/dia',
        description: 'Seu site trabalha por você, vendendo e informando o tempo todo.'
    },
    {
        icon: <TrendingUp size={32} />,
        title: 'Menos Dependência',
        description: 'Não fique refém do algoritmo do Instagram. Tenha seu próprio canal.'
    },
    {
        icon: <MonitorSmartphone size={32} />,
        title: 'Acesso em Qualquer Tela',
        description: 'Experiência perfeita no celular, tablet ou computador.'
    },
    {
        icon: <MessageSquare size={32} />,
        title: 'Canal Oficial',
        description: 'Centralize seu portfólio, serviços e contatos em um só lugar.'
    }
];

const Benefits = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm">Por que ter um site?</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                        Aumente suas vendas e autoridade em Teresina
                    </h2>
                    <p className="text-gray-600">
                        Ter um site profissional não é luxo, é necessidade para quem quer crescer.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
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
