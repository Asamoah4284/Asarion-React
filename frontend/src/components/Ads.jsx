// src/AdsComponent.js
import React, { useEffect } from 'react';

const AdsComponent = ({ dataAdSlot }) => {
    useEffect(() => {
        // Push the ad to the adsbygoogle array to render it
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-1745160314774060" // Your AdSense client ID
             data-ad-slot={dataAdSlot} // Replace with your ad slot ID
             data-ad-format="auto" />
    );
};

export default AdsComponent;