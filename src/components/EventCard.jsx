import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

const EventCard = ({ title, date, time, location, description, image }) => {
    return (
        <div className="group bg-nothing-dark-grey border border-white/10 hover:border-nothing-red transition-colors overflow-hidden flex flex-col h-full">
            <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-nothing-red/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-nothing-red text-white px-3 py-1 text-xs font-bold uppercase tracking-widest font-dot">
                    {date}
                </div>
            </div>
            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-nothing-red transition-colors font-dot uppercase">{title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 font-mono">
                    <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{location}</span>
                    </div>
                </div>
                <p className="text-gray-400 text-sm mb-6 flex-grow font-mono">{description}</p>
                <button className="w-full py-3 border border-white/20 text-white hover:bg-nothing-white hover:text-nothing-black transition-colors font-dot uppercase tracking-widest text-xs">
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default EventCard;
