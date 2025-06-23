import React from 'react';
import './Banner.css';

const Banner = () => (
    <div className="banner">
        <h2 style={{ color: 'blue' }}>Big Deals of the Day!</h2>
        <p>Up to 70% off on Electronics, Fashion & more</p>
        <img
            srcSet="https://cdn.pixabay.com/photo/2023/03/01/03/21/friends-7822175_960_720.jpg 1x, https://cdn.pixabay.com/photo/2023/03/01/03/21/friends-7822175_1280.jpg 2x"
            src="https://cdn.pixabay.com/photo/2023/03/01/03/21/friends-7822175_1280.jpg"
            alt="Free friends equality diversity illustration"
            title="Download free HD stock image of Friends Equality"
            style={{ width: '100%', height: 'auto', display: 'block' }}
        />
    </div>
);

export default Banner;
