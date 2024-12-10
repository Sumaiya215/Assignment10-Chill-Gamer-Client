import React, { useContext, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import Watchlist from './Watchlist';

const GameWatchList = () => {
    const { user } = useContext(AuthContext); 
    const [myWatchLists, setMyWatchLists] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:4500/watchList?email=${encodeURIComponent(user.email)}`)
                .then((res) => res.json())
                .then((data) =>
                    // console.log(data);
                     setMyWatchLists(data)
            );
        }
    }, [user?.email]);

    return (
        <div className='max-w-5xl mx-auto mb-20 '>
            <h2 className='text-center text-3xl font-bold 
            mt-12 mb-8'>My WatchLists</h2>

            {
                myWatchLists.map((watchlist,idx) =><Watchlist 
                idx={idx}
                key={watchlist._id} watchlist={watchlist}></Watchlist>)
            }

           
        </div>
    );
};

export default GameWatchList;


