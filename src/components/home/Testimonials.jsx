import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Ana Silva',
        role: 'Sócia da Clínica SaúdePlena',
        content: 'O site mudou a percepção dos nossos pacientes. Ficou muito profissional e os agendamentos pelo WhatsApp aumentaram na primeira semana.',
        stars: 5
    },
    {
        name: 'Carlos Mendes',
        role: 'Restaurante Sabor do Rio',
        content: 'A equipe da FlowAI entendeu exatamente o que eu queria. O cardápio digital é rápido e meus clientes adoram. Recomendo demais!',
        stars: 5
    },
    {
        name: 'João Ferreira',
        role: 'Contador Freelancer',
        content: 'Finalmente saí apenas do Instagram. Agora tenho um lugar profissional para mostrar meus serviços. O suporte deles é fantástico.',
        stars: 5
    }
];

const Testimonials = () => {
    return (
        <section id="depoimentos" className="py-24 bg-dark-2 relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary-light font-bold text-sm tracking-[3px] uppercase block mb-4"
                    >
                        Depoimentos
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-3xl md:text-5xl font-black mb-6"
                    >
                        O que dizem <span className="bg-gradient-primary bg-clip-text text-transparent">nossos clientes</span>
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-dark border border-dark-3 relative"
                        >
                            <Quote className="text-primary-light/20 absolute top-8 right-8" size={48} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(item.stars)].map((_, i) => (
                                    <Star key={i} size={16} className="text-accent fill-accent" />
                                ))}
                            </div>
                            <p className="text-gray text-lg leading-relaxed mb-8 relative z-10">
                                "{item.content}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {item.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">{item.name}</h4>
                                    <p className="text-primary-light text-sm">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
