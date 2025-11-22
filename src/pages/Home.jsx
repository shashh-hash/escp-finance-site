import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, Users, Calendar, ArrowUpRight, Zap, Activity, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    const stats = [
        { label: "Founding Year", value: "Est. 2025" },
        { label: "Campus Based", value: "Turin" },
        { label: "Student Society", value: "New" },
        { label: "Student Led", value: "100%" }
    ];

    const features = [
        {
            title: "Investment Banking",
            description: "Master M&A, capital markets, and valuation through hands-on workshops.",
            icon: <BarChart3 className="w-8 h-8" />,
            link: "/articles"
        },
        {
            title: "Private Equity",
            description: "Deep dive into LBO modeling, deal structuring, and portfolio management.",
            icon: <Shield className="w-8 h-8" />,
            link: "/articles"
        },
        {
            title: "Market Finance",
            description: "Explore quantitative strategies, trading algorithms, and market analysis.",
            icon: <TrendingUp className="w-8 h-8" />,
            link: "/articles"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-esf-midnight font-sans selection:bg-esf-accent selection:text-esf-midnight">

            {/* Hero Section - Premium & Professional */}
            <section className="relative min-h-screen flex flex-col justify-center p-4 md:p-8 pt-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-esf-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-esf-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

                    {/* Main Title Area */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-esf-midnight/10 mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-esf-accent animate-pulse"></span>
                                <span className="text-sm font-medium text-esf-blue tracking-wide uppercase">Est. 2025 • Turin Campus</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] tracking-tight mb-8">
                                The Future of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-esf-midnight to-esf-blue">Finance</span>
                            </h1>

                            <p className="text-lg md:text-xl text-esf-blue max-w-xl leading-relaxed mb-10">
                                Bridging the gap between academic theory and professional practice. We are building the next generation of finance leaders.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link to="/join" className="px-8 py-4 bg-esf-accent text-esf-midnight font-heading font-bold rounded-lg hover:bg-white transition-all duration-300 shadow-lg shadow-esf-accent/20 flex items-center gap-2 group">
                                    Join the Society
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link to="/about" className="px-8 py-4 border border-esf-midnight/10 text-esf-midnight font-medium rounded-lg hover:bg-esf-midnight/5 transition-colors duration-300 backdrop-blur-sm">
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Side Grid - Professional Stats */}
                    <div className="lg:col-span-4 flex flex-col gap-6 mt-12 lg:mt-0">
                        {/* Stat Card */}
                        <div className="flex-1 bg-slate-50/80 backdrop-blur-md rounded-lg p-8 border border-esf-midnight/10 flex flex-col justify-center group hover:border-esf-accent/30 transition-colors">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 rounded-xl bg-esf-blue/30 text-esf-accent">
                                    <Users className="w-6 h-6" />
                                </div>
                                <ArrowUpRight className="w-5 h-5 text-esf-blue group-hover:text-esf-midnight transition-colors" />
                            </div>
                            <div className="text-5xl font-heading font-bold text-esf-midnight mb-2">2025</div>
                            <div className="text-esf-blue font-medium">Founding Year</div>
                        </div>

                        {/* Article Card */}
                        <div className="flex-1 bg-gradient-to-br from-esf-accent/10 to-esf-blue/10 rounded-lg p-8 border border-esf-midnight/10 flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-esf-accent/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="relative z-10">
                                <div className="text-esf-accent text-sm font-bold uppercase tracking-wider mb-2">Featured Article</div>
                                <h3 className="text-2xl font-heading font-bold mb-2">The Future of Fintech</h3>
                                <p className="text-esf-blue text-sm mb-6">Explore how technology is reshaping financial services.</p>

                                <Link to="/articles" className="inline-flex items-center gap-2 text-sm font-bold hover:text-esf-accent transition-colors">
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Marquee Section - Clean & Professional */}
            <section className="py-20 bg-white overflow-hidden">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex gap-16 px-8">
                            {["Investment Banking", "Private Equity", "Asset Management", "Corporate Finance", "Fintech", "Sales & Trading"].map((text, j) => (
                                <div key={j} className="flex items-center gap-4 group cursor-default">
                                    <span className="text-4xl md:text-6xl font-heading font-bold text-esf-midnight/10 group-hover:text-esf-blue transition-colors duration-300 whitespace-nowrap">
                                        {text}
                                    </span>
                                    <div className="w-2 h-2 bg-esf-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid - Bento Style */}
            <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Focus Areas</h2>
                    <p className="text-xl text-esf-blue max-w-2xl">Comprehensive coverage of the financial landscape through specialized tracks and resources.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-slate-100/80 backdrop-blur-sm rounded-lg p-10 border border-esf-midnight/10 hover:border-esf-accent/30 hover:bg-slate-200/80 transition-all duration-300 group h-[400px] flex flex-col justify-between">

                            <div>
                                <div className="w-14 h-14 bg-esf-blue/30 rounded-lg flex items-center justify-center mb-8 text-esf-accent group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-heading font-bold mb-4">{feature.title}</h3>
                                <p className="text-esf-blue leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div>
                                <Link to={feature.link} className="inline-flex items-center gap-2 text-sm font-bold text-esf-midnight group-hover:text-esf-accent transition-colors">
                                    Explore Track <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-4 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-100 pointer-events-none"></div>
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
                        Ready to Launch Your Career?
                    </h2>
                    <p className="text-xl text-esf-blue mb-12 max-w-2xl mx-auto">
                        Join a community of ambitious students and gain access to exclusive events, workshops, and networking opportunities.
                    </p>
                    <Link to="/join" className="inline-block px-12 py-5 bg-white text-esf-midnight font-heading font-bold text-lg rounded-lg hover:bg-esf-accent transition-all duration-300 shadow-xl shadow-white/10">
                        Become a Member
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
