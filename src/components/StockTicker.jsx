import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const initialStocks = [
    { symbol: "S&P 500", price: 4783.45, change: 0.5, up: true },
    { symbol: "NASDAQ", price: 15055.65, change: 0.8, up: true },
    { symbol: "FTSE 100", price: 7682.30, change: -0.2, up: false },
    { symbol: "DAX", price: 16689.40, change: 0.3, up: true },
    { symbol: "CAC 40", price: 7450.20, change: -0.1, up: false },
    { symbol: "EUR/USD", price: 1.09, change: 0.05, up: true },
    { symbol: "BTC", price: 42500.00, change: 1.2, up: true },
    { symbol: "ETH", price: 2250.00, change: 0.9, up: true },
];

const StockTicker = () => {
    const [stocks, setStocks] = useState(initialStocks);

    useEffect(() => {
        // Update stock prices every 3 seconds
        const interval = setInterval(() => {
            setStocks(prevStocks =>
                prevStocks.map(stock => {
                    // Random price change between -0.5% and +0.5%
                    const changePercent = (Math.random() - 0.5) * 1;
                    const priceChange = stock.price * (changePercent / 100);
                    const newPrice = stock.price + priceChange;
                    const newChange = stock.change + changePercent;

                    return {
                        ...stock,
                        price: newPrice,
                        change: newChange,
                        up: newChange > 0
                    };
                })
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const formatPrice = (price, symbol) => {
        if (symbol.includes('EUR') || symbol.includes('USD')) {
            return price.toFixed(4);
        }
        return price.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    return (
        <div className="fixed top-0 left-0 right-0 w-full bg-esf-midnight/95 overflow-hidden py-2 backdrop-blur-sm z-40">
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
                            <span className="text-white">{formatPrice(stock.price, stock.symbol)}</span>
                            <span className={`flex items-center ${stock.up ? 'text-green-400' : 'text-red-400'}`}>
                                {stock.up ? <TrendingUp size={12} className="mr-1" /> : <TrendingDown size={12} className="mr-1" />}
                                {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}%
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default StockTicker;
