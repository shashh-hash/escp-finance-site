import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';

const events = [
    {
        title: "Investment Banking Workshop",
        date: "March 15, 2024",
        time: "18:00 - 20:00",
        location: "Room 301, ESCP Paris",
        description: "Learn the fundamentals of valuation and financial modeling from industry professionals.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Guest Speaker: CEO of BlackRock France",
        date: "April 2, 2024",
        time: "19:00 - 21:00",
        location: "Grand Amphitheatre",
        description: "An exclusive fireside chat discussing the future of asset management and sustainability.",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Networking Mixer",
        date: "April 10, 2024",
        time: "20:00 - 23:00",
        location: "Le Perchoir Marais",
        description: "Connect with alumni and fellow students in a relaxed atmosphere.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Trading Competition Finale",
        date: "May 5, 2024",
        time: "14:00 - 18:00",
        location: "Trading Lab",
        description: "Watch the top teams compete for the grand prize in our annual trading challenge.",
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=800"
    }
];

const Events = () => {
    return (
        <div className="min-h-screen bg-nothing-black text-nothing-white pt-24 pb-12 px-6 bg-grid">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 text-center"
                >
                    <span className="text-nothing-red font-dot uppercase tracking-widest mb-2 block">Calendar</span>
                    <h1 className="text-5xl font-bold mb-6 font-dot uppercase">Upcoming Events</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
                        Join us for workshops, guest speakers, and networking sessions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <EventCard {...event} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
