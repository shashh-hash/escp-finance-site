import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mission = () => {
    const values = [
        {
            icon: <Target className="w-8 h-8" />,
            title: "Our Mission",
            description: "To empower ESCP students with the knowledge, skills, and network necessary to excel in the finance industry."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Community",
            description: "Building a strong community of finance enthusiasts through networking events, workshops, and collaborative learning."
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Professional Growth",
            description: "Providing opportunities for professional development through industry connections and practical experience."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Excellence",
            description: "Maintaining the highest standards in everything we do, from events to educational content."
        }
    ];

    const goals = [
        "Connect students with leading finance professionals and firms",
        "Organize high-quality educational events and workshops",
        "Provide resources for career development in finance",
        "Foster a collaborative learning environment",
        "Bridge the gap between academic knowledge and industry practice"
    ];

    return (
        <div className="min-h-screen bg-esf-midnight text-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-8"
                    >
                        Our <span className="text-gradient-gold">Mission</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto"
                    >
                        Empowering the next generation of finance professionals through education, networking, and excellence.
                    </motion.p>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass glass-hover p-8 rounded-lg group"
                            >
                                <div className="text-esf-accent mb-6 p-3 bg-esf-accent/10 rounded-lg inline-block group-hover:bg-esf-accent/20 transition-colors">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Goals Section */}
            <section className="py-20 px-6 bg-esf-dark-navy relative">
                <div className="absolute inset-0 bg-grid opacity-5"></div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl font-heading font-bold mb-12 text-center">
                        What We Aim To Achieve
                    </h2>
                    <div className="space-y-6">
                        {goals.map((goal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-6 p-6 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5"
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-esf-accent/10 text-esf-accent flex items-center justify-center font-bold border border-esf-accent/20">
                                    {index + 1}
                                </div>
                                <p className="text-lg text-gray-300 leading-relaxed pt-1">{goal}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold mb-6">
                        Join Our Mission
                    </h2>
                    <p className="text-xl text-gray-400 mb-10">
                        Be part of a community that's shaping the future of finance.
                    </p>
                    <Link
                        to="/join"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-esf-accent text-esf-midnight font-bold rounded-lg hover:bg-white transition-all shadow-lg hover:shadow-esf-accent/20"
                    >
                        Become a Member
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Mission;
