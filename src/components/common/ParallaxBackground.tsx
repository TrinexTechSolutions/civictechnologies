import React from 'react';

interface ParallaxBackgroundProps {
    src: string;
    className?: string;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({
    src,
    className = "absolute inset-0"
}) => {
    return (
        <div
            className={`${className} overflow-hidden pointer-events-none`}
            style={{ clipPath: "inset(0 0 0 0)" }}
        >
            <div
                className="fixed top-0 left-0 w-screen h-[100dvh] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${src})`,
                    willChange: "transform"
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
