import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Instagram, Twitter, Send } from 'lucide-react';

const Contact = () => {
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
                        Get In <span className="text-gradient-gold">Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-esf-blue"
                    >
                        Have questions? We'd love to hear from you.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <div className="glass p-8 rounded-lg">
                            <Mail className="text-esf-accent mb-4" size={32} />
                            <h3 className="text-2xl font-heading font-bold text-esf-midnight mb-2">
                                Email Us
                            </h3>
                            <p className="text-esf-blue mb-4">
                                For general inquiries and partnerships.
                            </p>
                            <a
                                href="mailto:contact@escpfinance.com"
                                className="text-esf-midnight font-semibold hover:text-esf-accent transition-colors"
                            >
                                contact@escpfinance.com
                            </a>
                        </div>

                        <div className="glass p-8 rounded-lg">
                            <MapPin className="text-esf-accent mb-4" size={32} />
                            <h3 className="text-2xl font-heading font-bold text-esf-midnight mb-2">
                                Visit Us
                            </h3>
                            <p className="text-esf-blue mb-4">
                                ESCP Business School - Paris Campus
                            </p>
                            <p className="text-gray-300">
                                79 Avenue de la République<br />
                                75011 Paris, France
                            </p>
                        </div>

                        <div className="glass p-8 rounded-lg">
                            <h3 className="text-2xl font-heading font-bold text-esf-midnight mb-4">
                                Follow Us
                            </h3>
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-white/5 border border-esf-midnight/10 text-esf-midnight rounded-lg flex items-center justify-center hover:bg-esf-accent hover:text-esf-midnight transition-all"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-white/5 border border-esf-midnight/10 text-esf-midnight rounded-lg flex items-center justify-center hover:bg-esf-accent hover:text-esf-midnight transition-all"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 bg-white/5 border border-esf-midnight/10 text-esf-midnight rounded-lg flex items-center justify-center hover:bg-esf-accent hover:text-esf-midnight transition-all"
                                >
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass p-8 md:p-10 rounded-lg">
                        <h2 className="text-3xl font-heading font-bold text-esf-midnight mb-8">
                            Send us a Message
                        </h2>
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
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 bg-white/50 border border-esf-midnight/10 rounded-lg focus:border-esf-accent focus:ring-1 focus:ring-esf-accent outline-none transition-colors text-esf-midnight"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-esf-blue mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    className="w-full px-4 py-3 bg-white/50 border border-esf-midnight/10 rounded-lg focus:border-esf-accent focus:ring-1 focus:ring-esf-accent outline-none transition-colors resize-none text-esf-midnight"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-esf-accent text-esf-midnight font-bold rounded-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
