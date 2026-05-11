import React from "react";

const HyperLink = ({ children, href = "#", icon }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-current opacity-35 hover:text-[var(--primary)] hover:opacity-100 transition-all duration-300 relative group py-1"
        >
            {/* Prikaz ikone, če obstaja */}
            {icon && <span className="w-5 h-5 transition-transform group-hover:scale-110">{icon}</span>}
            
            <span className="font-medium">{children}</span>
            
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
        </a>
    );
};

export default HyperLink;