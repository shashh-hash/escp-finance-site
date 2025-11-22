import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const articles = [
    { id: 1, title: "The Rise of DeFi", category: "Crypto", date: "Oct 12, 2023", excerpt: "Exploring the decentralized finance revolution and its impact on traditional banking.", image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "ESG Investing Trends", category: "Sustainable Finance", date: "Nov 05, 2023", excerpt: "How environmental, social, and governance factors are reshaping investment strategies.", image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "M&A Outlook 2024", category: "Investment Banking", date: "Dec 01, 2023", excerpt: "Analyzing merger and acquisition trends for the upcoming year.", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Private Equity Explained", category: "PE", date: "Jan 15, 2024", excerpt: "A comprehensive guide to understanding private equity investments.", image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "The Future of Fintech", category: "Tech", date: "Feb 10, 2024", excerpt: "How technology is transforming the financial services industry.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Understanding Derivatives", category: "Markets", date: "Feb 22, 2024", excerpt: "Breaking down complex financial instruments and their uses.", image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Venture Capital 101", category: "VC", date: "Mar 01, 2024", excerpt: "An introduction to venture capital and startup financing.", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Central Bank Digital Currencies", category: "Macro", date: "Mar 15, 2024", excerpt: "The future of money in a digital age.", image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800" },
];

const Articles = () => {
    return (
        <div className="min-h-screen bg-white text-esf-midnight">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                            Articles & <span className="text-gradient-gold">Insights</span>
                        </h1>
                        <p className="text-xl text-esf-blue max-w-3xl mx-auto">
                            Deep dives into finance, markets, and the mechanisms that move the world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {articles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group cursor-pointer glass glass-hover rounded-xl overflow-hidden"
                            >
                                <Link to={`/articles/${article.id}`}>
                                    <div className="aspect-[4/3] overflow-hidden bg-slate-50 relative">
                                        <div className="absolute inset-0 bg-esf-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="mb-3">
                                            <span className="inline-block px-3 py-1 bg-esf-accent/10 text-esf-accent text-xs font-bold uppercase tracking-wider rounded-sm border border-esf-accent/20">
                                                {article.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-heading font-bold text-esf-midnight mb-3 group-hover:text-esf-accent transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-esf-blue text-sm mb-4 line-clamp-2">
                                            {article.excerpt}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-slate-600 uppercase tracking-wider font-medium">
                                            <Calendar size={12} />
                                            <span>{article.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Articles;
