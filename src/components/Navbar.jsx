import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    const location = useLocation();

    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/#hero' },
        { name: 'Sobre', href: '/#sobre' },
        { name: 'Serviços', href: '/#servicos' },
        { name: 'Processo', href: '/#processo' },
        { name: 'Portfólio', href: '/#portfolio' },
        { name: 'FAQ', href: '/#faq' },
    ];

    const handleLinkClick = (e, href) => {
        setIsOpen(false);
        if (isHome && href.startsWith('/#')) {
            e.preventDefault();
            const id = href.replace('/#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/logo.jpg" alt="FlowAI Logo" className="h-14 md:h-20 w-auto object-contain rounded-full shadow-sm" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className={`font-medium hover:text-accent transition-colors ${isHome && !scrolled ? 'text-gray-100' : 'text-gray-700'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent hover:bg-accent-hover text-primary font-bold py-2 px-6 rounded-full transition-all shadow-glow hover:scale-105"
                    >
                        Orçamento
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} color={isHome && !scrolled ? 'white' : 'var(--color-primary)'} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden p-5 flex flex-col gap-4 border-t border-gray-100">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-lg font-medium text-gray-800 py-2 border-b border-gray-50 last:border-0"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20um%20site.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-center text-primary font-bold py-3 rounded-lg mt-2"
                    >
                        Pedir Orçamento Agora
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
