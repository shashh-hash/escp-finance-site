import React from 'react';
import { motion } from 'framer-motion';

const team = [
    { name: "Alex Rivera", role: "President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
    { name: "Sarah Chen", role: "Head of Research", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "James Wilson", role: "Head of Events", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
    { name: "Maria Garcia", role: "Treasurer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
];

const About = () => {
    return (
        <div className="min-h-screen bg-nothing-black text-nothing-white pt-24 pb-12 px-6 bg-grid">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Who We Are</span>
                    <h1 className="text-5xl font-bold mb-6 font-dot uppercase">The Team</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
                        United by ambition. Driven by excellence.
                    </p>
                </motion.div>

                <h2 className="text-3xl font-bold mb-12 text-center font-dot uppercase">Our Team</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden border border-white/10 bg-nothing-dark-grey"
                        >
                            <div className="aspect-square overflow-hidden relative">
                                <div className="absolute inset-0 bg-nothing-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0 contrast-125"
                                />
                            </div>
                            <div className="p-6 border-t border-white/10 bg-nothing-black">
                                <h3 className="text-xl font-bold text-white font-dot uppercase">{member.name}</h3>
                                <p className="text-nothing-red font-medium font-mono text-sm">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* History Section */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold mb-12 text-center font-dot uppercase">Our History</h2>
                    <div className="space-y-8 max-w-3xl mx-auto">
                        {[
                            { year: "2018", title: "Founded", desc: "Established by a group of 5 students passionate about finance." },
                            { year: "2020", title: "Expansion", desc: "Launched the first inter-campus trading competition." },
                            { year: "2022", title: "Partnerships", desc: "Secured key partnerships with major banks in Paris and London." },
                            { year: "2024", title: "Digital Era", desc: "Launched new digital platform and expanded to 500+ members." }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="text-nothing-red font-bold text-xl w-24 text-right font-mono">{item.year}</div>
                                <div className="border-l border-white/10 pl-6 pb-2 group-hover:border-nothing-red transition-colors">
                                    <h3 className="text-xl font-bold text-white mb-2 font-dot uppercase">{item.title}</h3>
                                    <p className="text-gray-400 font-mono text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Advisory Board */}
                <div>
                    <h2 className="text-3xl font-bold mb-12 text-center font-dot uppercase">Advisory Board</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Prof. Jean Dupont", role: "Professor of Finance, ESCP" },
                            { name: "Marie Laurent", role: "MD at Rothschild & Co" },
                            { name: "Thomas Weber", role: "Partner at Bain & Company" }
                        ].map((advisor, i) => (
                            <div key={i} className="bg-nothing-dark-grey p-6 border border-white/10 hover:border-nothing-red transition-colors text-center group">
                                <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all border border-white/10">
                                    <img src={`https://ui-avatars.com/api/?name=${advisor.name}&background=333&color=fff`} alt={advisor.name} />
                                </div>
                                <h3 className="font-bold text-white text-lg font-dot uppercase">{advisor.name}</h3>
                                <p className="text-nothing-red text-sm font-mono">{advisor.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
