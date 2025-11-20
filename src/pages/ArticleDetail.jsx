import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const ArticleDetail = () => {
    const { id } = useParams();

    return (
        <article className="pt-32 px-6 min-h-screen bg-premium-black max-w-3xl mx-auto">
            <Link to="/articles" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={20} className="mr-2" /> Back to Articles
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="text-finance-blue font-medium">Investment Banking</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-8 leading-tight">
                    The Future of Mergers & Acquisitions in a Volatile Market
                </h1>

                <div className="prose prose-invert prose-lg">
                    <p className="text-xl text-gray-300 leading-relaxed mb-6">
                        As we navigate through 2024, the landscape of M&A is shifting dramatically.
                        High interest rates and geopolitical tensions are reshaping deal structures...
                    </p>
                    <p className="text-gray-400 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Drivers</h2>
                    <ul className="list-disc pl-6 text-gray-400 space-y-2 mb-6">
                        <li>Technological disruption in traditional sectors</li>
                        <li>Private credit playing a larger role</li>
                        <li>Cross-border opportunities in emerging markets</li>
                    </ul>
                    <p className="text-gray-400">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </motion.div>
        </article>
    );
};

export default ArticleDetail;
