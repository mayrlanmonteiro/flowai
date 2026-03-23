import React from 'react';
import { motion } from 'framer-motion';
import { Phone, PlayCircle, Search, Bolt } from 'lucide-react';

const PARTICLE_COUNT = 8;
const INITIAL_PARTICLES = [...Array(PARTICLE_COUNT)].map(() => ({
    initialX: (Math.random() * 100) + 'vw',
    animateX: (Math.random() * 100 + 5) + 'vw',
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 10
}));

const Hero = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const particles = INITIAL_PARTICLES;

    return (
        <section id="inicio" className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden pt-20 px-6">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(108,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(108,58,237,0.05)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
            
            {/* Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-light rounded-full opacity-30"
                        initial={{ y: '110vh', x: p.initialX, opacity: 0 }}
                        animate={{ y: '-10vh', x: p.animateX, opacity: [0, 0.3, 0.3, 0] }}
                        transition={{ 
                            duration: p.duration, 
                            repeat: Infinity, 
                            delay: p.delay,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-[60px] items-center relative z-[2]">
                <div className="text-center md:text-left">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 py-2 px-4.5 bg-primary/15 border border-primary/30 rounded-full text-xs font-semibold text-primary-light mb-6"
                    >
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                        Desenvolvimento Web em Teresina
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 text-white"
                    >
                        Sites profissionais que colocam seu negócio no <span className="bg-gradient-primary bg-clip-text text-transparent">mapa digital</span>.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray leading-relaxed mb-9 max-w-[520px] mx-auto md:mx-0"
                    >
                        Na FlowAI, criamos sites rápidos, bonitos e pensados para converter. Mais do que pixels, construímos sua presença online com estratégia e tecnologia.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4 mb-12 justify-center md:justify-start"
                    >
                        <a href={`https://wa.me/${whatsappNumber}`} className="bg-gradient-primary text-white py-4 px-8 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(108,58,237,0.4)] flex items-center gap-2.5 overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Phone size={20} />
                            Solicitar orçamento grátis
                        </a>
                        <a href="#portfolio" className="bg-transparent text-white border-2 border-dark-3 py-4 px-8 rounded-full font-semibold transition-all hover:border-primary hover:bg-primary/10 hover:-translate-y-0.5 flex items-center gap-2.5">
                            <PlayCircle size={20} />
                            Ver portfólio
                        </a>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex gap-10 justify-center md:justify-start"
                    >
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">+50</span>
                            <span className="text-[0.8rem] text-gray font-medium">Projetos entregues</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">98%</span>
                            <span className="text-[0.8rem] text-gray font-medium">Clientes satisfeitos</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">+5</span>
                            <span className="text-[0.8rem] text-gray font-medium">Anos de experiência</span>
                        </div>
                    </motion.div>
                </div>

                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative rounded-[20px] overflow-hidden bg-dark-2 border border-dark-3 shadow-[0_25px_60px_rgba(0,0,0,0.3),0_0_40px_rgba(108,58,237,0.3)]"
                    >
                        <div className="flex items-center gap-2 py-3.5 px-4.5 bg-dark-3 border-b border-dark-4">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                            <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                            <div className="ml-3 bg-dark rounded-md py-1.5 px-3.5 text-[0.75rem] text-gray flex items-center gap-1.5 flex-1">
                                <Search size={10} className="text-accent" />
                                seusite.flowai.com.br
                            </div>
                        </div>
                        <div className="p-7 min-h-[320px] bg-gradient-to-b from-dark-2 to-primary/5">
                            <div className="flex justify-between items-center mb-7">
                                <div className="w-[100px] h-3 bg-dark-4 rounded-full"></div>
                                <div className="flex gap-4">
                                    <div className="w-11 h-2 bg-dark-4 rounded-full"></div>
                                    <div className="w-11 h-2 bg-dark-4 rounded-full"></div>
                                    <div className="w-11 h-2 bg-dark-4 rounded-full"></div>
                                </div>
                            </div>
                            <div className="space-y-2 mb-6">
                                <div className="w-[85%] h-[18px] bg-gradient-primary opacity-60 rounded-full"></div>
                                <div className="w-[65%] h-[18px] bg-gradient-primary opacity-40 rounded-full"></div>
                                <div className="w-[90%] h-2 bg-dark-4 rounded-full !mt-3.5"></div>
                                <div className="w-[70%] h-2 bg-dark-4 rounded-full"></div>
                            </div>
                            <div className="flex gap-2.5 mb-6">
                                <div className="w-[90px] h-[30px] rounded-full bg-gradient-primary"></div>
                                <div className="w-[90px] h-[30px] rounded-full bg-dark-4"></div>
                            </div>
                            <div className="flex gap-3">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="flex-1 bg-white/3 border border-dark-4 rounded-xl p-4">
                                        <div className="w-7 h-7 bg-gradient-primary opacity-60 rounded-lg mb-2.5"></div>
                                        <div className="h-1.5 bg-dark-4 rounded-full mb-1"></div>
                                        <div className="h-1.5 w-4/5 bg-dark-4 rounded-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Badges */}
                    <motion.div 
                        initial={{ y: 0 }}
                        animate={{ y: -12 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute top-[15%] -right-[15px] bg-dark/95 backdrop-blur-md border border-dark-3 rounded-xl p-3 flex items-center gap-2.5 z-[5] shadow-xl"
                    >
                        <div className="w-9 h-9 bg-accent/15 rounded-lg flex items-center justify-center text-accent text-sm">
                            <Search size={14} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[0.75rem] font-bold text-white leading-tight">SEO Otimizado</span>
                            <span className="text-[0.65rem] text-gray">Apareça no Google</span>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ y: 0 }}
                        animate={{ y: -12 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-[20%] -left-[20px] bg-dark/95 backdrop-blur-md border border-dark-3 rounded-xl p-3 flex items-center gap-2.5 z-[5] shadow-xl"
                    >
                        <div className="w-9 h-9 bg-primary/15 rounded-lg flex items-center justify-center text-primary-light text-sm">
                            <Bolt size={14} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[0.75rem] font-bold text-white leading-tight">99/100 Speed</span>
                            <span className="text-[0.65rem] text-gray">PageSpeed Score</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
