import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const articles = [
    { id: 1, title: "The Rise of DeFi", category: "Crypto", date: "Oct 12, 2023", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "ESG Investing Trends", category: "Sustainable Finance", date: "Nov 05, 2023", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "M&A Outlook 2024", category: "Investment Banking", date: "Dec 01, 2023", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Private Equity Explained", category: "PE", date: "Jan 15, 2024", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "The Future of Fintech", category: "Tech", date: "Feb 10, 2024", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Understanding Derivatives", category: "Markets", date: "Feb 22, 2024", image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Venture Capital 101", category: "VC", date: "Mar 01, 2024", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Central Bank Digital Currencies", category: "Macro", date: "Mar 15, 2024", image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800" },
];

const Articles = () => {
    return (
        <div className="min-h-screen bg-nothing-black text-nothing-white pt-24 pb-12 px-6 bg-grid">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Insights</span>
                    <h1 className="text-5xl font-bold mb-6 font-dot uppercase">Market Intelligence</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
                        Deep dives into the mechanisms that move the world.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[4/3] overflow-hidden border border-white/10 bg-nothing-dark-grey mb-4 relative">
                                <div className="absolute inset-0 bg-nothing-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs font-mono text-gray-500 uppercase">
                                    <span className="text-nothing-red">{article.category}</span>
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-lg font-bold leading-tight group-hover:text-nothing-red transition-colors font-dot uppercase">
                                    {article.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;
