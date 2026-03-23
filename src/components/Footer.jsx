import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const whatsappDisplay = import.meta.env.VITE_WHATSAPP_DISPLAY;
    const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

    return (
        <footer className="bg-dark pt-24 pb-12 relative overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="text-3xl font-black text-white tracking-tighter mb-6 block">
                            Flow<span className="text-primary-light">AI</span>
                        </Link>
                        <p className="text-gray text-sm leading-relaxed mb-8">
                            Especialistas em criar sites que transformam visitantes em clientes fiéis através de design premium e tecnologia de ponta.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-dark-2 border border-dark-3 rounded-full flex items-center justify-center text-gray hover:text-primary-light hover:border-primary-light transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-dark-2 border border-dark-3 rounded-full flex items-center justify-center text-gray hover:text-primary-light hover:border-primary-light transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-dark-2 border border-dark-3 rounded-full flex items-center justify-center text-gray hover:text-primary-light hover:border-primary-light transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[3px]">Serviços</h4>
                        <ul className="space-y-4">
                            <li><a href="#servicos" className="text-gray text-sm hover:text-primary-light transition-colors">Sites Institucionais</a></li>
                            <li><a href="#servicos" className="text-gray text-sm hover:text-primary-light transition-colors">Landing Pages</a></li>
                            <li><a href="#servicos" className="text-gray text-sm hover:text-primary-light transition-colors">Loja Virtual</a></li>
                            <li><a href="#servicos" className="text-gray text-sm hover:text-primary-light transition-colors">Sistemas Web</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[3px]">Empresa</h4>
                        <ul className="space-y-4">
                            <li><a href="#sobre" className="text-gray text-sm hover:text-primary-light transition-colors">Sobre Nós</a></li>
                            <li><a href="#beneficios" className="text-gray text-sm hover:text-primary-light transition-colors">Benefícios</a></li>
                            <li><a href="#portfolio" className="text-gray text-sm hover:text-primary-light transition-colors">Portfólio</a></li>
                            <li><a href="#contato" className="text-gray text-sm hover:text-primary-light transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase text-xs tracking-[3px]">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray text-sm">
                                <Phone size={18} className="text-primary-light" />
                                {whatsappDisplay}
                            </li>
                            <li className="flex items-center gap-3 text-gray text-sm">
                                <Mail size={18} className="text-primary-light" />
                                {emailAddress}
                            </li>
                            <li className="flex items-center gap-3 text-gray text-sm">
                                <MapPin size={18} className="text-primary-light" />
                                Teresina, Piauí
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-dark-3 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs">
                        &copy; {currentYear} FlowAI Soluções Digitais. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        </footer>
    );
};

export default Footer;
