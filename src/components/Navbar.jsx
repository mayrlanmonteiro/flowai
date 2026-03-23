import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Benefícios', href: '#beneficios' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Preços', href: '#precos' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
            scrolled 
            ? 'bg-dark/95 backdrop-blur-md border-b border-primary/15 py-2.5' 
            : 'bg-transparent py-4'
        }`}>
            <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2.5 no-underline font-extrabold text-2xl text-white">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center font-black text-sm text-white">
                        FA
                    </div>
                    <span className="bg-gradient-primary bg-clip-text text-transparent">FlowAI</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray hover:text-white text-sm font-medium transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-primary after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        className="bg-gradient-primary text-white py-2.5 px-6 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(108,58,237,0.4)]"
                    >
                        Fale Conosco
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-dark/98 flex flex-col items-center justify-center gap-6 z-[998] transition-all duration-300 md:hidden ${
                isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-white text-xl font-medium"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href={`https://wa.me/${whatsappNumber}`}
                    className="bg-gradient-primary text-white py-3 px-8 rounded-full font-bold text-lg mt-4"
                    onClick={() => setIsOpen(false)}
                >
                    Fale Conosco
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
