import { useContext } from "react";
import {  useLoaderData} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";


const ReviewDetails = () => {
    const reviews = useLoaderData();
    const {user} = useContext(AuthContext);
    
    const { _id,photo, name, description, rating, year, genre, email, username } = reviews;

    const handleWatchList = () =>{
        
        const watchListItem = {
            photo : photo,
            name : name,
            description : description,
            rating : rating,
            year : year,
            genre : genre,
            email: user.email,
            username: user.displayName
        }

        console.log(watchListItem);
        //
        fetch("https://chill-gamer-server-wheat.vercel.app/watchList",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(watchListItem)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
                toast.success('Add to watchList SuccessFul');
            }
        })
    }

    return (
        <div className="w-4/5 lg:max-w-6xl mx-auto mt-8 mb-12">
            <div className="card card-side max-w-5xl mx-auto bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={photo}
                        className="p-8 "
                        alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className="text-gray-500 font-semibold">Description: {description}</p>
                    <p className="font-semibold">Rating: {rating}</p>
                    <p className="font-semibold">Year: {year}</p>
                    <p className="font-semibold">Genre: {genre}</p>
                    <p className="font-semibold">Email: {email}</p>
                    <p className="font-semibold">Reviewer: {username}</p>
                    <div className="card-actions justify-start">
                    {
                        user && (<button onClick={ handleWatchList} type="submit" className="btn btn-primary font-semibold 
                        text-base mt-2">Add to WatchList</button>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;