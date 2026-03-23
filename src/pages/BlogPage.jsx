import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
    const posts = [
        {
            title: "Por que sua empresa precisa de um site em 2025?",
            excerpt: "Ter apenas redes sociais não é mais suficiente. Descubra os riscos de depender apenas do algoritmo.",
            date: "12 Dez 2024",
            category: "Estratégia"
        },
        {
            title: "5 Erros que matam a conversão do seu site",
            excerpt: "Seu site recebe visitas mas ninguém entra em contato? Veja o que pode estar errado.",
            date: "05 Dez 2024",
            category: "Otimização"
        },
        {
            title: "Landing Page vs Site Institucional: Qual escolher?",
            excerpt: "Entenda a diferença e saiba qual é o melhor investimento para o seu momento atual.",
            date: "28 Nov 2024",
            category: "Dicas"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Blog | FlowAI</title>
                <meta name="description" content="Artigos sobre marketing digital, criação de sites e tecnologia para negócios." />
            </Helmet>

            <div className="pt-24 min-h-screen bg-white">
                <div className="container py-12">
                    <h1 className="text-4xl font-bold mb-4 text-center text-primary">Blog & Conteúdos</h1>
                    <p className="text-gray-500 mb-16 text-center max-w-2xl mx-auto">Dicas e insights para você dominar o digital.</p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="h-48 bg-gray-200 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop')] bg-cover"></div>
                                <div className="p-6">
                                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{post.category}</span>
                                    <h3 className="text-xl font-bold mt-2 mb-3 text-primary hover:text-accent transition-colors">{post.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                    <span className="text-gray-400 text-xs">{post.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter CTA */}
                    <div className="bg-primary rounded-2xl p-8 md:p-12 mt-20 text-center text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold mb-4">Receba novidades no seu e-mail</h2>
                            <p className="text-gray-300 mb-6">Cadastre-se para receber conteúdos exclusivos sobre negócios digitais.</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                <input type="email" placeholder="Seu melhor e-mail" className="px-4 py-3 rounded-lg text-gray-900 outline-none w-full" />
                                <button className="bg-accent text-primary font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors">Inscrever</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
