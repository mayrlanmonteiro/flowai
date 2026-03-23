import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => {
    // Reusing projects data or expanding it
    const projects = [
        {
            id: 1,
            client: 'Clínica SaúdePlena',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
            tags: ['Site Institucional', 'Agendamento']
        },
        {
            id: 2,
            client: 'Restaurante Sabor do Rio',
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
            tags: ['Cardápio Digital', 'QR Code']
        },
        {
            id: 3,
            client: 'Contabilize Teresina',
            image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
            tags: ['Site Corporativo', 'SEO']
        },
        {
            id: 4,
            client: 'Boutique Flor de Lis',
            image: 'https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=1920&auto=format&fit=crop',
            tags: ['E-commerce', 'Moda']
        },
        {
            id: 5,
            client: 'Advocacia Piauí',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1920&auto=format&fit=crop',
            tags: ['Institucional', 'Blog Jurídico']
        },
        {
            id: 6,
            client: 'TechStart Solutions',
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop',
            tags: ['Landing Page', 'SaaS']
        }
    ];

    return (
        <>
            <Helmet>
                <title>Portfólio | FlowAI</title>
                <meta name="description" content="Veja nossos casos de sucesso. Sites desenvolvidos para empresas de Teresina e região." />
            </Helmet>

            <div className="pt-24 min-h-screen">
                <div className="container py-12 text-center">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Nosso Portfólio</h1>
                    <p className="text-gray-500 mb-12">Confira alguns dos projetos entregues pela nossa equipe.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="group rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                                <div className="aspect-video overflow-hidden bg-gray-200 relative">
                                    <img src={project.image} alt={project.client} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold border border-white px-6 py-2 rounded-full backdrop-blur-sm">Ver Detalhes</span>
                                    </div>
                                </div>
                                <div className="p-6 text-left">
                                    <h3 className="text-xl font-bold text-primary mb-2">{project.client}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16">
                        <Link to="/" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent">
                            <ArrowLeft size={20} /> Voltar para Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioPage;
