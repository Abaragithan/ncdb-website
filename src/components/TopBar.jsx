import React from 'react';
import {
    Facebook,
    Instagram,
    Twitter,
    YouTube,
    LinkedIn,
    Mail,
    Phone
} from "@mui/icons-material";

const TopBar = () => {
    return (
        <div className='bg-gradient-to-r from-blue-900 to-indigo-900 text-white'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center py-2 space-y-2 sm:space-y-0">

                    {/* Contact Info */}
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <Phone fontSize="small" className="text-blue-300" />
                            <span className="text-sm font-medium">+94 212 232 673</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-2">
                            <Mail fontSize="small" className="text-blue-300" />
                            <span className="text-sm font-medium">info@ncdb.coop</span>
                        </div>
                    </div>

                    {/* Social Links & Announcement */}
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2 bg-blue-800/50 px-3 py-1 rounded-full">
                            <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-xs font-medium">Now Hiring! Explore Careers</span>
                        </div>

                        <div className="flex items-center space-x-3">
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 hover:bg-blue-500 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook fontSize="small" />
                            </a>
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 hover:bg-sky-500 flex items-center justify-center transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter fontSize="small" />
                            </a>
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram fontSize="small" />
                            </a>
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors"
                                aria-label="YouTube"
                            >
                                <YouTube fontSize="small" />
                            </a>
                            <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-white/10 hover:bg-blue-700 flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LinkedIn fontSize="small" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;