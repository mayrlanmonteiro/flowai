import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        id: 1,
        client: 'Modelo FlowAI Premium',
        category: 'Template Alta Conversão',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
        result: 'Design Otimizado para Vendas',
        link: '/portfolio/template-premium'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section-padding bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Nosso Trabalho</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-primary">
                            Projetos que dão resultado
                        </h2>
                    </div>
                    <div>
                        <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors border-b-2 border-accent pb-1">
                            Ver todos os projetos <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer max-w-2xl mx-auto"
                        >
                            <Link to={project.link} className="block w-full h-full">
                                {/* Image */}
                                <div className="aspect-video overflow-hidden bg-gray-200">
                                    <img
                                        src={project.image}
                                        alt={project.client}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                    <span className="text-accent font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 tracking-wider uppercase">{project.category}</span>
                                    <h3 className="text-3xl font-bold text-white mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.client}</h3>
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 flex items-center justify-between">
                                        <span className="bg-white/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm font-medium">{project.result}</span>
                                        <div className="bg-accent text-primary p-2 rounded-full">
                                            <ArrowUpRight size={24} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
