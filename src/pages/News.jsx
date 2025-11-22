import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';

const News = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const newsItems = [
        {
            id: 1,
            title: "ECB Announces Digital Euro Pilot Phase Results",
            date: "November 15, 2025",
            category: "Central Banking",
            excerpt: "The European Central Bank has released promising results from its latest digital currency trials, signaling a potential 2026 rollout.",
            image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800",
            url: "https://www.ecb.europa.eu/home/html/index.en.html"
        },
        {
            id: 2,
            title: "Global Markets Rally on AI Regulation Clarity",
            date: "November 10, 2025",
            category: "Markets",
            excerpt: "Major indices hit record highs as new international frameworks for AI in finance provide much-needed certainty for investors.",
            image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
            url: "https://www.bloomberg.com/markets"
        },
        {
            id: 3,
            title: "Sustainable Finance Summit 2025 Highlights",
            date: "October 28, 2025",
            category: "ESG",
            excerpt: "Key takeaways from the Turin summit, focusing on the next generation of green bonds and transition finance mechanisms.",
            image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800",
            url: "https://www.ft.com/climate-capital"
        },
        {
            id: 4,
            title: "Fintech Unicorns of 2025: A Year in Review",
            date: "October 15, 2025",
            category: "Fintech",
            excerpt: "An analysis of the breakout startups that defined the financial technology landscape this year.",
            image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
            url: "https://techcrunch.com/category/fintech/"
        },
        {
            id: 5,
            title: "The Rise of Quantum Computing in High-Frequency Trading",
            date: "October 05, 2025",
            category: "Technology",
            excerpt: "How early adopters are leveraging quantum advantages to gain an edge in algorithmic trading strategies.",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
            url: "https://www.wsj.com/news/technology"
        },
        {
            id: 6,
            title: "ESCP Students for Finance Launches in Turin",
            date: "September 15, 2025",
            category: "Society News",
            excerpt: "Marking a new chapter, the society officially opens its doors at the Turin campus, welcoming its first cohort of members.",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
            url: "/about"
        },
    ];

    const filteredNews = newsItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white text-esf-midnight">
            {/* Hero Section */}
            <section className="pt-32 pb-12 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
                <div className="absolute inset-0 bg-grid opacity-10"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-heading font-bold mb-6"
                    >
                        Financial <span className="text-gradient-gold">News</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-esf-blue max-w-3xl mb-8"
                    >
                        Curated insights from the global financial markets and society updates.
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-md relative"
                    >
                        <input
                            type="text"
                            placeholder="Search news..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 bg-white/5 border border-esf-midnight/10 rounded-lg text-esf-midnight placeholder-slate-400 focus:outline-none focus:border-esf-accent/50 focus:bg-white/10 transition-all backdrop-blur-sm"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredNews.map((item, index) => (
                            <motion.a
                                key={item.id}
                                href={item.url}
                                target={item.url.startsWith('http') ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass glass-hover rounded-xl overflow-hidden group cursor-pointer flex flex-col h-full block"
                            >
                                <div className="relative h-56 overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-esf-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 bg-white/80 backdrop-blur-sm text-esf-midnight text-xs font-bold uppercase tracking-wider rounded-sm border border-esf-midnight/10">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-xs text-slate-600 uppercase tracking-wider font-medium mb-4">
                                        <Calendar size={14} />
                                        <span>{item.date}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-esf-midnight mb-4 group-hover:text-esf-accent transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-esf-blue mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {item.excerpt}
                                    </p>
                                    <button className="flex items-center gap-2 text-esf-accent font-bold text-sm hover:text-esf-midnight transition-colors uppercase tracking-wider mt-auto">
                                        Read More
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                    {filteredNews.length === 0 && (
                        <div className="text-center py-20 text-slate-600">
                            No news found matching your search.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default News;
