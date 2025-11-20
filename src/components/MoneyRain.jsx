import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MoneyRain = ({ active, onComplete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        if (active) {
            const newItems = Array.from({ length: 50 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100,
                delay: Math.random() * 2,
                duration: 2 + Math.random() * 3,
                emoji: ['💸', '💰', '🤑', '💶', '💵', '📈'][Math.floor(Math.random() * 6)]
            }));
            setItems(newItems);

            const timer = setTimeout(() => {
                onComplete();
                setItems([]);
            }, 6000);

            return () => clearTimeout(timer);
        }
    }, [active, onComplete]);

    return (
        <AnimatePresence>
            {active && (
                <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ y: -50, x: `${item.x}vw`, opacity: 1, rotate: 0 }}
                            animate={{ y: '110vh', rotate: 360 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: item.duration,
                                delay: item.delay,
                                ease: "linear"
                            }}
                            className="absolute text-4xl"
                        >
                            {item.emoji}
                        </motion.div>
                    ))}
                </div>
            )}
        </AnimatePresence>
    );
};

export default MoneyRain;
