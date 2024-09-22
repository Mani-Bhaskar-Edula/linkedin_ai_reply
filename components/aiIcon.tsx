import React, { useEffect, useRef } from 'react';

interface AiIconProps {
    onClick: () => void;
    visible: boolean;
}

const AiIcon: React.FC<AiIconProps> = ({ onClick, visible }) => {
    const iconRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (iconRef.current) {
            iconRef.current.style.position = 'absolute';
            iconRef.current.style.bottom = '10px';
            iconRef.current.style.right = '10px';
            iconRef.current.style.display = visible ? 'block' : 'none';
        }
    }, [visible]);

    return (
        <img
            ref={iconRef}
            src="chrome-extension://fkfgddkoigcjlcpkpmhmdhcgfnkbjcnp/icon32.png"
            alt="AI Icon"
            className="ai-icon"
            onClick={onClick}
        />
    );
};

export default AiIcon;
