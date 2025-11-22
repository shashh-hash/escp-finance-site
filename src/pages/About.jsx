import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import lorenzoImg from '../assets/lorenzo.jpg';

const About = () => {
    const [activeTab, setActiveTab] = useState("Board");

    const teamData = {
        "Board": [
            { name: "Lorenzo Sargiani", role: "President", image: lorenzoImg, isPresident: true },
            { name: "Ines Desmaretz", role: "Vice President", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
            { name: "Daria Iannuzzi", role: "Vice President", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
            { name: "Christos Gerontopoulos", role: "Board Member", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
            { name: "Martina Proietti Silvestri", role: "Board Member", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" },
            { name: "Alex Toumasson", role: "Board Member", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
            { name: "Lucas Thai", role: "Board Member", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
        ],
        "Strategy": [
            { name: "Flavio Antonuzzo", role: "Head of Strategy", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
            { name: "Tommaso Girani", role: "Head of Strategy", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=800" },
            { name: "Carlo Giulio Rizzuto", role: "Strategy Associate", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
        ],
        "Events": [
            { name: "Daria Iannuzzi", role: "Head of Events", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800" },
            { name: "Martina Proietti Silvestri", role: "Head of Events", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" },
            { name: "Armand Vahé Francesco Gaidc", role: "Events Associate", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
        ],
        "Research": [
            { name: "Adriano Cogorno", role: "Head of Research", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
            { name: "Giuseppe Mansueto", role: "Head of Research", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
            { name: "Giorgio D’Innocenzo", role: "Research Associate", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
            { name: "Davide Biselli", role: "Research Associate", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
            { name: "Frederic Wessling Melonari", role: "Research Associate", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
            { name: "Federico Tempestini", role: "Research Associate", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=800" },
        ],
        "Articles": [
            { name: "Luca Citton", role: "Head of Articles", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
            { name: "Francesco Kaitsas", role: "Head of Articles", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
            { name: "Francesco Baci Paci", role: "Articles Associate", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
            { name: "Federico Furioso", role: "Articles Associate", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" },
            { name: "Giovanni Ciccarello", role: "Articles Associate", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
            { name: "Giorgio Gheorghis Tsingros", role: "Articles Associate", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=800" },
        ],
        "Marketing": [
            { name: "Valentina Petrini", role: "Head of Marketing", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
            { name: "Alessio Penzo", role: "Marketing Associate", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
        ],
        "Instagram": [
            { name: "Beatrice Pellini", role: "Head of Instagram", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800" },
            { name: "Camilla Barra", role: "Instagram Associate", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
            { name: "Federico Valente", role: "Instagram Associate", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
        ],
        "LinkedIn": [
            { name: "Marina Meucci", role: "Head of LinkedIn", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
            { name: "Giulio Bonifacio", role: "LinkedIn Associate", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
            { name: "Francesco Maria Liaci", role: "LinkedIn Associate", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
        ],
        "Tech": [
            { name: "Shashank Tripathi", role: "Head of Tech", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
            { name: "Augustin Mons", role: "Tech Associate", image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=800" },
            { name: "Jingyi Wang", role: "Tech Associate", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" },
        ],
        "HR": [
            { name: "Edoardo Cerrano", role: "Head of HR", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" },
            { name: "Alessandra Boarolo", role: "HR Associate", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800" },
            { name: "Tommaso Donati", role: "HR Associate", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
            { name: "Rodolfo Barberis", role: "HR Associate", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
            { name: "Emanuele Ferrara", role: "HR Associate", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800" },
        ]
    };

    const tabs = Object.keys(teamData);

    const stats = [
        { icon: <Users className="w-8 h-8" />, value: "Est. 2025", label: "Founding Year" },
        { icon: <Target className="w-8 h-8" />, value: "Turin", label: "Campus Based" },
        { icon: <Award className="w-8 h-8" />, value: "New", label: "Student Society" },
        { icon: <TrendingUp className="w-8 h-8" />, value: "100%", label: "Student Led" },
    ];

    return (
        <div className="min-h-screen bg-esf-midnight text-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-esf-navy/50 to-esf-midnight"></div>
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-8"
                    >
                        About <span className="text-gradient-gold">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto"
                    >
                        ESCP Students for Finance is the premier finance society at ESCP Business School,
                        dedicated to connecting students with the world of finance through education, networking, and practical experience.
                    </motion.p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-6 border-y border-white/5 bg-esf-dark-navy/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="text-esf-accent mb-4 flex justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{stat.icon}</div>
                                <div className="text-4xl font-heading font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-gray-500 uppercase tracking-wider text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">
                        Who We Are
                    </h2>
                    <div className="space-y-8 text-lg text-gray-400 leading-relaxed glass p-8 md:p-12 rounded-lg">
                        <p>
                            Founded in 2025, ESCP Students for Finance is the newest finance society at ESCP Business School's
                            Turin campus. We are building a community of students passionate about finance, starting from the ground up.
                        </p>
                        <p>
                            Our society serves as a bridge between academic learning and the professional world of finance.
                            Through our events, workshops, and networking opportunities, we provide members with the tools
                            and connections they need to succeed in their finance careers.
                        </p>
                        <p>
                            We are establishing relationships with leading financial institutions and
                            creating a platform for students to access industry professionals, internship opportunities,
                            and career development resources.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 bg-esf-dark-navy relative">
                <div className="absolute inset-0 bg-grid opacity-5"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">
                        Our Team
                    </h2>

                    {/* Department Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab
                                    ? 'bg-esf-accent text-esf-midnight shadow-lg shadow-esf-accent/20 scale-105'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Team Display */}
                    {activeTab === "Board" ? (
                        <div className="space-y-12">
                            {/* Row 1: Leadership (President + VPs) */}
                            <div className="flex flex-wrap justify-center gap-8">
                                {teamData["Board"].filter(m => m.role === "President" || m.role === "Vice President").map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group w-full max-w-xs"
                                    >
                                        <div className="aspect-square overflow-hidden mb-6 bg-esf-midnight border border-white/10 relative">
                                            <div className="absolute inset-0 bg-esf-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-esf-accent transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-500">{member.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Row 2: Board Members */}
                            <div className="grid md:grid-cols-4 gap-8 justify-items-center">
                                {teamData["Board"].filter(m => m.role === "Board Member").map((member, index) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        className="group w-full"
                                    >
                                        <div className="aspect-square overflow-hidden mb-6 bg-esf-midnight border border-white/10 relative">
                                            <div className="absolute inset-0 bg-esf-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-esf-accent transition-colors">
                                                {member.name}
                                            </h3>
                                            <p className="text-gray-500">{member.role}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        /* Other Departments Grid */
                        <div className="grid md:grid-cols-4 gap-8">
                            {teamData[activeTab].map((member, index) => (
                                <motion.div
                                    key={member.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="aspect-square overflow-hidden mb-6 bg-esf-midnight border border-white/10 relative">
                                        <div className="absolute inset-0 bg-esf-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-esf-accent transition-colors">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-500">{member.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">
                        Join Our Community
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Become part of a network of ambitious finance professionals.
                    </p>
                    <Link
                        to="/join"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-esf-midnight font-bold rounded-lg hover:bg-esf-accent transition-all shadow-lg"
                    >
                        Become a Member
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
