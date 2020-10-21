import React from 'react';
import backgroundImage from '../../resources/image/bg.png'

const Home = () => {
    return (
        <div>
            <div >
                <img className='img-fluid' src={backgroundImage} alt="" width="100%" />
            </div>
        </div>
    );
};

export default Home;