import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Process from '../components/home/Process';
import Portfolio from '../components/home/Portfolio';
import Benefits from '../components/home/Benefits';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import Contact from '../components/home/Contact';
import Comparison from '../components/home/Comparison';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>FlowAI | Sites Profissionais em Teresina e Região</title>
                <meta name="description" content="Especialistas em criação de sites, landing pages e lojas virtuais em Teresina. Transformamos sua presença digital em resultados reais." />
                <link rel="canonical" href="https://flowai.com.br/" />
            </Helmet>

            <main>
                <Hero />
                <Services />
                <About />
                <Benefits />
                <Comparison />
                <Process />
                <Portfolio />
                <Testimonials />
                <FAQ />
                <Contact />
            </main>
        </>
    );
};

export default Home;
