import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Home/Review';

const AllReviews = () => {
    const reviews = useLoaderData();

    return (
        <div className='mt-20 max-w-6xl mx-auto mb-20'>
            <h2 className='text-3xl text-center font-bold mb-6'>All Reviews
               
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    reviews.map(review => <Review key={review._id}
                    review={review}> </Review>)
                }

            </div>

        </div>
    );
};

export default AllReviews;