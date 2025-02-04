// import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const HighestRatedGames = () => {
    const highestReviews = useLoaderData();

    return (
        <div className='w-4/5 mt-20 lg:max-w-6xl mx-auto mb-20'>
            <h2 className='text-3xl font-bold mb-6'>Highest Rated Games</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    highestReviews.map(review => <Review key={review._id}
                    review={review}> </Review>)
                }

            </div>

        </div>
    );
};

export default HighestRatedGames;