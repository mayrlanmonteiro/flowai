import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Clínica Odontológica',
        category: 'Site Institucional',
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'Advocacia de Sucesso',
        category: 'Landing Page',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
    },
    {
        title: 'E-commerce de Moda',
        category: 'Loja Virtual',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop'
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-dark relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4"
                    >
                        Nosso Portfólio
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-3xl md:text-5xl font-black mb-6"
                    >
                        Projetos que geram <span className="bg-gradient-primary bg-clip-text text-transparent">resultados reais</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden bg-dark-2 border border-dark-3 aspect-[4/5] cursor-pointer"
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary-light text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-white text-2xl font-black mb-4">{project.title}</h3>
                                <div className="flex items-center gap-2 text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    Ver projeto <ExternalLink size={16} className="text-primary-light" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
