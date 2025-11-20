import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EasterEgg = () => {
    const [input, setInput] = useState([]);
    const [showEgg, setShowEgg] = useState(false);

    // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    useEffect(() => {
        const handleKeyDown = (e) => {
            setInput((prev) => {
                const newInput = [...prev, e.key];
                if (newInput.length > konamiCode.length) {
                    newInput.shift();
                }
                if (JSON.stringify(newInput) === JSON.stringify(konamiCode)) {
                    setShowEgg(true);
                    setTimeout(() => setShowEgg(false), 5000);
                }
                return newInput;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            {showEgg && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl"
                >
                    <div className="text-center">
                        <h1 className="text-6xl font-bold text-finance-gold mb-4">🚀 TO THE MOON! 🚀</h1>
                        <p className="text-xl text-white">You found the secret finance stash!</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default EasterEgg;
