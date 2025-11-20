import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const stocks = [
    { symbol: "S&P 500", price: "4,783.45", change: "+0.5%", up: true },
    { symbol: "NASDAQ", price: "15,055.65", change: "+0.8%", up: true },
    { symbol: "FTSE 100", price: "7,682.30", change: "-0.2%", up: false },
    { symbol: "DAX", price: "16,689.40", change: "+0.3%", up: true },
    { symbol: "CAC 40", price: "7,450.20", change: "-0.1%", up: false },
    { symbol: "EUR/USD", price: "1.09", change: "+0.05%", up: true },
    { symbol: "BTC", price: "42,500.00", change: "+1.2%", up: true },
    { symbol: "ETH", price: "2,250.00", change: "+0.9%", up: true },
];

const StockTicker = () => {
    return (
        <div className="w-full bg-premium-black/90 border-b border-white/5 overflow-hidden py-2 backdrop-blur-sm z-40 relative">
            <div className="flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                    className="flex gap-8 pr-8"
                >
                    {[...stocks, ...stocks, ...stocks].map((stock, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm font-medium">
                            <span className="text-gray-400">{stock.symbol}</span>
                            <span className="text-white">{stock.price}</span>
                            <span className={`flex items-center ${stock.up ? 'text-green-400' : 'text-red-400'}`}>
                                {stock.up ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                                {stock.change}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default StockTicker;
