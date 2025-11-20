import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-nothing-black min-h-screen font-sans text-nothing-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 bg-grid">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nothing-black/50 to-nothing-black pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 border border-nothing-red text-nothing-red text-xs font-dot uppercase tracking-widest mb-6 bg-nothing-red/10">
                            Est. 2018
                        </span>
                        <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight font-dot uppercase">
                            The Future of <br />
                            <span className="text-nothing-red">Finance</span> is Here<Link to="/ft-premium" className="cursor-default hover:text-nothing-red transition-colors">.</Link>
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-mono">
                            ESCP Students for Finance. Bridging the gap between academic theory and market reality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/join" className="btn-nothing">
                                Become a Member
                            </Link>
                            <Link to="/events" className="px-6 py-3 border border-white/20 text-white hover:border-nothing-white transition-colors font-dot uppercase tracking-widest text-sm">
                                View Events
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* Features Grid */}
            < section className="py-24 px-6 bg-nothing-black border-t border-white/10" >
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: <TrendingUp size={32} />, title: "Market Analysis", desc: "Weekly deep dives into global markets and asset classes." },
                            { icon: <Users size={32} />, title: "Networking", desc: "Connect with alumni and professionals from top tier firms." },
                            { icon: <BookOpen size={32} />, title: "Education", desc: "Workshops on valuation, modeling, and trading strategies." }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="card-nothing group"
                            >
                                <div className="mb-6 text-nothing-red group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-4 text-white font-dot uppercase">{feature.title}</h3>
                                <p className="text-gray-400 font-mono text-sm">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* President's Welcome */}
            < section className="py-24 px-6 bg-nothing-dark-grey border-y border-white/10 bg-grid" >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/3">
                        <div className="aspect-[3/4] border border-white/20 relative group">
                            <div className="absolute inset-0 bg-nothing-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="President" className="w-full h-full object-cover grayscale contrast-125" />
                            <div className="absolute bottom-0 left-0 right-0 bg-nothing-black/90 p-6 border-t border-white/20">
                                <h3 className="text-2xl font-bold text-white font-dot uppercase">Alex Rivera</h3>
                                <p className="text-nothing-red font-mono text-sm">President, 2024-2025</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Leadership</span>
                        <h2 className="text-4xl font-bold mb-6 font-dot uppercase">Welcome from the President</h2>
                        <p className="text-xl text-gray-300 leading-relaxed mb-6 font-mono">
                            "At ESCP Students for Finance, we believe that the best way to learn finance is to do finance. Our society is built on the pillars of practical application, rigorous analysis, and community support. Whether you are just starting your journey or looking to break into top-tier investment banking, you will find a home here."
                        </p>
                        <div className="h-px w-24 bg-nothing-red mb-6" />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-12 invert opacity-70" />
                    </div>
                </div>
            </section >

            {/* Alumni Success */}
            < section className="py-24 px-6 bg-nothing-black" >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center font-dot uppercase">Our Alumni Network</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Elena K.", role: "Analyst at Goldman Sachs", quote: "The technical workshops gave me the edge I needed for interviews." },
                            { name: "Marc D.", role: "Associate at Blackstone", quote: "Networking events opened doors I didn't know existed." },
                            { name: "Sophie L.", role: "Consultant at McKinsey", quote: "I met my future co-founders at the annual trading competition." }
                        ].map((alum, i) => (
                            <div key={i} className="p-8 border border-white/10 hover:border-nothing-red transition-colors bg-nothing-dark-grey relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Users size={64} />
                                </div>
                                <p className="text-lg text-gray-300 italic mb-6 font-mono">"{alum.quote}"</p>
                                <div className="border-t border-white/10 pt-4">
                                    <h4 className="font-bold text-white font-dot uppercase">{alum.name}</h4>
                                    <p className="text-nothing-red text-sm font-mono">{alum.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Upcoming Events Preview */}
            < section className="py-24 px-6 bg-nothing-black border-t border-white/10" >
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-4xl font-bold font-dot uppercase">Upcoming Events</h2>
                        <Link to="/events" className="text-nothing-red hover:text-white transition-colors flex items-center gap-2 font-dot uppercase tracking-widest text-sm">
                            View All <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group relative overflow-hidden border border-white/10 aspect-video bg-nothing-dark-grey">
                            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800" alt="Event" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity grayscale" />
                            <div className="absolute inset-0 bg-grid opacity-20" />
                            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                                <span className="text-nothing-red font-bold mb-1 block font-mono">March 15, 2024</span>
                                <h3 className="text-2xl font-bold text-white font-dot uppercase">Investment Banking Workshop</h3>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden border border-white/10 aspect-video bg-nothing-dark-grey">
                            <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" alt="Event" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity grayscale" />
                            <div className="absolute inset-0 bg-grid opacity-20" />
                            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
                                <span className="text-nothing-red font-bold mb-1 block font-mono">April 2, 2024</span>
                                <h3 className="text-2xl font-bold text-white font-dot uppercase">Guest Speaker: CEO of BlackRock France</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
