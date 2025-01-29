import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://chill-gamer-server-wheat.vercel.app/reviews?email=${user.email}`)
                
                .then((res) => res.json())
                .then((data) =>
                     setMyReviews(data)
            );
        }
    }, [user?.email]);

    return (
        <div className='w-4/5 lg:max-w-5xl mx-auto mb-20'>
           <h2 className='text-center mt-12 mb-8 text-3xl font-bold'>
            My Reviews </h2> 
            {
                myReviews.map((review, idx)=><MyReview key={review._id}
                review={review} idx={idx} myReviews={myReviews} 
                setMyReviews = {setMyReviews}></MyReview>)
            }
        </div>
    );
};

export default MyReviews;