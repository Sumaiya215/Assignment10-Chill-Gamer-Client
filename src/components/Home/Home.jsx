import React from 'react';
import Banner from './Banner';
import HighestRatedGames from './HighestRatedGames';
import UpcomingGames from './UpcomingGames';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HighestRatedGames></HighestRatedGames>
            <UpcomingGames></UpcomingGames>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;