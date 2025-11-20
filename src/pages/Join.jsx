import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const benefits = [
    "Access to exclusive workshops and seminars",
    "Networking events with industry professionals",
    "Career mentorship program",
    "Participation in trading competitions",
    "Weekly market newsletters",
    "Alumni database access"
];

const Join = () => {
    return (
        <div className="min-h-screen bg-nothing-black text-nothing-white pt-24 pb-12 px-6 bg-grid">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Membership</span>
                    <h1 className="text-5xl font-bold mb-6 font-dot uppercase">Join the Society</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
                        Unlock exclusive access to events, resources, and a network of future finance leaders.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Benefits */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 font-dot uppercase">Membership Benefits</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Exclusive Workshops", desc: "Access to advanced technical training sessions." },
                                { title: "Networking Events", desc: "Priority entry to networking cocktails with partner firms." },
                                { title: "Mentorship Program", desc: "1-on-1 mentorship with an experienced alumni." },
                                { title: "Resume Book", desc: "Your CV included in the book sent to our partners." }
                            ].map((benefit, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-6 h-6 rounded-full border border-nothing-red flex items-center justify-center flex-shrink-0 mt-1">
                                        <Check size={14} className="text-nothing-red" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white font-dot uppercase">{benefit.title}</h3>
                                        <p className="text-gray-400 text-sm font-mono">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Application Form */}
                    <div className="bg-nothing-dark-grey p-8 border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-nothing-red/10 blur-xl rounded-full" />
                        <h2 className="text-2xl font-bold mb-6 font-dot uppercase">Apply Now</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">First Name</label>
                                    <input type="text" className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">Last Name</label>
                                    <input type="text" className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">ESCP Email</label>
                                <input type="email" className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-mono text-gray-500">Program & Year</label>
                                <select className="w-full bg-nothing-black border border-white/20 p-3 text-white focus:border-nothing-red outline-none transition-colors font-mono">
                                    <option>Master in Management (MiM) - M1</option>
                                    <option>Master in Management (MiM) - M2</option>
                                    <option>MSc in Finance</option>
                                    <option>Bachelor in Management</option>
                                </select>
                            </div>
                            <div className="pt-4">
                                <button type="submit" className="w-full btn-nothing flex items-center justify-center gap-2">
                                    Submit Application <ArrowRight size={16} />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
