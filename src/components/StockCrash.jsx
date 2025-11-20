import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StockCrash = ({ active, onComplete }) => {
    const [stocks, setStocks] = useState([]);

    useEffect(() => {
        if (active) {
            // Generate falling stock symbols
            const symbols = ['AAPL', 'GOOGL', 'MSFT', 'TSLA', 'AMZN', 'META', 'NVDA', 'JPM', 'GS', 'MS'];
            const newStocks = Array.from({ length: 30 }, (_, i) => ({
                id: i,
                symbol: symbols[Math.floor(Math.random() * symbols.length)],
                left: Math.random() * 100,
                delay: Math.random() * 0.5,
                duration: 2 + Math.random() * 2,
            }));
            setStocks(newStocks);

            // Auto-complete after 4 seconds
            const timer = setTimeout(onComplete, 4000);
            return () => clearTimeout(timer);
        }
    }, [active, onComplete]);

    if (!active) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            {/* Red flash overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="absolute inset-0 bg-red-600"
            />

            {/* Falling stocks */}
            {stocks.map((stock) => (
                <motion.div
                    key={stock.id}
                    initial={{ y: -100, x: `${stock.left}vw`, rotate: 0 }}
                    animate={{
                        y: '110vh',
                        rotate: 360,
                        opacity: [1, 1, 0]
                    }}
                    transition={{
                        duration: stock.duration,
                        delay: stock.delay,
                        ease: 'linear'
                    }}
                    className="absolute text-red-500 font-bold text-2xl font-dot"
                    style={{ left: 0 }}
                >
                    📉 {stock.symbol} -99%
                </motion.div>
            ))}

            {/* Crash text */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
                <div className="text-6xl md:text-9xl font-bold text-red-600 font-dot uppercase text-center">
                    CRASH!
                    <div className="text-2xl md:text-4xl mt-4 text-white">
                        📉 Market Down 99% 📉
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default StockCrash;
