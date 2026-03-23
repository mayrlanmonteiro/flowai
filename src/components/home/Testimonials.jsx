import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Ana Silva',
        role: 'Sócia da Clínica SaúdePlena',
        content: 'O site mudou a percepção dos nossos pacientes. Ficou muito profissional e os agendamentos pelo WhatsApp aumentaram na primeira semana.',
        stars: 5,
        location: 'Teresina, PI'
    },
    {
        name: 'Carlos Mendes',
        role: 'Restaurante Sabor do Rio',
        content: 'A equipe da FlowAI entendeu exatamente o que eu queria. O cardápio digital é rápido e meus clientes adoram. Recomendo demais!',
        stars: 5,
        location: 'Timon, MA'
    },
    {
        name: 'João Ferreira',
        role: 'Contador',
        content: 'Finalmente saí apenas do Instagram. Agora tenho um lugar profissional para mostrar meus serviços e artigos. O suporte deles é nota 10.',
        stars: 5,
        location: 'Teresina, PI'
    }
];

const Testimonials = () => {
    return (
        <section className="section-padding bg-primary text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px]"></div>

            <div className="container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wide uppercase text-sm">Depoimentos</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                        O que dizem nossos clientes
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative"
                        >
                            <Quote className="absolute top-6 right-6 text-white/10" size={40} />

                            <div className="flex gap-1 mb-4">
                                {[...Array(item.stars)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic mb-6 leading-relaxed">"{item.content}"</p>

                            <div className="pt-4 border-t border-white/10">
                                <h4 className="font-bold text-white">{item.name}</h4>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-400">{item.role}</span>
                                    <span className="text-accent text-xs">{item.location}</span>
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
