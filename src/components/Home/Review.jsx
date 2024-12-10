import { Link } from "react-router-dom";


const Review = ({ review }) => {
    const { _id, photo, name, description, rating, genre } = review;
    return (
        <div className="card bg-base-100 w-78 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={photo}
                    alt={name}
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{name}</h2>
                <p className='text-base font-bold text-gray-400'>Description: {description}</p>
                <p className='text-base font-semibold'>Rating: {rating}</p>
                <p className='text-base font-semibold'>Genre: {genre}</p>
                <div className="flex justify-end flex-end">
                    <Link to={`/review/${_id}`}>
                    <button className="btn btn-primary text-base font-bold">
                    Explore Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Review;