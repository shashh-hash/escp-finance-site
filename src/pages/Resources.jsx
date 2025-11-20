import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, BookOpen, TrendingUp } from 'lucide-react';

const resources = [
    {
        category: "Career Guides",
        items: [
            { title: "Investment Banking Interview Prep", type: "PDF", size: "2.4 MB" },
            { title: "Private Equity Case Study Guide", type: "PDF", size: "1.8 MB" },
            { title: "Consulting Frameworks", type: "PDF", size: "3.1 MB" },
        ]
    },
    {
        category: "Financial Models",
        items: [
            { title: "DCF Valuation Template", type: "XLSX", size: "450 KB" },
            { title: "LBO Model - Basic", type: "XLSX", size: "320 KB" },
            { title: "Comparable Company Analysis", type: "XLSX", size: "280 KB" },
        ]
    },
    {
        category: "Recommended Reading",
        items: [
            { title: "The Intelligent Investor - Benjamin Graham", type: "Book", link: "#" },
            { title: "Investment Banking - Rosenbaum & Pearl", type: "Book", link: "#" },
            { title: "King of Capital - David Carey", type: "Book", link: "#" },
        ]
    }
];

const Resources = () => {
    return (
        <div className="min-h-screen bg-nothing-black text-nothing-white pt-24 pb-12 px-6 bg-grid">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Library</span>
                    <h1 className="text-5xl font-bold mb-6 font-dot uppercase">Student Resources</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
                        Curated tools and guides to accelerate your finance career.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {/* Career Guides */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 font-dot uppercase">
                            <FileText className="text-nothing-red" /> Career Guides
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {['Investment Banking Interview Guide', 'Private Equity Case Study', 'Sales & Trading Overview'].map((item, i) => (
                                <div key={i} className="bg-nothing-dark-grey p-6 border border-white/10 hover:border-nothing-red transition-colors group cursor-pointer">
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-nothing-red transition-colors font-dot uppercase">{item}</h3>
                                    <p className="text-sm text-gray-400 mb-4 font-mono">Comprehensive PDF guide covering technicals and behavioral questions.</p>
                                    <div className="flex items-center gap-2 text-nothing-red text-sm font-bold uppercase tracking-widest">
                                        <Download size={16} /> Download
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Financial Models */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 font-dot uppercase">
                            <TrendingUp className="text-nothing-red" /> Financial Models
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {['DCF Valuation Template', 'LBO Model (Basic)', 'Comps Analysis Sheet'].map((item, i) => (
                                <div key={i} className="bg-nothing-dark-grey p-6 border border-white/10 hover:border-nothing-red transition-colors group cursor-pointer">
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-nothing-red transition-colors font-dot uppercase">{item}</h3>
                                    <p className="text-sm text-gray-400 mb-4 font-mono">Excel template with pre-built formulas and sensitivity analysis.</p>
                                    <div className="flex items-center gap-2 text-nothing-red text-sm font-bold uppercase tracking-widest">
                                        <Download size={16} /> Download
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Recommended Reading */}
                    <section>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 font-dot uppercase">
                            <BookOpen className="text-nothing-red" /> Recommended Reading
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Investment Banking", author: "Joshua Rosenbaum", desc: "The definitive guide to valuation and dealmaking." },
                                { title: "The Intelligent Investor", author: "Benjamin Graham", desc: "The classic text on value investing." }
                            ].map((book, i) => (
                                <div key={i} className="bg-nothing-dark-grey p-6 border border-white/10 flex gap-6 items-start hover:border-nothing-white transition-colors">
                                    <div className="w-24 h-32 bg-gray-800 flex-shrink-0 border border-white/10"></div>
                                    <div>
                                        <h3 className="font-bold text-lg font-dot uppercase">{book.title}</h3>
                                        <p className="text-nothing-red text-sm mb-2 font-mono">by {book.author}</p>
                                        <p className="text-sm text-gray-400 font-mono">{book.desc}</p>
                                        <a href="#" className="inline-flex items-center gap-1 text-white text-xs mt-4 hover:text-nothing-red uppercase tracking-widest">
                                            View on Amazon <ExternalLink size={12} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resources;
