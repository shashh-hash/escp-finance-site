import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import lorenzoImg from '../assets/lorenzo.jpg';

const About = () => {
    const team = [
        { name: "Lorenzo Sargiani", role: "President", image: lorenzoImg },
        { name: "Events Team", role: "Event Coordinators", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
        { name: "Content Team", role: "Research & Articles", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" },
        { name: "Tech Team", role: "Digital & Innovation", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" },
    ];

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
                    <div className="space-y-8 text-lg text-gray-400 leading-relaxed glass p-8 md:p-12 rounded-2xl">
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
                    <h2 className="text-4xl font-heading font-bold mb-16 text-center">
                        Our Team
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="aspect-square overflow-hidden rounded-xl mb-6 bg-esf-midnight border border-white/10 relative">
                                    <div className="absolute inset-0 bg-esf-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-esf-accent transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
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
