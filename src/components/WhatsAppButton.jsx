import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
    return (
        <a
            href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20quero%20um%20or%C3%A7amento!`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-transparent rounded-full shadow-lg hover:scale-110 transition-transform z-40 flex items-center justify-center animate-bounce-slow group"
            aria-label="Falar no WhatsApp"
            style={{ boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)' }}
        >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
            <span className="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Fale conosco!
            </span>
        </a>
    );
};

export default WhatsAppButton;
