import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyReview = ({ review, idx , myReviews, setMyReviews}) => {
    const {_id, name, rating, year, genre } = review;

    const handleDelete = _id => {
       
        Swal.fire({
            title: "Are you sure?",
            text: "You review will be deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://chill-gamer-server-wheat.vercel.app/review/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success"
                          });

                            // updating state
                            const remainingReviews = myReviews.filter(review => review._id !== _id);
                            setMyReviews(remainingReviews);

                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Serial.</th>
                            <th>Name</th>
                            <th>Rating</th>
                            <th>Year</th>
                            <th>Genre</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>{idx + 1}</th>
                            <td>{name}</td>
                            <td>{rating}</td>
                            <td>{year}</td>
                            <td>{genre}</td>
                            <td>
                            <div className="flex gap-3">
                            <button onClick={() => handleDelete(_id)} 
                            className="btn btn-sm bg-sky-800 text-white"> 
                            Delete </button>
                            <Link to={`/updateReview/${_id}`}>
                              <button className="btn btn-sm bg-sky-800 
                                 text-white">
                                Edit </button>
                             </Link>
                                </div>
                            </td>
                        </tr>


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;