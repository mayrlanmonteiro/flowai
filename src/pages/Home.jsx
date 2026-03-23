import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import Portfolio from '../components/home/Portfolio';
import Pricing from '../components/home/Pricing';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>FlowAI | Sites que geram resultados em Teresina e Região</title>
                <meta name="description" content="Desenvolvimento de sites profissionais, lojas virtuais e landing pages em Teresina. Foco em conversão, design moderno e resultados para seu negócio." />
                <link rel="canonical" href="https://flowai.com.br/" />
            </Helmet>

            <main>
                <Hero />
                <Benefits />
                <About />
                <Services />
                <Process />
                <Portfolio />
                <Testimonials />
                <Pricing />
                <FAQ />
                <Contact />
            </main>
        </>
    );
};

export default Home;
