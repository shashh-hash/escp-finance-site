import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Mission from './pages/Mission';
import News from './pages/News';
import Join from './pages/Join';
import Contact from './pages/Contact';
import EasterEgg from './components/EasterEgg';
import StockTicker from './components/StockTicker';
import MoneyRain from './components/MoneyRain';
import StockCrash from './components/StockCrash';
import StonksMode from './components/StonksMode';

function App() {
    const [matrixMode, setMatrixMode] = useState(false);
    const [moneyRain, setMoneyRain] = useState(false);
    const [stockCrash, setStockCrash] = useState(false);
    const [stonksMode, setStonksMode] = useState(false);
    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.target.matches('input, textarea')) return;

            // Matrix mode
            if (e.key.toLowerCase() === 'm') {
                setMatrixMode(prev => !prev);
            }

            // Stonks mode - type 'stonks'
            setTypedText(prev => {
                const newText = (prev + e.key).slice(-6).toLowerCase();
                if (newText === 'stonks') {
                    setStonksMode(prev => !prev);
                    return '';
                }
                return newText;
            });
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <Router basename="/escp-finance-site">
            <div className={`min-h-screen flex flex-col bg-esf-midnight ${matrixMode ? 'matrix-mode' : ''} ${stonksMode ? 'stonks-mode' : ''}`}>
                <StockTicker />
                <Navbar
                    onMoneyRain={() => setMoneyRain(true)}
                    onToggleMatrix={() => setMatrixMode(prev => !prev)}
                    onStockCrash={() => setStockCrash(true)}
                    matrixMode={matrixMode}
                />
                <main className="flex-grow pt-28">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/articles" element={<Articles />} />
                        <Route path="/articles/:id" element={<ArticleDetail />} />
                        <Route path="/mission" element={<Mission />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/join" element={<Join />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
                <EasterEgg />
                <MoneyRain active={moneyRain} onComplete={() => setMoneyRain(false)} />
                <StockCrash active={stockCrash} onComplete={() => setStockCrash(false)} />
                <StonksMode active={stonksMode} />
            </div>
        </Router>
    );
}

export default App;
