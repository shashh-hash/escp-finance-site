import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, BookOpen, Briefcase, Target, Zap } from 'lucide-react';

const Home = () => {
    const features = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Market Analysis",
            description: "Deep dive into financial markets with our research team",
            link: "/articles"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Networking",
            description: "Connect with finance professionals and industry leaders",
            link: "/about"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Workshops",
            description: "Hands-on learning sessions on trading, valuation, and more",
            link: "/mission"
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Career Support",
            description: "Guidance for internships and full-time opportunities",
            link: "/contact"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-esf-midnight font-sans">

            {/* Hero Section - Minimal & Bold with Animated Background */}
            <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Stronger gradient base */}
                    <div className="absolute inset-0 bg-gradient-to-br from-esf-blue/10 via-white to-esf-accent/10"></div>

                    {/* Animated grid */}
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(0, 217, 255, 0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 217, 255, 0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                        animation: 'gridMove 15s linear infinite'
                    }}></div>

                    {/* Large floating orbs - much more visible */}
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-esf-accent/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-esf-blue/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                    <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-esf-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
                </div>

                {/* Animated Gradient Mesh */}
                <div className="absolute inset-0 gradient-mesh-accent opacity-40 mesh-animate pointer-events-none"></div>

                <div className="relative z-10 max-w-6xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-esf-accent/10 border border-esf-accent/20 mb-8">
                            <span className="w-2 h-2 rounded-full bg-esf-accent animate-pulse"></span>
                            <span className="text-sm font-semibold text-esf-accent tracking-wide uppercase">Est. 2025 • Turin Campus</span>
                        </div>

                        {/* Massive Heading */}
                        <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold leading-[0.95] tracking-tighter mb-8">
                            The Future of<br />
                            <span className="text-gradient">Finance</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                            Bridging the gap between academic theory and professional practice.<br className="hidden md:block" />
                            Building the next generation of finance leaders.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 justify-center mb-20">
                            <Link to="/join" className="group px-10 py-5 bg-esf-midnight text-white font-heading font-bold text-lg rounded-xl hover:bg-esf-accent hover:text-esf-midnight transition-all duration-300 shadow-float hover:shadow-float-xl hover:-translate-y-1 flex items-center gap-3">
                                Join the Society
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/about" className="px-10 py-5 border-2 border-esf-midnight/20 text-esf-midnight font-semibold text-lg rounded-xl hover:border-esf-accent hover:bg-esf-accent/5 transition-all duration-300">
                                Learn More
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Horizontal Scrolling Showcase - Nothing.tech inspired - Inside Hero */}
                <div className="relative z-10 w-full">
                    <div className="flex gap-6 px-6 overflow-x-auto scrollbar-hide pb-8 snap-x snap-mandatory">
                        {/* Showcase Items */}
                        <motion.div
                            className="min-w-[320px] md:min-w-[380px] snap-center flex-shrink-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bg-white/80 backdrop-blur-md border border-esf-midnight/10 rounded-2xl p-8 h-[280px] flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-float-lg transition-all duration-500">
                                <div className="w-16 h-16 mb-4">
                                    <TrendingUp className="w-full h-full text-esf-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-esf-midnight mb-2">Market Analysis</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Deep insights into global markets
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="min-w-[320px] md:min-w-[380px] snap-center flex-shrink-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="bg-white/80 backdrop-blur-md border border-esf-midnight/10 rounded-2xl p-8 h-[280px] flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-float-lg transition-all duration-500">
                                <div className="w-16 h-16 mb-4">
                                    <Target className="w-full h-full text-esf-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-esf-midnight mb-2">Trading Workshops</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Hands-on strategies and execution
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="min-w-[320px] md:min-w-[380px] snap-center flex-shrink-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <div className="bg-white/80 backdrop-blur-md border border-esf-midnight/10 rounded-2xl p-8 h-[280px] flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-float-lg transition-all duration-500">
                                <div className="w-16 h-16 mb-4">
                                    <Users className="w-full h-full text-esf-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-esf-midnight mb-2">Networking Events</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Connect with industry leaders
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="min-w-[320px] md:min-w-[380px] snap-center flex-shrink-0"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <div className="bg-white/80 backdrop-blur-md border border-esf-midnight/10 rounded-2xl p-8 h-[280px] flex flex-col items-center justify-center text-center group hover:bg-white hover:shadow-float-lg transition-all duration-500">
                                <div className="w-16 h-16 mb-4">
                                    <Briefcase className="w-full h-full text-esf-accent group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-esf-midnight mb-2">Career Support</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Internships and opportunities
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="text-center mt-4">
                        <p className="text-slate-400 text-xs uppercase tracking-wider">Scroll to explore →</p>
                    </div>
                </div>
            </section>

            {/* Bento Grid Stats Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Large Stat Card */}
                        <div className="md:col-span-2 md:row-span-2 bento-item group">
                            <div className="h-full flex flex-col justify-between">
                                <div>
                                    <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-esf-accent/10 to-esf-blue/10 mb-6">
                                        <Users className="w-10 h-10 text-esf-accent" />
                                    </div>
                                    <h3 className="text-7xl font-heading font-bold mb-4 text-esf-midnight">2025</h3>
                                    <p className="text-2xl text-slate-600 font-medium">Founding Year</p>
                                </div>
                                <div className="mt-8 pt-6 border-t border-esf-midnight/10">
                                    <p className="text-slate-500 text-sm">Building from the ground up at ESCP Turin</p>
                                </div>
                            </div>
                        </div>

                        {/* Small Stat Cards */}
                        <div className="bento-item">
                            <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-esf-accent/10 to-esf-blue/10 mb-4">
                                <Target className="w-6 h-6 text-esf-accent" />
                            </div>
                            <h4 className="text-4xl font-heading font-bold mb-2">Turin</h4>
                            <p className="text-slate-600">Based</p>
                        </div>

                        <div className="bento-item">
                            <div className="inline-block p-3 rounded-xl bg-gradient-to-br from-esf-accent/10 to-esf-blue/10 mb-4">
                                <Zap className="w-6 h-6 text-esf-accent" />
                            </div>
                            <h4 className="text-4xl font-heading font-bold mb-2">New</h4>
                            <p className="text-slate-600">Society</p>
                        </div>

                        {/* Featured Article Card */}
                        <div className="md:col-span-2 bento-item group">
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-esf-accent/10 text-esf-accent text-xs font-bold uppercase tracking-wider rounded-full">Featured</span>
                                <ArrowRight className="w-5 h-5 text-esf-accent group-hover:translate-x-1 transition-transform" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold mb-3 text-esf-midnight">Market Trends 2025</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">Latest insights from our research team on emerging market opportunities</p>
                            <Link to="/articles" className="inline-flex items-center gap-2 text-esf-accent font-bold text-sm hover:gap-3 transition-all">
                                Read More <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Large Cards */}
            <section className="py-32 px-6 bg-slate-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl md:text-7xl font-heading font-bold mb-6">
                            What We <span className="text-gradient">Offer</span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            Comprehensive programs designed to accelerate your finance career
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="bg-white rounded-3xl p-10 border border-esf-midnight/10 shadow-float card-float h-full flex flex-col">
                                    <div className="inline-block p-5 rounded-2xl bg-gradient-to-br from-esf-accent/10 to-esf-blue/10 text-esf-accent mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 w-fit">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold mb-4 text-esf-midnight">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg mb-8 flex-grow">
                                        {feature.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-esf-accent font-bold group-hover:gap-3 transition-all">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Full Width Gradient */}
            <section className="py-40 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-esf-midnight via-esf-blue to-esf-midnight"></div>
                <div className="absolute inset-0 gradient-mesh-accent opacity-30"></div>

                <div className="relative z-10 max-w-5xl mx-auto text-center">
                    <h2 className="text-6xl md:text-7xl font-heading font-bold mb-8 text-white">
                        Ready to Launch Your Career?
                    </h2>
                    <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light">
                        Join a community of ambitious students and gain access to exclusive events, workshops, and networking opportunities.
                    </p>
                    <Link to="/join" className="inline-block px-12 py-6 bg-white text-esf-midnight font-heading font-bold text-xl rounded-xl hover:bg-esf-accent transition-all duration-300 shadow-float-xl hover:scale-105">
                        Become a Member
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
