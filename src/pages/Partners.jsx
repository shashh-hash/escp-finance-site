import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const partners = [
    { name: "Goldman Sachs", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2560px-Goldman_Sachs.svg.png" },
    { name: "J.P. Morgan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/J_P_Morgan_Chase_Logo_2008_1.svg/2560px-J_P_Morgan_Chase_Logo_2008_1.svg.png" },
    { name: "Morgan Stanley", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Morgan_Stanley_Logo_1.svg/2560px-Morgan_Stanley_Logo_1.svg.png" },
    { name: "BlackRock", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/BlackRock_logo.svg/2560px-BlackRock_logo.svg.png" },
    { name: "McKinsey & Company", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/McKinsey_%26_Company_Logo.svg/2560px-McKinsey_%26_Company_Logo.svg.png" },
    { name: "Bain & Company", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bain_and_Company_Logo.svg/2560px-Bain_and_Company_Logo.svg.png" },
    { name: "BCG", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Boston_Consulting_Group_2020_logo.svg/2560px-Boston_Consulting_Group_2020_logo.svg.png" },
    { name: "Lazard", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Lazard_logo.svg/2560px-Lazard_logo.svg.png" },
];

const Partners = () => {
    return (
        <div className="min-h-screen bg-nothing-black text-nothing-white pt-24 pb-12 px-6 bg-grid">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Network</span>
                    <h1 className="text-5xl font-bold mb-6 font-dot uppercase">Our Partners</h1>
                    <p className="text-xl text-esf-blue max-w-2xl mx-auto font-mono">
                        Collaborating with industry leaders to provide unparalleled opportunities.
                    </p>
                </motion.div>

                {/* Hero Image Section */}
                <div className="mb-16 relative overflow-hidden border border-esf-midnight/10 aspect-[21/9]">
                    <div className="absolute inset-0 bg-nothing-red/20 opacity-0 hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                    <img
                        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600"
                        alt="Partnership"
                        className="w-full h-full object-cover grayscale contrast-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nothing-black via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
                        <p className="text-2xl font-bold font-dot uppercase text-esf-midnight">Building the Future Together</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {partners.map((partner, i) => (
                        <div key={i} className="aspect-video bg-nothing-white p-8 border border-esf-midnight/10 hover:border-nothing-red transition-colors group flex items-center justify-center relative overflow-hidden">
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="bg-nothing-dark-grey border border-esf-midnight/10 p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4 font-dot uppercase">Become a Partner</h2>
                        <p className="text-esf-blue mb-8 max-w-xl mx-auto font-mono">
                            Interested in recruiting top talent from ESCP? Partner with us to host events, workshops, and gain access to our resume book.
                        </p>
                        <a href="mailto:partnerships@escpfinance.com" className="btn-nothing inline-block">
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Partners;
