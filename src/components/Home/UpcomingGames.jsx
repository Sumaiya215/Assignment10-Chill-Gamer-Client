import React from 'react';
import Marquee from 'react-fast-marquee';

const UpcomingGames = () => {
    return (
        <div className='text-center max-w-6xl mx-auto mb-20'>
            <h2 className='text-3xl font-bold mb-8'>Upcoming Games</h2>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <img className='w-[150px] h-[150px] mr-6' 
                src="https://i.ibb.co.com/nBVTrb8/final-fantasy-vii.jpg" alt="" />

                <img className='w-[150px] h-[150px] mr-6'
                 src="https://i.ibb.co.com/FXpBKxr/metroid-prime-4.jpg" alt="" />

                <img className='w-[150px] h-[150px] mr-6'
                 src="https://i.ibb.co.com/XsYr4DX/elder-scrolls-vi.jpg" alt="" />

                <img className='w-[150px] h-[150px] mr-6' 
                 src="https://i.ibb.co.com/fkB7Fbv/holo-knight-silksong.jpg" alt="" />

                <img className='w-[150px] h-[150px] mr-6' 
                src="https://i.ibb.co.com/8mrsLpc/dragon-age-dreadwolf.jpg" alt="" />

                <img className='w-[150px] h-[150px] mr-6' 
                src="https://i.ibb.co.com/C78nkG9/spider-man2.jpg" alt="" />

                <img className='w-[150px] h-[150px] mr-6'
                 src="https://i.ibb.co.com/nMFGvZN/payday-3.jpg" alt="" />

                <img className='w-[150px] h-[150px] mr-6' 
                 src="https://i.ibb.co.com/5G6y1rK/starfield-expansion.jpg" alt="" />

            </Marquee>
            
        </div>
    );
};

export default UpcomingGames;