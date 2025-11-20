import React, { useEffect, useState } from 'react';

const StonksMode = ({ active }) => {
    if (!active) return null;

    return (
        <>
            {/* Stonks overlay */}
            <div className="fixed inset-0 pointer-events-none z-[9998]">
                <div className="absolute top-10 right-10 animate-bounce">
                    <div className="text-6xl">📈</div>
                </div>
                <div className="absolute bottom-20 left-20 animate-bounce" style={{ animationDelay: '0.3s' }}>
                    <div className="text-6xl">🚀</div>
                </div>
                <div className="absolute top-1/3 left-1/4 animate-bounce" style={{ animationDelay: '0.6s' }}>
                    <div className="text-6xl">💎</div>
                </div>
                <div className="absolute bottom-1/3 right-1/4 animate-bounce" style={{ animationDelay: '0.9s' }}>
                    <div className="text-6xl">🙌</div>
                </div>
            </div>

            {/* Comic Sans overlay */}
            <style>{`
                .stonks-mode * {
                    font-family: 'Comic Sans MS', 'Comic Sans', cursive !important;
                }
                .stonks-mode .font-dot {
                    font-family: 'Comic Sans MS', 'Comic Sans', cursive !important;
                }
            `}</style>
        </>
    );
};

export default StonksMode;
