import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FinancialTimes = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleLogin = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            if (email.includes('escp.eu')) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="min-h-screen bg-[#fcd5d1] text-[#333] font-serif flex flex-col items-center justify-center p-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl text-center"
                >
                    <h1 className="text-5xl font-bold mb-6 font-serif">Welcome, ESCP Student.</h1>
                    <p className="text-2xl mb-8">You have unlocked <span className="italic font-bold">Unlimited Premium Access</span>.</p>
                    <div className="p-8 bg-white border border-gray-300 shadow-xl">
                        <h2 className="text-xl font-bold mb-4 uppercase tracking-widest font-sans">Exclusive Insight</h2>
                        <p className="text-lg leading-relaxed">
                            "The market is not driven by greed or fear, but by the relentless pursuit of the perfect croissant."
                        </p>
                        <p className="mt-4 text-right text-sm text-slate-600">- Anonymous Trader</p>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="mt-12 px-8 py-3 bg-black text-esf-midnight font-sans uppercase tracking-widest hover:bg-gray-800 transition-colors"
                    >
                        Return to Reality
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#fcd5d1] text-[#333] font-serif flex flex-col">
            <header className="py-6 border-b border-black/10 text-center bg-white/50 backdrop-blur-sm">
                <h1 className="text-4xl font-bold tracking-tight">FINANCIAL TIMES</h1>
                <p className="text-xs uppercase tracking-widest mt-2 font-sans text-slate-600">Partner Access Portal</p>
            </header>

            <main className="flex-grow flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white p-10 shadow-2xl border border-gray-200">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold mb-2 font-sans uppercase">ESCP Premium Login</h2>
                        <p className="text-gray-600 text-sm">Enter your student credentials to access global market intelligence.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-sans">ESCP Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 bg-gray-50 border border-gray-300 focus:border-black focus:ring-0 transition-colors font-sans"
                                placeholder="student@escp.eu"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 font-sans">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 bg-gray-50 border border-gray-300 focus:border-black focus:ring-0 transition-colors font-sans"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        {status === 'error' && (
                            <p className="text-red-600 text-sm text-center font-sans">Access Denied. Please use a valid ESCP email.</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full py-4 bg-black text-esf-midnight font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors font-sans disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Authenticating...' : 'Unlock Access'}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs text-esf-blue font-sans">
                            Protected by quantum encryption. Unauthorized access is futile.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FinancialTimes;
