import React from "react";

const HyperLink = ({ children, href = "#" }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-current opacity-35 hover:text-[var(--primary)] hover:opacity-100 transition-colors duration-300 relative group"
        >
            {children}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
        </a>
    );
};

export default HyperLink;