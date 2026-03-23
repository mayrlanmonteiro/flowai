import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
    return (
        <section id="sobre" className="section-padding bg-gray-50 overflow-hidden">
            <div className="container grid lg:grid-cols-2 gap-12 items-center">
                {/* Image / Visuals */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative z-10 bg-white p-2 rounded-2xl shadow-xl transform rotate-1">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                            alt="Equipe trabalhando em projeto digital"
                            className="rounded-xl w-full h-auto object-cover grayscale transition-all hover:grayscale-0 duration-500"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute top-10 -left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Sobre Nós</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-primary">
                        FlowAI: Tecnologia com toque humano em Teresina
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Nascemos com a missão de modernizar o mercado digital de Piauí. Somos um estúdio que une design premium, estratégia de negócios e inteligência artificial para criar soluções que realmente funcionam.
                    </p>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Não entregamos apenas código; entregamos parceira. Entendemos a realidade dos pequenos e médios negócios locais e oferecemos um atendimento próximo, transparente e sem "tecniquês" complicado.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="bg-green-100 p-1 rounded text-green-600 mt-1"><Check size={16} /></div>
                            <div>
                                <h4 className="font-bold text-primary">Processo Claro</h4>
                                <p className="text-sm text-gray-500">Você acompanha cada etapa, sem surpresas.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-100 p-1 rounded text-blue-600 mt-1"><Check size={16} /></div>
                            <div>
                                <h4 className="font-bold text-primary">Design Sob Medida</h4>
                                <p className="text-sm text-gray-500">Nada de templates prontos e genéricos.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="bg-purple-100 p-1 rounded text-purple-600 mt-1"><Check size={16} /></div>
                            <div>
                                <h4 className="font-bold text-primary">Tecnologia de Ponta</h4>
                                <p className="text-sm text-gray-500">Usamos IA para otimizar tempo e qualidade.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
