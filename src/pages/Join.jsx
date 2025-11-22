import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Users, Calendar, Award, BookOpen } from 'lucide-react';

const Join = () => {
    const benefits = [
        {
            icon: <BookOpen className="w-6 h-6" />,
            title: "Exclusive Workshops",
            description: "Access to advanced technical training sessions and masterclasses."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Networking Events",
            description: "Priority entry to networking events with partner firms and alumni."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Mentorship Program",
            description: "1-on-1 mentorship with experienced alumni in your field of interest."
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Resume Book",
            description: "Your CV included in the book sent to our partner firms."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-esf-midnight">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6"
                    >
                        Join the <span className="text-gradient-gold">Society</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-esf-blue"
                    >
                        Unlock exclusive access to events, resources, and a network of future finance leaders.
                    </motion.p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-heading font-bold text-esf-midnight mb-12 text-center">
                        Membership Benefits
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass p-8 rounded-xl flex gap-6 group hover:border-esf-accent/30 transition-colors"
                            >
                                <div className="flex-shrink-0 w-14 h-14 bg-esf-accent/10 text-esf-accent rounded-xl flex items-center justify-center group-hover:bg-esf-accent group-hover:text-esf-midnight transition-all duration-300">
                                    {benefit.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-esf-midnight mb-2 group-hover:text-esf-accent transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-esf-blue leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section className="py-20 px-6 bg-slate-50 relative">
                <div className="absolute inset-0 bg-grid opacity-5"></div>
                <div className="max-w-3xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-heading font-bold text-esf-midnight mb-4">
                            Apply Now
                        </h2>
                        <p className="text-xl text-esf-blue">
                            Fill out the form below to start your membership application.
                        </p>
                    </div>

                    <div className="glass p-8 md:p-12 rounded-lg border border-esf-midnight/10">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-esf-blue mb-2">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/50 border border-esf-midnight/10 rounded-lg focus:border-esf-accent focus:ring-1 focus:ring-esf-accent outline-none transition-colors text-esf-midnight"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-esf-blue mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 bg-white/50 border border-esf-midnight/10 rounded-lg focus:border-esf-accent focus:ring-1 focus:ring-esf-accent outline-none transition-colors text-esf-midnight"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-esf-blue mb-2">
                                    ESCP Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-white/50 border border-esf-midnight/10 rounded-lg focus:border-esf-accent focus:ring-1 focus:ring-esf-accent outline-none transition-colors text-esf-midnight"
                                    placeholder="student@edu.escp.eu"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-esf-blue mb-2">
                                    Program & Year
                                </label>
                                <select className="w-full px-4 py-3 bg-white/50 border border-esf-midnight/10 rounded-lg focus:border-esf-accent focus:ring-1 focus:ring-esf-accent outline-none transition-colors text-esf-midnight">
                                    <option className="bg-white">Master in Management (MiM) - M1</option>
                                    <option className="bg-white">Master in Management (MiM) - M2</option>
                                    <option className="bg-white">MSc in Finance</option>
                                    <option className="bg-white">Bachelor in Management</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-esf-blue mb-2">
                                    Why do you want to join? (Optional)
                                </label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/50 border border-esf-midnight/10 rounded-lg focus:border-esf-accent focus:ring-1 focus:ring-esf-accent outline-none transition-colors resize-none text-esf-midnight"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-esf-accent text-esf-midnight font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-esf-accent/20"
                            >
                                Submit Application
                                <ArrowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Join;
