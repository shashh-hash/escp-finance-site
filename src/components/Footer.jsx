import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-premium-black border-t border-white/10 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-white mb-2">ESCP Students for Finance</h3>
                        <p className="text-gray-400 text-sm">Empowering the next generation of finance leaders.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-600 text-xs">
                    © {new Date().getFullYear()} ESCP Students for Finance. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
