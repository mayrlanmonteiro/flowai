import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const whatsappDisplay = import.meta.env.VITE_WHATSAPP_DISPLAY;
    const emailAddress = import.meta.env.VITE_EMAIL_ADDRESS;

    return (
        <footer className="bg-primary text-gray-300 pt-10 pb-6 md:pt-16 md:pb-8">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8 mb-8 md:mb-12">
                {/* Brand - Span 2 cols on very small screens, 1 on others if desired, but sticking to grid-cols-2 for layout match */}
                <div className="col-span-2 xs:col-span-1 md:col-span-1 space-y-3 md:space-y-4">
                    <Link to="/" className="block">
                        <img src="/logo.jpg" alt="FlowAI Logo" className="h-10 md:h-12 w-auto object-contain brightness-0 invert" />
                    </Link>
                    <p className="text-xs md:text-sm leading-relaxed text-gray-400">
                        Estúdio digital especializado em criação de sites profissionais para negócios de Teresina e região.
                        Tecnologia e estratégia unidas para gerar resultados.
                    </p>

                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h3>
                    <ul className="space-y-2 text-xs md:text-sm">
                        <li><a href="/#home" className="hover:text-accent transition-colors">Início</a></li>
                        <li><a href="/#sobre" className="hover:text-accent transition-colors">Sobre</a></li>
                        <li><a href="/#servicos" className="hover:text-accent transition-colors">Serviços</a></li>
                        <li><a href="/#portfolio" className="hover:text-accent transition-colors">Portfólio</a></li>
                        <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                        <li><a href="/#contato" className="hover:text-accent transition-colors">Contato</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Serviços</h3>
                    <ul className="space-y-2 text-xs md:text-sm">
                        <li className="hover:text-accent transition-colors">Sites Institucionais</li>
                        <li className="hover:text-accent transition-colors">Lojas Virtuais</li>
                        <li className="hover:text-accent transition-colors">Landing Pages</li>
                        <li className="hover:text-accent transition-colors">Otimização SEO</li>
                        <li className="hover:text-accent transition-colors">Identidade Visual</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="col-span-2 md:col-span-1">
                    <h3 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Contato</h3>
                    <ul className="space-y-3 text-xs md:text-sm">
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-accent" />
                            <span>{whatsappDisplay}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-accent" />
                            <span>{emailAddress}</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-accent shrink-0" />
                            <span>Teresina – Piauí</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom */}
            <div className="container pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                <p>&copy; {currentYear} FlowAI Soluções Digitais. Todos os direitos reservados.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <a href="#" className="hover:text-white">Política de Privacidade</a>
                    <a href="#" className="hover:text-white">Termos de Uso</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
