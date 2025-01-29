import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Home/Review';

const AllReviews = () => {
    const reviews = useLoaderData();
    const [sortBy, setSortBy] = useState('rating');
    const [sortOrder, setSortOrder] = useState('asc');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredReviews = reviews.filter((review)=>
        review.genre.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
        .sort((a,b) =>{
            if(sortBy ==='rating'){
                return sortOrder === 'asc'? a.rating - b.rating : b.rating - a.rating
            } else if (sortBy === 'year'){
                return sortOrder === 'asc'? a.year - b.year : b.year - a.year
            }
            return 0;
        })
    

    return (
        <div className='w-4/5 mt-20 lg:max-w-6xl mx-auto mb-20'>
            <h2 className='text-3xl text-center font-bold mb-6'>All Reviews</h2>
            <div className='w-11/12 mx-auto mb-6 flex items-center justify-center gap-2'>
                <div className="dropdown">
                    <select onChange={(e) => setSortBy(e.target.value)}
                        value={sortBy} className='select select-bordered w-full '>
                        {/* <option disabled selected>Sort By</option> */}
                        <option value='rating'>Rating</option>
                        <option value='year'>Year</option>
                    </select>
                </div>
                <button onClick={() => setSortOrder((prev) => (prev === 'asc' ? 'des' : 'asc'))}
                    className='px-2 py-2 bg-blue-500 text-white rounded'>
                    {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                </button>
                <div>
                    <label className="input input-bordered w-3/4 flex items-center ">
                        <input  type="text" 
                         placeholder="Search by genre" value={searchQuery}
                         onChange={(e) => setSearchQuery(e.target.value)} />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    filteredReviews?.map(review => <Review key={review._id}
                        review={review}> </Review>)
                }

            </div>

        </div>
    );
};

export default AllReviews;