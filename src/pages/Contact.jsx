import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="pt-24 px-6 min-h-screen bg-premium-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Get in Touch</span>
                    <h1 className="text-5xl font-bold mb-6 font-dot uppercase">Contact Us</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
                        Have questions? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-nothing-dark-grey p-8 border border-white/10 hover:border-nothing-red transition-colors group">
                            <Mail className="text-nothing-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 font-dot uppercase">Email Us</h3>
                            <p className="text-gray-400 mb-4 font-mono">For general inquiries and partnerships.</p>
                            <a href="mailto:contact@escpfinance.com" className="text-white font-bold hover:text-nothing-red transition-colors font-mono">contact@escpfinance.com</a>
                        </div>

                        <div className="bg-nothing-dark-grey p-8 border border-white/10 hover:border-nothing-red transition-colors group">
                            <MapPin className="text-nothing-red mb-4" size={32} />
                            <h3 className="text-xl font-bold mb-2 font-dot uppercase">Visit Us</h3>
                            <p className="text-gray-400 mb-4 font-mono">ESCP Business School - Paris Campus</p>
                            <p className="text-white font-mono">79 Avenue de la République<br />75011 Paris, France</p>
                        </div>

                        <div className="bg-nothing-dark-grey p-8 border border-white/10 hover:border-nothing-red transition-colors group">
                            <h3 className="text-xl font-bold mb-4 font-dot uppercase">Follow Us</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-nothing-red hover:border-nothing-red hover:text-white transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-nothing-red hover:border-nothing-red hover:text-white transition-all">
                                    <Instagram size={20} />
                                </a>
                                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-nothing-red hover:border-nothing-red hover:text-white transition-all">
                                    <Twitter size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-nothing-dark-grey p-8 border border-white/10">
                        <h2 className="text-2xl font-bold mb-6 font-dot uppercase">Send a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">Name</label>
                                <input type="text" className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">Email</label>
                                <input type="email" className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">Subject</label>
                                <select className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono">
                                    <option>General Inquiry</option>
                                    <option>Partnership Opportunity</option>
                                    <option>Event Registration</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">Message</label>
                                <textarea rows="4" className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono"></textarea>
                            </div>
                            <button type="submit" className="w-full btn-nothing flex items-center justify-center gap-2">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
