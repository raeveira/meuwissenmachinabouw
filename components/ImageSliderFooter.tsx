import React, {useEffect, useState} from 'react';

const ImageSliderFooter = ({images}: { images: string[] }) => {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        setIsAnimated(true);
    }, [isClient]);

    return (
        <div
            className={`mb-5 slider ${isAnimated ? 'overflow-hidden' : ''}`}
        >
            <div
                className="flex items-center h-full animate-scroll border-[3px] border-yellow-400"
                style={{
                    width: 'max-content',
                }}
            >
                {[...images, ...images, ...images].map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="flex-shrink-0 h-[26vh]"
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSliderFooter;
