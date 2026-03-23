import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout, ShoppingCart, Rocket, Settings } from 'lucide-react';

const ServicesPage = () => {
    return (
        <>
            <Helmet>
                <title>Nossos Serviços | FlowAI</title>
                <meta name="description" content="Conheça todos os serviços de desenvolvimento web da FlowAI. Sites, Lojas Virtuais e Landing Pages." />
            </Helmet>

            <div className="pt-24 min-h-screen bg-gray-50">
                <div className="bg-primary text-white py-16">
                    <div className="container text-center">
                        <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
                        <p className="text-gray-400 max-w-xl mx-auto">Soluções completas para levar seu negócio para o próximo nível digital.</p>
                    </div>
                </div>

                <div className="container section-padding">
                    <div className="grid gap-12 max-w-4xl mx-auto">
                        {/* Service Items (Reusing simple structure for now) */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start">
                            <div className="bg-blue-100 p-4 rounded-xl text-primary shrink-0">
                                <Layout size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Sites Institucionais</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Desenvolvemos o cartão de visitas digital da sua empresa. Focado em apresentar sua história, serviços e diferenciais de forma clara e elegante.
                                </p>
                                <h4 className="font-bold text-sm text-gray-800 mb-2">O que está incluso:</h4>
                                <ul className="list-disc list-inside text-gray-500 space-y-1">
                                    <li>Design exclusivo e responsivo</li>
                                    <li>Até 5 páginas de conteúdo</li>
                                    <li>Integração com WhatsApp e Mapas</li>
                                    <li>Painel administrativo fácil</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start">
                            <div className="bg-green-100 p-4 rounded-xl text-green-700 shrink-0">
                                <ShoppingCart size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Lojas Virtuais (E-commerce)</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Sua loja aberta 24 horas por dia. Plataforma robusta para gestão de produtos, estoque, clientes e pagamentos.
                                </p>
                                <ul className="list-disc list-inside text-gray-500 space-y-1">
                                    <li>Cadastro ilimitado de produtos</li>
                                    <li>Cálculo de frete automático</li>
                                    <li>Pagamentos via PIX e Cartão</li>
                                    <li>Relatórios de vendas</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start">
                            <div className="bg-purple-100 p-4 rounded-xl text-purple-700 shrink-0">
                                <Rocket size={32} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-3">Landing Pages de Alta Conversão</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    Páginas focadas em uma única missão: vender ou capturar contatos. Essencial para quem faz tráfego pago (Google/Instagram Ads).
                                </p>
                                <ul className="list-disc list-inside text-gray-500 space-y-1">
                                    <li>Carregamento ultra-rápido</li>
                                    <li>Copywriting persuasivo (Opcional)</li>
                                    <li>Design focado em conversão</li>
                                    <li>Instalação de Pixels de rastreamento</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesPage;
